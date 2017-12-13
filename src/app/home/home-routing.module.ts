import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsTableComponent } from 'app/posts-table/posts-table/posts-table.component';
import { UsersListComponent } from 'app/users-list/users-list/users-list.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: PostsTableComponent },
    { path: 'users', component: UsersListComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
