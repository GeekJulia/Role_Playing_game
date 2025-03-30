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

const weapons = [
  {
    name:"stick",
    power:5
  },
  {
    name:"dagger",
    power:30
  },
  {
    name:"claw hammer",
    power:50
  },
  {
    name:"sword",
    power:100
  }
];

const locations = [
  {
    name:"town square",
    "button text":["Go to store","Go to cave","Fight dragon"],
    "button functions":[goStore,goCave,fightDragon],
    text:"You are in the town square. You see a sign that says \"Store\"."
  },
  {
    name:"store",
    "button text":["Buy 10 health (10 gold)","Buy weapon (30 gold)","Go to town square"],
    "button functions":[buyHealth,buyWeapon,goTown],
    text:"You enter the store."
  },
  {
    name:"cave",
    "button text":["Fight slime","Fight fanged beast","Go to town square"],
    "button functions":[fightSlime,fightBeast,goTown],
    text:"You enter the cave. You see some monsters."
  }
]
function update(locations){
    button1.innerText = locations["button text"][0];
    button2.innerText = locations["button text"][1];
    button3.innerText = locations["button text"][2];

    button1.onclick = locations["button functions"][0];
    button2.onclick = locations["button functions"][1];
    button3.onclick = locations["button functions"][2];

    text.innerText = locations.text;
}
function goTown() {
    update(locations[0]);
  }
function goStore() {
  update(locations[1]);
}

function goCave(){
    update(locations[2]);
}
function fightDragon(){
    console.log("Fighting dragon.");
}
function buyHealth(){
 if(gold >= 10){
  gold -= 10;
  health += 10;
  goldText.innerText = gold;
  healthText.innerText = health;
 }
 else{
  text.innerText = "You do not have enough gold to buy health.";
 }
}
function buyWeapon() {
  if(currentWeaponIndex < 3){
    if (gold >= 30) {
      gold -= 30;
      currentWeaponIndex++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeaponIndex].name; //name is a key that is inside the array of "weapons" 
      // and currentWeaponIndex is the index value that will be 
      // used to access each value of object in the weapons array.
      text.innerText = "You now have a " + newWeapon + ".";
      inventory.push(newWeapon);
      text.innerText += " In your inventory you have: " + inventory;
    }
    else{
      text.innerText = "You do not have enough gold to buy a weapon."
    }
  }
}
function fightSlime(){

}
function fightBeast(){

}
//initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;