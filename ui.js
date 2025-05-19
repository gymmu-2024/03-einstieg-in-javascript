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
