const quoteContainer=document.getElementById('quote-container');
const quoteText=document.getElementById('quote');
const authorText=document.getElementById('author');
const twitterBtn=document.getElementById('twitter');
const newQuoteBtn=document.getElementById('new-quote');
const loader=document.getElementById('loader');
//let apiquotes=[];

//show laoding
function loading(){
    loader.hidden=false;
    quoteContainer.hidden=true;
}
//hide loading
function complete(){
quoteContainer.hidden=false;
loader.hidden=true;

}


//show new quote
function newQuote(){
    
    const quote=localQuotes[Math.floor(Math.random()*localQuotes.length)];
    if(quote.author==null){
        authorText.innerText="Anonymous";
    }else{
    authorText.textContent=quote.author;
}
    //Check the quote length to determine the style
    if(quote.text.length>10){
        quoteText.classList.add('long-quote');

    }
    else
    {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent=quote.text;
    
}

//getting quote from API
// async function getQuotes(){
// const apiUrl="https://zenquotes.io/api/random";
// try{
// const response= await fetch(apiUrl);
// apiQuotes=await response.json();
// newQuote();
// }catch(error){
//     //Catch error here
// }


// }
// getQuote();
//commented out get quote cause it stopped working

function tweetQuote(){
const twitterUrl=`https://twitter.com/intent/tweet?text=${quoteText.textContent}-${authorText.textContent}`;
window.open(twitterUrl,'_blank');


}

twitterBtn.addEventListener('click',tweetQuote);
newQuoteBtn.addEventListener('click',newQuote);

