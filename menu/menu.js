/*
todo: 1)робимо посилання на DOM-елементи
todo: 2)пишемо функції та бізнес-логіку
todo: 3) вішаємо слухачі подій
*/

const deseases = [
	{ name: "plague", href: "https://en.wikipedia.org/wiki/Plague_(disease)" },
	{ name: "covid", href: "https://en.wikipedia.org/wiki/COVID-19" },
	{ name: "cancer", href: "https://en.wikipedia.org/wiki/Cancer" },
	{ name: "ebola", href: "https://en.wikipedia.org/wiki/Ebola" },
];

const refs = {
	root: document.querySelector("#root"),
	btn: document.querySelector(".js-button-menu"),
};

refs.list = document.createElement("ul");
refs.list.classList.add("js-menu", "show");

function createItem({ name: text, href }) {
	const li = document.createElement("li");
	const link = document.createElement("a");
	li.classList.add("js-menu-item");
	link.classList.add("js-menu-link");
	link.textContent = text;
	link.href = href;
	link.setAttribute("target", "_blank");
	link.setAttribute("rel", "noreferrer noopener nofollow");
	li.append(link);
	// console.log(li);
	return li;
}

function createMenu(menuItems, domElem) {
	const listItems = menuItems.map((item) => createItem(item));
	console.log(listItems);
	domElem.list.append(...listItems);
	domElem.root.append(domElem.list);
}

// refs.btn.addEventListener("click", () => createMenu(deseases, refs));
refs.btn.addEventListener("click", onBtnClick);

function onBtnClick(event) {
	console.log(event.target.textContent);
	const btnText = event.target.textContent;
	if (btnText === "Open") {
		createMenu(deseases, refs);
		event.target.textContent = "Close";
	} else {
		refs.root.innerHTML = "";
		refs.list.innerHTML = "";
		event.target.textContent = "Open";
	}
}

// createItem(deseases[0]);
// <ul>
// 	<li>
// 		<a href=""></a>
// 	</li>
// </ul>;

//todo: переписати в клас Menu
// class Epidemy {
// 	#deseases;
// 	constructor(deseases) {
// 		this.#deseases = deseases;
// 	}

// 	showEpidemies() {
// 		for (const desease of this.#deseases) {
// 			console.log(`name: ${desease.name}, link: ${desease.href}`);
// 		}
// 	}

// 	addEpidemy(newEpidemy) {
// 		this.#deseases = [...this.#deseases, newEpidemy];
// 	}

// 	updateEpidemy(name, newName) {
// 		for (const desease of this.#deseases) {
// 			if (desease.name === name) {
// 				desease.name = newName;
// 			} else {
// 				console.log(`desease ${name} not found`);
// 			}
// 		}
// 	}

// 	removeEpidemy(name) {
// 		for (const desease of this.#deseases) {
// 			if (desease.name === name) {
// 				const index = this.#deseases.indexOf(name);
// 				this.#deseases.splice(index, 1);
// 			}
// 		}
// 	}
// }

// console.log(deseases);
// const war = new Epidemy(deseases);
// war.addEpidemy({
// 	name: "russia",
// 	href: "https://russianembassyprotest.wordpress.com/2011/12/05/users-unite-around-the-globe-in-support-of-their-russian-peers/",
// });

// console.log(war);
