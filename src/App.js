import MainController from "./controllers/MainController.js";

export default class App {
  constructor() {
    this.mainController = new MainController();
  }
  async play() {
    await this.mainController.start();
  }
}
