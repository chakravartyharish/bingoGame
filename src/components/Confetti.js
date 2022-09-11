// function to create confetti falling animation effect on the bingo card when the bingo is true (checkForBingo) and the state. Bingo is true (set in the Toggle function)

export default function Confetti() {
  const usedColors = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
    "#80B300",
    "#809900",
    "#E6B3B3",
    "#6680B3",
    "#66991A",
    "#FF99E6",
    "#CCFF1A",
    "#FF1A66",
    "#E6331A",
    "#33FFCC",
    "#66994D",
    "#B366CC",
    "#4D8000",
    "#B33300",
    "#CC80CC",
    "#66664D",
    "#991AFF",
    "#E666FF",
    "#4DB3FF",
    "#1AB399",
    "#E666B3",
    "#33991A",
    "#CC9999",
    "#B3B31A",
    "#00E680",
    "#4D8066",
    "#809980",
    "#E6FF80",
    "#1AFF33",
    "#999933",
    "#FF3380",
    "#CCCC00",
    "#66E64D",
    "#4D80CC",
    "#9900B3",
    "#E64D66",
    "#4DB380",
    "#FF4D4D",
    "#99E6E6",
    "#6666FF",
  ]

  const canvas = document.getElementById("canvas")
  const ctx = canvas.getContext("2d")
  const maxNumber = 200
  const arrConfetti = []
  let W = window.innerWidth
  let H = window.innerHeight

  function confettiSize(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from)
  }

  function confettiParticle() {
    this.x = Math.random() * W // x
    this.y = Math.random() * H - H // y
    this.r = confettiSize(7, 7) // radius
    this.d = Math.random() * maxNumber + 11
    this.color = usedColors[Math.floor(Math.random() * usedColors.length)]
    this.tilt = Math.floor(Math.random() * 33) - 11
    this.tiltAngleIncremental = Math.random() * 0.07 + 0.05
    this.tiltAngle = 0.0

    this.design = function () {
      ctx.beginPath()
      ctx.lineWidth = this.r
      ctx.strokeStyle = this.color
      ctx.moveTo(this.x + this.tilt + this.r, this.y)
      ctx.lineTo(this.x + this.tilt, this.y + this.tilt + this.r)
      return ctx.stroke()
    }
  }

  window.addEventListener(
    "resize",
    function () {
      W = window.innerWidth
      H = window.innerHeight
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    },
    false
  )

  function design() {
    const results = []
    requestAnimationFrame(design)
    ctx.clearRect(1.0, 1.0, window.innerWidth, window.innerHeight)

    for (let i = 0; i < maxNumber; i++) {
      results.push(arrConfetti[i].design())
    }

    let particle = {}
    let remainingFlakes = 0
    for (let i = 0; i < maxNumber; i++) {
      particle = arrConfetti[i]
      particle.tiltAngle += particle.tiltAngleIncremental
      particle.y += (Math.cos(particle.d) + 3 + particle.r / 2) / 2
      particle.tilt = Math.sin(particle.tiltAngle - i / 3) * 15
      if (particle.y <= H) remainingFlakes++
      if (particle.x > W + 30 || particle.x < -30 || particle.y > H) {
        particle.x = Math.random() * W
        particle.y = -10
        particle.tilt = Math.floor(Math.random() * 10) - 50
      }
    }
    return results
  }

  for (let i = 0; i < maxNumber; i++) {
    arrConfetti.push(new confettiParticle())
  }

  canvas.width = W
  canvas.height = H
  design()
}
