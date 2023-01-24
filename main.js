const container = document.querySelector('body');
const generateBtn = document.querySelector('.quote-generate-btn');
const quoteText = document.querySelector('.quote-text');
const quoteAuthor = document.querySelector('.quote-author');

// Event listener for the button to render random quote
generateBtn.addEventListener('click', (e) => {
    getD();
    e.target.setAttribute('disabled', true);
    container.classList.add('active');
});

// Function that fetch and return the data to JSON model 
// const getData = async function(url) {
//     let response = await fetch(url);
//     let data = await response.json();
//     let quotesArray = data;
//     let randomIndex = generateRandomNr(quotesArray);
//     console.log(randomIndex)

//     quoteText.innerHTML = `"${quotesArray[randomIndex].text}"`;
//     quoteAuthor.innerHTML = `- ${quotesArray[randomIndex].author}`;
// };

const getD = async function() {
    let url = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(url);
        const data = await response.json();
        let quotesArray = data;
        let randomQuote = generateRandomNr(quotesArray);

        quoteText.innerHTML = `"${quotesArray[randomQuote].text}"`;
        quoteAuthor.innerHTML = `- ${quotesArray[randomQuote].author}`;
    } catch(err) {
        console.log(`Unfortunately this link is broken ${url}`)
    }
}

function generateRandomNr(arr) {
    return (Math.random() * (arr.length - 1)).toFixed()
};
