import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const video = document.querySelector("#vimeo-player")
const player = new Player(video);
const TIME_KEY = "videoplayer-current-time"
const time = localStorage.getItem(TIME_KEY)

onLoading()

    player.on('timeupdate', throttle((e) => {
        localStorage.setItem(TIME_KEY, e.seconds)
        console.log("!");
    }, 1000));

    // player.setCurrentTime(time)
    

    function onLoading() {
        if (!localStorage.getItem(TIME_KEY)) {
            return
        }
        player.setCurrentTime(time)
    }