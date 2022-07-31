import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AnimePageComponent } from "./anime.component";
import { animeReducer } from "./anime.reducer";
import { AnimeEffects } from "./anime.effects";

@NgModule({
  declarations: [AnimePageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    EffectsModule.forFeature([AnimeEffects]),
    StoreModule.forFeature("anime", animeReducer),
  ],
  exports: [AnimePageComponent],
})
export class AnimeModule {}
