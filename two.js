/*You are building a simple login system. Implement the login feature that has two variables: username and
password. You should check if the username is "admin" and the password is "12345"+ If both conditions are
true, print "Login sucessful"W otherwise, print "Invalid credentials".*/
let username = "admin";
let password = "12345";
if(username === "admin")
{
    if(password === "12345")
    {
        console.log("Login Successful");
    }
    else{
        console.log("You Are With Wrong Password");
    }
}
else
{
    console.log("Invalid credentials");
}