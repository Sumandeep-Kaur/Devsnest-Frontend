/* Q1: Write a JavaScript function to check whether an `input` is an array or not*/
function is_array(input){
    //if (toString.call(input) === "[object Array]")
    if(input instanceof Array)
        return true;
    return false;
};
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));


/* Q2: Write a JavaScript function to clone an array*/  
function array_Clone(arr){
    return arr.slice(0);
};
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));


/* Q3: Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.*/  
function first(arr, n){
    if(!n)
        return arr[0];
    if(n<=0)
        return [];
    return arr.slice(0, n);
};
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));


/* Q4: Write a simple JavaScript program to join all elements of the following array into a string.*/  
function to_string(arr, symbol){
    return arr.join(symbol);
};
console.log(to_string(["white", "Black", "Blue"], ","));


/* Q5: Write a JavaScript program to find the most frequent item of an array*/  
var mf = 1;
var m = 0;
var item;
var arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
for (var i=0; i<arr.length; i++){
    for (var j=i; j<arr.length; j++){
        if (arr[i] == arr[j])
            m++;
        if (mf < m){
            mf = m; 
            item = arr[i];
        }
    }
    m = 0;
}
console.log(item + " (" + mf + " times)");