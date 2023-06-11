
// accomodation for leap years and for months with 30 days

const d0 = document.getElementById("day");
const m0 = document.getElementById("month");
const y0 = document.getElementById("year");


const arrow = document.querySelector(".image");

const dYear = document.querySelector(".dis-year");
const dMonth = document.querySelector(".dis-month");
const dDate = document.querySelector(".dis-date");


arrow.addEventListener("click", displayResult)

var date = new Date()
    var d2 = date.getDate()
    var m2 = 1 + date.getMonth()
    var y2 = date.getFullYear()

    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    function validate(){
        const inputs = document.querySelectorAll("input");
        let validator = true;
        inputs.forEach((i) => {
            const parent = i.parentElement
            if(!i.value){
                i.style.borderColor = "hsl(0, 100%, 67%)";
                parent.querySelector("label").style.color = "hsl(0, 100%, 67%)"; 
                parent.querySelector(".small").innerText = "This field is required";
                validator= false;
            }else if(m0.value > 12){
                m0.style.borderColor = "hsl(0, 100%, 67%)";
                m0.parentElement.querySelector("label").style.color = "hsl(0, 100%, 67%)"; 
                m0.parentElement.querySelector(".small").innerText = "Must be a valid month";
                validator= false;
            }else if(d0.value > 31){
                d0.style.borderColor = "hsl(0, 100%, 67%)";
                d0.parentElement.querySelector("label").style.color = "hsl(0, 100%, 67%)"; 
                d0.parentElement.querySelector(".small").innerText = "Must be a valid day";
                validator= false;
            }else if(y0.value > y2){
                y0.style.borderColor = "hsl(0, 100%, 67%)";
                y0. parentElement.querySelector("label").style.color = "hsl(0, 100%, 67%)"; 
                y0.parentElement.querySelector(".small").innerText = "Must be in the past";
                validator= false;
            }else{
                i.style.borderColor = "hsl(0, 0%, 86%)";
                parent.querySelector("label").style.color = "hsl(0, 1%, 44%)"; 
                parent.querySelector(".small").innerText = " ";
                validator= true;
            }


        })
        return validator
    }


function displayResult(e){
    e.preventDefault();
    if(validate()){
   
    if(d0.value>d2){
        d2= d2 + month[m2-1];
        m2= m2-1;
    }

    if(m0.value>m2){
        m2= m2+ 12;
        y2= y2-1;
    }

    var d = d2 - d0.value
    var m = m2 - m0.value
    var y = y2 - y0.value

   

    dYear.innerHTML= y
    dMonth.innerHTML= m
    dDate.innerHTML = d
}
}



