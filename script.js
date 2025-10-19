const upper = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M',
  'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];

const lower = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z'
];

const nums = ['0','1','2','3','4','5','6','7','8','9'];

const syms = [
  '!','@','#','$','%','^','&','*','(',')','_','+','-','=','[',']','{','}','|',';',':',',','.','<','>','?','/'
];

const output = document.getElementById('output');
const input = document.getElementById('passwordLength');
let password = "";
let selectedArrays = [];

function getPassword(){
  password = "";
  selectedArrays = [];

  const symbolBtn = document.getElementById('symbolBtn').checked;
  const numberBtn = document.getElementById('numberBtn').checked;
  const uppercaseBtn = document.getElementById('uppercaseBtn').checked;
  const lowercaseBtn = document.getElementById('lowercaseBtn').checked;

  if (symbolBtn) selectedArrays.push(syms);
  if (numberBtn) selectedArrays.push(nums);
  if (lowercaseBtn) selectedArrays.push(lower);
  if (uppercaseBtn) selectedArrays.push(upper);

  const passwordLength = parseInt(input.value);
  if (passwordLength > 30 && selectedArrays.length === 0){
    output.innerHTML = "input cannot be above 30 characters must select at least one character type";
    return;
  }
  if (passwordLength < 10 && selectedArrays.length === 0){
    output.innerHTML = "input must be at least 10 chracters and must select at least one chracter type";
    return;
  } else if(selectedArrays.length === 0){
    output.innerHTML = "select at least one character type";
    return;
  } else if (passwordLength < 10){
    output.innerHTML = "input must be at least 10 characters";
    return;
  } else if (passwordLength > 30) {
    output.innerHTML = "input cannot be above 30 characters"
    return;
  }

  getChar(selectedArrays);

  return output.innerHTML = password;
}

function getChar (name){
  const passwordLength = parseInt(input.value);

  for(let i = 0; i < passwordLength; i++){

    let randomArray = name[Math.floor(Math.random() * name.length)];
    let randomChar = randomArray[Math.floor(Math.random() * randomArray.length)];
    password += randomChar;

  }
}