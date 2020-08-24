import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
//
import { AuthService } from './authentication/services/auth.service';
import { SvgIconsService } from './ui/services/svg-icons.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(
        private authService: AuthService,
        private svgIconsService: SvgIconsService,
        private translate: TranslateService) {
        translate.setDefaultLang('en');
        this.authService.loginCommands = ['/login'];
        this.authService.afterLoginCommands = ['/backoffice'];
        this.authService.logoutCommands = ['/logout'];
        this.authService.changePasswordCommands = ['/change-password'];
    }
}
