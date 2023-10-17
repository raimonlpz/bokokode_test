import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';



@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {

  @Input() totalProducts: number = 0;
  @Output() searchProductsByPage = new EventEmitter<number>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {}

  onPaginateChange(event: any) {
    this.searchProductsByPage.emit(event.pageIndex + 1);
  }
 
  firstPage(): void {
    this.paginator.firstPage();
  }
}
