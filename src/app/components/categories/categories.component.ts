import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/models/types';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy {

  @Output() searchByCategories = new EventEmitter<Array<Category>>();

  public categoriesCheckedSub!: Subscription;


  public categories: Array<Category> = [
    'people',
    'premium',
    'pets',
    'food',
    'landmarks',
    'cities',
    'nature'
  ];


  public categoriesChecked = this._formBuilder.group(
    this.categories.reduce(
      (acc: any, c: Category) => {
        acc[c] = false;
        return acc;
      }, {}
    )
  );



  ngOnInit(): void {
    this.categoriesCheckedSub = this.categoriesChecked.valueChanges.subscribe(values => { 
      const categoriesSel: Category[] = Object.keys(values)
        .filter((key) => values[key])
        .map(k => k as Category);

      this.searchByCategories.emit(categoriesSel);
      
    });
  }


  constructor(private _formBuilder: FormBuilder) { }


  ngOnDestroy(): void {
    if (this.categoriesCheckedSub) {
      this.categoriesCheckedSub.unsubscribe();
    }
  }

}
