import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterResponse } from '../models/http-get-all-charachers.interface';
import { DisneyCharactersServicesModule } from './disney-charcters-services.module';

@Injectable({ providedIn: DisneyCharactersServicesModule })
export class DisneyApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'https://api.disneyapi.dev';

  getAllCharacters(): Observable<CharacterResponse> {
    console.log('i got them');
    return this.http.get<CharacterResponse>(`${this.baseUrl}/characters`);
  }
}
