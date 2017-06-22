var mainEl = document.querySelector(".flex-grow");
mainEl.style.transition = "background-color 1s";
mainEl.onclick = changeBg;

function changeBg() {
  var colors = {}, counter = 1;

  var intv = setInterval(function() {
    var notUniq = true;
    while(notUniq) {
      var rgb1 = Math.floor(Math.random() * 255);
      var rgb2 = Math.floor(Math.random() * 255);
      var rgb3 = Math.floor(Math.random() * 255);
      var rgb = "rgb("+rgb1+","+rgb2+","+rgb3+")";
      notUniq = colors[rgb] ? true : false;
      colors[rgb] = true
    }

    mainEl.style.backgroundColor = rgb
    if(counter++ === 10) {
      clearInterval(intv);
    }
  }, 1000)
}