import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Podcast } from '../models/podcast.model';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {
  private apiUrl = 'http://localhost:8080/api/podcast';

  constructor(private http: HttpClient) {}

  getAllPodcasts(): Observable<Podcast[]> {
    return this.http.get<Podcast[]>(this.apiUrl);
  }

  getPodcastById(id: string): Observable<Podcast> {
    return this.http.get<Podcast>(`${this.apiUrl}/${id}`);
  }

  createPodcast(podcast: Podcast): Observable<Podcast> {
    return this.http.post<Podcast>(this.apiUrl, podcast);
  }
}
