const fs = require("fs");

let sample = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`

let text = fs.readFile("day-1/input.txt", 'utf-8', (err, data)=>{
    if(err){
        console.log(err)
    }else{
        getDigits(data)
    }
})


let getDigits = (input)=>{
    let inputArr = input.split("\n")
    let calibrations = []
    
    inputArr.forEach(ele=>{
        let numbers = []
        for(let i =0; i < ele.length;i++){
            
            if(Number(ele[i])){
                numbers.push(ele[i])
                
            }
            
        }
        calibrations.push(numbers)
    })

    let ff = calibrations.map(x=>{
        return parseInt(x[0] + x[x.length-1], 10) 
    })

    console.log(ff.reduce((a, b)=> a+b  , 0)) //answer was 54968

}

