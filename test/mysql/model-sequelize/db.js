'use strict';

const Sequelize = require('sequelize');

const uuid = require('node-uuid');

const config = require('./config');

console.log('init sequelize...');

function generateId() {
    return uuid.v4();
}

var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    pool: {
        maxConnections: 5,
        minConnections: 0,
        maxIdleTime: 30000
    }
});

const ID_TYPE = Sequelize.STRING(50);

function defineModel(name, attributes) {
    var attrs = {};
    for (let key in attributes) {
        let value = attributes[key];
        if (typeof value === 'object' && value['type']) {
            value.allowNull = value.allowNull || false;
            attrs[key] = value;
        } else {
            attrs[key] = {
                type: value,
                allowNull: false
            };
        }
    }

    attrs.id = {
        type: ID_TYPE,
        primaryKey: true
    };

    attrs.createdAt = {
        type: Sequelize.BIGINT,
        allowNull: false
    };

    attrs.updatedAt = {
        type: Sequelize.BIGINT,
        allowNull: false
    };

    attrs.version = {
        type: Sequelize.BIGINT,
        allowNull: false
    };

    console.log('model defined for table: ' + name + '\n' + JSON.stringify(attrs, function (k, v) {
        if (k === 'type') {
            for (let key in Sequelize) {
                if (key === 'ABSTRACT' || key === 'NUMBER') {
                    continue;
                }
                let dbType = Sequelize[key];

                if (typeof dbType === 'function') {
                    
                    // STRING
                    if (v instanceof dbType) {
                        if (v._length) {
                            return `${dbType.key}(${v._length})`;
                        }
                        return dbType.key;
                    }

                    // BIGINT, BOOLEAN
                    if (v === dbType) {
                        return dbType.key;
                    }
                }
            }
        }
        
        return v;
    }, '  '));
    
    return sequelize.define(name, attrs, {
        tableName: name,
        timestamps: false,
        hooks: {
            beforeValidate: function(obj) {
                console.log(obj);
                let now = Date.now();
                if (obj.isNewRecord) {
                    console.log('will create entity...' + obj);
                    if (!obj.id) {
                        obj.id = generateId();
                    }
                    obj.createdAt = now;
                    obj.updatedAt = now;
                    obj.version = 0;
                } else {
                    console.log('will update entity...');
                    obj.updatedAt = now;
                    obj.version++;
                }
            }
        }
    });
}

const TYPES = ['STRING', 'INTEGER', 'BIGINT', 'TEXT', 'DOUBLE', 'DATEONLY', 'BOOLEAN'];

var exp = {
    defineModel: defineModel,
    sync: () => {
        if (process.env.NODE_ENV !== 'production') {
            sequelize.sync({ force: true }).then(function () {
                process.exit(0);
            });
        } else {
            throw new Error('Cannot sync() when NODE_ENV is set to \'production\'.');
        }
    }
}

for (let type of TYPES) {
    exp[type] = Sequelize[type];
}

exp.ID = ID_TYPE;

module.exports = exp;