var cpus = 0;
var unsoldcpus = 0;
var friendNumber = 0;
var silicon = 100;
var money = 100;
function randomrange(min, max) {
  return Math.random() * (max - min) + min;
}

var clocklevel = 0;
var siliconproc = 0;
var packages = 0;

function incCPU(amount) {
  if(silicon > 0 && amount > 0 && (silicon - amount) >= 0) {
    cpus = cpus + amount;
    unsoldcpus = unsoldcpus + amount;
    silicon = silicon - amount;
  }
  else {
    //alert("You're out of silicon! Buy more!");
  }

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
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      silicon = silicon + 100;
      break;
    case 5:
      break;
      
  }
}
var updateStats = window.setInterval(updateCallback, 100);

var friendInterval = window.setInterval(friendCallback, 1000);

var sellInterval = window.setInterval(purchaseCallback, 100);
function updateCallback() {

  document.getElementById("friendcount").innerHTML = "You have " + friendNumber + " friends working for you! (" + friendNumber + " extra CPUs every second)";
  document.getElementById("cpucount").innerHTML = "You have produced " + cpus + " CPUs!";
  document.getElementById("siliconcount").innerHTML = "You have " + silicon + " square inches of silicon in stock!";
  document.getElementById("stockcount").innerHTML = "You have " + unsoldcpus + " unsold CPUs in stock!";
}

function purchaseCallback() {
  //soldcpus = 0;
  //soldcpus = (price * 100 / marketsize);
  //soldcpus = soldcpus * 
}

function friendCallback() { // hire a friend
  incCPU(friendNumber);
  //clearInterval(friendInterval);
  //var friendInterval = window.setInterval(friendCallback, friendsDelay);
 
}

/*

193 nm
13.5 nm
*/

