let video=document.querySelector('.video1');
let duration=document.querySelector('.duration')

function play(){
    video.play()
    duration.textContent=`${video.duration}`
}

 function pause(){
    video.pause()
 }
