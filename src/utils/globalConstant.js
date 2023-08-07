import * as yup from 'yup'

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
const fullNameRegex = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/
const phoneNumberRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
export const loginValidationSchema = yup.object().shape({
    email: yup.string().matches(emailRegex, "please enter valid email")
        .required('please enter email'),

    //Minimum eight characters, at least one letter, one number and one special character:
    pass: yup.string().matches(passwordRegex, "please enter valid password")
        .required('please enter password'),
})
export const loginInitialValuesSchema = { email: '', pass: '' }

export const signUpValidationSchema = yup.object().shape({
    fullname: yup.string().matches(fullNameRegex, "please enter valid Name")
        .required('please enter Name'),
    email: yup.string().matches(emailRegex, "please enter valid email")
        .required('please enter email'),
    //Minimum eight characters, at least one letter, one number and one special character:
    pass: yup.string().matches(passwordRegex, "please enter valid password")
        .required('please enter password'),
    phone: yup.string().matches(phoneNumberRegex, "please enter valid Mobile No.")
        .required('please enter Mobile No.'),
})

export const dataArray = [
    { "id":"1","title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    { "id":"2","title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    { "id":"3","title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    { "id":"4","title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    { "id":"5","title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    { "id":"6","title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    { "id":"7","title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    { "id":"8","title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    { "id":"9","title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    { "id":"10","title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    { "id":"11","title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    { "id":"12","title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    { "id":"13","title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    { "id":"14","title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    { "id":"15","title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    { "id":"16","title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    { "id":"17","title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    { "id":"18","title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    { "id":"19","title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    { "id":"20","title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
]

export const signUpInitialValuesSchema = { fullname: '', email: '', pass: '', phone: '' }


