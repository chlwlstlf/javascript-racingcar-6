import { Console } from "@woowacourse/mission-utils";
import OutputView from "../views/OutputView.js";
import InputController from "./InputController.js";
import RacingCar from "../models/RacingCar.js";
import Winner from "../models/Winner.js";

export default class MainController {
  #names;
  #number;
  #forward;

  async start() {
    await this.input();
    await this.playRacingCar();
    await this.outputWinner();
  }

  async input() {
    const inputController = new InputController();
    this.#names = await inputController.inputName();
    this.#number = await inputController.inputNumber();
  }

  async playRacingCar() {
    this.#forward = new Array(this.#names.length).fill(0);
    const racingCar = new RacingCar();
    OutputView.result();
    for (let i = 0; i < this.#number; i++) {
      for (let j = 0; j < this.#names.length; j++) {
        this.#forward[j] += racingCar.isForward();
        OutputView.player(this.#names[j], this.#forward[j]);
      }
      Console.print();
    }
  }

  async outputWinner() {
    const winners = new Winner(this.#names, this.#forward).winners;
    OutputView.winner(winners);
  }
}
