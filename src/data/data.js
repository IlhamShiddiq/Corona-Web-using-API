function data() {
    
    const getData = () => {
        return fetch("https://covid19.mathdro.id/api/countries/Indonesia/confirmed")
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.error) {
                alert('error!!');
            } else {
            test(responseJson[0]);
            }
        })
        .catch(error => {
            return Promise.reject(error);
        })
    }

    const test = (obj) => {
        const positif = document.querySelector("#pos-case");
        const recovered = document.querySelector("#rec-case");
        const death = document.querySelector("#dea-case");

        positif.innerHTML = `<p class="mt-2"><span>${obj.confirmed}</span> Kasus</p>`;
        recovered.innerHTML = `<p class="mt-2"><span>${obj.recovered}</span> Kasus</p>`;
        death.innerHTML = `<p class="mt-2"><span>${obj.deaths}</span> Kasus</p>`;
    }

    getData();

}

export default data;
