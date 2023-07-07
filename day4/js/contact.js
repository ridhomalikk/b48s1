function mail(event){
    event.preventDefault()
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let number = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value

    if(name == "") {
        return alert("Please insert your Name")
    } else if(email == "") {
        return alert("Please insert your Email address")
    } else if(number == "") {
        return alert("Insert your phone number, please")
    } else if(subject == "") {
        return alert("Select your subject, please")
    } else if(message == ""){
        return alert("Typing your message, please")
    }

    const destination = "ridhomalik090@gmail.com";
    let a = document.createElement("a")
    a.setAttribute('href', `mailto:${destination}?subject=${subject}&body= Hello, my name is ${name} , my reason contact you is ${message}, contact me at ${number}`)
    a.click()
    

    let data = {
        name,
        email,
        phone,
        subject,
        message
    }

    console.log(data)
}