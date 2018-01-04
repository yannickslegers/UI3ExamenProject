import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {MatDialogModule,
  MatButtonModule,
  MatCardModule,
  MatSlideToggleModule,
  MatSliderModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatToolbarModule
} from '@angular/material'

import { AppComponent } from './app.component';
import { RoomComponent } from './components/room/room.component';
import { FloorComponent } from './components/floor/floor.component';
import { MyDialogComponent } from './components/roomDetail/roomDetail.component';

import {RoomService} from './services/room.service';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {HttpClientModule} from '@angular/common/http';
import {InMemoryDataService} from './services/in-memory-data.service';

import {MatIconModule} from '@angular/material';

import {RouterModule, Routes} from '@angular/router';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SettingsComponent } from './components/settings/settings.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

// Routes
const appRoutes: Routes = [
  { path: '', redirectTo: '/domotica/floor/0', pathMatch: 'full' },
  {path: 'domotica/floor/:id', component: FloorComponent},
  {path: 'domotica/floor/0', component: FloorComponent},
  {path: '**', redirectTo: '/domotica/floor/0', pathMatch: 'full' }

];

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    FloorComponent,
    MyDialogComponent,
    SettingsComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService),
    MatIconModule,
    RouterModule.forRoot(
      appRoutes, {enableTracing: true}
    ),
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [MyDialogComponent],
  providers: [RoomService],
  bootstrap: [AppComponent]
})
export class AppModule {

}

