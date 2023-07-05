import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { AboutComponent } from '../../pages/about/about.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { DatabaseComponent } from '../../pages/database/database.component';
import { AdminComponent } from '../../pages/admin/admin.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'database',       component: DatabaseComponent },
    { path: 'about',          component: AboutComponent },
    { path: 'admin',          component: AdminComponent },
];
