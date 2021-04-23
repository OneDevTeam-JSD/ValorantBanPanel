let agentBox = document.querySelectorAll('.agent-box');
let agentImg = document.querySelectorAll('.agent-img');
let agentClass = document.querySelectorAll('.agent-class');
let agentName = document.querySelectorAll('.agent-name');

for (let i = 0; i < agentBox.length; i++) {
    agentBox[i].addEventListener('click', function () {
        if (agentBox[i].style.borderColor == 'red') {
            agentBox[i].style.borderColor = 'aquamarine';
            agentImg[i].style.backgroundColor = 'rgb(167, 255, 226)';
            agentImg[i].style.borderColor = 'aquamarine';
            agentName[i].style.backgroundColor = 'rgb(105, 105, 105)';
        } else {
            agentBox[i].style.borderColor = 'red';
            agentImg[i].style.backgroundColor = 'brown';
            agentImg[i].style.borderColor = 'brown';
            agentName[i].style.backgroundColor = 'brown';
        }
    });
}

document.getElementById('btn-clear').addEventListener('click', function () {
    for (let i = 0; i < agentBox.length; i++) {
        agentBox[i].style.borderColor = 'aquamarine';
        agentImg[i].style.backgroundColor = 'rgb(167, 255, 226)';
        agentImg[i].style.borderColor = 'aquamarine';
        agentName[i].style.backgroundColor = 'rgb(105, 105, 105)';
    }
});