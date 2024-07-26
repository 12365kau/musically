console.log("Welcome to Mussically");

//variables initialise
let songIndex= 0;
let audioElem = new Audio('softly.mp3');
let masterPlay=document.getElementById('masterPlay');
let bar=document.getElementById('bar');
let songItems =Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "softly", filePath: "softly.mp3", coverPath: "bg.jpg"},
    {songName: "BachkeBachke", filePath: "BachkeBachke.mp3", coverPath: "musically.jpg"},
    {songName: "case", filePath: "case.mp3", coverPath: "bg.jpg"},
    {songName: "HassHass", filePath: "HassHass.mp3", coverPath: "musically.jpg"},
    {songName: "onTop", filePath: "onTop.mp3", coverPath: "bg.jpg"},
    {songName: "love", filePath: "love.mp3", coverPath: "musically.jpg"},
    {songName: "jahaaj", filePath: "jahaaj.mp3", coverPath: "bg.jpg"},
    {songName: "jahaaj", filePath: "jahaaj.mp3", coverPath: "bg.jpg"},
]

songItems.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;

})




//masterPlay handle 
masterPlay.addEventListener('click', ()=>{
    if(audioElem.pause || audioElem.currentTime<=0){
        audioElem.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    } 
    else{
        audioElem.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})
//  audioElem.play();

audioElem.addEventListener('timeupdate', ()=>{
    console.log('timeupdate')
  //seekBar updqte
  progress= parseInt((audioElem.currentTime/audioElem.duration)*100);
  console.log(progress);
  bar.value = progress;
})

bar.addEventListener('change', ()=>{
    audioElem.currentTime= bar.value * audioElem.duration/100;
})
  
Array.from(document.getElementsByClassName('songItemPlay')).forEach(()=>{
    element.addEventListener('click',(e)=>{
        console

    })
})

// events