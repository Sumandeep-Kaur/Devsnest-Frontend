var student =  { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12  
};

/* Q1: Write a JavaScript program to list the properties of a JavaScript object. */
function display(object) {
    let arr = Object.keys(object);
    return arr.join(",");
}
console.log(display(student));


/* Q2: Write a JavaScript program to delete the rollno property from the following object. 
 Also print the object before or after deleting the property. */
function delProp(object , prop){
    console.log("Before deletion :- " + Object.keys(object));
    delete object[prop];
    console.log("After deletion :- " + Object.keys(object));
}
delProp(student, "rollno");


/* Q3: Write a JavaScript program to get the length of a JavaScript object. */
function getLength(object) {
    console.log("Lenght of object : ",Object.keys(object).length);
}
getLength(student);  


/* Q4: Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
 var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
 { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
 { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; */
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
 { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
 { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];
function displayStatus() {
    library.forEach((value) => {
        if (value.readingStatus === true) {
            console.log("You have read " + value.title);
        } else {
            console.log("You haven't read " + value.title);
        }
    });
}
displayStatus();


/* Q5: Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.*/
class Cylinder {
    constructor(height, radius) {
        this.height = height;
        this.radius = radius;
    }
    volume() {
        return 2 * Math.PI * this.height * this.radius;
    }
}
const cylinder = new Cylinder(10, 4);
console.log(cylinder.volume().toFixed(4));


/* Q6: Write a JavaScript program to sort an array of JavaScript objects.  */
var library = [ 
    { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
    { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
    { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }
]; 

let sortArray = (a, b) => {
    return b.libraryID - a.libraryID;
};
console.log(library.sort(sortArray));