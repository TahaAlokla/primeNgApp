import { useAnimation } from '@angular/animations';
import { Route } from '@angular/router';
import { UserTableComponent } from './user-table/user-table.component';

export const appRoutes: Route[] = [
    {path:'',component:UserTableComponent}
  
];
