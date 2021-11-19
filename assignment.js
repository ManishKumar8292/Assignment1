//1st assignment 
// add all the count values using for loop and console the output. output should be 6.

const res = [
    {
        count: 1,
    },
    {
        count: 2,
    },
    {
        count: 3,
    },
    ];
//Declare Var
var i = 0;
sum = 0;
//For Loop
for( i =0; i<3; i++)
{
    sum = sum + res[i].count;
}
console.log(sum);