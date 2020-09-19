input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . #
        . # . # .
        . . # . .
        `)
    bluetooth.uartWriteLine("Tilted Down")
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showIcon(IconNames.Target)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . . . . .
        . . . . .
        `)
    bluetooth.uartWriteLine("Tilted Up")
})
basic.showIcon(IconNames.SmallDiamond)
