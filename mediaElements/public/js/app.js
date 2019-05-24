'use strict'
$(document).ready(function() {
  $('audio').mediaelementplayer({
      alwaysShowControls: true,
      features: ['playpause','volume','progress'],
      audioVolume: 'horizontal',
      audioWidth: 450,
      audioHeight: 40
  }); 
})


