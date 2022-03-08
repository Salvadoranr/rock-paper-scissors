import { startStorage, setLocalStorage, getLocalStorage } from '../../utils/manageLocalStorage'
import mountLocalStorageMock from "../mocks/localStorage.mock";


beforeEach(() => {
  mountLocalStorageMock()
})

test('should return localStorage value', () => {
  const obj = [{ name: 'people', score: 0 }]
  setLocalStorage('data', obj)
  expect(JSON.stringify(getLocalStorage('data'))).toEqual(JSON.stringify(obj));
});
test('should set initial value in localStorage', () => {
  const obj = [{ name: 'people', score: 0 }]
  startStorage('data', 'people')
  expect(JSON.stringify(getLocalStorage('data'))).toEqual(JSON.stringify(obj));
});
test("shouldn't do anything", () => {
  const obj = [{ name: 'people', score: 0 }]
  setLocalStorage('data', obj)
  startStorage('data', 'people')
  expect(JSON.stringify(getLocalStorage('data'))).toEqual(JSON.stringify(obj));
});