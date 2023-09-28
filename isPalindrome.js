function isPalindrome (str) {
    //tu código acá
    const newString = str.split("").reverse().join("")
    if (newString === str){
        console.log("Es palindromo")
        return newString
    }
    console.log("No es palindromo")
    return false
}

const str = "carla"
isPalindrome(str)