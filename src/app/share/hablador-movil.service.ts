import { Injectable } from '@angular/core';
import { TextToSpeech, TTSOptions } from '@ionic-native/text-to-speech/ngx';
@Injectable({
  providedIn: 'root',
})
export class HabladorMovilService {
  constructor(private tts: TextToSpeech) {}
  hablar(cadena: string) {
    let variable: TTSOptions = {
      text: cadena,
      locale: 'es-ES',
      rate: 0,
    };
    this.tts
      .speak(variable)
      .then()
      .catch((reason: any) => alert(reason));
  }
}
