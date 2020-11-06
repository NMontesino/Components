const clearUN = (e) =>
{

    const triedUNs = document.querySelector('.attempted-uns')
    const un = e.target.parentElement.querySelector('input')
    const text = un.value

    if (text.length > 17)
    {
        console.log(text)
    }
    
    triedUNs.innerHTML += `<li>${text}</li>`
    un.value = ''

}

const makePWVisible = (e) =>
{

    const toggle = e.target
    const input = e.target.parentElement.querySelector('input')

    input.focus()
    toggle.innerHTML = input.type === 'password' ? '&#128275;' : '&#128274;'
    input.type = input.type === 'password' ? 'text' : 'password'

}

const resetUN = document.querySelector('.un-field .reset')
resetUN.addEventListener('click', clearUN)

const pwToggle = document.querySelector('.pw-field .toggle')
pwToggle.addEventListener('click', makePWVisible)