function dropdown(){
    var dropdown = document.getElementById("dropdown");
    var name = document.getElementById("name");
    
    if(dropdown.style.display == "block"){
        dropdown.style.display = "none";
        name.style.marginTop = "0"
    }else{
        dropdown.style.display = "block";
    }
}
