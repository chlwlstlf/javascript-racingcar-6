import { Console } from "@woowacourse/mission-utils";
import gameMessage from "../constants/gameMessage.js";

const OutputView = {
  result() {
    Console.print(gameMessage.OUTPUT.RESULT);
  },
  player(name, number) {
    Console.print(gameMessage.OUTPUT.PLAYER(name, number));
  },
  winner(names) {
    Console.print(gameMessage.OUTPUT.WINNER(names));
  },
};

export default OutputView;
