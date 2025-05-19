import { linkupExerciseHandler } from "./utils"

/**
 * Wir erstellen hier eine Funktion für die Aufgabe 1. Funktionen sind praktisch
 * um den Code innerhalb, vom rest zu trennen. Dadurch können wir Variablen mit
 * gleichem Namen auch in anderen Funktionen verwenden, ohne das deren Wert
 * überschrieben wird.
 * Funktionen können auch verwendet werden, um an anderer Stelle wieder
 * verwendet zu werden. Wir machen das in diesem Projekt eigentlich nicht, aber
 * wenn Sie des Resultat von einer Funktion nochmals brauchen, können Sie das
 * wie folgt machen:
 *    `const withoutE = aufgabe01("Hier ist ein Text mit einigen e's")`
 * Damit wird der Code in aufgabe01 ausgeführt, der sollte alle e's entfernen,
 * und das Resultate wird in der Variable `withoutE` gespeichert, und kann dann
 * weiter verwendet werden.
 */
export function aufgabe01(args) {
  // Wir speichern hier den Wert von args in der Variable `input` ab. Damit soll für uns klarer werden, womit wir arbeiten.
  const input = args

  // Wir erzeugen hier eine leere Liste, in der wir das Resultat Stück für Stück anhängen.
  const result = []

  // Mit dieser Schlaufe nummerieren wir jedes Zeichen in `input` durch. Das
  // machen wir um jedes Zeichen einzeln anzuschauen.
  for (let i = 0; i < input.length; i++) {
    // Hier speichern wir das Zeichen an der Stelle `i` in der Variable
    // `currentElement`, damit es explizit ist womit wir arbeiten, aber auch
    // damit wir nicht so viele Klammern schreiben müssen.
    const currentElement = input[i]

    // Hier wird das aktuelle Zeichen ans Ende der Resultat-Liste angehängt.
    result.push(currentElement)
  }

  // Hier geben wir das Resultat zurück, und machen einen Text daraus.
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe01]", aufgabe01)

// Resizable output panel
const resizeHandle = document.getElementById("resize-handle")
const output = document.getElementById("output")
const root = document.documentElement

let isResizing = false
let startY = 0
let startHeight = 0

// Minimum height in pixels so the top line in the console is visible
const minOutputHeightPx = 40 // same as output-header-height

resizeHandle.addEventListener("mousedown", (e) => {
  e.preventDefault()
  isResizing = true
  startY = e.clientY
  // Get current output height in pixels
  const outputRect = output.getBoundingClientRect()
  startHeight = outputRect.height
  document.body.style.userSelect = "none"
})

document.addEventListener("mousemove", (e) => {
  if (!isResizing) return
  const dy = startY - e.clientY
  let newHeight = startHeight + dy
  if (newHeight < minOutputHeightPx) {
    newHeight = minOutputHeightPx
  }
  // Convert newHeight to vh relative to viewport height
  const vh = window.innerHeight
  const newHeightVh = (newHeight / vh) * 100
  // Update CSS variable --output-height (subtract header height in vh)
  const outputHeaderHeightPx = 40
  const outputHeaderHeightVh = (outputHeaderHeightPx / vh) * 100
  const adjustedHeightVh = newHeightVh - outputHeaderHeightVh
  root.style.setProperty("--output-height", `${adjustedHeightVh}vh`)
})

document.addEventListener("mouseup", (e) => {
  if (isResizing) {
    isResizing = false
    document.body.style.userSelect = ""
  }
})
