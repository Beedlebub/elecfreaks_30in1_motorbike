input.onButtonPressed(Button.A, function () {
    strip.showRainbow(1, 360)
    wuKong.setAllMotor(-100, -100)
    basic.pause(2000)
    wuKong.stopAllMotor()
})
input.onButtonPressed(Button.AB, function () {
    wuKong.stopAllMotor()
})
input.onButtonPressed(Button.B, function () {
    wuKong.setAllMotor(100, 100)
    basic.pause(2000)
    wuKong.stopAllMotor()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 4, NeoPixelMode.RGB)
basic.forever(function () {
	
})
