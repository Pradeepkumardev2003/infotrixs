const quotes = [
    { text: "Fear kills more dreams than failure ever will.", author: "Suzy Kassem" },
    { text: "Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well.", author: "Voltaire" },
    {text:"Amateurs sit and wait for inspiration, the rest of us just get up and go to work.", author:"Stephen King"},
    {text:"To succeed in life, you need two things: ignorance and confidence.", author:"Mark Twain"},
    {text:"Do what is right, not what is easy nor what is popular.", author:"Roy T. Bennett"},
    {text:"Years of love have been forgot, in the hatred of a minute.", author:"Edgar Allan Poe"},
    {text:"The price of greatness is responsibility.", author:"Stephen Chbosky"},
    {text:"Nature is a volume of which God is the author.", author:"William Harvey"},
    {text:"The best way to find yourself is to lose yourself in the service of others.", author:"Mahatma Gandhi"},
    {text:"Take care of your body. It's the only place you have to live.", author:"Jim Rohn"},
    // Add more quotes as needed
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayQuote(quote) {
    document.getElementById("quote-text").textContent = quote.text;
    document.getElementById("quote-author").textContent = `- ${quote.author}`;
}

function searchQuote() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const foundQuotes = quotes.filter(quote => quote.author.toLowerCase().includes(searchInput));

    if (foundQuotes.length > 0) {
        const randomIndex = Math.floor(Math.random() * foundQuotes.length);
        displayQuote(foundQuotes[randomIndex]);
    } else {
        alert("No quotes found for the given author.");
    }
}

// Initial display
const initialQuote = getRandomQuote();
displayQuote(initialQuote);
