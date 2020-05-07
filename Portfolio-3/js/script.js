//Write header along screen
var header = document.querySelector("h1");
var subheader = document.querySelector("header p");
var headerText = "Hannah Burke";
//var subText = "Aspiring Software Developer and Web Developer";
var subText = ["Software Developer", "Web Developer", "Computer Programmer"];
var subStartText = "Aspiring ";
var count = -1;
var j = 0;
var interval;
var i = 0;

//function adds a letter of the text to the html
function typeHeader() {
    header.innerHTML += headerText[i];
    i++;
    if (i == headerText.length) {
        i = 0;
        clearInterval(interval);
        //interval = setInterval(typeSubHeader, 100);
        interval = setInterval(typeSubHeader2, 200);
    } //if
} //typeHeader

function typeSubHeader() {
    subheader.innerHTML += subText[i];
    i++;
    if (i == subText.length) {
        clearInterval(interval);
        document.querySelector("header .down").style.visibility = "visible";
    } //if
} //typeSubHeader

function subtractSubheader() {
    var newSub = subheader.innerHTML.substring(0, subheader.innerHTML.length - 1);
    subheader.innerHTML = newSub;
    if (newSub === "Aspiring ") {
        clearInterval(interval);
        interval = setInterval(typeSubHeader2, 200);
    } //if
} //subtractSubheader

function typeSubHeader2() {
    if (count == -1) {
        if (j == 0) {
            document.querySelector("header .down").style.visibility = "visible";
        } //if
        subheader.innerHTML += subStartText[j];
        j++;
        if (j == subStartText.length) {
            count = 0;
            j = 0;
        } //if
    } //if
    else {
        subheader.innerHTML += subText[count][j];
        j++;
        if (j == subText[count].length) {
            if (count == 2) {
                count = 0;
            } //if
            else {
                count++;
            } //else
            clearInterval(interval);
            interval = setInterval(subtractSubheader, 125);
            j = 0;
        } //if
    } //else
} //typeSubHeader2

interval = setInterval(typeHeader, 250);   //Have type function run every 80 ms

//Show hidden About section when Read More button clicked
var aboutSection = document.querySelector(".about");
var btn2 = document.querySelector(".about .btn");
var visibleSection = document.querySelector(".about .row");
var invisibleSection = document.querySelector(".about .more-content");
var courses = document.querySelector(".col .coursework");

function show() {
    if (invisibleSection.style.display === "none" || invisibleSection.style.display === "") {
        aboutSection.style.height = "200vh";
        visibleSection.style.height = "33%";
        courses.style.display = "block";
        invisibleSection.style.display = "block";
        btn2.textContent = "Read Less";
    } //if
    else {
        aboutSection.style.height = "100vh";
        visibleSection.style.height = "50%";
        courses.style.display = "none";
        invisibleSection.style.display = "none";
        btn2.textContent = "Read More";
    } //else
} //show

btn2.addEventListener("click", show);

//Show hidden Portfolio section when Show More button clicked
var portfolioSection = document.querySelector(".portfolio");
var btn = document.querySelector(".portfolio .btn");
var visibleText = document.querySelector(".portfolio-wrapper");
var invisibleText = document.querySelector(".portfolio .more-content");

//Toggles between displaying and hiding section of code
function show2() {
    if (invisibleText.style.display === "none" || invisibleText.style.display === "") {
        portfolioSection.style.height = "200vh"; 
        visibleText.style.height = "40%"; 
        invisibleText.style.display = "block";
        btn.textContent = "Show Less";
    } //if
    else {
        portfolioSection.style.height = "100vh"; 
        visibleText.style.height = "70%"; 
        invisibleText.style.display = "none";
        btn.textContent = "Show More";
    } //else
} //show2

btn.addEventListener("click", show2);