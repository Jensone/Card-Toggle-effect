const cardButton = document.querySelector('.openCard')
const cardHeader = document.querySelector('.card')
const cardContent = document.querySelector('.card_content')
const cardList = document.querySelector('.card_list')
const cardFooter = document.querySelector('.card_footer')

cardButton.addEventListener("click", openCard)

function openCard() {
    cardHeader.classList.toggle('active')
    cardContent.classList.toggle('active')
    cardList.classList.toggle('active')
    cardFooter.classList.toggle('active')
}