function createModal (){
    const section = document.createElement('section')
    const form = document.createElement('form')
    const divHeader = document.createElement('div')
    const title = document.createElement('h2')
    const btnClose = document.createElement('button')
    const divDescription = document.createElement('div')
    const pDescription = document.createElement('p')
    const labelEmail = document.createElement('label')
    const inputEmail = document.createElement('input')
    const btnRecPassword = document.createElement('button')

    section.classList.add('container__modal')
    form.classList.add('modal__form')
    divHeader.classList.add('modal__header')
    title.classList.add('modal__title')
    btnClose.classList.add('modal__btn--close')
    divDescription.classList.add('modal__description--border')
    pDescription.classList.add('modal__description')
    labelEmail.classList.add('modal__label')
    inputEmail.classList.add('modal__input')
    btnRecPassword.classList.add('modal__btn--rec')

    title.innerText = 'Recuperação de senha'
    btnClose.innerText = 'x'
    btnClose.id = 'btnClose'
    pDescription.innerText = 'Digite uma conta de e-mail válida para a recuperação de sua senha.'
    labelEmail.htmlFor = 'modal__email'
    labelEmail.innerText = 'E-mail'
    inputEmail.name = 'modal__email'
    inputEmail.type = 'email'
    inputEmail.id = 'modal__email'
    inputEmail.value = ''
    inputEmail.placeholder = 'Digite o seu e-mail'
    inputEmail.required

    btnRecPassword.type = 'submit'
    btnRecPassword.id = 'btnRecPassword'
    btnRecPassword.innerText = 'Recuperar senha'

    divHeader.append(title, btnClose)
    divDescription.appendChild(pDescription)

    form.append(divHeader, divDescription, labelEmail, inputEmail, btnRecPassword)

    section.appendChild(form)
   
    return section
}
// createModal()

function showRecuperationPassModal (){
    const main = document.querySelector('main')
    const recuperationPassword = document.querySelector('#recPassword')

    recuperationPassword.addEventListener('click', () => {
        const modalRecPassaword = createModal()

        main.appendChild(modalRecPassaword)
    })
}

function closeRecuperationPassModal (){
    const modalContainer = document.querySelector('.container__modal')
    const modalClose = document.querySelector('#btnClose')

    modalClose.addEventListener('click', () => {
        modalContainer.remove()
    })
}

showRecuperationPassModal ()