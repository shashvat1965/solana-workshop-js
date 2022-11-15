const cowsay = require("cowsay");

console.log("jello");
const a = 30;
const b = 20;

for (let i = 0; i < 10; i++) {
    console.log(i);
}
try {
    throw Error["wow bhaiya"];
} catch (e) {
    console.log("i fucked up");
}

console.log(cowsay.say({
    text : "wow",
    e : "xx",
    T : "||"
}));