import { HttpClient } from '@angular/common/http';

import { Movies } from '../models/movies.interface';

import { environment } from 'src/environments/environment';

export class QuickBookingService {
  calendarModalState = false;
  movieModalState = false;
  theaterModalState = false;
  alertModalState = false;
  selectedMovies = false;

  addPlus = [];  // 플러스버튼추가
  selectTitle = [];

  movies:Movies[] = [];
  selectMovie:Movies[] = [];
  
  constructor(private http: HttpClient) { }
  
  ngOnInit() {
    this.test();
  }
  
  getAll() {
    return this.http.get<Movies[]>(environment.appUrl);
  }

  test() {
    this.http.post(environment.appUrl, {
      theater: "대전",
      date: "2019-07-20"
    }).subscribe(item => console.log(item))
  }
  
  // 선택한 영화 갯수 구해서 add 버튼추가
  addPlusButton() {
    this.addPlus = [];
    
    const leng = this.selectMovie.length;

    if (leng === 4) return;

    for (let i = 0; i < 4 - leng; i++) {
      this.addPlus = [...this.addPlus, {}];
    }
  }
}
