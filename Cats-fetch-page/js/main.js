/*
Fetch Fundamentals
In this example we're going to use fetch locally to get populate
    
Sample HTML
    <div class="mt-3 card" >
        <img class="card-img-top" src="CAT PICTURE HERE" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">CAT NAME HERE </h5>
        <p class="card-text">CAT TEXT HERE</p>
        </div>
    </div>
*/

const showCats = () => {
    fetch('/data/cats-with-jobs.json')
    .then((response)=>{
        return response.json()
    }).then((data)=>{
        renderCats(data)
    })
}

const renderCats = (allCatsData) => {
    let catDisplayElement = document.querySelector('.cat-display')
    catDisplayElement.innerHTML = ''
    allCatsData.map((cat)=> {
        catDisplayElement.innerHTML += `<div class="mt-3 card" >
        <img class="card-img-top" src="${cat.picture}" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${cat.name} </h5>
        <p class="card-text">${cat.text}</p>
        </div>
    </div>`
        console.log(cat.name)
    })
}

showCats()