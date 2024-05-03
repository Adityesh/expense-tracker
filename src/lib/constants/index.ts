export const regexStrings = {
    UPPERCASE : /[A-Z]/,
    LOWERCASE : /[a-z]/,
    SPECIAL_CHARACTERS : /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/,
    PASSWORD : /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
}