
export const checkValiddata = (email,password) =>{

    const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid){
        return "Email Not VALID";
    }

    if(!isPasswordValid){
        return "Password Not VALID";
    }

    return null
}