console.log('Tohle je z externího souboru');

//var nadpis = 'Ahoj';
let nadpis = document.getElementById('nadpis');
const zapati = document.querySelector('footer');
const trump = document.querySelector('img');

trump.addEventListener('mouseenter', function(){
    console.log('Myš na Trumpovi');
    this.src = 'img/trump.jpg'
});

trump.addEventListener('mouseleave', function(){
    console.log('Myš z Trumpa');
    this.src = 'img/trump2.jpg'; 
});

nadpis.addEventListener('click', function(){
    console.log('Tohle je po kliknutí')
    nadpis.innerHTML = 'Konečně pátek!';
    nadpis.style.fontSize = '3em';
    nadpis.style.color = 'blue';
    //nadpis.style.display = 'none';
    nadpis.classList.add('bg-success');
    nadpis.classList.remove('text-center');
    nadpis.classList.add('text-right');
});

zapati.addEventListener('mouseover', function(){
    console.log('Tohle je pohyb na zápatí');
    this.style.backgroundColor = 'black';
    nadpis.style.color = 'black';
    nadpis.classList.remove('text-right');
    nadpis.classList.add('text-left');  
});

