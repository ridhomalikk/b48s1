function sendMail() {
    var params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        number : document.getElementById("phone").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
    };
    
    const serviceID = "service_fmu8n9b";
    const templateID = "template_61qdjh7";
        
    emailjs
    .send(serviceID, templateID, params)
    .then((res) =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!");
    })
    .catch((err) => console.log(err));
}