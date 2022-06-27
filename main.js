//get element
let clickOnTitle = document.querySelectorAll(".title");
//console.log(clickOnTitle)


//solution one

// clickOnTitle.forEach(function(title){
//     title.addEventListener("click", function(){
//         title.parentElement.classList.toggle("show-text")
//     })
// })


//solution two
let questions = document.querySelectorAll(".question")
//console.log(questions)

questions.forEach(function (question) {
    //get title of every question
    let clickOnTitle = question.querySelector(".title")
    //console.log(clickOnTitle)

    //add function when we click on it to add the class to show text
    clickOnTitle.addEventListener("click", function () {

        //delete the class of other questions ti hide the text
        questions.forEach(function (ele) {
            //if ele (question) not identical to other question
            if (ele !== question) {
                ele.classList.remove("show-text")
                ele.classList.remove("bold-h2")
                ele.classList.remove("rotate-arrow")
            }
        })

        question.classList.toggle("show-text")
        question.classList.toggle("bold-h2")
        question.classList.toggle("rotate-arrow")
    })
})