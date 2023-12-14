import { Console } from "@woowacourse/mission-utils";
import gameMessage from "../constants/gameMessage.js";

const InputView = {
  async readName() {
    const input = await Console.readLineAsync(gameMessage.INPUT.NAME);
    return input;
  },
  async readNumber() {
    const input = await Console.readLineAsync(gameMessage.INPUT.NUMBER);
    return input;
  },
};

export default InputView;
