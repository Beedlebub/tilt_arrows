input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . #
        . # . # .
        . . # . .
        `)
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
})
basic.showIcon(IconNames.SmallDiamond)
