import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { StartscreenComponent } from './startscreen/startscreen.component';

const routes: Routes = [
  { path: 'startscreen', component: StartscreenComponent },
  { path: 'game/:id', component: GameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
