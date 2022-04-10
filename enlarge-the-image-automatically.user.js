// ==UserScript==
// @name        Enlarge the image automatically
// @namespace   https://github.com/gslin/enlarge-the-image-automatically
// @match       https://imgadult.com/upload/*.jpeg
// @match       https://imgaudlt.com/upload/*.jpg
// @match       https://imgbaron.com/img/*.jpeg
// @match       https://imgbaron.com/img/*.jpg
// @match       https://imgsen.com/img/*.jpeg
// @match       https://imgsen.com/img/*.jpg
// @match       https://imgstar.eu/img/*.jpeg
// @match       https://imgstar.eu/img/*.jpg
// @match       https://imgsto.com/img/*.jpeg
// @match       https://imgsto.com/img/*.jpg
// @match       https://kropic.com/img/*.jpeg
// @match       https://kropic.com/img/*.jpg
// @match       https://kvador.com/img/*.jpeg
// @match       https://kvador.com/img/*.jpg
// @match       https://pics4you.net/img/*.jpeg
// @match       https://pics4you.net/img/*.jpg
// @match       https://picdollar.com/img/*.jpeg
// @match       https://picdollar.com/img/*.jpg
// @match       https://silverpic.com/img/*.jpeg
// @match       https://silverpic.com/img/*.jpg
// @match       https://www.picbaron.com/img/*.jpeg
// @match       https://www.picbaron.com/img/*.jpg
// @grant       none
// @version     0.20220410.0
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
