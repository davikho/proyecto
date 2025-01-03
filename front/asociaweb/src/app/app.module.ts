import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { LoginComponent } from './componentes/login/login.component';
import { CrearSocioComponent } from './componentes/crear-socio/crear-socio.component';
import { VerSociosComponent } from './componentes/ver-socios/ver-socios.component';
import { ConfiguracionesComponent } from './componentes/configuraciones/configuraciones.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    NavbarComponent,
    FooterComponent,
    AdminComponent,
    LoginComponent,
    CrearSocioComponent,
    VerSociosComponent,
    ConfiguracionesComponent,
    InicioComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
