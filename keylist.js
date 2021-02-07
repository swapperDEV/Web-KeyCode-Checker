let search;
search = document.createElement('input')
search.placeholder = 'Filter key name'
search.addEventListener('keyup', () => {
    console.log(`Szukam ${search.value}`);
    const tableArr = document.querySelectorAll('p')
    const tableFullArr = Array.from(tableArr);
    tableFullArr.forEach((e) => {
        if(e.textContent.toUpperCase().includes(search.value) || e.textContent.toLowerCase().includes(search.value)) {
            console.log('.. zawiera');
            e.style.display = 'block'
        }
        else {
            e.style.display = 'none'
        }
    })
})

const archiveArr = [
    '8 - BackSpace',
    '9 - Tab',
    '12 - Clear',
    '13 - Enter',
    '16 - Shift',
    '17 - ctrl',
    '18 - alt',
    '19 - pause',
    '20 - caps lock',
    '32 - spacebar',
    '33 - pageup',
    '34 - pagedown',
    '35 - end',
    '36 - home',
    '37 - left arrow',
    '38 - up arrow',
    '39 - right arrow',
    '40 - down arrow',
    '42 - print',
    '43 - exec',
    '44 - prnt screen',
    '45 - insert',
    '46 - delete',
    '47 - help',
    '48 - num0',
    '49 - num1',
    '50 - num2',
    '51 - num3',
    '52 - num4',
    '53 - num5',
    '54 - num6',
    '55 - num7',
    '56 - num8',
    '57 - num9',
    '58 - :',
    '60 - <',
    '64 - @',
    '65 - a',
    '66 - b',
    '67 - c',
    '68 - d',
    '69 - e',
    '70 - f',
    '71 - g',
    '72 - h',
    '73 - i',
    '74 - j',
    '75 - k',
    '76 - l',
    '77 - m',
    '78 - n',
    '79 - o',
    '80 - p',
    '81 - q',
    '82 - r',
    '83 - s',
    '84 - t',
    '85 - u',
    '86 - v',
    '87 - w',
    '88 - x',
    '89 - y',
    '90 - z',
    '91 - win key',
    '93 - win key',
    '95 - sleep',
    '96 - num 0',
    '97 - num 1',
    '98 - num 2',
    '99 - num 3',
    '100 - num 4',
    '101 - num 5',
    '102 - num 6',
    '103 - num 7',
    '104 - num 8',
    '105 - num 9',
    '112 - f1',
    '113 - f2',
    '114 - f3',
    '115 - f4',
    '116 - f5',
    '117 - f6',
    '118 - f7',
    '119 - f8',
    '120 - f9',
    '121 - f10',
    '122 - f11',
    '123 - f12',
    // NOT END!

]
const listOfKeys = () => {
    if(keylistse === true) {
    const table = document.querySelector('section')
    search.classList.add('search')
    table.appendChild(search)
    archiveArr.forEach((e) => {
        const elem = document.createElement('p')
        elem.textContent = e
        elem.classList.add('tables')
        table.appendChild(elem)
        keylistse = false
    })}
    else {
        console.log('stop it');
    }
}

const btnList = document.querySelector('.keylist')
btnList.addEventListener('click', () => {
    checkingKeys = false;
    const toHides = document.querySelectorAll('.hhide')
    const hideArrs = Array.from(toHides);
    document.querySelector('.info').style.opacity = '0'
    hideArrs.forEach((e) => {e.style.opacity = '0';})
    setTimeout(() => {
        document.querySelector('.info').style.display = 'none'
        hideArrs.forEach((e) => {e.style.display = 'none'})
        listOfKeys()
    }, 300)
})