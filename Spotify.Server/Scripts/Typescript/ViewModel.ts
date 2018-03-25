/// <reference path="typings/knockout.d.ts" />

import { DataService } from './DataService';
import { Song } from './Interfaces/Song';

export class ViewModel {
    public currentSongId: KnockoutObservable<string>;
    public previewTrackUrl: KnockoutObservable<string>;

    public widgetUrl: KnockoutComputed<string>;
    public widgetAudioUrl: KnockoutComputed<string>;

    public getSong() {
        DataService.GetSong<Song>()
            .then((x) => {
                this.currentSongId(x.id);
                this.previewTrackUrl(x.preview_url);
                console.log('url: ' + x.preview_url)
            })
            .catch((x) => { alert('error in fetching song') });
    }

    public VoteYes() {
        this.Vote(this.currentSongId(), true);
    }

    public VoteNo() {
        this.Vote(this.currentSongId(), false);
    }

    private Vote(id: string, voting: boolean) {
        DataService.Vote(id, voting).then((x) => {
            this.currentSongId(x.id);
            this.previewTrackUrl(x.preview_url);
            $('#card').attr("style", "");
        });
    }

    constructor() {
        this.currentSongId = ko.observable('');
        this.previewTrackUrl = ko.observable('');

        DataService.OnVoteNo = () => { this.VoteNo() };
        DataService.OnVoteYes = () => { this.VoteYes() };

        this.widgetUrl = ko.computed(() => {
            var id = "";
            if (this.currentSongId)
                id = this.currentSongId();

            var res = `https://embed.spotify.com/?uri=spotify:track:${id}&amp;theme=white`;
            return res;
        });

        this.widgetAudioUrl = ko.computed(() => {
            var previewUrl = this.previewTrackUrl();
            return previewUrl;
        });

        this.getSong();
    }
}