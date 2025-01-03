import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { CrearSocioComponent } from './componentes/crear-socio/crear-socio.component';
import { VerSociosComponent } from './componentes/ver-socios/ver-socios.component';
import { ConfiguracionesComponent } from './componentes/configuraciones/configuraciones.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'admin', 
    component: AdminComponent, 
    canActivate: [AuthGuard],  // Agrega el AuthGuard aquí
    children: [
      { path: 'inicio', component: InicioComponent },
      { path: 'crear-socio', component: CrearSocioComponent },
      { path: 'ver-socios', component: VerSociosComponent },
      { path: 'configuraciones', component: ConfiguracionesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
