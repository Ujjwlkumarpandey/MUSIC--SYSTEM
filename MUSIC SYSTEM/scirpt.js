console.log("hello");
//initialize the variables
let songindex=0;
let audioelement=new Audio('1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let songs=[
   
    {songname:"song",filepath:"song/song.mp3",coverpath:"covers/1.jpg"},
    {songname:"song",filepath:"song/song.mp3",coverpath:"covers/1.jpg"},
    {songname:"song",filepath:"song/song.mp3",coverpath:"covers/1.jpg"},
    {songname:"song",filepath:"song/song.mp3",coverpath:"covers/1.jpg"},
    {songname:"song",filepath:"song/song.mp3",coverpath:"covers/1.jpg"},
    {songname:"song",filepath:"song/song.mp3",coverpath:"covers/1.jpg"},
    {songname:"song",filepath:"song/song.mp3",coverpath:"covers/1.jpg"},
    {songname:"song",filepath:"song/song.mp3",coverpath:"covers/1.jpg"},
    {songname:"song",filepath:"song/song.mp3",coverpath:"covers/1.jpg"},
    {songname:"song",filepath:"song/song.mp3",coverpath:"covers/1.jpg"},
    {songname:"song",filepath:"song/song.mp3",coverpath:"covers/1.jpg"},
]
//audioelement.play();
//handle play/puse click
masterplay.addEventListener('click',()=>{
    if(audioelement.paused||audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');

    }
})

//listen to events
document.addEventListener('time',()=>
{
    console.log('timeupdate');
})