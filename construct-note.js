// add whatever parameters you deem necessary
function constructNote(msg, str) {
 
  // helper function for counting letters
  const message = charChecker(msg)
  const letters = charChecker(str)

  // check if the msg letters are in the str
  for(let key in message) {
    if(!letters[key]) return false;
    if(message[key] > letters[key]) return false;
  }
  return true;
}   


function charChecker(str) {
  let counter = {};

  for(let l of str) {
    counter[l]= counter[l] || 0;
    counter[l] + 1;
  }

  console.log(counter);
  return counter;
}


constructNote("hello", "llohe")