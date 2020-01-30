// alle plaatjes van de duckfamilie in een array
const plaatjes  = document.querySelectorAll('.duck img');
const bolletjes = document.getElementById('bolletjes');

// hoogte gelijkmaken aan de eerste sectie
document.getElementsByClassName('info')[0].style.height = document.getElementsByClassName('duck')[0].clientHeight +'px';

for(let i=0; i<plaatjes.length; i++) {
    plaatjes[i].addEventListener('mouseenter', mhover);
    plaatjes[i].addEventListener('mouseleave', mleave);
    // hier kun je nog 2 events aan toevoegen: click en dblclick
    plaatjes[i].addEventListener('click', click);
    plaatjes[i].addEventListener('dblclick', dblclick);
}

function mhover() {
    document.getElementById('duck').innerText = ": "+this.title;
    document.getElementById('kop').style.color  = this.dataset.kleur;
}

function mleave() {
    document.getElementById('duck').innerText = "";
    document.getElementById('kop').style.color  = 'red';
}

function click() {
  for(let i=0; i<plaatjes.length; i++) {
    plaatjes[i].style.border = '0em'
  }
  document.getElementById('titel').innerHTML = this.title
  document.getElementById('informatie').innerHTML = this.dataset.info
  this.style.border = '0.5em solid ' + this.dataset.kleur
}

function dblclick() {
  let newBolletje = document.createElement("div");
  newBolletje.className = "bolletje"
  newBolletje.style.background = this.dataset.kleur
  bolletjes.appendChild(newBolletje)

  this.dataset.clicks = parseInt(this.dataset.clicks) + 1
  this.parentElement.childNodes[2].innerHTML = this.dataset.clicks
}