// caricamento immagine
document.getElementById('immagine').addEventListener('change', function(event) {
    let file = event.target.files[0];
    let reader = new FileReader();

    reader.onload = function(event) {
        let imageUrl = event.target.result;
        let imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        document.getElementById('immagineContainer').innerHTML = '';
        document.getElementById('immagineContainer').appendChild(imageElement);
    };

    reader.readAsDataURL(file);
});

/// funzione per applicare filtri
function applyGrayscale(value) {
    let img = document.querySelector('#immagineContainer img');
    img.style.filter = `grayscale(${value}%)`;
}


function applySaturate(value) {
    let img = document.querySelector('#immagineContainer img');
    img.style.filter = `saturate(${value}%)`;
}


function applySepia(value) {
    let img = document.querySelector('#immagineContainer img');
    img.style.filter = `sepia(${value}%)`;
}


function applyInvert(value) {
    let img = document.querySelector('#immagineContainer img');
    img.style.filter = `invert(${value}%)`;
}


function applyContrast(value) {
    let img = document.querySelector('#immagineContainer img');
    img.style.filter = `contrast(${value}%)`;
}


function applyBrightness(value) {
    let img = document.querySelector('#immagineContainer img');
    img.style.filter = `brightness(${value}%)`;
}


function applyBlur(value) {
    let img = document.querySelector('#immagineContainer img');
    img.style.filter = `blur(${value}px)`;
}


function applyHueRotate(value) {
    let img = document.querySelector('#immagineContainer img');
    img.style.filter = `hue-rotate(${value}deg)`;
}

// funzione per aggiungere un gestore di eventi input a ciascun input di filtro
function addFilterEventHandlers() {
    document.getElementById('scalaGrigi').addEventListener('input', function(event) {
        applyGrayscale(event.target.value);
    });

    document.getElementById('saturazione').addEventListener('input', function(event) {
        applySaturate(event.target.value);
    });

    document.getElementById('sepia').addEventListener('input', function(event) {
        applySepia(event.target.value);
    });

    document.getElementById('invert').addEventListener('input', function(event) {
        applyInvert(event.target.value);
    });

    document.getElementById('contrasto').addEventListener('input', function(event) {
        applyContrast(event.target.value);
    });

    document.getElementById('luminosita').addEventListener('input', function(event) {
        applyBrightness(event.target.value);
    });

    document.getElementById('blur').addEventListener('input', function(event) {
        applyBlur(event.target.value);
    });

    document.getElementById('hueRotate').addEventListener('input', function(event) {
        applyHueRotate(event.target.value);
    });
}


addFilterEventHandlers();
