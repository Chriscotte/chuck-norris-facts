
function fetchCNJokesJSON() {
    // Feel free to download this HTML and edit it, to use another Pokemon ID
    const chuckNorrisJokeId = 1;
    const url = `https://api.chucknorris.io/jokes/random`;
    axios.get(url)
        .then(function(response) {
            return response.data; // SUBTLE difference with Fetch: response.data instead of response.json()
        })
        .then(function(chuckNorrisJoke) {
            console.log('data decoded from JSON:', chuckNorrisJoke);

            // Build a block of HTML
            const chuckNorrisJokeHtml = `<p><strong>${chuckNorrisJoke.value}</strong></p>
            <img src="${chuckNorrisJoke.icon_url}" />`;
            document.querySelector('#chuck-norris').innerHTML = chuckNorrisJokeHtml;
        });
}

        fetchCNJokesJSON();