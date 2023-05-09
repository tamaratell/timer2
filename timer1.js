//Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

const beeps = process.argv.slice(2);

const setTimer = (beeps) => {
  for (const beep of beeps) {
    if (!isNaN(beep) && beep > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, (beep * 1000));
    }
  }
};

setTimer(beeps);