let xp,currentWeaponIndex = 0;
let health = 100;
let gold = 50;
let fighting,monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1"); // prefixed with # because it is a id, prefix will not be added if it was a normal element.
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

function goStore(){
    console.log("Going to store.");
}
function goCave(){
    console.log("Going to cave.");
}
function fightDragon(){
    console.log("Fighting dragon.");
}
//initialize buttons