var plaintext = prompt("Please Enter the Plain Text");

function caesarCipher (str , num) {
    num = num % 26 ;
    var lowerCaseStr = str.toLowerCase() ;
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split ('');
    var newStr = '';
 
    for ( var i = 0 ; i < lowerCaseStr.length ; i ++ ) {
    var currentLetter = lowerCaseStr[i] ;
    if (currentLetter === ' ') {
        newStr += currentLetter;
        continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    if(newIndex > 25) newIndex = newIndex - 26;
    if(newIndex < 0) newIndex = newIndex + 26;
    if(str[i] == str[i].toUpperCase()) {
     newStr += alphabet[newIndex].toUpperCase();
    }
    else newStr += alphabet[newIndex];
}
return newStr;
    }  
    
console.log(caesarCipher(plaintext , 3))