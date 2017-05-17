var Sound = require('react-native-sound');

const musik = new Sound('musik.mp3', Sound.MAIN_BUNDLE, (e) => {
  if (e) {
    console.log('error', e);
  }
});

const narasi = new Sound('narasi.mp3', Sound.MAIN_BUNDLE, (e) => {
  if (e) {
    console.log('error', e);
  }
});

function PlayAudio() {
  Sound.setCategory('Ambient', true); // true = mixWithOthers
}

PlayAudio.prototype.playMusik = function() {
  musik.setSpeed(1);
  musik.setVolume(0.3);
  musik.setNumberOfLoops(-1);
  musik.play(() => musik.release()); // Release when it's done so we're not using up resources
};

PlayAudio.prototype.playNarasi = function() {
  narasi.setSpeed(1);
  narasi.setVolume(1);
  narasi.setNumberOfLoops(-1);
  narasi.play(() => musik.release()); // Release when it's done so we're not using up resources
}

PlayAudio.prototype.setVolumeMusik = function(volume) {
  musik.setVolume(volume);
}

PlayAudio.prototype.setVolumeNarasi = function(volume) {
  narasi.setVolume(volume);
}

PlayAudio.prototype.stop = function() {
  musik.stop(() => {
    musik.play();
  });
  narasi.stop(() => {
    narasi.play();
  });
}

module.exports = PlayAudio;
