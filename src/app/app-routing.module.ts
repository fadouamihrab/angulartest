import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowallComponent } from './components/showall/showall.component';
import { PatisserieComponent } from './components/patisserie/patisserie.component';
import { SaladeComponent } from './components/salade/salade.component';
import { CuisineComponent } from './components/cuisine/cuisine.component';
import { RigisterComponent } from './contact/rigister/rigister.component';
import { LoginComponent } from './contact/login/login.component';


const routes: Routes = [


{path:"",component:ShowallComponent},
{path:"patisserie",component:PatisserieComponent},
{path:"salade",component:SaladeComponent},
{path:"cuisine",component:CuisineComponent},
{path:"rigister",component:RigisterComponent},
{path:"login",component:LoginComponent},










];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
