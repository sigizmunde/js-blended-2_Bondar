export class DiseaseController {
  constructor(storage, inputForm, outputContainer) {
    this.storage = storage;
    this.form = inputForm;
    this.container = outputContainer;

    this.form.addEventListener("submit", this.onFormSubmit.bind(this));
    this.form.addEventListener("input", this.onFormInput.bind(this));
  }

  restoreFormData() {
    let data = localStorage.getItem("tempData");
    if (data) {
      const parsed = JSON.parse(data);
      this.form.elements.itemName.value = parsed.name;
      this.form.elements.itemLink.value = parsed.href;
    }
  }

  onFormInput(evt) {
    const inputName = evt.currentTarget.elements.itemName.value;
    const inputLink = evt.currentTarget.elements.itemLink.value;
    let data = inputName;
    data = {
      name: inputName,
      href: inputLink,
    };
    localStorage.setItem("tempData", JSON.stringify(data, null, 2));
  }

  onFormSubmit(evt) {
    evt.preventDefault();
    const form = evt.target;
    const formData = new FormData(form);
    const newData = {};
    formData.forEach((value, key) => {
      newData[key] = value;
    });
    const { itemName, itemLink } = newData;
    console.log(this.storage);
    this.storage.addItem(itemName, itemLink);
    this.clearTempData();
    this.clearForm();
    this.viewDiseaseList(this.container);
  }

  clearForm() {
    this.form.elements.itemName.value = "";
    this.form.elements.itemLink.value = "";
  }

  clearTempData() {
    localStorage.removeItem("tempData");
  }

  viewDiseaseList(container = null) {
    if (!container) container = this.container;
    const list = document.createElement("ul");
    list.classList.add("disease__list");
    for (const disease of this.storage.items) {
      const item = document.createElement("li");
      item.classList.add("disease__item");
      item.innerHTML = `<a href=${disease.href}>${disease.name}</a> <i>${disease.href}</i>`;
      list.appendChild(item);
    }
    try {
      container.innerHTML = "";
      container.appendChild(list);
      return 1;
    } catch (err) {
      console.error(err);
    }
  }
}
