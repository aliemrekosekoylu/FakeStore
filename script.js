/* <div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div> */



// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))


const row = document.querySelector('.row')

async function getData() {
    
try {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()

        return data
    
} catch (error) {
    console.log(error)
}

}

getData()
.then(data =>{
    console.log(data)

    let sepet = []

    data.forEach((urun) => {
        console.log(urun)


        const col_3 = document.createElement('div')
        col_3.classList.add('col-3')

        const card = document.createElement('div')
        card.className = 'card'
        card.style.width ='18rem' 

        const imgDiv = document.createElement('div')
        card.className = 'card'
        card.style.width = '100%'
        card.style.height = '100%'


        const img = document.createElement('img')
        img.setAttribute('class', 'card-img-top')
        img.src = urun.image

        const cardBody = document.createElement('div')
        cardBody.classList.add('card-body')

        const cardTitle = document.createElement('h5')
        cardTitle.classList.add('card-title')
        cardTitle.innerHTML = urun.name

        const cardText = document.createElement('p')
        cardText.classList.add('card-text')
        let content = `${urun.description} - price: ${urun.price}`
        cardText.innerHTML = content

        const btn = document.createElement('a')
        btn.setAttribute('class', 'btn btn-success')
        btn.textContent = 'Add To Cart'

        btn.addEventListener('click', () => {
            console.log(urun)
            sepet.push(urun)
            console.log(sepet)

            let sepetJSON = JSON.stringify(sepet)
            localStorage.setItem('sepet', sepetJSON)
        })


    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardText)
    cardBody.appendChild(btn)

    imgDiv.appendChild(img)

    card.appendChild(imgDiv)
    card.appendChild(cardBody)

    col_3.appendChild(card)

    row.appendChild(col_3)
    })
})