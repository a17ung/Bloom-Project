// JavaScript source code
const learn = document.querySelector("#learn-section");
const connect = document.querySelector("#connect-section");
const create = document.querySelector("#create-section");
const join = document.querySelector("#join-section");
const takeMeThere = document.links(href="https://www.reddit.com/r/Embroidery/");
const startTop = document.querySelector("#top");

function directToReddit() {
    location.href = "https://www.reddit.com/r/Embroidery/";
}

function directToTop() {
    location.href = "#top";
}

function directToLearn() {
    location.href = "#learn-section";
}

function directToConnect() {
    location.href = "#connect-section";
}

function directToStart() {
    location.href = "#create-section";
}

function directToJoin() {
    location.href = "#join-section";
}

learn.addEventListener("click",directToLearn);
connect.addEventListener("click", directToConnect);
create.addEventListener("click", directToStart);
join.addEventListener("click", directToJoin);
takeMeThere.addEventListener("click", directToReddit);
startTop.addEventListener("click", directToTop);

