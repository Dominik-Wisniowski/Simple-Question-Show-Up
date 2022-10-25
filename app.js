const QUESTION = document.querySelectorAll('.question');
const btn = document.querySelectorAll(".question-btn");

btn.forEach((button, index)=>{
    button.addEventListener("click", ()=>{
        QUESTION.forEach((item)=>{
            if(item !== QUESTION[index]){
                console.log(item)
                item.classList.remove('show-text');
            }
        });
        QUESTION[index].classList.toggle("show-text");
    });
});
