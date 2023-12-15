import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"moduleOne",
    loadChildren:()=>import('./Modules/ModuleOne/moduleone.module').then(m=>m.OneModule)
  },
  {
    path:"moduleTwo",
    loadChildren:()=>import('./Modules/ModuleTwo/moduletwo.module').then(m=>m.TwoModule)
  },
  {
    path:"moduleThree",
    loadChildren:()=>import('./Modules/ModuleThree/modulethree.module').then(m=>m.ThreeModule)
  },
  {
    path:"moduleFour",
    loadChildren:()=>import('./Modules/ModuleFour/modulefour.module').then(m=>m.FourModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
