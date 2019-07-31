import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preferTheaterFilter'
})
export class PreferTheaterFilterPipe implements PipeTransform {

  transform(ChoosedTheater: any, preferId: any, preferOneState: any, preferTwoState: any, preferThreeState: any): any {
    return ChoosedTheater.filter(region => {
      if(preferId === 0 && preferOneState === '서울') { return region.region === '서울'}
      if(preferId === 0 && preferOneState === '경기') { return region.region === '경기'}
      if(preferId === 0 && preferOneState === '부산') { return region.region === '부산'}
      if(preferId === 0 && preferOneState === '지역선택') { return region.region === '지역선택'}
      if(preferId === 1 && preferTwoState === '서울') { return region.region === '서울'}
      if(preferId === 1 && preferTwoState === '경기') { return region.region === '경기'}
      if(preferId === 1 && preferTwoState === '부산') { return region.region === '부산'}
      if(preferId === 1 && preferTwoState === '지역선택') { return region.region === '지역선택'}
      if(preferId === 2 && preferThreeState === '서울') { return region.region === '서울'}
      if(preferId === 2 && preferThreeState === '경기') { return region.region === '경기'}
      if(preferId === 2 && preferThreeState === '부산') { return region.region === '부산'}
      if(preferId === 2 && preferThreeState === '지역선택') { return region.region === '지역선택'}
    });
  }

}
