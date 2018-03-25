export class DataService {
    public static url = "http://localhost:50406/api/spotify";
    public static get<T>(url: string): Promise<any> {
        return fetch(url);
    }
}