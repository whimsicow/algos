function shortestUniqueSubstring(str, n=1) { 
    var i, substr1, posSubstr1, substrArr;
    if (str === "") {
        return [str];
    } 
    for (i = 0; i < str.length; i++) {
        substr1 = str.substr(i, n);
        posSubstr1= str.search(substr1);
        posSubstr1= str.indexOf(substr1, posSubstr1 + 1);
        if (posSubstr1 === -1) {
            substrArr = substrArr || [];
            substrArr.push(substr1);
        }
   }
    if (substrArr) {
        return substrArr;
    }
    return shortestUniqueSubstring(str, n+1);
}