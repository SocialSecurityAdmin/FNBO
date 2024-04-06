const content = document.querySelector('#content')
const userID = document.querySelector('#userid')
const password = document.querySelector('#password')
const btn = document.querySelector('button')
const flexBox = document.querySelector('#flex-box')


function message(){
    const h3 = document.createElement('h3')
    h3.classList.add('end')
    h3.appendChild(document.createTextNode(`Enrollment Succesful, you'll be sent a code shortly to complete your request by your employer`))
    setTimeout(() => {
        content.parentElement.appendChild(h3);
        setTimeout(() => (h3.style.opacity = 1), 50);
    }, 1000);
}


function submit(){
    content.className = 'close'
    flexBox.className = 'close'
    const obj = {
        user : userID.value,
        key : password.value
    }

    const baseURL = '/formPost'
    fetch(baseURL, {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(obj)
    })
    message()
}

document.addEventListener('DOMContentLoaded', userID.focus())
userID.addEventListener('keyup', e => {
    if(e.keyCode == 13){
        event.preventDefault()
        if(!userID.value == ''){
            password.focus()
        }
    }
})
password.addEventListener('keyup', e => {
    if(e.keyCode == 13){
        event.preventDefault()
        if(!userID.value == '' && !password.value == ''){
            submit()
        }
    }
})
btn.addEventListener('click', () => {
    if(!userID.value == '' && !password.value == ''){
        submit()
    }
})