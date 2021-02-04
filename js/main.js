function responsivo(){
    var menu = document.getElementById("topnav");

    if (menu.className === "navbar") {

        menu.className += " responsivo";

    } else {

        menu.className = "navbar";

    }
}