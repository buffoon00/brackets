module.exports = function check(str, bracketsConfig) {
  const openBrackets = [];
  const bracketsPair = {};
  for (i = 0; i < bracketsConfig.length; i++){
    const key = bracketsConfig[i][1];
    const value = bracketsConfig[i][0];
    openBrackets.push(value);
    bracketsPair[key] = value;
  }

  let stack = [];
    for (i = 0; i < str.length; i++) {
      let currentSymb = str[i];
      let topElem = stack[stack.length - 1];
      if (stack.length !== 0 && bracketsPair[currentSymb] === topElem) {
        stack.pop();
      } else if (openBrackets.includes(currentSymb)){
        stack.push(currentSymb);
      } else {
        if (stack.length === 0) {
          return false;
        }
         else if (bracketsPair[currentSymb] === topElem) {
          stack.pop();
        } else {
          return false;
        }
      }      
    }     
  return stack.length === 0;
}
