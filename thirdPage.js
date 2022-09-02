let input = document.querySelector('input');

input.addEventListener('change', (e) => {
    e.preventDefault();
});

fileValidation1 = () => {
    var fi = document.getElementById('phototograph');
    if (fi.files.length > 0) {
        for (let i = 0; i <= fi.files.length - 1; i++) {
            const fsize = fi.files.item(i).size;
            const file = Math.round((fsize / 1024));
            if (file >= 4096) {
                alert("File too Big, please select a file less than 4mb");
            }
        }
    }
}
fileValidation2 = () => {
    var fj = document.getElementById('hsc');
    if (fj.files.length > 0) {
        for (let i = 0; i <= fj.files.length - 1; i++) {
            const fsize = fj.files.item(j).size;
            const file = Math.round((fsize / 1024));
            if (file >= 4096) {
                alert("File too Big, please select a file less than 4mb");
            }
        }
    }
}
fileValidation3 = () => {
    var fk = document.getElementById('ssc');
    if (fk.files.length > 0) {
        for (let i = 0; i <= fk.files.length - 1; i++) {
            const fsize = fk.files.item(i).size;
            const file = Math.round((fsize / 1024));
            if (file >= 4096) {
                alert("File too Big, please select a file less than 4mb");
            }
        }
    }
}

fileValidation4 = () => {
    var fc = document.getElementById('allFile');
    if (fc.files.length > 0) {
        for (let i = 0; i <= fc.files.length - 1; i++) {
            const fsize = fc.files.item(i).size;
            const file = Math.round((fsize / 1024));
            if (file >= 10240) {
                alert("File too Big, please select a file less than 10mb");
            }
        }
    }
}