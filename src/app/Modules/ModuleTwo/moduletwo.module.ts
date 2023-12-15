import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ModuletwoComponent } from "./moduletwo.component";

const routes: Routes = [
  {
    path:'',
    component:ModuletwoComponent
  }
]

@NgModule({
  declarations:[
    ModuletwoComponent
  ],
  imports:[
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class TwoModule{}
