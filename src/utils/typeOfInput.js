//Type of input (IP, url, mail)
const typeOfInput = (userInput) => {
    //const numberList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    const mailSymbol = ['@']
    const letterList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    const inputArray = userInput.split('')

    const validationURL = letterList.some(item => inputArray.indexOf(item) >= 0)
    const validationMail = mailSymbol.some(item => inputArray.indexOf(item) >= 0)
    

    if(validationURL) {
        return 'domain'
    }else if (validationMail){
        return 'email'
    }else {
        return 'ipAddress'
    }

}

export default typeOfInput