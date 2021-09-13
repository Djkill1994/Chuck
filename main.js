const icon = document.getElementById('img');
const quote = document.getElementById('quot');
const button = document.getElementById('button-quot');

icon.style.backgroundImage = 'url("https://assets.chucknorris.host/img/avatar/chuck-norris.png")';

function serverRequest (){
fetch('https://api.chucknorris.io/jokes/random')
.then(function (response) {
    response.json()
        .then(function (data) {
            quote.innerHTML = data.value;
    })
});
}

button.addEventListener('click', serverRequest);


