import { Injectable } from '@angular/core';
import { Home } from './home.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  homes: Home[] = [
    {
      id: 1,
      name: 'Cozy Apartment',
      description: 'A small but cozy apartment in the city center.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrSkgYaowM_fDVrcKh7xUni4l7FWUlIo_0BA&s',
      location: 'Almaty, Kazakhstan',
    },
    {
      id: 2,
      name: 'Luxury Villa',
      description: 'Spacious villa with a pool and mountain views.',
      image: 'https://design-middleeast.com/wp-content/uploads/2021/06/Villa-Type-V5-MED-1-scaled.jpg',
      location: 'Astana, Kazakhstan',
    },
    {
      id: 3,
      name: 'Luxury Villa',
      description: 'Spacious villa with a pool and mountain views.',
      image: 'https://design-middleeast.com/wp-content/uploads/2021/06/Villa-Type-V5-MED-1-scaled.jpg',
      location: 'Astana, Kazakhstan',
    },
    {
      id: 4,
      name: 'Luxury Villa',
      description: 'Spacious villa with a pool and mountain views.',
      image: 'https://design-middleeast.com/wp-content/uploads/2021/06/Villa-Type-V5-MED-1-scaled.jpg',
      location: 'Astana, Kazakhstan',
    },
    {
      id: 5,
      name: 'Luxury Villa',
      description: 'Spacious villa with a pool and mountain views.',
      image: 'https://design-middleeast.com/wp-content/uploads/2021/06/Villa-Type-V5-MED-1-scaled.jpg',
      location: 'Astana, Kazakhstan',
    },
    {
      id: 6,
      name: 'Luxury Villa',
      description: 'Spacious villa with a pool and mountain views.',
      image: 'https://design-middleeast.com/wp-content/uploads/2021/06/Villa-Type-V5-MED-1-scaled.jpg',
      location: 'Astana, Kazakhstan',
    },
  ];

  getHomes(): Home[] {
    return this.homes;
  }
}
