var mqtt = require('mqtt')
// endpoint of MQTT server
var client  = mqtt.connect('mqtt://192.168.4.1:1883')
 
const log = console.log;

// on mqtt connected
client.on('connect', function () {
  log('MQTT connected!');
  client.subscribe('application/#', function (err, granted) {
    // Unable to connect to topic
    if(err) {
      log('Unable to subscribe! - [' + err + ']');
      process.exit(1);
    }
    // at this point mqtt is subscribe to the topic successfully
    log('It is now subscribed -  [' + JSON.stringify(granted[0]) + ']');
  })
})
 
// on new message come from the sensor
client.on('message', function (topic, message) {
  // message is Buffer, so need to transform it to string
  log(message.toString())
})
