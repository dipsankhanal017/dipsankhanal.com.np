var button1 = document.querySelector("#button1");

button1.onclick = calculate;

function calculate(e) {
  e.preventDefault();
  
var theory = [ 
  parseFloat(document.getElementById("theory1").value),
  parseFloat(document.getElementById("theory2").value),
  parseFloat(document.getElementById("theory3").value),
  parseFloat(document.getElementById("theory4").value),
  parseFloat(document.getElementById("theory5").value)
];

  var internal = [
    parseFloat(document.getElementById("internal1").value),
    parseFloat(document.getElementById("internal2").value),
    parseFloat(document.getElementById("internal3").value),
    parseFloat(document.getElementById("internal4").value),
    parseFloat(document.getElementById("internal5").value)
  ];

  var ext = [
    parseFloat(document.getElementById("ext1").value),
    parseFloat(document.getElementById("ext2").value),
    parseFloat(document.getElementById("ext3").value),
    parseFloat(document.getElementById("ext4").value),
    parseFloat(document.getElementById("ext5").value)
  ];

  
  var e =[], i =[], t=[], gpa=[];
  
  for(let j=0; j<=4; j++){
    if (internal[j] >= 18)
    i[j] = 4.0; 
    else if (internal[j] >= 16 && internal[j] < 18) 
    i[j] = 3.7;
    else if (internal[j] >= 14 && internal[j] < 16) 
    i[j] = 3.3;
    else if (internal[j] >= 12 && internal[j] < 14) 
    i[j] = 3.0;
    else if (internal[j] >= 8 && internal[j] < 12) 
    i[j] = 2.7;
    else 
    i[j] = 0.0;

    if (ext[j] >= 18)
    e[j] = 4.0; 
    else if (ext[j] >= 16 && ext[j] < 18) 
    e[j] = 3.7;
    else if (ext[j] >= 14 && ext[j] < 16) 
    e[j] = 3.3;
    else if (ext[j] >= 12 && ext[j] < 14) 
    e[j] = 3.0;
    else if (ext[j] >= 8 && ext[j] < 12) 
    e[j] = 2.7;
    else 
    e[j] = 0.0;

    if (theory[j] >= 54)
    t[j] = 4.0; 
    else if (theory[j] >= 48 && theory[j] < 54) 
    t[j] = 3.7;
    else if (theory[j] >= 42 && theory[j] < 48) 
    t[j] = 3.3;
    else if (theory[j] >= 35 && theory[j] < 42) 
    t[j] = 3.0;
    else if (theory[j] >= 24 && theory[j] < 35) 
    t[j] = 2.7;
    else 
    t[j] = 0.0;

    gpa[j] = (0.6*t[j]) + (0.2*e[j]) + (0.2*i[j]);
    
    let k = parseInt(j+1);
    let elementId = "overall" + k;
    if (e[j]>0.0 && i[j] >0.0 && t[j] >0.0){
    if (gpa[j] >= 3.7)
    document.getElementById(elementId).textContent = "A"; 
    else if (gpa[j] >= 3.3 && gpa[j] < 3.7) 
    document.getElementById(elementId).textContent = "A-";
    else if (gpa[j] >= 3.0 && gpa[j] < 3.3) 
    document.getElementById(elementId).textContent = "B+";
    else if (gpa[j] >= 2.7 && gpa[j] < 3.0) 
    document.getElementById(elementId).textContent = "B";
    else if (gpa[j] >= 2.4 && gpa[j] < 2.7) 
    document.getElementById(elementId).textContent = "B-";
    }
    else
    document.getElementById(elementId).textContent = "fail";
 }


  var overallgpa = (gpa[0] + gpa[1] + gpa[2] + gpa[3] + gpa[4]) / 5;
  overallgpa = overallgpa.toFixed(2);

  document.getElementById("result").textContent = overallgpa;

}
