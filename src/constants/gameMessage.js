import constant from "./constant.js";

const gameMessage = Object.freeze({
  INPUT: {
    NAME: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
    NUMBER: "시도할 횟수는 몇 회인가요?\n",
  },

  OUTPUT: {
    RESULT: "실행 결과",
    PLAYER: (name, number) => `${name} : ${constant.FORWARD.repeat(number)}`,
    WINNER: (winners) => `최종 우승자 : ${winners.join(", ")}`,
  },
});
export default gameMessage;
