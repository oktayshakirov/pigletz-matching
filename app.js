//Grab information
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 10;

// Text 
playerLivesCount.textContent = playerLives;

// Generate the Pigletz
const getData = () => [
    {imgSrc: "./images/piglet-1.png", name: "Piglet 1"},
    {imgSrc: "./images/piglet-2.png", name: "Piglet 2"},
    {imgSrc: "./images/piglet-3.png", name: "Piglet 3"},
    {imgSrc: "./images/piglet-4.png", name: "Piglet 4"},
    {imgSrc: "./images/piglet-5.png", name: "Piglet 5"},
    {imgSrc: "./images/piglet-6.png", name: "Piglet 6"},
    {imgSrc: "./images/piglet-7.png", name: "Piglet 7"},
    {imgSrc: "./images/piglet-8.png", name: "Piglet 8"},
    {imgSrc: "./images/piglet-1.png", name: "Piglet 1"},
    {imgSrc: "./images/piglet-2.png", name: "Piglet 2"},
    {imgSrc: "./images/piglet-3.png", name: "Piglet 3"},
    {imgSrc: "./images/piglet-4.png", name: "Piglet 4"},
    {imgSrc: "./images/piglet-5.png", name: "Piglet 5"},
    {imgSrc: "./images/piglet-6.png", name: "Piglet 6"},
    {imgSrc: "./images/piglet-7.png", name: "Piglet 7"},
    {imgSrc: "./images/piglet-8.png", name: "Piglet 8"},
];

//Randomize the Pigletz
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
};

//Mystery Box Generator
const cardGenerator = () => {
    const cardData = randomize();
    //Generate HTML
    const cards = document.querySelectorAll(".card");
    cardData.forEach((item) => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("img");
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";
//Attach the image to the Boxes
    face.src = item.imgSrc;
    card.setAttribute("name", item.name);
    back.src = src="./images/mystery-box.png";
// Attach the Mystery Boxes to the section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener("click", (e) => {
        card.classList.toggle("toggleCard");
        checkCards(e);
        });
    });
};
//Check cards
const checkCards = (e) => {
    console.log(e);
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped");
    const toggleCard = document.querySelectorAll(".toggleCard");
//Logic
    if(flippedCards.length === 2){
        if(flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')){
            console.log("match");
            flippedCards.forEach(card => {
                card.classList.remove("flipped");
                card.getElementsByClassName.pointerEvvents = "none";
            })
        } else{
            console.log("wrong");
            flippedCards.forEach(card => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("toggleCard"), 1000);
            });
            playerLives--;
            playerLivesCount.textContent = playerLives;
            if(playerLives === 0) {
                restart("you used all your lives, try again");
            }
        }
    }
// Run a check to see if game is won
    if(toggleCard.length === 16) {
        restart("awesome, you won");
    }
};

//Restart
const restart = (text) => {
    let cardData = randomize();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");
    section.style.pointerEvents = "none";
    cardData.forEach((item, index) => {
        cards[index].classList.remove("toggleCard");
//Randomize
        setTimeout(() => {
            cards[index].style.pointerEvvents = "all";
            faces[index].src = item.imgSrc;
            cards[index].setAttribute("name", item.name);
            section.style.pointerEvvents = "all";
        },1000);
    });
    playerLives = 10;
    playerLivesCount.textContent = playerLives;
    setTimeout(() => window.alert(text), 100);
    };

cardGenerator();
