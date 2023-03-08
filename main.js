const cardButton = document.querySelector('.openCard')
const cardGlobal = document.querySelector('.card')
const cardHeader = document.querySelector('.card_header')
const cardContent = document.querySelector('.card_content')
const cardList = document.querySelector('.card_list')
const cardFooter = document.querySelector('.card_footer')

// Ajout pour l'image et le nom

const cardImage = document.querySelector('.card_header_image')
const cardUser = document.querySelector('.card_header_user')




cardButton.addEventListener("click", openCard)

function openCard() {
    cardGlobal.classList.toggle('active')
    cardHeader.classList.toggle('active')
    cardUser.classList.toggle('active')
    cardContent.classList.toggle('active')
    cardList.classList.toggle('active')
    cardFooter.classList.toggle('active')
    cardImage.classList.toggle('active')
}