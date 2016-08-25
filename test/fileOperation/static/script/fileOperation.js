window.onload = function () {
    var fileInput = document.getElementById('test-image-file'),
        info = document.getElementById('test-file-info'),
        preview = document.getElementById('test-image-preview');

    // Listen on change event
    fileInput.addEventListener('change', function () {
        // clear background picture
        preview.style.backgroundImage = '';
        // check file selected or not
        if(! fileInput.value) {
            info.innerHTML = 'No file selected.';
            return;
        }

        // Get Files
        var file = fileInput.files[0];
        // Get file info
        info.innerHTML = 'File: ' + file.name + '<br>' +
                         'Size: ' + file.size + '<br>' +
                         'Modified: ' + file.lastModifiedDate;

        if(file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif') {
            alert('file is an invalid picture');
            return;
        }

        // read file
        var reader = new FileReader();
        reader.onload = function (e) {
            var data = e.target.result;
            preview.style.backgroundImage = 'url(' + data + ')';
        };
        // read file as Data url
        reader.readAsDataURL(file);
    });
    console.log(fileInput);
}
