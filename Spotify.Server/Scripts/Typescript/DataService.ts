export class DataService {
    public static url = "http://localhost:50406/api/spotify";
    public static get<T>(url: string): Promise<any> {
        return fetch(url);
    }

    public static GetSong(): Promise<any> {
        debugger;
        var url = DataService.url + "/GetSong";
        return DataService.get<any>(url);
    }
}