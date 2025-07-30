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

//seleziono i nodi della dom
const rowEL = document.getElementById('team');

//ciclo all`interno dell`array
for (let i = 0; i < teamMembers.length; i++) {
    //prendo il singolo elemento ad ogni iterazione e lo salvo in una variabile
    const member = teamMembers[i];
    
    //generiamo i markup
   const cardMarkupString = `
   <div class="col-md-4 mb-3">
    <div class="card text-bg-dark" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${member.img}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${member.name}</h5>
                    <p class="card-text"> ${member.role}</p>
                    <p class="card-text"> ${member.email}</p>
                </div>
            </div>
        </div>
    </div>
</div`
//appenderlo alla dom
rowEL.insertAdjacentHTML('beforeend', cardMarkupString);
}


