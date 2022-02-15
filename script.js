


const jokes = document.getElementById('joke');
const jokeBtn  = document.getElementById('btn');
//  const generateJokes = () => {
     const generateJokes = () => {
        const setHeader = {
            headers: {
                Accept : "application/json"
            }
        }
      
     
     fetch('https://icanhazdadjoke.com/', setHeader).then((res)=>res.json()
     ).then((data)=>
         jokes.innerHTML = data.joke
     )
     
     
     .catch((error)=>{
         console.log(error);
     })
}

jokeBtn.addEventListener('click', generateJokes);

generateJokes();


// }
