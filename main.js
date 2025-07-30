const teamMembers = [
    {
        name: "Marco Bianchi",
        role: "Designer",
        email: "marcobianchi@team.com",
        img: "img/male1.png"
    },
    {
        name: "Laura Rossi",
        role: "Front-end Developer",
        email: "laurarossi@team.com",
        img: "img/female1.png"
    },
    {
        name: "Giorgio Verdi",
        role: "Back-end Developer",
        email: "giorgioverdi@team.com",
        img: "img/male2.png"
    },
    {
        name: "Marta Ipsum",
        role: "SEO Specialist",
        email: "martarossi@team.com",
        img: "img/female2.png"
    },
    {
        name: "Roberto Lorem",
        role: "SEO Specialist",
        email: "robertolorem@team.com",
        img: "img/male3.png"
    },
    {
        name: "Daniela Amet",
        role: "Analyst",
        email: "danielaamet@team.com",
        img: "img/female3.png"
    }
];

console.log(teamMembers);

/* <div class="col-md-4"> <!-- da questo div -->
    <div class="card text-bg-dark" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="./assets/img/male1.png" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural
                        lead-in to
                        additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </div>
    </div>
</div> */

//seleziono i nodi della dom
const rowEL = document.getElementById('team');

//ciclo all`interno dell`array
for (let i = 0; i < teamMembers.length; i++) {
    const member = team[i];
    
}

//prendo il singolo elemento ad ogni iterazione

//creo le variabili per conservare i valori per ogni proprietà
//generiamo i markup
//appenderlo alla dom