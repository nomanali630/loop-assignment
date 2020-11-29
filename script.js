function clickAlert2() {
    var whatNum = document.getElementById("userEnterNum").value;
    var whatNum = parseInt(whatNum);  
    for (var i = 0; i <= whatNum; i++) {
     if (i % 2 == 0 ) {
        document.getElementById("evenList").innerHTML = i + ". is  - EVEN <br>";
      } else {
        document.getElementById("OddList").innerHTML = i + ". is  - ODD <br>";
      }
    }
  }