const countriesContainer = document.querySelector('.countries-container')
const filterByRegion = document.querySelector('.filter-by-region')
const searchInput = document.querySelector('.serach-container input')
const changesON = document.querySelector('.changes-On')

let allCountriesData

fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) => {
        rendreCountries(data)
        allCountriesData = data
    })
//     .then((data) => {
//         data.forEach((country) => {
//             // console.log(country);


//             const countryCard = document.createElement('a')
//             countryCard.classList.add('country-card')
//             countryCard.href = `/country.html?name=${country.name.common}`

//             countryCard.innerHTML = `
//             <img src="${country.flags.svg}" alt="flag">
//             
//                 <div class="card-text">
//                     <h3 class="card-title">${country.name.common}</h3>
//                     <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
//                     <p><b>Region: </b>${country.region}</p>
//                     <p><b>Capital: </b>${country.capital}</p>
//                 </div>
// `
//             countriesContainer.append(countryCard)
//         })
//     })

filterByRegion.addEventListener('change', (e) => {
    // console.log(e.target.value);
    fetch(`https://restcountries.com/v3.1/region/${filterByRegion.value}`)
        .then((res) => res.json())
        .then(rendreCountries)
    //         .then((data) => {
    //             countriesContainer.innerHTML = ''
    //             data.forEach((country) => {
    //                 // console.log(country);


    //                 const countryCard = document.createElement('a')
    //                 countryCard.classList.add('country-card')
    //                 countryCard.href = `/country.html?name=${country.name.common}`

    //                 countryCard.innerHTML = `
    //             <img src="${country.flags.svg}" alt="flag">
    //            
    //                 <div class="card-text">
    //                     <h3 class="card-title">${country.name.common}</h3>
    //                     <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
    //                     <p><b>Region: </b>${country.region}</p>
    //                     <p><b>Capital: </b>${country.capital}</p>
    //                 </div>
    // `
    //                 countriesContainer.append(countryCard)
    //             })
    //         })
})

function rendreCountries(data) {
    countriesContainer.innerHTML = ''
    data.forEach((country) => {
        // console.log(country);


        const countryCard = document.createElement('a')
        countryCard.classList.add('country-card')
        countryCard.href = `/country.html?name=${country.name.common}`

        countryCard.innerHTML = `
            <img src="${country.flags.svg}" alt="flag">
            
                <div class="card-text">
                    <h3 class="card-title">${country.name.common}</h3>
                    <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
                    <p><b>Region: </b>${country.region}</p>
                    <p><b>Capital: </b>${country.capital}</p>
                </div>
`
        countriesContainer.append(countryCard)
    })

}

searchInput.addEventListener('input', (e) => {
    const filteredCountries = allCountriesData.filter((country) => country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
    // console.log(filteredCountries);
    rendreCountries(filteredCountries)
})

changesON.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})