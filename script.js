document.addEventListener('DOMContentLoaded', getProverb)

var url = 'https://eda-te-reo.herokuapp.com/api/whakatauki'

function getProverb() {
  fetch(url)
    .then (function(res) {
      return res.json()
    })
    .then(function(data){
      document.getElementById('maori').innerHTML = data.source
      document.getElementById('english').innerHTML = data.translation
    })
}

var newProverb = document.getElementById('new-btn')
newProverb.addEventListener('click', getProverb)
