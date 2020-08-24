import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './authentication/components/logout/logout.component';
import { ConfigResolveService } from './config/services/config-resolve.service';
import { AuthGuardService } from './authentication/services/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/backoffice/home',
        pathMatch: 'full'
    },
    {
        path: 'backoffice',
        loadChildren: './ms-back-office/ms-back-office.module#MsBackOfficeModule',
        canActivate: [AuthGuardService],
        resolve: {
            config: ConfigResolveService
        }
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule',
        resolve: {
            config: ConfigResolveService
        }
    },
    {
        path: 'logout',
        component: LogoutComponent,
        resolve: {
            config: ConfigResolveService
        }
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthGuardService
    ]
})
export class AppRoutingModule { }
