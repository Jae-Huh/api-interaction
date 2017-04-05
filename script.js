var url = 'https://eda-te-reo.herokuapp.com/api/whakatauki'

fetch(url)
  .then (function(res) {
    res.json().then(function(data){
      console.log(data)
      document.getElementById('maori').innerHTML = data.source
      document.getElementById('english').innerHTML = data.translation
    })
  })
