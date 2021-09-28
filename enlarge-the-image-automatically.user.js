// ==UserScript==
// @name        Enlarge the image automatically
// @namespace   https://github.com/gslin/enlarge-the-image-automatically
// @match       https://imgbaron.com/img/*.jpeg
// @match       https://imgsen.com/img/*.jpg
// @match       https://imgsto.com/img/*.jpg
// @match       https://www.picbaron.com/img/*.jpeg
// @match       https://pics4you.net/img/*.jpg
// @match       https://picdollar.com/img/*.jpg
// @grant       none
// @version     0.20210929.0
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
