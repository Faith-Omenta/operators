// Extract the first four characters from the string below;
let x ="beautiful"
let tex=x.slice(0,4)
console.log(tex)


// Insert the following string at the tenth index of the below variable:
// "eat"
// const food = "I did not have appetite today"
const food="I did not have appetite today"
console.log=(food.replace(food[10],"eat"))


// Count how many times the following string appears in the string variable:
// "the""
// "s"
//const story= "She sells sea shells at the sea shore"
const text="She sells sea shells at the sea shore"
const f=(text.match(/the/g)).length;
const t=(text.match(/s/g)).length;
console.log(f);
console.log(t);
// convert the following strings into the specified format:
// 1. UpperCase: "CONfidant"
// 2. LowerCase: "amazing", "beautiFUL"
// 3. Title case "A busy office"
const house="CONFident";
let high=house.toUpperCase();
console.log(high);
const woman="amazing"
let ladys=woman.toLowerCase();
console.log(ladys);
const home="A busy office";
let home1=home.toLocaleUpperCase();
console.log(home1)

//Using JavaScript, find the following words from the following strings:
 // 1."market"
// const string1 = "The lady went to the market with her sister";
// 2. "season"
// const string2 = "My favorite season is spring"
const string1="The lady went to the market with her sister";
let sentence=string1.search("market");
console.log("sentence");
const string2="My favorite season is spring";
let girl=string2.search("season");
console.log(girl);
