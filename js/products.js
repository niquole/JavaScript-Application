
var req = new XMLHttpRequest();


req.onload = function() {
  var res = JSON.parse(req.responseText);
  
  var greek = res.products.coffee.greek;
  
  for (let i=0; i < greek.length; i++) {
    var container = document.createElement('li');
    var containerText = document.createTextNode('');
    var ele = document.createElement('h2');
    var text = document.createTextNode(greek[i].name);
    ele.appendChild(text);
    
    var greekBlend = document.createElement('p');
    var greekBlendText = document.createTextNode(greek[i].blend);
    greekBlend.appendChild(greekBlendText);


    var greekDesc = document.createElement('p');
    var greekDescText = document.createTextNode(greek[i].description);
    greekDesc.appendChild(greekDescText);
    
    var greekGrainGrinding = document.createElement('p');
    var greekGrainGrindingText = document.createTextNode(greek[i].grainGrinding[0]);
    greekGrainGrinding.appendChild(greekGrainGrindingText);

    var greekPrice = document.createElement('p');
    var GreekPriceText = document.createTextNode(greek[i].price);
    greekPrice.appendChild(GreekPriceText);

    container.appendChild(ele);
    container.appendChild(greekDesc);
    container.appendChild(greekBlend);
    container.appendChild(greekGrainGrinding);
    container.appendChild(greekPrice);
    document.querySelector('.greek').appendChild(container);
  }
}


req.open("GET", "https://api.myjson.com/bins/1ep0ie");

req.send();