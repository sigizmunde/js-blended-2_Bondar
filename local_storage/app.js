import { DiseasesStorage } from "../js/storage-class.js";
import { DiseaseController } from "../js/controller-class.js";

const refs = {};

let diseases = new DiseasesStorage();
let controller = null;

window.addEventListener("DOMContentLoaded", () => {
  refs.form = document.querySelector(".js-form");
  refs.diseases = document.querySelector(".diseases");

  controller = new DiseaseController(diseases, refs.form, refs.diseases);

  controller.restoreFormData();
  controller.viewDiseaseList();
});

//todo: при відправці форми очистити tempData та очистити поля форми
//todo: якщо щось є в tempData при перезавантаженні - заповнити форму
//todo: виводимо на сторінку deseases
//todo: переписати все в стилі ООП
