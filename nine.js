/* You are given an array of numbers and strings. Your task is to find the first strin2 in the array. On finding the 
first string print “Found the First String” and its value. */

let arr = [1,2,999,56,"mithun",1234,"pw"];

for (let index = 0; index < 7;index ++)
{
    if(typeof arr[index] === "string")
    {
     console.log("First string is found and is :",arr[index]);
     break;
    }
}
