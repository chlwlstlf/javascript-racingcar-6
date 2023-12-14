import { Random } from "@woowacourse/mission-utils";
import constant from "../constants/constant.js";

export class CreateRandom {
  constructor() {
    this.randomNumber = Random.pickNumberInRange(constant.MINIMUM, constant.MAXIMUM);
  }
}
