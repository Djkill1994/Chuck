const icon = document.querySelector('.img');
const quote = document.querySelector('.quot');
const button = document.querySelector('.button-quot');

function serverRequest() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then((response) => response.json())
        .then(function (data) {
            quote.innerHTML = data.value;
            icon.src = data.icon_url;
            console.log(data)
        })
}
serverRequest();
button.addEventListener('click', serverRequest);


