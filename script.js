fetch('https://meme-api.com/gimme')
    .then(data => data.json())
    .then(jokeData => {
        const jokeElement = document.getElementById('jokeElement');
        jokeElement.innerHTML = '<img width="100%" height="300" src="'+jokeData.url+'" />';
    })