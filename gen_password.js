let isupper = {
    upper: true
};
let islower = {
    lower: true
};
let isnumber = {
    number: true
};
let issymbol = {
    symbol: true
};
let ischar = {
    char: true
};
let pasIncludeObj = {
    upper: true,
    lower: true,
    number: true,
    symbol: true,
    char: true
};

// pasIncludeObj = Object.assign(pasIncludeObj, isupper);
// pasIncludeObj = Object.assign(pasIncludeObj, islower);
// pasIncludeObj = Object.assign(pasIncludeObj, isnumber);
// pasIncludeObj = Object.assign(pasIncludeObj, issymbol);
// pasIncludeObj = Object.assign(pasIncludeObj, ischar);

// console.log(pasIncludeObj);
// const passwordBtn = document.getElementByI('setting_');
var symbols = '!@#$%^&*';
var numbers = '0123456789';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var char = "()_+{}:<>[]";

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
    document.getElementsByClassName('password_display')[0].value = generatePassword(passwordLength, pasIncludeObj);
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



let incPac = document.querySelectorAll('.incPasitm');
incPac.forEach((incpi, index) => {
    incpi.addEventListener('input', function (e) {
        pasIncludeObj = {};
        val = this.value;
        condition = e.target.checked;
        // console.log(this.value + " : " + condition);
        switch (this.value) {
            case "upper":
                isupper = {
                    upper: condition
                };
                console.log(isupper);
                break;

            case "lower":
                islower = {
                    lower: condition
                };
                break;

            case "number":
                isnumber = {
                    number: condition
                };
                break;

            case "symbol":
                issymbol = {
                    symbol: condition
                };
                break;

            case "char":
                ischar = {
                    char: condition
                };
                break;

        }
        pasIncludeObj = Object.assign(pasIncludeObj, isupper);
        pasIncludeObj = Object.assign(pasIncludeObj, islower);
        pasIncludeObj = Object.assign(pasIncludeObj, isnumber);
        pasIncludeObj = Object.assign(pasIncludeObj, issymbol);
        pasIncludeObj = Object.assign(pasIncludeObj, ischar);
        // console.log(pasIncludeObj);
    })

})