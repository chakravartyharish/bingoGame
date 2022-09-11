export default function Balloons() {
  let Balloon, balloons, options, sketch, sortBySize

  sketch = Sketch.create()

  balloons = []

  options = {
    amount: 50,
    sizeMin: 1,
    sizeMax: 10,
  }

  sortBySize = function (a, b) {
    if (a.size < b.size) {
      return 1
    }
    if (a.size > b.size) {
      return -1
    }
    return 0
  }

  Balloon = function (config) {
    this.x = config.x
    this.y = config.y
    this.vx = 0
    this.vy = 0
    return (this.size = config.size)
  }

  Balloon.prototype.update = function () {
    let dt
    dt = sketch.dt <= 0 ? 0.001 : sketch.dt / 16
    this.vx += this.size * (random(-1, 1) / 1000)
    this.x += this.vx * dt
    this.vy -= this.size / 2000
    this.y += this.vy * dt
    if (this.y <= this.size * -0.9) {
      this.size = random(options.sizeMin, options.sizeMax)
      this.x = random(sketch.width)
      this.vx = 0
      this.y = sketch.height + this.size * 10.2
      return (this.vy = 0)
    }
  }

  Balloon.prototype.render = function () {
    function getRandomColor() {
      let r = (255 * Math.random()) | 0,
        g = (255 * Math.random()) | 0,
        b = (255 * Math.random()) | 0,
        mt = (255 * Math.random()) | 0,
        ml = (255 * Math.random()) | 0,
        dur = (255 * Math.random()) | 0
      return (
        "rgb(" +
        r +
        "," +
        g +
        "," +
        b +
        ", " +
        mt +
        " + " +
        ml +
        " + " +
        dur +
        ")"
      )
    }
    sketch.strokeStyle = getRandomColor()
    sketch.stroke()
    sketch.save()
    sketch.translate(this.x, this.y)
    sketch.beginPath()
    sketch.moveTo(this.size * -0.5, 0)
    sketch.bezierCurveTo(
      this.size * -5,
      this.size * -1,
      this.size * -6,
      this.size * -10,
      0,
      this.size * -10
    )
    sketch.bezierCurveTo(
      this.size * 6,
      this.size * -10,
      this.size * 5,
      this.size * -1,
      this.size * 0.5,
      0
    )
    sketch.lineTo(this.size * 0.8, this.size * 0.7)
    sketch.lineTo(this.size * -0.8, this.size * 0.7)
    sketch.closePath()
    sketch.fillStyle = getRandomColor()
    sketch.stroke()
    sketch.lineWidth = this.size * 0.4
    sketch.stroke()
    sketch.restore()
    sketch.save()
    sketch.translate(this.x - this.size * 1.75, this.y - this.size * 7.5)
    sketch.rotate(PI / 4)
    sketch.scale(1, 2)
    sketch.beginPath()
    sketch.arc(0, 0, this.size * 0.5, 0, TWO_PI)
    sketch.fillStyle = "hsla( 210, 90%, 60% )"
    sketch.fill()
    return sketch.restore()
  }

  sketch.setup = function () {
    function getRndColor() {
      let rr = (255 * Math.random()) | 0,
        gg = (255 * Math.random()) | 0,
        bb = (255 * Math.random()) | 0
      return "rgb(" + rr + "," + gg + "," + bb + ")"
    }
    let i, _results
    sketch.lineJoin = "round"
    sketch.strokeStyle = getRndColor()
    sketch.stroke()
    i = options.amount
    _results = []
    while (i--) {
      _results.push(
        balloons.push(
          new Balloon({
            x: random(sketch.width),
            y: random(sketch.height),
            size: random(options.sizeMin, options.sizeMax),
          })
        )
      )
    }
    return _results
  }

  sketch.clear = function () {
    return sketch.clearRect(0, 0, sketch.width, sketch.height)
  }

  sketch.update = function () {
    let i, _results
    balloons.sort(sortBySize)
    i = balloons.length
    _results = []
    while (i--) {
      _results.push(balloons[i].update(i))
    }
    return _results
  }

  sketch.draw = function () {
    let i, _results
    i = balloons.length
    _results = []
    while (i--) {
      _results.push(balloons[i].render(i))
    }
    return _results
  }
}
