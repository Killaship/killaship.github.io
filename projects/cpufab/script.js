var cpus = 0;
var friendNumber = 0;
var friendsDelay = 5000;
function incCPU(amount) {
  cpus = cpus + amount;
  //console.log("There are ", cpus, " CPUs");
}
function manualClick() {
  incCPU(1);
}
function purchaseClick(item) {
  switch(item) {
    case 0:
      friendNumber++;
      console.log(friendNumber + " hired friends");
      break;
    case 1:
      if(friendsDelay > 500) {
        friendsDelay = friendsDelay - 100;
      }
      else {
        alert("You can't abuse any more performance out of your friends!");
      }
      break;
      
  }
}
var updateStats = window.setInterval(updateCallback, 100);

var friendInterval = window.setInterval(friendCallback, friendsDelay);

function updateCallback() {

  document.getElementById("friendcount").innerHTML = "You have " + friendNumber + " friends working for you!" + " (" + friendNumber + " extra CPUs every " + friendsDelay / 1000 + " seconds)";
  document.getElementById("cpucount").innerHTML = "You have produced " + cpus + " CPUs!";
}

function friendCallback() { // hire a friend
  incCPU(friendNumber);
  clearInterval(friendInterval);
  var friendInterval = window.setInterval(friendCallback, friendsDelay);
 
}

/*

193 nm
13.5 nm
*/
