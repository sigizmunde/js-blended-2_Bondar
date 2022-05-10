const refs = {
	form: document.querySelector(".js-form"),
	itemName: document.querySelector('[name="itemName"]'),
	itemLink: document.querySelector('[name="itemLink"]'),
	btn: document.querySelector(".submit"),
};
let deseases = [];

refs.form.addEventListener("submit", onFormSubmit);
refs.form.addEventListener("input", onFormInput);

function onFormInput(evt) {
	const inputName = evt.currentTarget.elements.itemName.value;
	const inputLink = evt.currentTarget.elements.itemLink.value;
	let data = inputName;
	data = {
		name: inputName,
		href: inputLink,
	};
	localStorage.setItem("tempData", JSON.stringify(data, null, 2));
}

function onFormSubmit(evt) {
	evt.preventDefault();
	let data = localStorage.getItem("deseases");
	if (data) {
		deseases = JSON.parse(data);
	}
	const form = evt.target;
	const formData = new FormData(form);
	const newData = {};
	formData.forEach((value, key) => {
		newData[key] = value;
	});
	const { itemName, itemLink } = newData;
	// const inputLink = evt.target.elements.itemLink.value;
	deseases = [...deseases, { name: itemName, href: itemLink }];
	localStorage.setItem("deseases", JSON.stringify(deseases));
}
//todo: при відправці форми очистити tempData та очистити поля форми
//todo: якщо щось є в tempData при перезавантаженні - заповнити форму
//todo: виводимо на сторінку deseases
//todo: переписати все в стилі ООП
