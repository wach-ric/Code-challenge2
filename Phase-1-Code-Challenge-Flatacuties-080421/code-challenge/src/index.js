const updatingFormCharacterDetails=() => {
    const characters= getElementById('character-bar')

    characters.innerHTML="";

    fetch('http://localhost : 3000/characters')

    .then(response=> response.json())

    .then(data=>{

        console.log(data);
        data.forEach(animal => {
            const characterList = document.createElement('li')
            characterList.textContent = animal.name;

            characterList.addEventListener('click', () => {
                console.log('clicked on:', animal.name)

                const characterImage = document.getElementById("image")
                const characterName = document.getElementById("name")
                const characterVote = document.getElementById('vote-count')

                characterImage.src= animal.image;
                characterName.innerText = animal.name;
                characterVote.innerText = animal.votes;

                let currentVote = parseInt(characterVote.textContent, 10);

                const voteForm = document.getElementById("votes.form")
                const voteInput = document.getElementById("votes")
                voteForm.addEventListener('submit', (e)=> {

                    e.preventDefault()
                    let newVote = parseInt(voteInput.ariaValueMax,10);
                    currentVote += newVote;
                    characterVote.textContent = currentVote;
                    characterImage.src = animal.image;
                    characterName.innerText = animal.name;
                    characterVote.innerText =animal.votes;

                    let currentVote = parseInt(characterVote.textContent, 10);
                    // postVotes();
                    
                    const voteForm = document.getElementById("votes-form")
                    const voteInput = document.getElementById("votes")
                    voteForm.addEventListener('submit', (e)=> {
                        e.preventDefault()
                        let newVote = parseInt(voteInput.ariaValueMax, 10);
                        currentVote += newVote;
                        characterVote.textContent = currentVote;

                    })
                })
                characters.appendChild(characterList)
          
            })
              
        });   
    })
}
document.addEventListener('DOMContentLoaded' ,updatingFormCharacterDetails) 
