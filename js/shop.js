const items = [
	{ id: "1", name: "apples", price: 18 },
	{ id: "2", name: "bananas", price: 70 },
	{ id: "3", name: "kiwi", price: 50 },
];

const shop = {
	title: "Silpo",
	items,

	showItems() {
		for (const item of this.items) {
			console.log(
				`id:${item.id}, name:${item.name}, price:${item.price}`
			);
		}
	},
	addItem(newItem) {
		// this.items.push(newItem);
		// this.items = [...this.items, newItem];
		// newItem.id = `id:${this.generateId()}`;
		this.items = [...this.items, { id: this.generateId(), ...newItem }];
	},
	updateItem(itemName, newName) {
		for (const item of this.items) {
			if (item.name === itemName) {
				item.name = newName;
			} else {
				console.log("do not finded");
			}
		}
	},
	removeItem(itemName) {
		for (const item of this.items) {
			if (item.name === itemName) {
				const idx = this.items.indexOf(item);
				this.items.splice(idx, 1);
			}
		}
	},

	generateId() {
		return Math.random().toString().slice(2);
	},
};

shop.addItem({ name: "tomato", price: 80 });
shop.showItems();
// shop.removeItem('bananas');
// shop.showItems();
