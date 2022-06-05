import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  page: number
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  nextPage() {
  this.activatedRoute.queryParams.subscribe(({page}) => this.page = page);
  if (this.page) {
    this.page++;
  } else {
    this.page = 2;
  }

  if (this.page > 500) {
    this.page = 1;
  }

  this.router.navigate([''], {relativeTo: this.activatedRoute, queryParams: {page: `${this.page}`}}).then()
}

prevPage() {
  this.activatedRoute.queryParams.subscribe(({page}) => this.page = page);
  if (this.page) {
    this.page--;
  } else {
    this.page = 500;
  }
  if (this.page <= 0) {
    this.page = 500;
  }
  this.router.navigate([''], {relativeTo: this.activatedRoute, queryParams: {page: `${this.page}`}}).then()
}

}
