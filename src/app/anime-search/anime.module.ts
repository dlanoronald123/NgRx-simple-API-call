import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AnimePageComponent } from "./anime.component";
import { animeFeature } from "./anime.reducer";
import { AnimeEffects } from "./anime.effects";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AnimePageComponent],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    EffectsModule.forFeature([AnimeEffects]),
    StoreModule.forFeature(animeFeature),
  ],
  exports: [AnimePageComponent],
})
export class AnimeModule {}
