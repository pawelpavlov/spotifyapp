/// <reference path="typings/knockout.d.ts" />
/// <reference path="typings/jquery.d.ts" />

import { DataService } from './DataService';
DataService.get(DataService.url).then((x) => { console.log(x) })
declare var $: any;

/**
 * jTinder initialization
 */

$("#tinderslide").jTinder({
    // dislike callback
    onDislike: function (item) {
        // set the status text
        $('#status').html('Dislike image ' + (item.index() + 1));
    },
    // like callback
    onLike: function (item) {
        // set the status text
        $('#status').html('Like image ' + (item.index() + 1));
    },
    animationRevertSpeed: 200,
    animationSpeed: 400,
    threshold: 1,
    likeSelector: '.like',
    dislikeSelector: '.dislike'
});

/**
 * Set button action to trigger jTinder like & dislike.
 */
$('.actions .like, .actions .dislike').click((e) => {
    e.preventDefault();
    $("#tinderslide").jTinder($(e.currentTarget).attr('class') );
});