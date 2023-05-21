import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgcomponentsModule } from '../prime-ngcomponents/prime-ngcomponents.module';
import { UserService } from '../services/user.service';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';
interface User {
  gender?: string
  name?: string
  location?: string
  email?: string
  registered?: string
  dob?: string
  phone?: string
  id?: string
  picture?: string
  nat?: string
}
@Component({
  selector: 'prime-ng-app-user-table',
  standalone: true,
  imports: [CommonModule, PrimeNgcomponentsModule],
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent {
  users!: User[];
  data: any[] = [];
  totalRecords: number = 0;
  loading: boolean = true;
  first = 0;

  rows = 10;
  page = 1

  Nationalities = ['AU', 'BR', 'CA', 'CH', 'DE', 'DK', 'ES', 'FI', 'FR', 'GB', 'IE', 'IN', 'IR', 'MX', 'NL', 'NO', 'NZ', 'RS', 'TR', 'UA', 'US']

  constructor(private productService: UserService) { }

  ngOnInit() {
    // this.loadData(1)

  }
  Gender = [{ name: 'male' }, { name: 'female' }]


  // getUsers() {
  //   this.productService.getUser().subscribe({
  //     next: (data) => {
  //       console.log(data);
  //       this.users = data?.results

  //     },
  //     error: (err) => { },
  //     complete: () => { }
  //   })
  // }
  clear(table: Table) {
    table.clear();
  }

  onPageChange(event: any) {
    console.log('nPageChange', event)
    this.first = event.first;
    this.rows = event.rows;
  }

  loadData(page: number, filterObject: any, event?: LazyLoadEvent) {
    this.loading = true;
    // event?.first
    // event?.rows
    console.log('loadData', this.page)
    this.productService.getUser(page, 10, filterObject)
      .subscribe((response: any) => {
        console.log(response);
        this.users = response.results;
        this.totalRecords = (this.page + 1) * 10;
        this.loading = false;
      });
  }

  nextPage($event: any) {
    this.loading = true;
    this.page = ($event.first / 10) + 1
    console.log('next nextPage this.page', this.page)
    // event.first = 0
    // event.rows = 3 
    // event.sortField ='' ;
    // event.sortOrder = -1;
    //filters:{}
    //API call here
    // global
    // $any(dt2.filters['gender'][0]).value
    let nat = $event.filters.global?.value
    let gender = $event.filters['gender'][0].value as Array<any>

    let gender1 = gender[0].name as string

    console.log('nextPage gender1', gender1
    )
    console.log('nextPage $event', $event)
    this.next(gender1, nat)


  }


  next(gender?: string, nat?: string[]) {
    console.log('next',)
    let ob = { gender: gender, nat: nat }
    // this.page = this.page + 1;
    this.loadData(this.page, ob)
    this.first = this.first + this.rows;
  }

  prev() {
    console.log('prev',)
    // this.page = this.page - 1;
    // this.loadData(this.page)
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.users ? this.first === this.users.length - this.rows : true;
  }

  isFirstPage(): boolean {
    return this.users ? this.first === 0 : true;
  }
}
