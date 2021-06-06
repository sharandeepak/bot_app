// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
var edit_button;
console.log(myNodelist)
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("button");
  var txt = document.createTextNode("X");
  span.className = "c lose";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
} 
for (i = 0; i < myNodelist.length; i++) {
  var span2 = document.createElement("button");
  var txt2 = document.createTextNode("X");
  span2.className = "edit";
  span2.appendChild(txt2);
  myNodelist[i].appendChild(span2);
} 


// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
var editt = document.getElementsByClassName("edit");
for (i = 0; i < close.length; i++) {
  editt[i].onclick = function() {
    console.log("click");
  }
}

// // Add a "checked" symbol when clicking on a list item
// var list = document.querySelector("#myUL");
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var SubjectName = document.getElementById("subjectName").value;
  var SubjectLink = document.getElementById("subjectLink").value;
  var link=document.createElement("a");
  var linkText=document.createTextNode(SubjectLink);
  link.appendChild(linkText)
  link.href=SubjectLink;

  // var t = document.createElement(SubjectName.concat("-").concat(link));
  var t = document.createElement("div")
  t.setAttribute("class","list_item_link")
  var t2 = document.createTextNode(SubjectName)
  t.appendChild(t2)
  t.appendChild(link)
  edit_button=document.createElement("button")
  edit_button.innerHTML="edit";
  t.appendChild(edit_button)
  li.appendChild(t);

  
  if (SubjectName === '' || SubjectLink === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("subjectName").value = "";
  document.getElementById("subjectLink").value = "";

  var span = document.createElement("button");
  var txt = document.createTextNode("X");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);


  var edit_button2 = document.createElement("button");
  var txt = document.createTextNode("O");
  edit_button2.className = "edit";
  edit_button2.appendChild(txt);
  li.appendChild(edit_button2);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  
}

