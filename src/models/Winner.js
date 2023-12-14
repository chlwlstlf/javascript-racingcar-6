export default class Winner {
  constructor(names, forward) {
    const maxValue = Math.max(...forward);
    this.winners = names.filter((_, i) => forward[i] === maxValue);
  }
}
