export class DiseasesStorage {
  #items;

  constructor() {
    if (DiseasesStorage._instance) {
      return DiseasesStorage._instance;
    }

    DiseasesStorage._instance = this;

    this.synchronizeStorage("pull");

    console.clear();
    console.log("diseases are", this.items.map((e) => e.name).join(", "));
  }

  get items() {
    return this.#items;
  }

  set items(disArr) {
    this.#items = disArr;
  }

  synchronizeStorage(param) {
    if (param === "put") {
      localStorage.setItem("diseases", JSON.stringify(this.#items));
      console.clear();
      console.log("diseases are", this.items.map((e) => e.name).join(", "));
      return 1;
    }
    if (param === "pull") {
      const data = localStorage.getItem("diseases");
      if (data) {
        this.#items = JSON.parse(data);
        console.clear();
        console.log("diseases are", this.items.map((e) => e.name).join(", "));
        return 1;
      }
      this.#items = [];
      return 0;
    }
    return -1;
  }

  addItem(itemName, itemLink) {
    if (!itemName) return;
    if (this.#items.find((e) => e.name === itemName)) return;
    this.#items = [...this.#items, { name: itemName, href: itemLink }];
    this.synchronizeStorage("put");
  }

  removeItem(name) {
    const index = this.#items.indexOf((e) => e.name === name);
    if (index) {
      this.#items.splice(index, 1);
      this.synchronizeStorage("put");
    }
  }
}
