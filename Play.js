let playButton = document.querySelector(".play-movie"); //get form play on line 79
  let video = document.querySelector(".video-container");//get form play on line 81
  let myvideo = document.querySelector("#myvideo");//get form play on line 83
  let closebtn = document.querySelector(".close-video");//get form play on line 85
  
  playButton.onclick = () => {
    video.classList.add("show-video"); //get form css on line 363
    myvideo.play();
  };