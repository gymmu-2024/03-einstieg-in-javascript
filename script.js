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

/* Klassisch imperative Weise zum Programmieren.
 * Kann recht einfach verstanden werden. Eine leere Liste wird
 * vor der Schlaufe definiert und in der Schleife gefüllt.
 *
 * Scheint einfach zu verstehen zu sein, setzt aber voraus das Schleifen verstanden wurden.
 * Das konnte ich bis jetzt noch nicht so feststellen. Das durchlaufen einer Schlaufe,
 * in der sich die Werte mit jedem Durchgang verändern, scheint ein Komplexitätsschritt zu
 * sein, den viele SuS nicht machen können.
 */
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

/* Funktionales Programmieren, wie es oft in Javascript anzutreffen ist.
 * Hat den Vorteil das wir anonyme Funktionen verwenden können, wird aber mit der Syntax schwieriger.
 * Wir könnten Arrow-Functions wählen, damit könnte man die Syntax leicht unterscheiden. Hat dennoch
 * das Problem der Verschachtelung und wird somit Komlexer.
 */
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

/* Funktionales Programmieren mit einer externen Funktion.
 * Pro:
 * + So modular wie möglich.
 * + Teile können wieder verwendet werden.
 * + Teile können auch einfach auf einem kleinen Level getestet werden.
 * + Filter sind einfach zu lesen.
 * Contra:
 * - Zusätlche Funktionen die nur an einer Stelle verwendet werden.
 * - Komlexität wird verteilt.
 * - Aufgabe selber wird zu unnötigem Boilerplate-Code.
 */
export function aufgabe02(args) {
  return each(args, filterAufgabe02)
}
