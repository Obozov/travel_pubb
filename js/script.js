
var dialog = document.getElementById("dialog");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var openDialogButton = document.getElementById("open-dialog");

function showDialog() {
	dialog.style.display = "block";
}

function hideDialog() {
	dialog.style.display = "none";
}

function onButton1Click() {

	hideDialog();
}

function onButton2Click() {

	hideDialog();
}

button1.addEventListener("click", onButton1Click);
button2.addEventListener("click", onButton2Click);
openDialogButton.addEventListener("click", showDialog);





const tabs = document.querySelectorAll('.tab');
const items = document.querySelectorAll('.item');


tabs.forEach(tab => {
	tab.addEventListener('click', () => {

		tabs.forEach(tab => {
			tab.classList.remove('activedep');
		});


		tab.classList.add('activedep');


		const filter = tab.getAttribute('data-filter');


		items.forEach(item => {
			if (filter === 'all' || item.getAttribute('data-status') === filter) {
				item.style.display = '';
			} else {
				item.style.display = 'none';
			}
		});
	});
});








function setPeriod(period) {
	const currencySymbol = document.getElementById("currency-symbol");
	switch (period) {
		case 'RUB':
			currencySymbol.textContent = '₽';
			break;
		case 'EUR':
			currencySymbol.textContent = '€';
			break;
		case 'UAH':
			currencySymbol.textContent = '₴';
			break;
		case 'USD':
			currencySymbol.textContent = '$';
			break;
		default:
			currencySymbol.textContent = '$';
	}
	document.getElementById("period-btn2").innerHTML = period;
}
function settPeriod(period) {
	const currencySymbol = document.getElementById("currency-symbol");
	selectedCurrency=period;
	document.getElementById("period-btn").innerHTML = period;
}
document.getElementById("currency-symbol").innerHTML = selectedCurrency;

function setttPeriod(period) {
	const currencySymbol = document.getElementById("currency-symbol2");

	document.getElementById("period-btn3").innerHTML = period;
}




const images = [
	"images/ban-01.jpg",
	"images/ban-02.jpg",
	"images/ban-05.jpg",
	"images/ban-03.jpg",
	"images/ban-04.jpg",
];

let currentIndex = 0;

function changeImage() {
	const slider = document.getElementById("sliderr");
	const image = slider.querySelector("img");
	currentIndex++;
	if (currentIndex >= images.length) {
		currentIndex = 0;
	}
	image.src = images[currentIndex];
}

setInterval(changeImage, 10000);































