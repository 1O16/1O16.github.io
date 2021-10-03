const quotes = [{
        quote: "Time is an illusion. Lunchtime doubly so",
        author: "- Douglas Adams",
    },
    {
        quote: "It is kind of fun to do the impossible",
        author: "- Walt Disney",
    },
    {
        quote: "Do not take life too seriously, you will never get out of it alive",
        author: "- Elbert Hubbard",
    },
    {
        quote: "If I had to live my life again, I'd make the same mistakes, only sooner",
        author: "- Tallulah Bankhead",
    },
    {
        quote: "Originality is the fine art of remembering what you hear but forgetting where you heard it",
        author: "- Laurence J. Peter",
    },
    {
        quote: "Laziness is nothing more than the habit of resting before you get tired",
        author: "- Bertrand Russell",
    },
    {
        quote: "I would never die for my beliefs because I might be wrong",
        author: "- Jules Renard",
    },
    {
        quote: "Reality continues to ruin my life",
        author: "- Bill Watterson",
    },
    {
        quote: "Prejudice is a great time saver, you can form opinions without having to get the facts",
        author: "- E. B. White",
    },
    {
        quote: "All generalizations are false, including this one",
        author: "- Mark Twain",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuote.quote;
author.innerText = randomQuote.author;

// https://www.brainyquote.com/
// quote sites