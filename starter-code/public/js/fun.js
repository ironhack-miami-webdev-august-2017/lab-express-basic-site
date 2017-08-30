const images = document.querySelector("img");

images.onmouseover = function(){
    images.style.opacity = "0.2";
    images.style.width = "80%";
    images.style.height = "80%";


};

images.onmouseout = function(){
  images.style.opacity = 1;
  images.style.width = "100%";
  images.style.height = "100%";
}
