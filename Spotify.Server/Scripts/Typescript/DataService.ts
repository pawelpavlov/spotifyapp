import { Song } from './Interfaces/Song';

export class DataService {
    public static url = "http://localhost:50406/api/spotify";

    private static get<T>(url: string): Promise<any> {
        return fetch(url).then((resp) => { return resp.json() })
    }

    private static post<T>(url: string, data: any) : Promise<any> {
            // Default options are marked with *
        return fetch(url, {
            body: JSON.stringify(data), // must match 'Content-Type' header
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, same-origin, *omit
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            redirect: 'follow', // *manual, follow, error
            referrer: 'no-referrer', // *client, no-referrer
        }).then((resp) => { return resp.json();})
    }

    public static Vote(id: string, vote: boolean): Promise<Song>
    {
        var url = DataService.url + '/vote';
        return DataService.post(url, { TrackId: id, Vote: vote });
    }

    public static GetSong<T>(): Promise<T> {
        var url = DataService.url + "/GetSong";
        return DataService.get<any>(url);
    }

    public static OnVoteYes: () => any;
    public static OnVoteNo: () => any;
}