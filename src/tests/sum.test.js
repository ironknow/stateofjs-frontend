import { sum } from "../utils/sum"

test("adds 1+2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3)
})

test("adds 1+3 to equal 4", () => {
  expect(sum(1, 3)).toBe(4)
})

test("adds 1+4 to equal 5", () => {
  expect(sum(1, 4)).toBe(5)
})

//toBe teste la valeur d'un objet

//toEqual teste chaque champ d'un objet

//check the opposite matcher
//expect(a+b).not.toBe(0)

//toBeNull matches only null
//toBeUndefined matches only undefined
//toBeDefined is the opposite of toBeUndefined
//toBeTruthy matches anything that an if statement treats as true
//toBeFalsy matches anything that an if statement treats as false
