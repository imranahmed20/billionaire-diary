const loadData = async () => {
    // const url = `https://restcountries.com/v3.1/all`;
    const url = `https://forbes400.onrender.com/api/forbes400?limit=10`;
    const res = await fetch(url);
    const data = await res.json();
    displayData(data)
}

const displayData = (phones) => {
    const dataContainer = document.getElementById('data-container');
    phones.forEach(phone => {
        console.log(phone)
        const phoneDiv = document.createElement('div')
        phoneDiv.classList.add('col')
        phoneDiv.innerHTML = `
                  <div class="col">
                      <div class="card h-100">
                      <img src="${phone.squareImage ? phone.squareImage : 'No picture'}" class="card-img-top" alt="...">
                     <div class="card-body">
                        <h2 class="card-title">${phone.person.name}</h2>
                        <h5>Citizenship: ${phone.countryOfCitizenship}</h5>
                        <h5>Source: ${phone.source}</h5>
                        <h5>Source: ${phone.city}</h5>
                        <h5>Source: ${phone.financialAssets.numberOfShares}</h5>
                       <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                       <button type="button" class="btn btn-primary">Primary</button>
                     </div>
                   </div>
                </div>
           `

        dataContainer.appendChild(phoneDiv)

    });


}
// ${phone.name.common}
// ${phone.flags.png}
loadData()