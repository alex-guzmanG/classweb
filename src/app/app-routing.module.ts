import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnotherComponent } from './another/another.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';

const routes: Routes = [
  {
    path: "mycomponent",
    component: MycomponentComponent
  },
  {
    path:"another",
    component: AnotherComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
