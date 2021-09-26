function uniqEncode(text){
  let chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","$",".","%","/"];
  let charArray = [];
  let letters = text.split("");
  letters.forEach(function(letter)
  {
    charArray.push(chars[Math.floor(Math.random() * letters.length)]);
  }
  let newText = charArray.join("");
  let keyArray = [];
  letters.forEach(function(letter, i) 
  {
       let letterVal = charArray[i].charCodeAt(0) - letter.charCodeAt(0);
       keyArray.push(letterVal);
  });
  let key = keyArray.join(".");
  return [newText, key];
}

function uniqDecode(text, key){
  let keyArray = key.split(".");
  let letters = text.split("");
  let textArray = [];
 letters.forEach(function(letter, i){
   let value = parseInt(letter.charCodeAt(0)) - parseInt(keyArray[i]);
textArray.push(value)
 })
  let string = String.fromCharCode(...textArray);
  return string;
}

function shift(){
   let text = document.getElementById("eta").value;
  [nText, key] = uniqEncode(text);
  document.getElementById("key").innerText = key;
  document.getElementById("nText").innerText = nText;
document.getElementById("textTitle").innerText = "Encoded Text"
document.getElementById("keyTitle").innerText = "Key"
}

function deshift(){
  let oText = document.getElementById("dta").value;
let key = document.getElementById("dkey").value;
let dText = uniqDecode(oText, key);
document.getElementById("dText").innerText = dText;
  document.getElementById("dTextTitle").innerText = "Decoded Text"
}
