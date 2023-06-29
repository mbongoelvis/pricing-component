let toggler = () => {
    let toggler = document.querySelector(".toggle")
    let basic = document.querySelector(".basic")
    let professional = document.querySelector(".professional")
    let master = document.querySelector(".master")
    if(toggler.classList.contains("move")){
        toggler.classList.remove("move")
        basic.textContent = "199.99"
        professional.textContent = "249.99"
        master.textContent = "399.99"
    }
    else{
        toggler.classList.add("move")
        basic.textContent = "19.99"
        professional.textContent = "24.99"
        master.textContent = "39.99"  
    }
    
}