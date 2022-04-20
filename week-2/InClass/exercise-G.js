var apolloCountdownMessage = "all engine running... LIFT-OFF!";
var countdown = 8;
var launch = 0;

function countdownToLaunch(countdown) {
    while ( countdown >=0 ) {
        console.log(countdown)
        countdown--
     }
     console.log(apolloCountdownMessage);
}

countdownToLaunch(countdown)