IotLoRaNode.SetRegion(region.EU868)
IotLoRaNode.InitialiseRadio(
"",
"",
"",
SpreadingFactors.Seven
)
basic.forever(function () {
    IotLoRaNode.DigitalValue(input.buttonIsPressed(Button.A), Channels.One)
    IotLoRaNode.LightValue(input.lightLevel(), Channels.Two)
    IotLoRaNode.TemperatureValue(input.temperature(), Channels.Three)
    IotLoRaNode.AccelorometerValue(
    input.acceleration(Dimension.X),
    input.acceleration(Dimension.Y),
    input.acceleration(Dimension.Z),
    Channels.Four
    )
    IotLoRaNode.AnalogueValue(input.compassHeading(), Channels.Five)
    IotLoRaNode.loraTransmitPayload()
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(600000)
})
