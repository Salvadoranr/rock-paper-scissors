export const LVL1 = {
  rock: {
    name: "rock",
    win: "scissors",
    lose: "paper",
    icon: "faHandRock",
  },
  paper: {
    name: "paper",
    win: "rock",
    lose: "scissors",
    icon: "faHandPaper",
  },
  scissors: {
    name: "scissors",
    win: "paper",
    lose: "rock",
    icon: "faHandScissors",
  },
};
export const LVL2 = {
  rock: {
    name: "rock",
    win: ["scissors", "lizard"],
    lose: ["paper", "spock"],
    icon: "faHandRock",
  },
  paper: {
    name: "paper",
    win: ["rock", "spock"],
    lose: ["scissors", "lizard"],
    icon: "faHandPaper",
  },
  scissors: {
    name: "scissors",
    win: ["paper", "lizard"],
    lose: ["rock", "spock"],
    icon: "faHandScissors",
  },
  lizard: {
    name: "lizard",
    win: ["paper", "spock"],
    lose: ["rock", "scissors"],
    icon: "faHandLizard",
  },
  spock: {
    name: "spock",
    win: ["rock", "scissors"],
    lose: ["lizard", "paper"],
    icon: "faHandSpock",
  },
};