//2nd Assignment
//add all the count values using for loop and console the output. output should be 8.

const response ={
    maran:{
        count:1
    },
    gas:{
        count:2
    },
    prelude:{
        count:5
    },
    keys:['maran','gas','prelude']
}

//sum the objects
sum = response.maran.count+response.gas.count+response.prelude.count;
console.log(sum);
