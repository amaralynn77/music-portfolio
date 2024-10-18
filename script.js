const aid_button = document.getElementById('aid')
const prc_button = document.getElementById('prc')
const hlb_button = document.getElementById('hlb')

const rect = document.getElementById('rct')
const theme_btns = document.getElementById('theme-btns')
const top_btns = document.querySelectorAll(".btn-group button")
const bg = document.getElementById('bgi')

const sparkles = document.querySelectorAll(".sparkles")

const aid_audio = new Audio("aid.mp3");

const bar_colors = ["burlywood", "#DB60C7", "darkolivegreen", "#004FC4"]
const top_btns_colors = ["brown", "purple", "#119434", "#89B7FC"]
const bg_images = ["", "am-i-dreaming.png", "Nurture.jpeg", "her-lullaby.png"]
let current_color = 0;



aid_button.addEventListener('click', function(){
    current_color = 1;
    rect.style.backgroundColor = bar_colors[current_color];
    const imageURL = this.getAttribute("data-image")
    bg.style.backgroundImage = imageURL;
    sparkles.forEach(sparkle =>
    {
        sparkle.style.zIndex = -2;
    }
    )
    top_btns.forEach(button =>{
        button.style.backgroundColor = top_btns_colors[current_color]});
    aid_audio.play();
});

prc_button.addEventListener('click', function(){
    current_color = 2;
    sparkles.forEach(sparkle =>
        {
            sparkle.style.zIndex = -2;
        }
        )
    rect.style.backgroundColor = bar_colors[current_color];
    const imageURL = this.getAttribute("data-image")
    bg.style.backgroundImage = imageURL;
    top_btns.forEach(button =>{
        button.style.backgroundColor = top_btns_colors[current_color]
    });
});

hlb_button.addEventListener('click', function(){
    current_color = 3;
    sparkles.forEach(sparkle =>
        {
            sparkle.style.zIndex = -2;
        }
        )
    rect.style.backgroundColor = bar_colors[current_color];
    const imageURL = this.getAttribute("data-image")
    bg.style.backgroundImage = imageURL;
    top_btns.forEach(button =>{
        button.style.backgroundColor = top_btns_colors[current_color]
    });
});

console.log("Script connected");
s

