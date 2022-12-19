import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import { SortComponent } from './sort/sort.component';
import { TablesComponent } from './tables/tables.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  {path:"addition", component: AdditionComponent},
  {path:"sort", component: SortComponent},
  {path:"table", component: TablesComponent},
  {path:"add", component: AddComponent},
  {path:"view", component: ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[
  AdditionComponent,SortComponent,TablesComponent,ViewComponent,AddComponent
]