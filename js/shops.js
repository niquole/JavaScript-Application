var currentImg = 0;

document.querySelector('.overlay img').onclick = function() {
  document.querySelector('.overlay').style.display = "none";
}

var allImg = document.querySelectorAll('.gallery .item img');

for (let i = 0; i < allImg.length; i++) {
  allImg[i].onclick = function() {
    var clickedImg = this.src;
    document.querySelector('.overlay img').src = clickedImg;
    document.querySelector('.overlay').style.display = "flex";
    currentImg = i;
  }
}