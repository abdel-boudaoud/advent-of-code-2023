const fs = require("fs");
let sample = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`


let numbersText = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

let getDigits = (input)=>{
    let inputArr = input.split("\n")
    
    let calibrations = []
    
    inputArr.forEach(ele=>{
        
        let numbers = Array()
        for(let i =0; i < ele.length;i++){
            
            if(Number(ele[i])){
                numbers[i] = ele[i]
            }
            
        }
        
        numbersText.forEach(number=>{
            if(ele.match(number)){
                numbers[ele.match(number).index] = `${numbersText.indexOf(number)}`
            }
        })
        calibrations.push(numbers.flat())
        
    })
    

    let values = calibrations.map(arr=>{
        let num = `${arr[0]}${arr[arr.length-1]}`
        return parseInt(num)
    })
   

    console.log(values.reduce((a, b)=> a+b  , 0)) 

}





let text = fs.readFile("day-1/input.txt", 'utf-8', (err, data)=>{
    if(err){
        console.log(err)
    }else{
        getDigits(data)
    }
})
