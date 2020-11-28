import 'izimodal';

$("#modal").iziModal({
	width: 440,
	radius: 10
});

let popup = $('.popup'),
	openModal = $('.open-modal'),
	closePopup = $('.close-popup');

openModal.on('click', () => {
	popup.addClass('popup-close')
});

closePopup.on('click', () => {
	popup.addClass('popup-close')
});