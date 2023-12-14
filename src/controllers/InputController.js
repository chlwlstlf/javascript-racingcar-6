import InputView from "../views/InputView.js";
import Validate from "../util/Validate.js";

export default class InputController {
  async inputName() {
    const input = await InputView.readName();
    Validate.name(input);
    return input.split(",").map((value) => value.trim());
  }
  async inputNumber() {
    const input = await InputView.readNumber();
    Validate.number(input);
    return parseInt(input);
  }
}
