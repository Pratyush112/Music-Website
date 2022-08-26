console.log('Welcome to Music');

//initialize the variables
let songIndex = 0;
let audioElement = new Audio('Armaan Malik_ Tootey Khaab (Official Video) _ Song(MP3_160K).mp3');
let masterPlay = document.getElementById('masterPlay');
let ProgressBar = document.getElementById('ProgressBar');
let PlayButton = document.getElementById('playButton');
let gif = document.getElementById('gif');
let songs = [
    
    {   songName: "Armaan Malik_ Tootey Khaab (Official Video) _ Song(MP3_160K).mp3", 
        filepath: "Armaan Malik_ Tootey Khaab (Official Video) _ Song(MP3_160K).mp3", 
        coverpath: "cover pages/cover1.jpg"
    },
    
    {
        songName: "Aa Jaana.mp3",
        filepath: "Music/Aa Jaana.mp3",
        coverpath: "cover pages/cover2.jpg"
    },

    {
        songName: "Akh Lad Jave",
        filepath: "Music/Akh Lad Jave.mp3",
        coverpath: ""
    },

    {
        songName: "Loser.mp3",
        filepath: "Music/Loser.mp3",
        coverpath: ""
    },

    {
        songName: "Mi Gente.mp3",
        filepath: "Music/Mi Gente.mp3",
        coverpath: ""
    },

    {
        songName: "Mere Shoneya.mp3",
        filepath: "Music/Mere Shoneya.mp3",
        coverpath: ""
    },

    {
        songName: "Mere Liye Tum Kaafi Ho.mp3",
        filepath: "Music/Mere Liye Tum Kaafi Ho.mp3",
        coverpath: ""
    },

    {
        songName: "Mithe Alo.mp3",
        filepath: "Music/Mithe Alo.mp3",
        coverpath: ""
    },

    {
        songName: "No Love in LA.mp3",
        filepath: "Music/No Love in LA.mp3",
        coverpath: ""
    },

    {
        songName: "Senorita.mp3",
        filepath: "Music/Senorita.mp3",
        coverpath: ""
    },

    {
        songName: "Sawarne Lage.mp3",
        filepath: "Music/Sawarne Lage.mp3",
        coverpath: ""
    },

    {
        songName: "",
        filepath: "",
        coverpath: ""
    }
]


//play/pause click 
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})
//Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    ProgressBar.value = progress;
})

ProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = ProgressBar.value*audioElement.duration/100;
})

PlayButton.addEventListener('click', ()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        PlayButton.classList.remove('fa-play');
        PlayButton.classList.add('fa-pause');
    }
    else{
        audioElement.play();
        PlayButton.classList.remove('fa-pause');
        PlayButton.classList.add('fa-play');
    }
})