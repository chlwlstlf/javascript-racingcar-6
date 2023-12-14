import { Console } from "@woowacourse/mission-utils";
import { CreateRandom } from "./CreateRandom.js";
import constant from "../constants/constant.js";

export default class RacingCar {
  isForward() {
    const randomNumber = new CreateRandom().randomNumber;
    return randomNumber >= constant.IS_FORWARD;
  }
}
