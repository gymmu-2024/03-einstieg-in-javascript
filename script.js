import { linkupExerciseHandler } from "./utils"

function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    result.push(currentElement)
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe01]", aufgabe01)
