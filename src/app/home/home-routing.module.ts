import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsTableComponent } from 'app/posts-table/posts-table/posts-table.component';
import { UsersListComponent } from 'app/users-list/users-list/users-list.component';
import { UserDetailsComponent } from 'app/user-details/user-details/user-details.component';
import { HomeComponent } from 'app/home/home/home.component';
import { AuthGuard } from 'app/core/auth.guard';

const routes: Routes = [
    {
        path: '', component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', pathMatch: 'full', component: PostsTableComponent },
            { path: 'users', component: UsersListComponent },
            { path: 'users/:id', component: UserDetailsComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
