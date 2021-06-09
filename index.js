/*REMEMBER TO RETURN ALL OF THE ANSWERS ON THESE TASKS, IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

/* 👀 This is your data ⬇ */
const originalFlavors = [
    "Banana Nut Fudge",
    "Black Walnut",
    "Burgundy Cherry",
    "Butterscotch Ribbon",
    "Cherry Macaron",
    "Chocolate",
    "Chocolate Almond",
    "Chocolate Chip",
    "Chocolate Fudge",
    "Chocolate Mint",
    "Chocolate Ribbon",
    "Coffee",
    "Coffee Candy",
    "Date Nut",
    "Eggnog",
    "French Vanilla",
    "Green Mint Stick",
    "Lemon Crisp",
    "Lemon Custard",
    "Lemon Sherbet",
    "Maple Nut",
    "Orange Sherbet",
    "Peach",
    "Peppermint Fudge Ribbon",
    "Peppermint Stick",
    "Pineapple Sherbet",
    "Raspberry Sherbet",
    "Rocky Road",
    "Strawberry",
    "Vanilla",
    "Vanilla Burnt Almond"
]

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: Copy the Array! 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
We have an array called originalFlavors with 31 flavors (see above).  In these tasks, we will be reading and writing data to this array.  
With all of these changes going on, we don't want to lose track of the actual, original 31 flavors.  So we need to copy the original array!

/*
Use the copy function below to do the following:
    1. receive an array as a parameter - you will pass in originalFlavors as an argument when the function is invoked.
    2. Return a copy of the received array  
*/

//Define the function, take array as parameter
function copy(array)
{
    //Declare an array to hold the copy
    const arrayCopy = [...array];
    //Return the new array
    return arrayCopy;
}    

//Call the function, pass in originalFlavors
copy(originalFlavors);


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Confirm that an array is exactly 31 flavors. Your function should accept:
    1. an array as a parameter
    2. Check to see if the array given is 31 flavors
    3. Your function should return a boolean TRUE if the length of the array is 31 and FALSE if the length of the array is NOT 31.
  

For Example: is31Flavors(originalFlavors) will return true if your code is working properly
*/

//Define the function, take array as parameter
function is31Flavors(array)
{
   
    return true;
}

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Corporate has come to you with an idea for a new flavor: Rainbow Sherbert! They think this will be a game changer. You need to modify the array to include this flavor. 

Use the addFlavor function below to do the following:
    1. Receive an array
    2. Receive a new flavor as a string
    3. The function adds the passed flavor to the front of the passed array
    4. The function should return the resulting array

    For example: addFlavor(originalFlavors, "Rainbow Sherbert") should return the array ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla Burnt Almond"]
*/


//Define the function, take array and flavor as parameters
function addFlavor(array, flavor)
{
    //Unshift() to add flavor to array

    array.unshift(flavor);
    //Return the array
    return array;
}

//Call the function, pass in originalFlavors and marble as arguments
addFlavor(originalFlavors, "marble");

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Houston, we have a problem! There are now 32 flavors in the originalFlavors array! Your task is to remove an item from the end of the array. 

Use the removeLastFlavor function below to do the following:
    1. Receive an array
    2. Remove the last item from the received array
    3. Return the resulting array

    For example: running removeLastFlavor(originalFlavors) would return ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla"]
*/

//Define the function, take array as parameter
function removeLastFlavor(array)
{
    //Pop() last flavor from array
    array.pop();

    //Return the array
    return array;
}

//Call the function, pass in originalFlavors
removeLastFlavor(originalFlavors);



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Write a function that returns a flavor at a given index in the array.

Use the getFlavorByIndex function below to do the following:
    1. Recieve an array
    2. Receive a number (the desired index)
    3. Return the flavor located at the received index position

    For example: running getFlavorByIndex(originalFlavors, 2) would return "Black Walnut", assuming Rainbow Sherbert has been added successfully
*/

//Define the function, take array and element as parameters
function getFlavorByIndex(array, element)
{
    //Return the flavor located at [element]
    return array[element];
}

//Call the function, pass in originalFlavors and 1 as arguments
getFlavorByIndex(originalFlavors, 1);


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
As corporate wants to add more and more flavors to their lineup, they've realized that they need to remove flavors based on flavor name, 
as opposed to just arbitrarily removing the first or last flavor. Your task is to get an index by flavor name, and remove that single flavor from the array.  

Use the removeFlavorByName function below to do the following:
    1. Receive an array
    2. Receive a flavor as a string
    3. Remove the received flavor from the received array
    4. Return the resulting array that now contains one less flavor

    For example: running removeFlavorByName(originalFlavors, "Rocky Road") would return an array with the a length of 30 because Rocky Road would have been removed. 

    HINT: You can use .splice() for this
*/

//Define the function, take array, flavor as parameters
function removeFlavorByName(array, flavor)
{
    //For loop to search the array
    for (let index = 0; index < array.length; index ++)
    {
        //If the flavor at location of index is equal to flavor
        if (array[index] === flavor)
        {
            //splice() the flavor from the array at location index
            array.splice(index,1);
        }
    }

    //Return the array minus one flavor
    return array;
}



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
July 7th is "World Chocolate Day" and Baskin Robins wants to create promotional materials highlighting all of their chocolate flavors. 
Your task is to write a function that checks every item in the array for a string and returns a new array called filteredArray with only the values 
that contain the received string. This would allow you to be able to filter for "Vanilla", "Sherbet", "Lemon" etc. when different holidays roll around 
by passing in those specific strings.

