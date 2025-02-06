const input = document.getElementById("input");

function reverseString(str){
    return str.split("").reverse().join("")
}


function check(){
    const value = input.value
    const reverse = reverseString(value)

    if (value == reverse ){
        alert(reverse, "word is palidrome.")
    }
    else {
        alert("word is  not palidrome.")
        
        input.value("") //clearing the input field
    }
}



