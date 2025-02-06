// fetch('https://restcountries.com/v3.1/all')
// .then((res) => res.json())
// .then((data) => {
//     data.forEach((country) => {
//         console.log(country);
//     })
// })


const countriesContainer = document.querySelector('.countries-container')
const countryCard = document.createElement('a')
countryCard.classList.add('country-card')



// const cardImg = document.createElement('img')
// cardImg.src = 'https://flagcdn.com/is.svg'
// countryCard.append(cardImg)

// yadi ek do element create karana ho to ye formet kar sakte hai 

// itan banane se ke liye keval ek line code


const cardHTML = `
 <img src="https://flagcdn.com/is.svg" alt="flag">
                <div class="card-text">
                    <h3 class="card-title">Iceland </h3>
                    <p><b>Population: </b>81,770,900</p>
                    <p><b>Region: </b>Enrope</p>
                    <p><b>Capital: </b>Berlin</p>
                </div>
`

countryCard.innerHTML = cardHTML
countriesContainer.append(countryCard)