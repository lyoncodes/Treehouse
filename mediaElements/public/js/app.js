'use strict'
$(document).ready(function() {
  $('audio').mediaelementplayer({
      alwaysShowControls: true,
      features: ['playpause','volume', 'tracks', 'progress', 'duration', 'skipback'],
      audioVolume: 'horizontal',
      audioWidth: 450,
      audioHeight: 40,
      autoRewind: true,
      skipBackInterval: 3,
  }); 
})


