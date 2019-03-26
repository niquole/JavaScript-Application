
var req = new XMLHttpRequest();


req.onclick = function() {
  var res = JSON.parse(req.responseText);
  
  var greek = res.products.coffee;
  
  for (let i=0; i < coffee.length; i++) {
    var ele = document.createElement('h2');
    var text = document.createTextNode(greek[i].name);
    ele.appendChild(text);
    
    ele.classList.add('red');
    
    
    document.querySelector('div').appendChild(ele);
  }
}


req.open("GET", "https://api.myjson.com/bins/myupq");

req.send();












// var req = new XMLHttpRequest();


// req.onload = function() {
//   var res = JSON.parse(req.responseText);

//   var greek = res.products.coffee.greek;

//   for (let i=0; i < greek.length; i++) {
//     var ele = document.createElement('p');
//     var text = document.createTextNode(greek[i].name);
//     ele.appendChild(text);

//     ele.classList.add('red');


//     document.querySelector('div').appendChild(ele);
//   }
// }


// req.open("GET", "https://api.myjson.com/bins/hc1v6");

// req.send();


// var overlay = document.querySelector("div.overlay");
// var galImg = document.querySelector("div.overlay img");
// document.querySelector('div.huge').style.marginLeft = "-600px";

// var allImg = document.querySelectorAll('div.hallway div.huge div img');

// for (let i=0; i < allImg.length; i++) {
//   allImg[i].addEventListener('click', popUp);
// }

// function popUp() {
//   var currentSrc = this.src;

//   galImg.src = currentSrc;
//   overlay.style.display = "flex";
// }


// overlay.addEventListener("click", function() {
//     overlay.style.display = "none";
//   })










// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }


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