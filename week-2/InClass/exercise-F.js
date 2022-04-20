function isValid(username, usertype) {
    if (usertype === "Admin" || usertype === "Manager") {
        return "Username Valid"
    } else if (username.charAt(0) === username.charAt(0).toUpperCase() && username.length >= 5 && username.length <= 10) {
        return "Username valid"

    } else {
        return "Username invalid"
    }
}

console.log(isValid('Rachid', 'Admin'))