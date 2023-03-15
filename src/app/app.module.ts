import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HysComponent } from './hys/hys.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './educacion/neweducacion.component';
import { EditeducacionComponent } from './educacion/editeducacion.component';
import { EditSkillComponent } from './hys/edit-skill.component';
import { NewSkillComponent } from './hys/new-skill.component';
import { EditAcercaDeComponent } from './acerca-de/edit-acerca-de.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
const appRoutes:Routes=[
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  { path: 'nuevaexp', component: NewExperienciaComponent},
  { path: 'editexp/:id', component: EditExperienciaComponent},
  { path: 'nuevaedu', component: NeweducacionComponent},
  { path: 'editedu/:id', component: EditeducacionComponent},
  { path: 'newskill', component: NewSkillComponent},
  { path: 'editskill/:id', component: EditSkillComponent},
  { path: 'editacercade/:id', component: EditAcercaDeComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HysComponent,
    ProyectoComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditAcercaDeComponent
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({}),
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  exports: [RouterModule],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
