/* You are given with an array of numbers both positive and negative. Your task is to print only the positive
numbers.*/

let arr = [1,2,-3,5,-9,-8,-7,7];
let i = 0; 
for(i=0;i<8;i++)
{
    if(arr[i] < 0)
    {
        continue;
    }
    console.log("positive Numbers Are : ",arr[i]);
}