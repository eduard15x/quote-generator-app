const container = document.querySelector('body');
const generateBtn = document.querySelector('.quote-generate-btn');
const quoteText = document.querySelector('.quote-text');
const quoteAuthor = document.querySelector('.quote-author');

// Event listener for the button to render random quote
generateBtn.addEventListener('click', (e) => {
    getData('https://quotable.io/quotes?author=albert-einstein');
    e.target.setAttribute('disabled', true);
    container.classList.add('active');
});

// Function that fetch and return the data to JSON model 
const getData = async function(url) {
    let response = await fetch(url);
    let data = await response.json();
    let quotesArray = data.results;
    let randomIndex = generateRandomNr(quotesArray);

    quoteText.innerHTML = `"${quotesArray[randomIndex].content}"`;
    quoteAuthor.innerHTML = `- ${quotesArray[randomIndex].author}`;
};

function generateRandomNr(arr) {
    return (Math.random() * (arr.length - 1)).toFixed()
};
