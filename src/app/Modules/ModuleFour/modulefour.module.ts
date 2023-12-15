import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ModulefourComponent } from "./modulefour.component";

const routes: Routes = [
  {
    path:'',
    component:ModulefourComponent
  }
]

@NgModule({
  declarations:[
    ModulefourComponent
  ],
  imports:[
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class FourModule{}
