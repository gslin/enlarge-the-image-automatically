// ==UserScript==
// @name        Enlarge the image automatically
// @namespace   https://github.com/gslin/enlarge-the-image-automatically
// @match       https://fotokiz.com/*.jpeg
// @match       https://fotokiz.com/*.jpg
// @match       https://imgadult.com/*.jpeg
// @match       https://imgadult.com/*.jpg
// @match       https://imgaudlt.com/*.jpeg
// @match       https://imgaudlt.com/*.jpg
// @match       https://imgbaron.com/*.jpeg
// @match       https://imgbaron.com/*.jpg
// @match       https://imgdrive.net/*.jpeg
// @match       https://imgdrive.net/*.jpg
// @match       https://imgsen.com/*.jpeg
// @match       https://imgsen.com/*.jpg
// @match       https://imgstar.eu/*.jpeg
// @match       https://imgstar.eu/*.jpg
// @match       https://imgsto.com/*.jpeg
// @match       https://imgsto.com/*.jpg
// @match       https://imgtaxi.com/*.jpeg
// @match       https://imgtaxi.com/*.jpg
// @match       https://kropic.com/*.jpeg
// @match       https://kropic.com/*.jpg
// @match       https://kvador.com/*.jpeg
// @match       https://kvador.com/*.jpg
// @match       https://pics4you.net/*.jpeg
// @match       https://pics4you.net/*.jpg
// @match       https://picdollar.com/*.jpeg
// @match       https://picdollar.com/*.jpg
// @match       https://pig69.com/upload/Application/*.jpeg
// @match       https://pig69.com/upload/Application/*.jpg
// @match       https://silverpic.com/*.jpeg
// @match       https://silverpic.com/*.jpg
// @match       https://www.picbaron.com/*.jpeg
// @match       https://www.picbaron.com/*.jpg
// @grant       none
// @version     0.20231006.0
// @author      Gea-Suan Lin <gslin@gslin.com>
// @description Enlarge the image automatically.
// @license     MIT
// ==/UserScript==

(() => {
    'use strict';

    const img = document.querySelector('img');
    if (img) {
        img.click();
    }
})();
