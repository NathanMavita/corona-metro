let personen = 0
input.onButtonPressed(Button.A, function () {
    personen += 1
    if (personen > 10) {
        basic.showString("sike")
        personen = 10
    } else {
        basic.showNumber(personen)
    }
})
input.onButtonPressed(Button.B, function () {
    personen += -1
    if (personen < 0) {
        basic.showString("Hello!")
        personen = 0
    } else {
        basic.showNumber(personen)
    }
})
