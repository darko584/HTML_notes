var video = document.getElementById('cp');
var btn= document.getElementById('pause');

function videofunction(){
  if(video.paused){
    video.play();
  }
  else{
    video.pause();
  }
}
