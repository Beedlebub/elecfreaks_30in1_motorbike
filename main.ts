input.onButtonPressed(Button.A, function () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 50)
    wuKong.setMotorSpeed(wuKong.MotorList.M2, -50)
    basic.pause(2000)
    wuKong.stopAllMotor()
})
input.onButtonPressed(Button.AB, function () {
    wuKong.stopAllMotor()
})
input.onButtonPressed(Button.B, function () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, -50)
    wuKong.setMotorSpeed(wuKong.MotorList.M2, 50)
    basic.pause(2000)
    wuKong.stopAllMotor()
})
wuKong.setLightMode(wuKong.LightMode.BREATH)
basic.forever(function () {
	
})
