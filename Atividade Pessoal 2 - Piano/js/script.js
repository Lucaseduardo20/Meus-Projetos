
function tocar (tecla) {
    console.log(tecla)
    let audio = document.querySelector('audio');
    if (['G', 'A', 'H', 'Space'].includes(tecla)) {
        audio.setAttribute('src', 'audios/audio2.wav');
        audio.play();
    }
    else if (['D', 'J', 'O', 'V'].includes(tecla)) {
        audio.setAttribute('src', 'audios/audio3.wav');
        audio.play();
    }
}


document.querySelector('body').addEventListener('keypress', (e) => tocar(e.key.toUpperCase()))