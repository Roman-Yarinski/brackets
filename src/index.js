module.exports =  function check(str, bracketsConfig) {
    let openBrackets = [],
        closeBrackets = [],
        arr,
        result= [];
  
    bracketsConfig.map(e => {
        openBrackets.push(e[0]);
    });
  
    bracketsConfig.map(e => {
        closeBrackets.push(e[1]);
    });
  
    arr = str.split('');
  
    for (let i = 0; i < arr.length; i++) {
        let openBraket = openBrackets[openBrackets.indexOf(arr[i])];
        let closeBraket = closeBrackets[closeBrackets.indexOf(arr[i])];
        let pairBraket = openBrackets[closeBrackets.indexOf(arr[i])];
  
        if(openBraket && openBraket === closeBraket && result[result.length-1] === openBraket){
            result.pop();
            continue;
        }
  
        if (closeBraket && result[result.length-1] === pairBraket) {
            result.pop();
            continue;
        }
  
        result.push(arr[i]);
    }
    
    if (result.length !== 0) {
      return false;
    } else {
      return true;
    };
  }
