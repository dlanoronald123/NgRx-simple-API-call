import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Anime } from "./anime.state";

@Injectable({
  providedIn: "root",
})
export class AnimeService {
  constructor(private http: HttpClient) {}

  getAll(title: string, page: number): Observable<Anime[]> {
    // return this.http.get<Anime[]>("https://api.jikan.moe/v4/anime?q=");
    return this.http.get<Anime[]>(
      "https://api.jikan.moe/v4/anime?q=" +
        title.toString() +
        "&page=" +
        page.toString()
    );
  }
}
