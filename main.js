const getData = async function(url) {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data.results);
    console.log(data.results.length);
    let quotesArray = data.results;

    let randomNumber = (Math.random() * (quotesArray.length - 1)).toFixed();
    console.log(randomNumber);
};

getData('https://quotable.io/quotes?author=albert-einstein');



