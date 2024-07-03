const apiUrl="https://api.quotable.io/quotes/random"
const author=document.getElementById("author");
const quote=document.getElementById("quote");
let text;
let founder;
document.addEventListener("DOMContentLoaded",function()
{
    getquote();
});

async function getquote(url)
{
    const response= await fetch(apiUrl);
    var data = await response.json();
    console.log(data);
    text=data[0].content;
    founder=data[0].author;
    quote.innerHTML=`<h3>${data[0].content}</h3>`;
    author.innerHTML=`<br><h4>${data[0].author}</h4>`;
}


function tweet()
{
    window.open("https://twitter.com/intent/tweet?text="+text+"    -"+founder,"Tweet Window","width=800 height=600");
}
