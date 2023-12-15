import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ModulethreeComponent } from "./modulethree.component";

const routes: Routes = [
  {
    path:'',
    component:ModulethreeComponent
  }
]

@NgModule({
  declarations:[
    ModulethreeComponent
  ],
  imports:[
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class ThreeModule{}
