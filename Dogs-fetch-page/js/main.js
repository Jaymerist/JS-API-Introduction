/*
Fetch Fundamentals
In this example we're going to generate random pictures of dogs.
1. Select the random dog button and add a click event
    listener on it.
2. Create the function get random dog with the fetch api.
    - documentation for the dog api here https://dog.ceo/dog-api/
    - explore and display what the promise returns.
3. Create a function that will select the image 
4. Call the get random dog function in your event listener,
    and call it when the page loads.
*/

const randomDogButton = document.querySelector('#new-dog-button')

const getRandomDog = () => {
    const RANDOM_DOG_URL = "https://dog.ceo/api/breeds/image/random"
    fetch(RANDOM_DOG_URL) // a promise you'll then
    .then((response)=>{
        return response.json()
    }).then((data)=>{
        displayDogImage(data.message)
    })
}

const displayDogImage = (imageurl) => {
    let dogImageElement = document.querySelector(".dog-image")
    dogImageElement.setAttribute("src", imageurl)
}

randomDogButton.addEventListener("click", ()=> {
    //we're going to fetch a new dog image
    getRandomDog()
})

//when the page is loaded the dog is fetched
getRandomDog()