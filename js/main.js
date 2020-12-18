// Nav Toggle function 

function myFunction() {
    document.getElementById("navLinks").classList.toggle("show");
}

//Closes dropdown when clicked outside of it

window.onclick = function(event) {
    if (!event.target.matches ('.navicon')) {
        var dropdowns = document.getElementsByClassName ("nav-links");
        var i; 
        for (i=0; i<dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}