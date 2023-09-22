let img = document.getElementsByClassName("eye");
let pasInput = document.getElementById('password');
let form_text = document.getElementsByClassName('form_text')[0];
let listItem = document.querySelectorAll(".list_item");
let totalCountStage = 8;


img[0].style.display = "none"; //eye open hide by default

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', (event)=>{

        // console.log(event.target.dataset.tg);
        if (event.target.dataset.tg == "eye-close") {
            img[1].style.display = "none";
            img[0].style.display = "block";
            pasInput.setAttribute('type', 'text')
            pasInput.setAttribute('placeholder', 'PASSWORD')
        }
        
        if (event.target.dataset.tg == "eye-open") {
            img[0].style.display = "none";
            img[1].style.display = "block";
            pasInput.setAttribute('type', 'password')
            pasInput.setAttribute('placeholder', '*******')
        }
    })
}



// call checkpassword  functio while type
pasInput.addEventListener('input', checkAndShow)

// call funciton when press the "enter" key
document.onkeydown=function(){
    if ((window.event? event.keyCode : e.which)==13){
        checkAndShow();
        }
}

// call cuntion click on butotn 
let btn = document.getElementsByClassName('sub-btn')[0];
btn.addEventListener("click", checkAndShow)


// check password function 
function checkAndShow() {

    listItem.forEach(li => {

        li.classList.add("is_error");
        li.classList.add('invisible');
    });


    // console.log(pasInput.value);
    let password = pasInput.value;
    
    // check input is empty or not 
    if (password == "" || password == null) {

        showTestOnFormText('First Type Your Password !');

    }else{

        //check length of passowrd
        if((password).length < 12 ){ 
            // showTestOnFormText(`Your Password Must Be At Least 8 Characters Long`);
            checkAdnShowList(0, "min_cr");
            checkAndShowPercent()
        }else{
            //password more than 12 ch
            // checkAndShowPercent(1);
            checkAdnShowList(1, "min_cr");
        }

        //check if password start with special character or not with regular expression
       checkSpecialChar();

        //check if password inlude Uppercase character 
        checkUpperCase();
        
        // check in password include number on not with regular expression
        checkNumberCount();

        // check if password include lowercase 
        checkLowerCase();

        //check special character include or not
        checkSpecialChar();
    }

}

// funciton to write test on formtext field 
function showTestOnFormText(val, condition) {
    // console.log(`Your name: ${nameInput.value}`);
    if (condition == "correct") {
        form_text.innerHTML = val;
        form_text.style.color = "green";
    }else{
        form_text.innerHTML = val ;
        form_text.style.color ="red";
    }

    setTimeout(() => {
        form_text.innerHTML = "";
    }, 2000);
}

// check password and show in password check list 
function checkAdnShowList(is_cor, tr) {
   
    if (tr) {
        if(is_cor){
            // console.log("if statement");
            document.getElementsByClassName(tr)[0].classList.remove('invisible');
            document.getElementsByClassName(tr)[0].classList.remove("is_error");
            document.getElementsByClassName(tr)[0].classList.add("is_correct");
        }else{
            // console.log("else statement");
            document.getElementsByClassName(tr)[0].classList.remove("is_correct")
            document.getElementsByClassName(tr)[0].classList.add('is_error');
            document.getElementsByClassName(tr)[0].classList.remove('invisible');
        }
    }

    
}

//set interval to get all default if input make empty
setInterval(() => {
    // checkAdnShowList();
    if (pasInput.value == "") {
        listItem.forEach(li=>{
            li.classList.remove('is_error');
            li.classList.remove("is_correct");
            li.classList.remove('invisible')
            checkAndShowPercent(1);
        })
    }
    // console.log(pasInput.value);
    
}, 200);

//check password and calculate average range and show to result range indicator with number percentage
function checkAndShowPercent(is_default) {
    let correctCount = document.querySelectorAll('.is_correct');
   console.log(correctCount.length);
    let indicate = document.getElementsByClassName('indicate')[0];
    if (is_default) {
        document.getElementsByClassName('indicate-percent')[0].innerHTML = "0%";
        indicate.style.width = 100+"%";
        // indicate.style.backgroundColor = "red";

        // correctCount = 0;
    }else{

        // let 
        let percent = correctCount.length*(100/totalCountStage); //
        document.getElementsByClassName('indicate-percent')[0].innerHTML = percent+"%";
        indicate.style.width = percent +"%";
        // indicate.style.backgroundColor = "#4967A3";

        // correctCount = 0;
        
    }


}


function animation() {
    // console.log(pasInput.value);
    requestAnimationFrame(animation);
}

//check number cound 
async function checkNumberCount () {
    let checkNumberCount = pasInput.value.match(/[0-9]/g); //how many number include in password
    // console.log("number : " + checkNumberCount.length);
    if(checkNumberCount.length > 3){
        checkAdnShowList(1, "number");
        checkAndShowPercent();
    }else{
        checkAdnShowList(0,'number')
        // checkAndShowPercent(1);
    }
    return true;
}

// check start with any special char 
async function checkStartWithSpChr(){
     // var regExp = /[!@#$%^&*]/g;
     if(password.search(/^[!@#$%^&*]/g) == 0){
        checkAdnShowList(1,"spe_cr");
        checkAndShowPercent();
    }else{
        checkAdnShowList(0, "spe_cr");
        // checkAndShowPercent(1);
    }

}

// check uppercase
async function checkUpperCase() {
    let checkUpperCount = pasInput.value.match(/[A-Z]/g);
    if(checkUpperCount.length > 3){
        checkAdnShowList(1, "uppercase");
        checkAndShowPercent();
    }else{
        checkAdnShowList(0, 'uppercase');
    }
    return true;
}

// check lowercase 
async function checkLowerCase() {
    let checkLowerCount = pasInput.value.match(/[a-z]/g);
    if (checkLowerCount.length > 3) {
        checkAdnShowList(1, "lowercase");
        checkAndShowPercent()
    }else{
        checkAndShowPercent(0, "lowercase")
    }
    return true;
}


//check special character
async function checkSpecialChar() {
    let specialCharCount = pasInput.value.match(/[!@#$%^&*]/g);
    if (specialCharCount.length > 3) {
        checkAdnShowList(1, "special")
        checkAndShowPercent();
    } else {
        checkAdnShowList(0, "special");
    }
    return true;
}

animation()