
    document.getElementById("btn").onmouseover = function() {mouseOver()};
    document.getElementById("btn").onmouseout = function() {mouseOut()};
    
    function mouseOver() {
      document.getElementById("btn").style.background = "#168341";
    }
    
    function mouseOut() {
      document.getElementById("btn").style.background = "#000000";
    }
    