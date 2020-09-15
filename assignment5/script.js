function regsitrat() {
  var x = document.getElementById("register");
  var y = document.getElementById("tabless");
  var z = document.getElementById("myCarousel");    //to display only form
    
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
   
}

function regsitrations() {
  var a = document.getElementById("tabless");
  var b = document.getElementById("register");
  var c = document.getElementById("myCarousel");     //to display only table
  
   a.style.display = "block";
   b.style.display = "none";
   c .style.display = "none";
 
}
 
  table = document.getElementById("table");

 var today = new Date();
 var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
 var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();   //calculate current date and time
 var dateTime = date+' '+time;


function validation() {                                     //validation of form and to check empty fields 
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







 



};
 

