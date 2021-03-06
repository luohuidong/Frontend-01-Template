class Match {
  match(string) {
    let state = this.start;
    for (let c of string) {
      state = state(c);
    }
    return state === this.end;
  }

  start = (c) => {
    if (c === "a") {
      return this.foundA;
    } else {
      return this.start;
    }
  };

  end = (c) => {
    return this.end;
  };

  foundA = (c) => {
    if (c === "b") {
      return this.foundB;
    } else {
      return this.start();
    }
  };

  foundB = (c) => {
    if (c === "c") {
      return this.foundC;
    } else {
      return this.start;
    }
  };

  foundC = (c) => {
    if (c === "d") {
      return this.foundD;
    } else {
      return this.start;
    }
  };

  foundD = (c) => {
    if (c === "e") {
      return this.foundE;
    } else {
      return this.start;
    }
  };

  foundE = (c) => {
    if (c === "f") {
      return this.end;
    } else {
      return this.start;
    }
  };
}

const instance = new Match();
console.log(instance.match("I abm groot"));
