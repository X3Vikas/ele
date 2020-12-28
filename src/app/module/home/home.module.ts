import { NgModule } from "@angular/core";
import { HomeRouting, route } from './home.routing'

@NgModule({
  declarations: [
    route
  ],
  imports: [
    HomeRouting
  ],
  exports: []
})
export class HomeModule {
  constructor() { }
}
