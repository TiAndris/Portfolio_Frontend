var flashcardPopup = document.getElementById('flashcardPopup');
var closeBtn = document.getElementById('closePopup');
var openFlashcard = document.getElementById('open-flashcards');
var openVirtualPiano = document.getElementById('open-virtual-piano');
var menu = document.querySelector('.hamburger');
var icon = document.getElementById('hamburger-icon');



// Open the popup
openFlashcard.addEventListener('click', function () {
    flashcardPopup.style.display = 'flex';

});
openVirtualPiano.addEventListener('click', function () {
    flashcardPopup.style.display = 'flex';
})

// Close the popup
closeBtn.onclick = function () {
    flashcardPopup.style.display = 'none';
}


function toggleMenu(){
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}



