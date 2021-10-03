// necessary things
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLives = 5;

//link text
playerLivesCount.textContent = playerLives;

//generate data
//-> array of objects
const getData = () => [
    {imgSrc: './images/before-sunrise.jpg', name: "before-sunrise"},
    {imgSrc: './images/10thingsihateaboutyou.jpg', name: "10thingsihateaboutyou"},
    {imgSrc: './images/before-midnight.jpg', name: "before-midnight"},
    {imgSrc: './images/before-sunset.jpg', name: "before-sunset"},
    {imgSrc: './images/captain-fantastic.jpg', name: "captain-fantastic"},
    {imgSrc: './images/chicken-run.jpg', name: "chicken-run"},
    {imgSrc: './images/fight-club.jpg', name: "fight-club"},
    {imgSrc: './images/incendies.jpg', name: "incendies"},
    {imgSrc: './images/cleo-from-5-to-7.jpg', name: "cleo-from-5-to-7"},
    {imgSrc: './images/kill-bill.jpg', name: "kill-bill"},
    {imgSrc: './images/memento.jpg', name: "memento"},
    {imgSrc: './images/parasite.jpg', name: "parasite"},
    {imgSrc: './images/shrek.jpg', name: "shrek"},
    {imgSrc: './images/princess-mononoke.jpg', name: "princess-mononoke"},
    {imgSrc: './images/inglourious-basterds.jpg', name: "inglourious-basterds"},
    {imgSrc: './images/constantine.jpg', name: "constantine"},
    {imgSrc: './images/before-sunrise.jpg', name: "before-sunrise"},
    {imgSrc: './images/10thingsihateaboutyou.jpg', name: "10thingsihateaboutyou"},
    {imgSrc: './images/before-midnight.jpg', name: "before-midnight"},
    {imgSrc: './images/before-sunset.jpg', name: "before-sunset"},
    {imgSrc: './images/captain-fantastic.jpg', name: "captain-fantastic"},
    {imgSrc: './images/chicken-run.jpg', name: "chicken-run"},
    {imgSrc: './images/fight-club.jpg', name: "fight-club"},
    {imgSrc: './images/incendies.jpg', name: "incendies"},
    {imgSrc: './images/cleo-from-5-to-7.jpg', name: "cleo-from-5-to-7"},
    {imgSrc: './images/kill-bill.jpg', name: "kill-bill"},
    {imgSrc: './images/memento.jpg', name: "memento"},
    {imgSrc: './images/parasite.jpg', name: "parasite"},
    {imgSrc: './images/shrek.jpg', name: "shrek"},
    {imgSrc: './images/princess-mononoke.jpg', name: "princess-mononoke"},
    {imgSrc: './images/inglourious-basterds.jpg', name: "inglourious-basterds"},
    {imgSrc: './images/constantine.jpg', name: "constantine"},
];

//functiom randomize
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5); //randomize array
    console.log(cardData);
    return cardData;
};

//card generator function
const cardGenerator = () => {
    const cardData = randomize();
    //generate HTML
    cardData.forEach((item) => {
        const card = document.createElement("div");
        const face = document.createElement('img');
        const back = document.createElement("div");
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";
        //attach img and name to the cards
        face.src = item.imgSrc;
        card.setAttribute("name", item.name)
        //attach the cards to the section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        //toggle card
        card.addEventListener('click', (e) => {
            card.classList.toggle('toggleCard');
            checkCards(e);
        })
    });
};

//check cards based on names
const checkCards = (e) => {
    console.log(e);
    const clickedCard = e.target;
    console.log(clickedCard);
}

cardGenerator();
