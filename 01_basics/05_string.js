let name = "Hafeez "
const repoCount = 50

// console.log(name + repoCount); Old Method to concarenate
console.log(`My name is ${name} and my repCount is ${repoCount}`); //Modren way of using `backtecks`

const gameName = new String("Abdul Hafeez")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());


console.log(gameName.charAt(6));
console.log(gameName.indexOf("f"));

console.log(gameName.substring(12, 6));
console.log(gameName.slice(0));

let newString = "  Haseeb  "
console.log(newString);
console.log(newString.trim());


const url = "https://hafeez%20.dev.netlify.app"
console.log(url.replace("%20",'-'));

console.log(url.includes('Hafeez'));
console.log(url.split("."));

const copy = url.split()
console.log(copy);