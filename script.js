let keylistse = true;
let checkingKeys = true;
const createElement = () => {
    const table = document.querySelector('section')
    const keyName = document.createElement('b')
    keyName.textContent = actKey;
    const keyCodes = document.createElement('p')
    keyCodes.textContent = `Code: ${actCode}`;
    table.appendChild(keyName)
    table.appendChild(keyCodes)

}

document.addEventListener('keydown', (e) => {
    if(checkingKeys === true) {
    const toHide = document.querySelectorAll('.hhide')
    const hideArr = Array.from(toHide);
    if(document.querySelector('.info') != null) {
        document.querySelector('.info').style.opacity = '0'
    }
    hideArr.forEach((e) => {e.style.opacity = '0';})
    setTimeout(() => {
        if(document.querySelector('.info') != null) {
        document.querySelector('.info').style.display = 'none'}
        hideArr.forEach((e) => {e.style.display = 'none'})
        key = e.keyCode
        checkCode();
        console.log(`Zwracam ${actKey} z kodem ${actCode}`);
        document.querySelector('.clear').style.opacity = '1'
        createElement()
    }, 300)}
})
document.querySelector('.clear').style.opacity = '0'
document.querySelector('.clear').addEventListener('click', () => {
    const remTable = document.querySelectorAll('b')
    const remTable2 = document.querySelectorAll('p')
    const remTableFull = Array.from(remTable)
    const remTableFull2 = Array.from(remTable2)
    remTableFull.forEach((e) => {
        e.remove()
    })
    remTableFull2.forEach((e) => {
        e.remove()
    })
})