joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    basic.showString("E")
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.showString("A")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    basic.showString("F")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
    basic.showString("AB")
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    basic.showString("B")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    basic.showString("D")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    basic.showString("C")
})
radio.setGroup(1)
basic.showIcon(IconNames.Chessboard)
