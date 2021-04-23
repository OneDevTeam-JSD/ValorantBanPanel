function goIndex ( ) {
    window.location.href = "index.html";
}

document.getElementById('nav-img').addEventListener('click', goIndex);

/*--------------------------------------------------------------------*/

function randomNumber ( ) {
    let min = document.getElementById('inp-rnd-min').value;
    let max = document.getElementById('inp-rnd-max').value;
    max++;

    let resp = Math.random() * (max - min) + (min + 1);
    resp = Math.floor(resp) + 1;

    document.getElementById('inp-rnd-resp').value = resp;

}

document.getElementById('btn-rnd-number').addEventListener('click', randomNumber);

/*--------------------------------------------------------------------*/

document.getElementById('btn-clear').addEventListener('click', function () {
    document.getElementById('inp-rnd-min').value = '';
    document.getElementById('inp-rnd-max').value = '';
    document.getElementById('inp-rnd-resp').value = '';
});