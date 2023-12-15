import { NgModule } from "@angular/core";
import { ModuleoneComponent } from "./moduleone.component";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path:'',
    component:ModuleoneComponent
  }
]

@NgModule({
  declarations:[
    ModuleoneComponent
  ],
  imports:[
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class OneModule{}
