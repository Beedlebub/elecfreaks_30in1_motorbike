input.onButtonPressed(Button.A, function () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 100)
    wuKong.setMotorSpeed(wuKong.MotorList.M2, -100)
    basic.pause(2000)
    wuKong.stopAllMotor()
})
input.onButtonPressed(Button.AB, function () {
    wuKong.stopAllMotor()
})
input.onButtonPressed(Button.B, function () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, -100)
    wuKong.setMotorSpeed(wuKong.MotorList.M2, 100)
    basic.pause(2000)
    wuKong.stopAllMotor()
})
basic.forever(function () {
	
})
