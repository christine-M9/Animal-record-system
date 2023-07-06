document.addEventListener('DOMContentLoaded', ()=>{
    
    fetchAnimals()
})

const apiKey="live_jlIZOBP0ISTIUiSLieLnkitizzhvUo8khqcb1ETiJNR9bJBehqUkfqkl589RUhlT"

const url="https://api.thecatapi.com/v1/breeds?limit=100&page=0"

// Displaying animals

function displayAnimals(dogii){
    const doggg=document.getElementById("animals")
    const container=document.createElement("div")
    container.className="container"
    container.innerHTML=`
    <div class="animalsCard">
    <span class="bold">Name:</span><a>${dogii.name}</a><br/><br/>
    <span class="bold">Origin:</span><a>${dogii.origin}</a><br/><br/>
    <span class="bold">Intelligence:</span><a>${dogii.intelligence}</a><br/><br/>
    <span class="bold"> Stranger/Friendly:</span><a>${dogii.stranger_friendly}</a><br/><br/>
    <span class="bold">LifeSpan:</span><a>${dogii.life_span}</a><br/><br/>
    <span class="bold">Health Issues:</span><a>${dogii.health_issues}</a><br/><br/>
    <span class="bold">Energy Level:</span><a>${dogii.energy_level}</a><br/><br/>
    <span class="bold">Altanative Name:</span><a>${dogii.alt_names}</a><br/><br/>
    <span class="bold">Child Friendly:</span><a>${dogii.child_friendly}</a><br/><br/>
    <span class="bold">Grooming:</span><a>${dogii.grooming}</a><br/><br/>
    <span class="bold">Temperament:</span><a>${dogii.temperament}</a><br/><br/>
    <span class="bold">Description:</span><a>${dogii.description}</a><br/><br/>
   
    </div>
    `
    dogs.appendChild(container)

  }

// function fetching data.
function fetchAnimals(){
    fetch(url,{
        method: 'GET',
        headers:{
            "x-api-key": apiKey,
        }
    })
          .then(res=>res.json())
         .then(dogData=> 
        dogData.forEach(dogD=>{


            displayAnimals(dogD)
            console.log(dogD)
        })
        
        )
}

function displayComments(com){
    const comme=document.getElementById("comments")
    const container=document.createElement("div")
    container.className="container"
    container.innerHTML=`
    <span class="output">
    <p>${com.message}</p>
    
    </span>

    `  
}
// Fetching review data
function fetchComments(){
    fetch(reviewurl)
    .then(res=>res.json())
    .then(reve => {
        console.log(reve)
        reve.forEach((re) => {
            displayComments(re);
        })
    })
}

// posting review data

const form=document.querySelector('.reviewForm')
form.addEventListener('submit', (e)=>{
     e.preventDefault()

     const messo=document.querySelector("#message").value

     inputData.message=messo

     fetch(reviewurl,{
        method: "POST",
        headers:{
            "content-Type": "application/json",
            accept: "application/json"
        },
        body: JSON.stringify(inputData)
     })
     .then(res=>res.json())
     .then(datacomment =>console.log(datacomment))
}

)


