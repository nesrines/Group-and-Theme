function Group() {
    let value = document.getElementById("input").value;
    let x = value.slice(-3, -2);
    document.getElementById("Group").innerHTML = value;
    switch(x){
        case "1":
            document.getElementById("Group").style.color = "lightblue";
            document.getElementById("Group").innerHTML += " (Həftəiçi səhər qrupu)";
            break;
        case "2":
            document.getElementById("Group").style.color = "pink";
            document.getElementById("Group").innerHTML += " (Həftəiçi günorta qrupu)";
            break;
        case "3":
            document.getElementById("Group").style.color = "rebeccapurple";
            document.getElementById("Group").innerHTML += " (Həftəiçi axşam qrupu)";
            break;
        case "4":
            document.getElementById("Group").style.color = "green";
            document.getElementById("Group").innerHTML += " (Həftəsonu birinci növbə)";
            break;
        case "5":
            document.getElementById("Group").style.color = "blue";
            document.getElementById("Group").innerHTML += " (Həftəsonu ikinci növbə)";
            break;
        default:
            document.getElementById("Group").style.color = "red";
            document.getElementById("Group").innerHTML = "Düzgün qrup adı daxil edin";
            break;
    }
}
function Theme() {
    if (document.body.style.backgroundColor == "white") {
        document.body.style.backgroundColor = "black";
        document.getElementById("ThemeButton").className = "fa-solid fa-sun";
    }
    else {
        document.body.style.backgroundColor = "white";
        document.getElementById("ThemeButton").className = "fa-solid fa-moon";
    }
}