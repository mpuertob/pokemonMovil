import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListaService } from './share/lista.service';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { HabladorMovilService } from './share/hablador-movil.service';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ListaService,
    TextToSpeech,
    HabladorMovilService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
