import * as tools from './tools.js';

const buttonSelectElem = document.querySelector('.buttonSelect');
const availableAreaElem = document.querySelector('.availableArea');
const selectedNamesElem = document.querySelector('.selectedNames');
const currentNameElem = document.querySelector('.currentName');

const originalNames = ['Marco', 'Luka', 'Jonas', 'Lena', 'Emma', 'Leah'];
let availableNames = [...originalNames];

const refillAvailableNames = () => {
	availableAreaElem.innerHTML = '';
	availableNames.forEach((name) => {
		const availableItemElem = document.createElement('div');
		availableItemElem.innerText = name;
		availableItemElem.classList.add('availableName');
		availableAreaElem.appendChild(availableItemElem);
	});
};

const resetAppState = () => {
	availableNames = [...originalNames];
	refillAvailableNames();
	selectedNamesElem.innerHTML = '';
};

buttonSelectElem.onclick = () => {
	const currentName = tools.removeRandomItemFromArray(availableNames);

	refillAvailableNames();

	// add name to selected names
	const formerCurrentName = currentNameElem.innerText;
	if (formerCurrentName !== '') {
		const selectedItemElem = document.createElement('div');
		selectedItemElem.innerText = formerCurrentName;
		selectedItemElem.classList.add('selectedName');
		selectedNamesElem.appendChild(selectedItemElem);
	}

	// handle non-select buttons
	if (availableNames.length === 0 && buttonSelectElem.innerText == 'Select') {
		buttonSelectElem.innerText = 'Finish';
		buttonSelectElem.style.backgroundColor = '#777';
		buttonSelectElem.style.borderRadius = '3px';
	}
	if (currentName === null) {
		if (buttonSelectElem.innerText === 'Finish') {
			currentNameElem.innerText = '';
			currentNameElem.style.display = 'none';
			buttonSelectElem.innerText = 'RESET';
		} else if (buttonSelectElem.innerText === 'RESET') {
			buttonSelectElem.innerText = 'Select';
			availableNames = [...originalNames];
			resetAppState();
		}
	} else {
		currentNameElem.innerText = currentName;
		currentNameElem.style.display = 'block';
	}
};

resetAppState();