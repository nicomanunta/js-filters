
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
