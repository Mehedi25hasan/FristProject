function playpause(btn,vid){
  var vid = document.getElementById(vid);
  if(vid.paused){
    vid.play();
    btn.innerHTML = "pause";
  }
  else{
    vid.pause();
    btn.innerHTML = "play";
  }
}