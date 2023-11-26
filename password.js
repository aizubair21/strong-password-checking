let img = document.getElementsByClassName("eye");
let pasInput = document.getElementById('password');
let form_text = document.getElementsByClassName('form_text')[0];
let listItem = document.querySelectorAll(".list_item");
const parcentIndicateElement = document.getElementsByClassName("indicate-percent")[0];
const generateBtn = document.getElementsByClassName('generate_btn')[0];
const settingBtn = document.getElementsByClassName("setting_btn")[0];
// const passwordBtn = document.getElementByI('setting_');
var symbols = '!@#$%^&*';
var numbers = '0123456789';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var char = "()_+{}:<>[]";
let totalCountStage = 8;
let passwordLength = 12;


img[0].style.display = "none"; //eye open hide by default

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', (event) => {

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
document.onkeydown = function () {
    if ((window.event ? event.keyCode : e.which) == 13) {
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

    } else {

        //check length of passowrd
        if ((password).length < 12) {
            // showTestOnFormText(`Your Password Must Be At Least 8 Characters Long`);
            checkAdnShowList(0, "min_cr");
            checkAndShowPercent()
        } else {
            //password more than 12 ch
            // checkAndShowPercent(1);
            checkAdnShowList(1, "min_cr");
        }

        //check if password start with special character or not with regular expression
        // checkStartWithSpChr();
        if (password.search(/^[!@#$%^&*]/g) == 0) {
            checkAdnShowList(1, "spe_cr");
            checkAndShowPercent();
        } else {
            checkAdnShowList(0, "spe_cr");
            // checkAndShowPercent(1);
        }

        //check if password inlude Uppercase character 
        checkUpperCase();

        // check in password include number on not with regular expression
        checkNumberCount();

        // check if password include lowercase 
        checkLowerCase();

        //check special character include or not
        checkSpecialChar();

        //check if white space include 
        checkWhiteSpace();
    }

    if (pasInput.value == "") {
        listItem.forEach(li => {
            li.classList.remove('is_error');
            li.classList.remove("is_correct");
            li.classList.remove('invisible')
            checkAndShowPercent(1);
        })
    }

}

// funciton to write test on formtext field 
function showTestOnFormText(val, condition) {
    // console.log(`Your name: ${nameInput.value}`);
    if (condition == "correct") {
        form_text.innerHTML = val;
        form_text.style.color = "green";
    } else {
        form_text.innerHTML = val;
        form_text.style.color = "red";
    }

    setTimeout(() => {
        form_text.innerHTML = "";
    }, 2000);
}

// check password and show in password check list 
function checkAdnShowList(is_cor, tr) {

    if (tr) {
        if (is_cor) {
            // console.log("if statement");
            document.getElementsByClassName(tr)[0].classList.remove('invisible');
            document.getElementsByClassName(tr)[0].classList.remove("is_error");
            document.getElementsByClassName(tr)[0].classList.add("is_correct");
        } else {
            // console.log("else statement");
            document.getElementsByClassName(tr)[0].classList.remove("is_correct")
            document.getElementsByClassName(tr)[0].classList.add('is_error');
            document.getElementsByClassName(tr)[0].classList.remove('invisible');
        }
    }


}

//set interval to get all default if input make empty
// setInterval(() => {
//     // checkAdnShowList();
//     if (pasInput.value == "") {
//         listItem.forEach(li=>{
//             li.classList.remove('is_error');
//             li.classList.remove("is_correct");
//             li.classList.remove('invisible')
//             checkAndShowPercent(1);
//         })
//     }
//     // console.log(pasInput.value);

// }, 1000);

//check password and calculate average range and show to result range indicator with number percentage
function checkAndShowPercent(is_default) {
    let correctCount = document.querySelectorAll('.is_correct');
    console.log(correctCount.length);

    let indicate = document.getElementsByClassName('indicate')[0];
    if (is_default) {
        parcentIndicateElement.style.opacity = 0;
        // indicate.style.backgroundColor = "red";

        // correctCount = 0;
    } else {

        // let 
        let percent = correctCount.length * (100 / totalCountStage); //
        parcentIndicateElement.style.opacity = 1;
        parcentIndicateElement.innerHTML = percent + "%";
        indicate.style.width = percent + "%";
        // indicate.style.backgroundColor = "#4967A3";

        // correctCount = 0;

    }


}


function animation() {
    // console.log(pasInput.value);
    requestAnimationFrame(animation);
}
// check start with any special char 
async function checkStartWithSpChr() {
    // var regExp = /[!@#$%^&*]/g;
    if (password.match(/^[!@#$%^&*]/g) == 0) {
        checkAdnShowList(1, "spe_cr");
        checkAndShowPercent();
    } else {
        checkAdnShowList(0, "spe_cr");
        // checkAndShowPercent(1);
    }

}

//check number cound 
async function checkNumberCount() {
    let checkNumberCount = pasInput.value.match(/[0-9]/g); //how many number include in password
    // console.log("number : " + checkNumberCount.length);
    if (checkNumberCount.length > 3) {
        checkAdnShowList(1, "number");
        checkAndShowPercent();
    } else {
        checkAdnShowList(0, 'number')
        // checkAndShowPercent(1);
    }
    return true;
}

// check uppercase
async function checkUpperCase() {
    let checkUpperCount = pasInput.value.match(/[A-Z]/g);
    if (checkUpperCount.length > 3) {
        checkAdnShowList(1, "uppercase");
        checkAndShowPercent();
    } else {
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
    } else {
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

//check if include white space 
async function checkWhiteSpace() {
    var regex = /\s/g;
    if ((pasInput.value).match(regex)) {
        checkAdnShowList(0, "space");
        checkAndShowPercent();
    } else {
        checkAdnShowList(1, "space");
    }
    return true;
}



//check password start with special charcater
animation()


//function for show generate password box
generateBtn.addEventListener('click', () => {

    const passwordWrapperElement = document.getElementById('generate_wrapper');

    if (passwordWrapperElement.classList.contains('password_active')) {
        passwordWrapperElement.classList.remove('password_active')
    } else {
        passwordWrapperElement.classList.add('password_active')
    }
    createPassword();


    // const passLength = document.getElementById("passLength").value;
    // const hasNumber = document.getElementById("hasNumber").checked;
    // const hasSymbols = document.getElementById("hasSymbols").checked;
    // const hasVowels = document.getElementById("hasVowels").checked;
    // const hasConsonants = document.getElementById("hasConsonants").checked;
    // const isCapitalLetter = document.getElementById("isCapitalLetter").checked;
    // const isSmallLetter = document.getElementById("isSmallLetter").checked;
    // const isDigit = document.getElementById("isDigit").checked;
    // const isSpecialCharacter = document.getElementById("isSpecialCharacter").checked;
    // console.log({
    //     passLength: passLength,
    // hasNumber: hasNumber,
    // hasSymbols: hasSymbols,
    // hasVowels: hasVowels,
    // hasConsonants: hasConsonants,
    // isCapitalLetter: isCapitalLetter,
    // isSmallLetter: isSmallLetter,
    // isDigit: isDigit,
    // isSpecialCharacter: isSpecialCharacter
    // })
    // createPassword(passLength, hasNumber, hasSymbols, hasVowels, hasConsonants, isCapitalLetter,
    //     isSmallLetter, isDigit, isSpecialCharacter);
})


//generate password
function createPassword() {
    passwordLength = passSlider.value;
    // let password = '';


    // var vwls = 'aeiou';
    // var consonant = 'bcdfghjklmnpqrstvwxyz';
    // // console.log(passwordLength);
    // let creator = ['symbols', 'uppercase', 'char', 'numbers', 'lowercase'];

    //randomized 'creator' value, where must start with 'symbols', minimum 3 'uppercase','lowercase', 'numbers', and minimum 2 'char'. but this requirement associated with 'passwordLength'



    // for (let i = 0; i < 20; i++) {
    //     var randomCreator = Math.floor(Math.random() * creator.length);
    //     if (creator[randomCreator] == 'symbols') {
    //         password += symbols[Math.floor(Math.random() * symbols.length)];
    //     } else if (creator[randomCreator] == 'uppercase') {
    //         password += uppercase[Math.floor(Math.random() * uppercase.length)];
    //     } else if (creator[randomCreator] == 'char') {
    //         password += char[Math.floor(Math.random() * char.length)];
    //     } else if (creator[randomCreator] == 'numbers') {
    //         password += numbers[Math.floor(Math.random() * numbers.length)];
    //     } else if (creator[randomCreator] == 'lowercase') {
    //         password += lowercase[Math.floor(Math.random() * lowercase.length)];
    //     }
    // };
    // console.log(password);



    // var all = [symbols, uppercase, uppercase, numbers, char, lowercase, numbers, numbers];
    // var all = [uppercase];

    /*if (spclChr && !numb && !symbl && !capLttr && !smllL && !dgt && !cnsnt) {
        alert('Please select at least one checkbox');
        return false;
    } else {
        var password = '';
        // password += symbols[Math.floor(Math.random() * symbols.length)]
        for (var i = 0;;) {
            if (i >= all.length - 1) {
                i = 0;
            }
            if (password.length > passwordLength) {
                break;
            }
            // pasInput = creator[i].length;
            var guessCreator = Math.floor(Math.random() * all[i].length);
            // console.log("index : " + i + " & guess : " + all[i][guessCreator]);
            password += all[i][guessCreator];

            i++;
            // console.log(randomNumber);
            // password += all[randomNumber];
        }
        // resultBox.innerHTML = '<h3>Generated Password</h3><p>' + password + '</p>';
        
        // copyToClipboard();
        
    }*/
    document.getElementsByClassName('password_display')[0].value = generatePassword(passwordLength, {
        upper: true,
        lower: true,
        number: true,
        special: false,
        symbol: false,
    });
}

/*
 * function to determided which character include in password
 * 
 */
function determinedIncludedCharacter() {

}

//open setting wrapper by clicking setting button
settingBtn.addEventListener("click", () => {
    const settingsWrappwer = document.getElementById("settings_wrapper");
    // settingsWrappwer.classList.toggle("setting_active");

    if (settingsWrappwer.classList.contains('setting_active')) {
        settingsWrappwer.classList.remove("setting_active")
    } else {
        settingsWrappwer.classList.add("setting_active")
    }
})


// funciton for copy password to clipboard 
function copyPassword() {
    //copy the 'password_display' class list input value
    let copyTextarea = document.querySelector('.password_display');
    if (copyTextarea.value == "") {
        copyTextarea.style.disabled = "true";
    } else {
        copyTextarea.select();
        document.execCommand("Copy");
        alert("Copied to clipboard: " + copyTextarea.value);
    }
    // console.log(password);
}

//password range slider
const passSlider = document.getElementsByClassName('PB-range-slider')[0];
passSlider.addEventListener('input', (e) => {
    passwordLength = e.target.value;
    document.getElementsByClassName('PB-range-slidervalue')[0].innerHTML = passwordLength;
    createPassword();
})


//BlackBox ai code
// function generatePassword(passwordLength) {
//     const minUpper = 3;
//     const minLower = 3;
//     const minNumber = 3;
//     const minSpecial = 3;

//     const upper = getRandomChars('ABCDEFGHIJKLMNOPQRSTUVWXYZ', minUpper);
//     const lower = getRandomChars('abcdefghijklmnopqrstuvwxyz', minLower);
//     const numbers = getRandomChars('0123456789', minNumber);
//     const special = getRandomChars('!@#$%^&*()', minSpecial);

//     const allChars = upper.concat(lower, numbers, special);
//     // return allChars;
//     shuffleArray(allChars);
//     let password = '';
//     for (let i = 0; i < passwordLength; i++) {
//         password += allChars[i];
//     }

//     return password;
// }
// console.log(generatePassword(12));

// function getRandomChars(charSet, minCount) {
//     const result = [];
//     for (let i = 0; i < minCount; i++) {
//         const index = Math.floor(Math.random() * charSet.length);
//         result.push(charSet[index]);
//     }
//     return result;
// }

// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }

/**
 * bellow function make fixe inmbination of element
 */
// function generatePassword(passwordLength) {
//     const minUpper = Math.ceil(passwordLength * 0.33);
//     const minLower = Math.ceil(passwordLength * 0.33);
//     const minNumber = Math.ceil(passwordLength * 0.33);
//     const minSpecial = Math.floor(passwordLength * 0.33);

//     const upper = getRandomChars('ABCDEFGHIJKLMNOPQRSTUVWXYZ', minUpper);
//     const lower = getRandomChars('abcdefghijklmnopqrstuvwxyz', minLower);
//     const numbers = getRandomChars('0123456789', minNumber);
//     const special = getRandomChars('!@#$%^&*()', minSpecial);
//     const allChars = '';
//     included.forEach(ic => {
//         switch (ic) {
//             case 'upper':
//                 allChars.concat(upper);
//                 break;
//             case 'lower':
//                 allChars.concat(lower);
//                 break;
//             case 'numbers':
//                 allChars.concat(numbers);
//                 break;
//             case 'special':
//                 allChars.concat(special)
//                 break;
//         }
//     });
//     shuffleArray(allChars);

//     let password = '';
//     for (let i = 0; i < passwordLength; i++) {
//         password += allChars[i];
//     }

//     return password;
// }
// console.log(generatePassword(15));

// function getRandomChars(charSet, minCount) {
//     const result = [];
//     for (let i = 0; i < minCount; i++) {
//         const index = Math.floor(Math.random() * charSet.length);
//         result.push(charSet[index]);
//     }
//     return result;
// }

// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }


function generatePassword(passwordLength, options) {
    // options = options || {};
    const upper = options.upper;
    const lower = options.lower;
    const number = options.number;
    const special = options.special;
    const symbol = options.symbol;

    let minUpper = 0;
    let minLower = 0;
    let minNumber = 0;
    let minSpecial = 0;
    let minSymbols = 0;

    if (upper) minUpper = Math.ceil(passwordLength * 0.25);
    if (lower) minLower = Math.ceil(passwordLength * 0.25);
    if (number) minNumber = Math.ceil(passwordLength * 0.25);
    if (special) minSpecial = Math.floor(passwordLength * 0.25);
    if (symbol) minSymbols = Math.floor(passwordLength * 0.25);

    // console.log(minUpper, minLower, minNumber, minSpecial);
    // console.log(options);

    const result = [];
    if (upper) result.push(getRandomChars(uppercase, minUpper, upper));
    if (lower) result.push(getRandomChars(lowercase, minLower, lower));
    if (number) result.push(getRandomChars(numbers, minNumber, number));
    if (special) result.push(getRandomChars(char, minSpecial, special));
    if (symbol) result.push(getRandomChars(symbols, minSymbols, symbol));

    const allChars = result.flat();
    shuffleArray(allChars);

    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        password += allChars[i];
    }

    return password;
}

function getRandomChars(charSet, minCount, include) {
    const result = [];
    for (let i = 0; i < minCount; i++) {
        const index = Math.floor(Math.random() * charSet.length);
        result.push(charSet[index]);
    }

    if (!include) return result;

    const remaining = passwordLength - minCount;
    for (let i = 0; i < remaining; i++) {
        const index = Math.floor(Math.random() * charSet.length);
        result.push(charSet[index]);
    }

    return result;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
// console.log();