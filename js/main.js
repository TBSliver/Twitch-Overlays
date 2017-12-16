$(function() {
  var clock = $('.countdown-clock').FlipClock( countdown_start, {
    clockFace: 'MinuteCounter',
    countdown: true,
    callbacks: {
      stop: function() {
        $('.message').html('Stream Starting!');
      }
    }
  });
});

