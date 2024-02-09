const yesBtn = document.querySelector('#yesBtn');

document.getElementById('yesBtn').addEventListener('click', function() {
    // Redireccionar a la página deseada
    window.location.href = 'https://www.youtube.com/watch?v=nfezTxgrcUo&list=PLAbImPD3tAo_mf56o6ofeWX-r7Uk8g-Qx&index=2'; // Reemplaza con la URL que desees
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100); 
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})