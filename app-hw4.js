var li, a, h1;
var navigation = document.getElementById("navigation");
var inputText = document.getElementById("inputText");
var outText = document.getElementById("outText");
var convButton = document.getElementById("convButton");

var names = [
  { "name": "Home", "href": "index.html" },
  { "name": "Catalog", "href": "catalog.html" },
  { "name": "About us", "href": "about_us.html" },
  { "name": "Contacts", "href": "contacts.html" },
  { "name": "Portfolio", "href": "portfolio.html" },
  { "name": "Blog", "href": "blog.html" },
];

console.log(navigation);
for (var i = 0; i < names.length; i++) {
  li = document.createElement("li");
  a = document.createElement("a");
  a.innerHTML = names[i].name;
  a.setAttribute("class", "nav-link");
  a.setAttribute("href", names[i].href);
  li.setAttribute("class", "nav-item");
  li.appendChild(a);
  navigation.appendChild(li);

  if (document.location.href.indexOf(names[i].href) != -1) {
    h1 = document.getElementById("h1");
    h1.innerHTML = names[i].name;
    document.getElementsByClassName("nav-item")[i].setAttribute("class", "active");
  }
}

convButton.onclick = function(){
var inTxt = inputText.value.toLowerCase(); 
var arr = inTxt.split(" ");
outText.value = arr.join('-');
console.log(outText);
}

