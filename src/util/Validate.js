import constant from "../constants/constant.js";
import errorMessage from "../constants/errorMessage.js";

const Validate = {
  name(input) {
    this.notNull(input);
    const splitedValue = input.split(",").map((value) => value.trim());
    splitedValue.forEach((value) => {
      this.fiveLength(value);
    });
    this.notDuplicate(splitedValue);
  },

  number(input) {
    this.notNull(input);
    this.onlyNumber(input);
  },

  notNull(input) {
    if (!input.length) {
      throw new Error(errorMessage.NOT_NULL);
    }
  },

  fiveLength(input) {
    if (input.length > 5) {
      throw new Error(errorMessage.NOT_NULL);
    }
  },

  notDuplicate(input) {
    const inputSet = new Set(input);
    if (inputSet.size !== input.length) {
      throw new Error(errorMessage.NOT_DUPLICATE);
    }
  },

  onlyNumber(input) {
    const numberRegExp = /^[0-9]+$/;
    if (!numberRegExp.test(input) || Number(input) < 1) {
      throw new Error(errorMessage.INVALID_ORDER);
    }
  },
};

export default Validate;
