import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { NosotrosComponent } from './routes/nosotros/nosotros.component';
import { Page404Component } from './routes/page404/page404.component';
import { ServiciosComponent } from './routes/servicios/servicios.component';


const routes: Routes = [
  {path: "", pathMatch:"full",redirectTo:"/home"},
  {path:"home", component:HomeComponent},
  {path:"nosotros", component:NosotrosComponent },
  {path:"servicios", component:ServiciosComponent},
  {path:"**", component:Page404Component}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
