'use strict';

const Sequelize = require('sequelize');
const config = require('./config');

var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        maxConnections: 5,
        minConnections: 0,
        maxIdleTime: 30000
    }
});

var Pet = sequelize.define('pet', {
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    name: Sequelize.STRING(100),
    gender: Sequelize.BOOLEAN,
    birth: Sequelize.STRING(10),
    createdAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT,
    version: Sequelize.BIGINT
}, {
    timestamps: false
});

var now = Date.now();

/**
 * Promise style
 */

/*
Pet.create({
    id: 'g-' + now,
    name: 'Gaffey',
    gender: false,
    birth: '2007-07-07',
    createdAt: now,
    updatedAt: now,
    version: 0
}).then(function(p) {
    console.log('created.' + JSON.stringify(p));
}).catch(function(err) {
    console.log('failed: ' + err);
});
*/

/**
 * async/await style
 */
/* 
(async () => {
    var dog = await Pet.create({
        id: 'd-' + now,
        name: 'Odie',
        gender: false,
        birth: '2008-08-08',
        createdAt: now,
        updatedAt: now,
        version: 0
    });
    console.log('created: ' + JSON.stringify(dog));
})();
*/

/**
 * findAll
 */
/*
(async () => {
    var pets = await Pet.findAll({
        where: {
            name: 'Gaffey'
        }
    });
    console.log(`find ${pets.length} pets`);
    for (let p of pets) {
        console.log(JSON.stringify(p));
    }
})();
*/

(async () => {
    var p = await Pet.findOne({
        where: {
            name: 'Odie'
        }
    });
    p.gender = true;
    p.updatedAt = Date.now();
    p.version += 2;
    await p.save();
})();

/*
(async () => {
    var p = await Pet.findOne({
        where: {
            name: 'Gaffey'
        }
    });
    
    await p.destroy();
})();
*/