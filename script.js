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
    document.querySelector('.info').style.opacity = '0'
    hideArr.forEach((e) => {e.style.opacity = '0';})
    setTimeout(() => {
        document.querySelector('.info').style.display = 'none'
        hideArr.forEach((e) => {e.style.display = 'none'})
        key = e.keyCode
        checkCode();
        console.log(`Zwracam ${actKey} z kodem ${actCode}`);
        createElement()
    }, 300)}
})