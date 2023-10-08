import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const video = document.querySelector("#vimeo-player")
const player = new Player(video);
const TIME_KEY = "videoplayer-current-time"
const time = localStorage.getItem(TIME_KEY)


    player.on('timeupdate', throttle((e) => {
        localStorage.setItem(TIME_KEY, JSON.stringify(e.seconds))
    }, 1000));


    player.setCurrentTime(time)

