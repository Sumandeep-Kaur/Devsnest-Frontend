const boxes = document.querySelector(".container");
boxes.addEventListener("click", (e)=>{
    let box = e.target.className;
    if (box === "grid red"){
        e.target.classList="grid white";
    }else if(box === "grid white"){
        e.target.classList="grid red";
    }
})