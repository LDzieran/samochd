radio.onReceivedNumber(function (receivedNumber) {
    I = receivedNumber
})
let I = 0
radio.setGroup(0)
wuKong.mecanumWheel(
wuKong.ServoList.S1,
wuKong.ServoList.S2,
wuKong.ServoList.S3,
wuKong.ServoList.S4
)
I = 99
basic.forever(function () {
    if (I == 1) {
        wuKong.mecanumRun(wuKong.RunList.rear)
    }
    if (I == 2) {
        wuKong.mecanumRun(wuKong.RunList.Front)
    }
    if (I == 3) {
        wuKong.mecanumRun(wuKong.RunList.left)
    }
    if (I == 4) {
        wuKong.mecanumRun(wuKong.RunList.right)
    }
    if (I == 5) {
        wuKong.mecanumSpin(wuKong.TurnList.Left)
    }
    if (I == 6) {
        wuKong.mecanumSpin(wuKong.TurnList.Right)
    }
    if (I == 0) {
        wuKong.mecanumRun(wuKong.RunList.stop)
    }
})
