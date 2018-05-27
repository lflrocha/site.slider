function trackLocation(e) {
  var rect = videoContainer.getBoundingClientRect(),
      position = ((e.pageX - rect.left) / videoContainer.offsetWidth)*100;
  if (position <= 100) {
    videoClipper.style.width = position+"%";
    largura = controles.clientWidth;
    controles.style.left = videoClipper.offsetWidth-1-largura/2+"px";
    clippedVideo.style.width = ((100/position)*100)+"%";
    clippedVideo.style.zIndex = 3;
	}
}

function inicio() {
  var rect = videoContainer.getBoundingClientRect(),
      position = 50;
  if (position <= 100) {
    videoClipper.style.width = position+"%";
    largura = controles.clientWidth;
    controles.style.left = videoClipper.offsetWidth-1-largura/2+"px";
    clippedVideo.style.width = ((100/position)*100)+"%";
    clippedVideo.style.zIndex = 3;
	}
}

var videoContainer = document.getElementById("video-compare-container"),
videoClipper = document.getElementById("video-clipper"),
clippedVideo = videoClipper.getElementsByTagName("video")[0];
controles = document.getElementById("brackets"),

document.body.onmousedown = function() {
    videoContainer.addEventListener("mousemove", trackLocation, false);
    videoContainer.addEventListener("touchstart", trackLocation,false);
    videoContainer.addEventListener("touchmove", trackLocation,false);
}

document.body.onmouseup = function() {
    videoContainer.removeEventListener("mousemove", trackLocation, false);
    videoContainer.removeEventListener("touchstart", trackLocation,false);
    videoContainer.removeEventListener("touchmove", trackLocation,false);
}

$('.unselectable').bind('mousedown selectstart', function(event) {
      event.preventDefault();
 });
document.addEventListener('contextmenu', event => event.preventDefault());

window.onresize = function(event) {
    inicio();
};










video1 = document.getElementsByTagName('video')[0]
video2 = document.getElementsByTagName('video')[1]

start();
inicio();





video1.addEventListener('timeupdate', updateProgressBar, false);

function updateProgressBar() {
   var progressBar = document.getElementById('progress-bar');
   var percentage = Math.floor((100 / video1.duration) *
   video1.currentTime);
   progressBar.value = percentage;
   progressBar.innerHTML = percentage + '% played';
}

function start() {
    var loading = document.getElementById('loading');
    loading.style.display = 'none';
    var wrapper = document.getElementById('wrapper');
    wrapper.style.display = 'block';
    video1.play();
    video2.play();
}

function vidplay() {
   var button = document.getElementById("play");
   if (video1.paused) {
      video1.play();
      video2.play();
      button.className = "pause";

   } else {
      video1.pause();
      video2.pause();
      button.className = "play";
   }
}

function restart() {
    video1.currentTime = 0;
    video2.currentTime = 0;
}

function changeButtonType(btn, value) {
	btn.title = value;
	btn.innerHTML = value;
	btn.className = value;
}
