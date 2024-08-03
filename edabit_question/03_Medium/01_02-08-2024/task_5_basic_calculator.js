/*
Basic Calculator
Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.

Examples
calculator(2, "+", 2) ➞ 4

calculator(2, "*", 2) ➞ 4

calculator(4, "/", 2) ➞ 2
Notes
If the input tries to divide by 0, return: "Can't divide by 0!"

*/

function calculator(num1, op, num2){
    operators = ["*",'/','+','-'];
    if (operators.includes(op)){
        if (op === '+'){
            return result = num1 + num2;
        }
        else if (op === '-'){
            return result = num1 - num2;
        }
        else if (op === '*'){
            return result = num1 * num2;
        }
        else if (op === '/'){
            if (num2 != 0){
                return result = num1 / num2;
            }
            else{
                return "Can't divide by 0!"
            }
        }
        
    }
    else{
        return "invalid operator"
    }
}

console.log(calculator(5,'-',6))  // -1
console.log(calculator(5,'+',6))  // 11
console.log(calculator(30,'/',6))  // 5
console.log(calculator(5,'*',6))  // 30
console.log(calculator(5,'/',0))  // Can't divide by 0!
console.log(calculator(5,'%',0))  // invalid operator
