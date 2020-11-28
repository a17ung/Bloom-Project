// JavaScript source code

const learn = document.querySelector("#learnbut");
const connect = document.querySelector("#connectbut");
const create = document.querySelector("#createbut");
const join = document.querySelector("#joinbut");
const takemebut = document.querySelector("#takemebut");
const starttopbut = document.querySelector("#starttopbut");

const directtoreddit = () => {
    location.href="https://www.reddit.com/r/Embroidery/";
};

const directtotop = () => {
    location.href = "#top";
};

const directtoget =() => {
    location.href = "#getinspired";
};

const directtoconnect =() => {
    location.href = "#connectwithothers";
};

const directtostart = () => {
    location.href = "#startstitching";
};

const directtojoin = () => {
    location.href = "#joincomm";
};

learn.addEventListener("click",directtoget);
connect.addEventListener("click", directtoconnect);
create.addEventListener("click", directtostart);
join.addEventListener("click", directtojoin);
takemebut.addEventListener("click", directtoreddit);
starttopbut.addEventListener("click", directtotop);
