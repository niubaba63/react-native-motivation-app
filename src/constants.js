const devSettings = {
  logRedux: false,
  freeVersion: true,
}
// const apiSource = 'http://cmichel.io/test/api.html'
const apiSource = 'https://mrtoph.github.io/react-native-motivation-app/api.html'
const dayKeys = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const packageName = devSettings.freeVersion ? 'io.cmichel.motivation' : 'io.cmichel.motivationpro'
const appName = devSettings.freeVersion ? 'Motivational Alarm Clock (Free)' : 'Motivational Alarm Clock'
const mail = 'apps@cmichel.io'
const adUnitID = 'ca-app-pub-5890315358641197/4652615061'
const adSnoozeInterstitial = 'ca-app-pub-5890315358641197/6129348265'
// const testDeviceId = 'CE6EFF53BDDB470A5F2D8624FA22FC10'

export {
    apiSource,
    devSettings,
    dayKeys,
    packageName,
    appName,
    mail,
    adUnitID,
    adSnoozeInterstitial,
    // testDeviceId,
}
