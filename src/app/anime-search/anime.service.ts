import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";
import { Anime } from "./anime";

@Injectable({
  providedIn: "root",
})
export class AnimeService {
  anime: Array<Anime> = [
    { name: "Naruto" },
    { name: "Bleach" },
    { name: "One Piece" },
    { name: "Dragonball Z" },
    { name: "Ghost Fighter" },
    { name: "Flame of Recca" },
  ];
  constructor(private http: HttpClient) {}

  getAll() {
    return of(this.anime);
  }
}
