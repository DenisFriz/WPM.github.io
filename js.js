let countErr = 0;
const keys = document.querySelectorAll('.key');

const dataAttribute = Array.from(keys).map(item => item.getAttribute('data-code'));

document.addEventListener('keydown', pressKey);
const err = document.querySelector('.error-count');


function pressKey(event) { 
    if(!lose.classList.contains('hidden')) {
        return false;
    } else {
        const textUser = document.querySelector('.text-user');
        let str = textUser.textContent;
    
        for(let index = 0; index < keys.length; index++) {
            if(dataAttribute[index] == event.code ) {
                checkKey(str, keys[index].textContent, textUser, index);
                break;
            }
        }
    }
}

function setClass(indx, setClass) {
    keys[indx].classList.add(setClass);
}
function removeClass(indx, removeClass) {
    keys[indx].classList.remove(removeClass);
}

function checkKey(str, key, textUser, index) { 
    let res = '';
    if(key == str[0].toLowerCase()) {
        res += str.slice(1);
        textUser.textContent = res;
        setTimeout(() => {
            removeClass(index, 'pressed');
        }, 800);
        setClass(index, 'pressed')
    } else {
        setClass(index, 'pressedError')
        setTimeout(() => {
            removeClass(index, 'pressedError');
        }, 1000);
        err.innerText = ++countErr;
        if(countErr > 15) {
            countErr = 0;
            err.innerText = countErr;
            lose.classList.remove('hidden');
        }
    }
}

const closeBtn = document.querySelector('.close'),
    acceptBtn = document.querySelector('.accept'),
    lose = document.querySelector('.lose');

closeBtn.addEventListener('click', closeErrEl);

acceptBtn.addEventListener('click', closeMenu);

function closeErrEl() {
    const parent = closeBtn.closest('.lose')
    parent.classList.toggle('hidden');
}
function closeMenu() { 
    const parent = closeBtn.closest('.lose')
    parent.classList.toggle('hidden');
}