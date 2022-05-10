class Epidemy {
	#deseases;
	constructor(deseases) {
		this.#deseases = deseases;
	}

	getItems() {
		for (const desease of this.#deseases) {
			console.log(`name: ${desease.name}, link: ${desease.href}`);
		}
	}

	readFromForm = () => {};

	setItems(newEpidemy) {
		this.#deseases = [...this.#deseases, newEpidemy];
	}
}

const war = new Epidemy(deseases);
war.addEpidemy({
	name: "russia",
	href: "https://russianembassyprotest.wordpress.com/2011/12/05/users-unite-around-the-globe-in-support-of-their-russian-peers/",
});

console.log(war);
