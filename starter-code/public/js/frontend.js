const imageTag = document.querySelector('img');

let rotateOn = false;

imageTag.onclick = function (){
  if (!rotateOn){
    imageTag.style.transform = 'rotate(-20deg)';
    rotateOn = true;
  }
  else {
    imageTag.style.transform = 'rotate(20deg)';
    rotateOn = false;
  }
};