Use the filterByWord function below to do the following:
    1. -Receive an array
    2. -Receive a string (example: "chocolate")
    3. -Check to see if any of the flavors in the array contain that string
    4. -If they do, add them to a new array
    5. -Return the new array that contains the filtered flavors

    For example: filterByWord(originalFlavors, "Chocolate") should return ["Chocolate", "Chocolate Almond", "Chocolate Chip", "Chocolate Fudge", "Chocolate Mint", "Chocolate Ribbon"]

    HINT - you can use the .includes method to help you solve this

    DO NOT USE ADVANCED ARRAY METHODS (i.e. .filter) to solve this problem. 
*/

//Define the function
function filterByWord(array, string)
{
    //Declare empty array to push into
    const filteredArray = [];
    //For loop to search
    for (let i = 0; i < array.length; i++)
    { 
        //If the array at [i] contains the string using >>includes()<<
        if (array[i].includes(string))
        {
            //Push it to new array
            filteredArray.push(array[i]);
        }
    }

    //Return the filtered array
    return filteredArray;
}
/* Use console log to see a test report */
console.log("task 7", filterByWord(originalFlavors, "Chocolate"));

/* 💪💪💪💪💪🧁🍦🍨 STRETCH 🍨🍦🍫💪💪💪💪💪*/ 

/* STRETCH 1: Write a function that returns the average number of words in an array. You should be able to use this function for any array, but can test with originalFlavors.

Use the getAverageWordLength function below to do the following:
    1. Receive the originalFlavors array
    2. Count how many words per item in the array
    3. Return the average number of words per item in the array

    For example: getAverageWordLength(originalFlavors) should return a number between 0 and 3.     
*/

function getAverageWordLength(/*code here*/){
    /*code here*/
}

/* 💪💪💪💪💪💪💪💪💪💪 STRETCH 2: 💪💪💪💪💪💪💪💪💪
Baskin Robins now offers new flavors, seasonal flavors, and even regional flavors. Write a function that will randomly select a total of 31 flavors 
from originalFlavors, currentFlavors, seasonalFlavors, and regionalFlavors and store it in an array called randomFlavors.

Use the getRandomFlavors function and new arrays below to do the following:
    1. Receive the four arrays with all the differnet flavors (originalFlavors is above, the others are below)
    2. Randomly pick flavors from all four arrays
    3. Return a new array called randomFlavors that has a lenght of 31

    For example: getRandomFlavors(originalFlavors, newFlavors, seasonalFlavors, regionalFlavors) might return ["Strawberry Cheesecake", "Eggnog,"..."Chocolate"].
*/


function getRandomFlavors(/*code here*/){
    /*code here*/
}

// NEW DATA ARRAYS FOR STRETCH 2 ⬇️
const newFlavors = [
    "Date night",
    "U.S.S Butterscotch (Stranger Things special)",
    "Honey Almond",
    "Mint Chocolate Chip",
    "Chocolate",
    "Oreo® Cookies'n Cream",
    "Chocolate Chip",
    "Pralines 'n Cream",
    "Very Berry Strawberry",
    "Chocolate Chip Cookie Dough",
    "Old Fashioned Butter Pecan",
    "Jamoca®",
    "Jamoca® Almond Fudge",
    "Reese's® Peanut Butter Cup",
    "Rocky Road",
    "Peanut Butter ’n Chocolate",
    "Gold Medal Ribbon®",
    "World Class® Chocolate",
    "Cherries Jubilee",
    "Chocolate Fudge",
    "Daiquiri Ice",
    "Rainbow Sherbet",
    "Rainbow Swirl"
] 

const seasonalFlavors = [
    "America's Birthday Cake",
    "Baseball Nut®",
    "Blueberry Cheesecake",
    "Bourbon Street Pecan Pie",
    "Brownie Bar Mashup",
    "Cherry Cordial with Kisses",
    "Chocolate Mousse Royale",
    "French Vanilla",
    "Eggnog",
    "German Chocolate Cake",
    "Icing on the Cake",
    "Love Potion #31",
    "New York Cheesecake",
    "Nutty Coconut",
    "Peppermint",
    "Strawberry Cheesecake",
    "Rock ’n Pop Swirl",
    "Reese’s Peanut Butter Cup",
    "Trick Oreo Treat",
    "Winter White Chocolate",
    "made with Snickers®",
    "made with M&M's®",
    "Heath®",
    "Mango Tango"
]

const regionalFlavors = [
    "Pink Bubblegum",
    "Caramel Macchiato",
    "York Peppermint Pattie",
    "Cotton Candy",
    "Orange Sherbet",
    "Grape Ice",
    "Watermelon Ice",
    "Miami Vice Sorbet",
    "Splish Splash®",
    "Wild 'n Reckless Sherbet",
    "Lemon Custard",
    "Oregon Blackberry",
    "Bananas ‘n Strawberries",
    "Mississippi Mud",
    "Rum Raisin",
    "Creole Cream Cheese",
    "Chocolate Almond",
    "Fudge Brownie",
    "Banana Nut",
    "Black Walnut",
    "Cotton Candy Crackle",
    "Quarterback Crunch",
    "Chocolate Chocolate Chip Cheesecake",
    "Caramel 'n' Cookies"
]



/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    is31Flavors,
    addFlavor,
    removeLastFlavor,
    getFlavorByIndex,
    removeFlavorByName,
    copy,
    filterByWord,
    getAverageWordLength,
    getRandomFlavors
}

