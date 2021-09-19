function zzzEncode(text){
  let regex = /[a-zA-Z0-9_@./#$&+-?!,]/;
  let letters = text.split("");
  let newText = text.replace(/[a-zA-Z0-9_@./#$&+-?!,]/g, "z");
  let keyArray = [];
  letters.forEach(function(letter) 
  {
    if (regex.test(letter)){
     console.log(letter)
       let letterVal = "z".charCodeAt(0) - letter.charCodeAt(0);
      console.log(letterVal)
       keyArray.push(letterVal);
    } else {
       console.log(letter)
       console.log("Not")
       keyArray.push(0);
    }
  });
  let key = keyArray.join(".");
  return [newText, key];
}

function zzzDecode(text, key){
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
  [nText, key] = zzzEncode(text);
  document.getElementById("key").innerText = key;
  document.getElementById("nText").innerText = nText;
document.getElementById("textTitle").innerText = "Encoded Text"
document.getElementById("keyTitle").innerText = "Key"
}

function deshift(){
  let oText = document.getElementById("dta").value;
let key = document.getElementById("dkey").value;
let dText = zzzDecode(oText, key);
document.getElementById("dText").innerText = dText;
  document.getElementById("dTextTitle").innerText = "Decoded Text"
}