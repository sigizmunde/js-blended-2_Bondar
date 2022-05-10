class Menu {
	constructor(refs, deseases) {
		this.refs = refs;
		this.deseases = deseases;
	}
	createItem = ({ name: text, href }) => {
		const li = document.createElement("li");
		const link = document.createElement("a");
		li.classList.add("js-menu-item");
		link.classList.add("js-menu-link");
		link.textContent = text;
		link.href = href;
		link.setAttribute("target", "_blank");
		link.setAttribute("rel", "noreferrer noopener nofollow");
		li.append(link);
		return li;
	};

	createList = () => {
		this.refs.list = document.createElement("ul");
		this.refs.list.classList.add("js-menu", "show");
	};

	createMenu = (menuItems, domElem) => {
		const listItems = menuItems.map((item) => this.createItem(item));
		domElem.list.append(...listItems);
		domElem.root.append(domElem.list);
	};

	onBtnClick = (event) => {
		console.log(event.target.textContent);
		const btnText = event.target.textContent;
		if (btnText === "Open") {
			this.createList();
			this.createMenu(this.deseases, this.refs);
			event.target.textContent = "Close";
		} else {
			this.refs.root.innerHTML = "";
			this.refs.list.innerHTML = "";
			event.target.textContent = "Open";
		}
	};

	addListeners = () => {
		this.refs.btn.addEventListener("click", this.onBtnClick);
	};

	init = () => {
		console.log("mainMenu");
		this.addListeners();
	};
}
const refs = {
	root: document.querySelector("#root"),
	btn: document.querySelector(".js-button-menu"),
};

const deseases = [
	{ name: "plague", href: "https://en.wikipedia.org/wiki/Plague_(disease)" },
	{ name: "covid", href: "https://en.wikipedia.org/wiki/COVID-19" },
	{ name: "cancer", href: "https://en.wikipedia.org/wiki/Cancer" },
	{ name: "ebola", href: "https://en.wikipedia.org/wiki/Ebola" },
];

const mainMenu = new Menu(refs, deseases);
mainMenu.init();
