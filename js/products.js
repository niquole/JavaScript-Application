window.onload = function(){
  var items = document.querySelectorAll('.responsive');
  for (let i=0; i < items.length; i++){
    items[i].addEventListener('click', function() {
      document.querySelector('.prodOverlay').style.display = "flex";
    })
  }
}


var req = new XMLHttpRequest();


req.onclick = function () {
  var res = JSON.parse(req.responseText);
  // addEventListener(onclick)
  
  document.getElementById('prodOverlay').style.display = "block";
  var coffee = res.products.coffee;
  document.getElementById('productTittle').innerHTML = document.createTextNode(greek[i].name);
}

req.onload = function() {
  var res = JSON.parse(req.responseText);
  
  var coffee = res.products.coffee;
  var tea = res.products.tea;
  for (var x=0; x < coffee.length; x++) {
    var keys = Object.keys(coffee[x]);
    var values = Object.values(coffee[x])[0];
    console.log(values);
    for (let i=0; i < values.length; i++) {
      var item = document.createElement('div');
      
      item.dataset.name = Object.values(values)[i].name;
      item.dataset.desc = Object.values(values)[i].blend;
      item.dataset.desc = Object.values(values)[i].description;
      item.dataset.desc = Object.values(values)[i].grainGrinding;
      item.dataset.price = Object.values(values)[i].price;
      item.innerHTML = '';
      item.classList.add("responsive");
      
      item.addEventListener('click', function() {
        document.querySelector('.productTitle').innerHTML = this.dataset.name;
        document.querySelector('.productDesc').innerHTML = this.dataset.blend;
        document.querySelector('.productDesc').innerHTML = this.dataset.description;
        document.querySelector('.productPrice').innerHTML = this.dataset.price;
        
        
        document.querySelector('.prodOverlay').style.display = "flex";
      })
      
      document.querySelector('.allProducts').appendChild(item);
    }
  }
  for (var a=0; a < tea.length; a++) {
    var keys = Object.keys(tea[a]);
    var values = Object.values(tea[a])[0];
    for (let i=0; i < values.length; i++) {
      var item = document.createElement('div');
      
      item.dataset.name = Object.values(values)[i].name;
      item.dataset.desc = Object.values(values)[i].description;
      item.dataset.price = Object.values(values)[i].price;
      item.innerHTML = '';
      item.classList.add("responsive");
      
      item.addEventListener('click', function() {
        document.querySelector('.productTitle').innerHTML = this.dataset.name;
        // document.querySelector('.productDesc').innerHTML = this.dataset.blend;
        document.querySelector('.productDesc').innerHTML = this.dataset.description;
        document.querySelector('.productPrice').innerHTML = this.dataset.price;
        
        
        document.querySelector('.prodOverlay').style.display = "flex";
        
      })
      
    }
    document.querySelector('.allProducts').appendChild(item);
  }
  for (var y=0; y < beverages.length; y++) {
    var keys = Object.keys(beverages[y]);
    var values = Object.values(beverages[y])[0];
    for (let i=0; i < values.length; i++) {
      var item = document.createElement('div');
      
      item.dataset.name = Object.values(values)[i].name;
      item.dataset.desc = Object.values(values)[i].description;
      item.dataset.price = Object.values(values)[i].price;
      item.innerHTML = '';
      item.classList.add("responsive");
      
      item.addEventListener('click', function() {
        document.querySelector('.productTitle').innerHTML = this.dataset.name;
        // document.querySelector('.productDesc').innerHTML = this.dataset.blend;
        document.querySelector('.productDesc').innerHTML = this.dataset.description;
        document.querySelector('.productPrice').innerHTML = this.dataset.price;
        
        
        document.querySelector('.prodOverlay').style.display = "flex";
        
      })
      
    }
    document.querySelector('.allProducts').appendChild(item);
    
  }
}



req.open("GET", "https://api.myjson.com/bins/18a3eg");

req.send();