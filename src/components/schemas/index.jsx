import * as yup from "yup";

const firstNameRegex = '[A-Z][a-zA-Z]*'
const lastNameRegex = "[a-zA-z]+(['-][a-zA-Z]+)*"
const pwdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
 
export const registerSchema = yup.object().shape({
    firstName: yup.string().max(50).matches(firstNameRegex).required("Field Required"),
    lastName: yup.string().max(50).matches(lastNameRegex).required("Field Required"),
    email: yup.string().email("please enter a valid email").required("Field Required"),
    password: yup.string().min(5).matches(pwdRegex, { message: "Please enter a stronger password"}).required("Field Required")
})