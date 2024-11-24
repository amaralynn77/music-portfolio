const aid_button = document.getElementById('aid')
const prc_button = document.getElementById('prc')
const hlb_button = document.getElementById('hlb')

const rect = document.getElementById('rct')
const theme_btns = document.getElementById('theme-btns')
const top_btns = document.querySelectorAll(".btn-group button")
const bg = document.getElementById('bgi')

const sparkles = document.querySelectorAll(".sparkles")

var play_audio = false;
const aid_audio = new Audio("aid.mp3");
const prc_audio = new Audio("porcelain-ambient.mp3");
const hlb_audio = new Audio("hl.mp3");
const ambient_audio = new Audio("ambient.mp3");
const ambient_audio_full = new Audio("ambient-full.wav");

const bar_colors = ["burlywood", "#DB60C7", "darkolivegreen", "#004FC4"]
const top_btns_colors = ["brown", "purple", "#119434", "#89B7FC"]
const bg_images = ["", "am-i-dreaming.png", "Nurture.jpeg", "her-lullaby.png"]
let current_color = 0;

const mute_unmute = document.getElementById('mute-unmute')
const yes_button = document.getElementById('yes')
const no_button = document.getElementById('no')
const overlay = document.getElementById('overlay')
const audio_box = document.getElementById('audio_box')

yes_button.addEventListener('click', function(){
    overlay.style.display = 'none';
    audio_box.style.display = 'none';
    play_audio = true;
    ambient_audio.play();
    mute_unmute.style.backgroundImage = "audio-on.png";
})

no_button.addEventListener('click', function(){
    overlay.style.display = 'none';
    audio_box.style.display = 'none';
    mute_unmute.style.backgroundImage = "audio-off.png";

})

aid_audio.addEventListener("ended", function(){
    aid_audio.play();
}
);

prc_audio.addEventListener("ended", function(){
    prc_audio.play();
}
);

hlb_audio.addEventListener("ended", function(){
    hlb_audio.play();
}
);

ambient_audio.addEventListener("ended", function(){
    ambient_audio_full.play();
}
);

ambient_audio_full.addEventListener("ended", function(){
    ambient_audio_full.play();
}
)


aid_button.addEventListener('click', function(){
    current_color = 1;
    prc_audio.pause()
    hlb_audio.pause()
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
    if (play_audio == true){
    aid_audio.play();};}
)

prc_button.addEventListener('click', function(){
    aid_audio.pause()
    hlb_audio.pause()

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

    if (play_audio == true){
    prc_audio.play();};
    });
});

hlb_button.addEventListener('click', function(){
    aid_audio.pause()
    prc_audio.pause()
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

    if (play_audio == true){
    hlb_audio.play();};
    });

});

console.log("Script connected");
