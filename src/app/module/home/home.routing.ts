import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { PeerComponent } from "./components/dashboard/peer/peer.component";
import { StatusComponent } from "./components/dashboard/status/status.component";
import { IndexComponent } from "./components/index/index.component";
import { SideNavComponent } from "./components/shared/side-nav/side-nav.component";
import { TopNavComponent } from "./components/shared/top-nav/top-nav.component";
import { HomeComponent } from "./home.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', component: IndexComponent, pathMatch: 'full' },
      {
        path: 'dashboard', component: DashboardComponent,
        children: [
          { path: '', redirectTo: 'status', pathMatch: 'full' },
          { path: 'status', component: StatusComponent },
          { path: 'peer', component: PeerComponent }
        ]
      }
    ]

  }
];

export const route = [
  HomeComponent,
  IndexComponent,
  DashboardComponent,
  SideNavComponent,
  TopNavComponent,
  StatusComponent,
  PeerComponent
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRouting {
  constructor() {

  }
}
