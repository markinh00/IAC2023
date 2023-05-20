const validName = new RegExp('^[\\w\\W]{1,25}$');
const validSurname = new RegExp('^[\\w]{1,25}$');
const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
const validPassword = new RegExp('^[\\w\\W]{6,25}$');

const validateInputs = (event, password) => {
    if(event.target.name === "nickname"){
        if(!validName.test(event.target.value)){
            console.log("validtion:",event.target.value)
            return("Please type in a valid name! (max: 25 characters)");       
        }
        return("");
    }
    if(event.target.name === "email"){
        if(!validEmail.test(event.target.value)){
            console.log("validtion:",event.target.value)
            return("Please type in a valid e-mail!");       
        }
        return("");

    }
    if(event.target.name === "password"){
        if(!validPassword.test(event.target.value)){
            console.log("validtion:",event.target.value)
            return("Please type in a valid password! (min: 6 character)");       
        }
        return("");
    }
    if(event.target.name === "confirmPassword"){
        if(event.target.value !== password){
            console.log("validtion:",event.target.value)
            return("The password and comfirm password most be the same!");  
        }
    }
}

export const checkValidations = (values) => {
    for (const value in values) {
        if (Object.hasOwnProperty.call(values, value)) {
            const element = values[value];
            if(element === "") {
                console.log(value)
                return false
            };    
        }
    }
    return true;
}

export default validateInputs;