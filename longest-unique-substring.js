function longestUniqueSubstring(str) {
    var currentStr, longestStr, strArr;
    currentStr = "";
    longestStr = "";
    strArr = str.split("");

    for(j=0; j < strArr.length; j++) {
        for(i=j; i < strArr.length; i++) {
            if(currentStr.includes(strArr[i])) {
                break;
            } else {
                currentStr += strArr[i];
            }
         }
         if(longestStr.length < currentStr.length) {
             longestStr = currentStr;
         }
        currentStr = "";
    }
    return longestStr;
}