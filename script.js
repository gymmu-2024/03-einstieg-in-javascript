export function sayHello() {}

export function changeBackground() {}

export function deleteText() {}

export function incrementCounter() {}
export function decrementCounter() {}
export function resetCounter() {}

export function writeText() {}

export function aufgabe08(args) {
  let input = args
  return args.toLowerCase()
}

export function aufgabe00(args) {
  let input = args.split("")
  let res = []
  for (const e of input) {
    if (e === " ") {
      res.push("_")
    } else {
      res.push(e)
    }
  }
  return res.join("")
}

export function aufgabe01(args) {
  const res = each(args, function (c) {
    if (c === " ") {
      return "_"
    } else {
      return c
    }
  })
  return res
}

function filterAufgabe02(c) {
  if (c === " ") {
    return "_"
  } else {
    return c
  }
}

export function aufgabe02(args) {
  return each(args, filterAufgabe02)
}
