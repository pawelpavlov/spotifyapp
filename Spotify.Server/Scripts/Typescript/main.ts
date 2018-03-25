/// <reference path="typings/knockout.d.ts" />
/// <reference path="typings/jquery.d.ts" />

import { DataService } from './DataService';

/**
 * jTinder initialization
 */ 
declare var $: any;
$("#tinderslide").jTinder({
    // dislike callback
    onDislike: function (item) {
        DataService.OnVoteNo();
    },
    // like callback
    onLike: function (item) {
        // set the status text
        DataService.OnVoteYes();
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