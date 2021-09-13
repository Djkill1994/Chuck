const icon = document.getElementById('img');
const quote = document.getElementById('quot');
const button = document.getElementById('button-quot');

function serverRequest() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then((response) => response.json())
        .then(function (data) {
            quote.innerHTML = data.value;
            icon.src = data.icon_url;
        })
};
serverRequest()
button.addEventListener('click', serverRequest);


