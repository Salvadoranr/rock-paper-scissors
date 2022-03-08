import generateSelection from '../../utils/generateSelection'
test('should return the rock', () => {
  const options = {
    rock: {
      name: "rock",
      win: "scissors",
      lose: "paper",
      icon: "faHandRock",
    },
  }
  expect(generateSelection(options)).toEqual('rock');
});
test('should return the empty string', () => {
  const options = {};
  expect(generateSelection(options)).toEqual('');
});