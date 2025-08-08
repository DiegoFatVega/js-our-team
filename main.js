const teamMembers = [
    {
        name: "Marco Bianchi",
        role: "Designer",
        email: "marcobianchi@team.com",
        img: "./assets/img/male1.png"
    },
    {
        name: "Laura Rossi",
        role: "Front-end Developer",
        email: "laurarossi@team.com",
        img: "./assets/img/female1.png"
    },
    {
        name: "Giorgio Verdi",
        role: "Back-end Developer",
        email: "giorgioverdi@team.com",
        img: "./assets/img/male2.png"
    },
    {
        name: "Marta Ipsum",
        role: "SEO Specialist",
        email: "martarossi@team.com",
        img: "./assets/img/female2.png"
    },
    {
        name: "Roberto Lorem",
        role: "SEO Specialist",
        email: "robertolorem@team.com",
        img: "./assets/img/male3.png"
    },
    {
        name: "Daniela Amet",
        role: "Analyst",
        email: "danielaamet@team.com",
        img: "./assets/img/female3.png"
    }
];

console.log(teamMembers);

createCard(teamMembers);
//form section

const nameEl = document.getElementById('formGroupExampleInputName');
const roleEl = document.getElementById('formGroupExampleInputRole');
const emailEl = document.getElementById('exampleFormControlInputEmail');
const formEl = document.querySelector('form'); //non catturare il bottone ma il form

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    ;
    //strada numero 1: salvo i dati precedentemente selezionati e faccio un push nel`array teamMembers (NON MI AGGIORNA L`ARRAY
    //PERCHÈ REFERENZIAVO I LABEL E NON GLI INPUT, ANCHE IL PULSANTE E NON IL FORM)
    /* Creo una card, salvando il metodo precedente in una function e la richiamo qui(se richiamo la funzione, mi aggiunge e duplica tutti gli elememti
    credo di aver bisogno di creare un altro arrray) */
    const newMembers = [];
    newMembers.push({ name: nameEl.value, role: roleEl.value, email: emailEl.value, img: "./assets/img/female2.png" })
    console.log(newMembers);
    createCard(newMembers);

})

function createCard(arr) {
    //ciclo all`interno dell`array
    for (let i = 0; i < arr.length; i++) {
        //seleziono i nodi della dom
        const rowEL = document.getElementById('team');
        //prendo il singolo elemento ad ogni iterazione e lo salvo in una variabile
        const member = arr[i];

        //generiamo i markup
        const cardMarkupString = `
   <div class="col-md-4 mb-3">
    <div class="card text-bg-dark rounded-0 " style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${member.img}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body py-0">
                    <h5 class="card-title">${member.name}</h5>
                    <p class="card-text"> ${member.role}</p>
                    <p class="text-primary"> ${member.email}</p>
                </div>
            </div>
        </div>
    </div>
</div`
        //appenderlo alla dom
        rowEL.insertAdjacentHTML('beforeend', cardMarkupString);
    }
}