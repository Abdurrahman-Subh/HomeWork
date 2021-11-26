document.querySelector(".link").setAttribute("href", "https://www.linkedin.com/in/abdulrahman-subh-444bb01ab/");
document.querySelector(".git").setAttribute("href", "https://github.com/Abdulrahman797");





function hide() {
    //Change Inner Html
    document.querySelector('#nameSurname').innerHTML = "Abdurrahman Subh";
    document.querySelector('#age').innerHTML = "19";
    //Remove The Button
    var button = document.querySelector('.btn');
    button.parentNode.removeChild(button);

}