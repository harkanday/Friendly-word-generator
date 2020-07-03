document.querySelector('.btn').addEventListener('click',(e)=>{
    const output = document.querySelector('.output');

    async function loadWord(){
    let word = await fetch('https://friendly-words.netlify.com/.netlify/functions/random');
    let data = await word.text();
    
    output.innerHTML = data;

    }

    loadWord();
    
});