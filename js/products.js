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
  for (var x=0; x < coffee.length; x++) {
    console.log(coffee[x]);
    for (let i=0; i < coffee[x].length; i++) {
      var item = document.createElement('div');
      
      item.dataset.name = coffee[x][i].name;  
      item.dataset.blend = coffee[x][i].blend;    
      item.dataset.desc = coffee[x][i].desc;
      item.dataset.grain = coffee[x][i].grain;
      item.dataset.price = coffee[x][i].price;    

      item.classList.add("responsive");


      // var itemText = document.createTextNode('');
      // var ele = document.createElement('h2');
      // var text = document.createTextNode(coffee[x][i].name);
      // ele.appendChild(text);

      // var greekBlend = document.createElement('p');
      // var greekBlendText = document.createTextNode(coffee[x][i].blend);
      // greekBlend.appendChild(greekBlendText);


      // var greekDesc = document.createElement('p');
      // var greekDescText = document.createTextNode(coffee[x][i].description);
      // greekDesc.appendChild(greekDescText);

      // var greekGrainGrinding = document.createElement('p');
      // var greekGrainGrindingText = document.createTextNode(coffee[x][i].grainGrinding[0]);
      // greekGrainGrinding.appendChild(greekGrainGrindingText);

      // var greekPrice = document.createElement('p');
      // var GreekPriceText = document.createTextNode(coffee[x][i].price);
      // greekPrice.appendChild(GreekPriceText);

      // item.appendChild(ele);
      // item.appendChild(greekDesc);
      // item.appendChild(greekBlend);
      // item.appendChild(greekGrainGrinding);
      // item.appendChild(greekPrice);
      document.querySelector('.allProducts').appendChild(item);
    }
  }
}



req.open("GET", "https://api.myjson.com/bins/18a3eg");

req.send();