function regsitrat() {
  var x = document.getElementById("register");
  var y = document.getElementById("tabless");
  var z = document.getElementById("myCarousel");
    
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
   
}

function regsitrations() {
  var a = document.getElementById("tabless");
  var b = document.getElementById("register");
  var c = document.getElementById("myCarousel");

   a.style.display = "block";
   b.style.display = "none";
    c .style.display = "none";
}
  var rIndex,
  table = document.getElementById("table");

 var today = new Date();
 var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
 var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
 var dateTime = date+' '+time;


function validation() {
  var valid= true,
    name = document.getElementById("name").value,
    eid = document.getElementById("eid").value,
    male = document.getElementById("male").value,
    female = document.getElementById("female").value,
    other= document.getElementById("other").value,
    cno = document.getElementById("cno").value,
    iid = document.getElementById("iid").value,
    category = document.getElementById("category"),
    topic = document.getElementById("topic").value;

    var atposition=eid.indexOf("@");  
    var dotposition=eid.lastIndexOf("."); 

  if (name === "") {
    alert("Name cannot be empty");
    valid = false;
  } else if (name.length<3) {
    alert("Name too small");
    valid = false;
  } else if (name.length>30) {
    alert("Name too big");
    valid = false;
  } else if (isNaN(name)==false){
    alert("Name cannot be numeric");
    valid=false;
  } else if (eid === "") {
    alert("Email id cannot be empty");
    valid = false;
  } else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=eid.length) {
    alert("Invalid Email id");
    valid = false;
  } else if (cno === "") {
    alert("Contact No. cannot be empty");
    valid = false;
  } else if (isNaN(cno)==true) {
    alert("Enter a Valid Phone Number (Only digits) ");
    valid = false;
  } else if (cno.length !=10 ) {
    alert("Enter a Valid Phone Number (10 digit only)");
    valid = false;
  } else if (topic === "") {
    alert("Topic cannot be empty");
    valid = false;
  } else if  (!(document.getElementById('male').checked) && !(document.getElementById('female').checked) && !(document.getElementById('other').checked)) {
    alert("Select a Gender .")
    valid=false;

  }


  return valid;
}


function addHtmlTableRow() {
  
  var table = document.getElementById("table");
  if (validation()) {
    alert("Form Submitted :)")
    var newRow = table.insertRow(table.length),
      cell1 = newRow.insertCell(0),
      cell2 = newRow.insertCell(1),
      cell3 = newRow.insertCell(2),
      cell4 = newRow.insertCell(3),
      cell5 = newRow.insertCell(4),
      cell6 = newRow.insertCell(5),
      cell7 = newRow.insertCell(6),
      cell8 = newRow.insertCell(7);

    name = document.getElementById("name").value,
    eid = document.getElementById("eid").value,
    male = document.getElementById("male").value,
    female = document.getElementById("female").value,
    other= document.getElementById("other").value,
    cno = document.getElementById("cno").value,
    iid = document.getElementById("iid").value,
    
    topic = document.getElementById("topic").value;

    var e = document.getElementById("category");
    var cat = e.options[e.selectedIndex].text;

    if (document.getElementById('male').checked) {
    g = document.getElementById('male').value;
    }else if (document.getElementById('female').checked) {
    g = document.getElementById('female').value;
  } else if (document.getElementById('other').checked) {
    g = document.getElementById('other').value;
  }

    cell1.innerHTML = dateTime;
    cell2.innerHTML = name;
    cell3.innerHTML = eid;
    cell4.innerHTML = g;
    cell5.innerHTML = cno;
    cell6.innerHTML = iid;
    cell7.innerHTML = cat;
    cell8.innerHTML = topic;
    // call the function to set the event to the new row
    document.getElementById("reg").reset();
    selectedRowToInput();
    document.getElementById("reg").reset();
 
}


};
 

