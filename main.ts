joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    joystickbit.Vibration_Motor(100)
    basic.showString("S")
    radio.sendNumber(4)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.showString("L")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    joystickbit.Vibration_Motor(100)
    basic.showString("S")
    radio.sendNumber(4)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
    basic.showString("F")
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    basic.showString("R")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    joystickbit.Vibration_Motor(100)
    basic.showString("S")
    radio.sendNumber(4)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    joystickbit.Vibration_Motor(100)
    basic.showString("S")
    radio.sendNumber(4)
})
radio.setGroup(1)
joystickbit.initJoystickBit()
basic.showIcon(IconNames.Chessboard)
