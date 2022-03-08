import handleMessage, { determineCondition } from '../../utils/handleMessage'
import { LVL1, LVL2 } from '../../gameLvls'

describe('determineCondition', () => {
  test('receive a String should return true ', () => {
    const result = determineCondition('rock', 'rock')
    expect(result).toBeTruthy();
  });
  test('receive a String should return false ', () => {
    const result = determineCondition('rock', 'paper')
    expect(result).toBeFalsy();
  });
  test('receive an Array should return true ', () => {
    const result = determineCondition(['rock', 'paper'], 'paper')
    expect(result).toBeTruthy();
  });
  test('receive an Array should return false ', () => {
    const result = determineCondition(['rock', 'paper'], 'scissors')
    expect(result).toBeFalsy();
  });
  test('receive an Array should return false ', () => {
    const result = determineCondition(['rock', 'paper'], 'scissors')
    expect(result).toBeFalsy();
  });
})
describe('handleMessage', () => {
  test('should return winner message for LVL1 options', () => {
    const result = handleMessage('rock', 'scissors', LVL1, 0, () => { })
    expect(result).toEqual('You win!')
  });
  test('should return winner message for LVL2 options', () => {
    const result = handleMessage('rock', 'scissors', LVL2, 0, () => { })
    expect(result).toEqual('You win!')
  });
  test('should return loser message for LVL1 options', () => {
    const result = handleMessage('rock', 'paper', LVL1, 0, () => { })
    expect(result).toEqual('You lose!')
  });
  test('should return loser message for LVL2 options', () => {
    const result = handleMessage('rock', 'paper', LVL2, 0, () => { })
    expect(result).toEqual('You lose!')
  });
  test('should return tie message for LVL1 options', () => {
    const result = handleMessage('rock', 'rock', LVL1, 0, () => { })
    expect(result).toEqual("It's a tie")
  });
  test('should return tie message for LVL2 options', () => {
    const result = handleMessage('rock', 'rock', LVL2, 0, () => { })
    expect(result).toEqual("It's a tie")
  });
})

