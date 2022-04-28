const navUL = document.getElementById("nav-ul");
const navLi = navUL.getElementsByClassName("nav-li");

for (let i=0; i < navLi.length; i++) {
    navLi[i].addEventListener("click", function() {
        const current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

let links = document.querySelectorAll(".link");
let allContent = document.querySelectorAll(".content"); 

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", (e) => {
        e.preventDefault();
        const filter = e.target.dataset.filter;
        
        allContent.forEach((content) =>{
        if(filter === "content"){
            content.style.display = "block"
        } else if(content.classList.contains(filter)){
            content.style.display = "block"
        } else {
            content.style.display = "none"
        }
            
        })
    });
}