import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Category } from './category.model'
import { Hotel } from '../hotel-list/hotel.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  public categories: Category[];
  constructor() { }

  ngOnInit(): void {
   var hotelsCategoryOne = [
      new Hotel("Hotel Liebman", "Ideally located in the prime touristic area of Lassnitzhohe, Hotel Liebmann promises a relaxing and wonderful visit. The hotel offers a high standard of service to suit the needs of all travelers.", "100", "assets/img/hotel4.jpg", 4.0, 10.0, "Graz"),
      new Hotel("Mercure Graz City", "The exclusive 4-star Mercure Graz City Hotel is located in the center of Graz-the City of Design-near the old town, the farmers' market, the Schlossberg and the Graz conference center.", "200", "assets/img/hotel2.jpg", 3.75, 8.0, "Graz"),
      new Hotel("Hotel Gollner", "Set in a prime location of Graz, Hotel Gollner puts everything the city has to offer just outside your doorstep offering a variety of facilities and services.", "300", "assets/img/hotel3.jpg", 2.5, 1.0, "Graz")
      ];
    this.categories = [
      new Category("Romantic", hotelsCategoryOne),
      new Category("Adventure", hotelsCategoryOne),
      new Category("Holiday", null),
      new Category("Wellness", null),
      new Category("Family", null),
      new Category("Camping", null)
    ];
  }

  filteredCategories(filteredCategoryList: any[]){
    this.categories = filteredCategoryList;
  }

  onCategoryClick(index: number){
    
  }
}
