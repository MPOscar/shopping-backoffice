import { LayoutModule } from '@angular/cdk/layout';
import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
//
import { AuthenticationModule } from './authentication/authentication.module';
import { ConfigModule } from './config/config.module';
import { ErrorHandlingModule } from './error-handling/error-handling.module';
import { HttpRequestIndicatorModule } from './http-request-indicator/http-request-indicator.module';
import { LoadingComponent } from './http-request-indicator/components/loading/loading.component';
import { UiModule } from './ui/ui.module';
import { ConfirmDialogComponent } from './ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component';
import { ConfirmDialogMessageComponent } from './ui/modules/confirm-dialog-message/components/confirm-dialog-message/confirm-dialog-message.component';
import { ValidationModule } from './validation/validation.module';
import { NgrxModule } from './ngrx/ngrx.module';

import { CustomSnackbarComponent } from "./error-handling/modules/custom-snackbar/components/custom-snackbar/custom-snackbar.component";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => {
    // for development
    /*return new TranslateHttpLoader(
        http,
        '/start-javascript/sb-admin-material/master/dist/assets/i18n/',
        '.json'
    );*/
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
    declarations: [
        AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        OverlayModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        //
        AppRoutingModule,
        AuthenticationModule,
        ConfigModule,
        ErrorHandlingModule,
        HttpRequestIndicatorModule,
        NgrxModule,
        UiModule,
        ValidationModule,
        // DragulaModule.forRoot()
        NgxMaterialTimepickerModule,
    ],
    providers: [],
    entryComponents: [
        ConfirmDialogComponent,
        ConfirmDialogMessageComponent,
        CustomSnackbarComponent,
        LoadingComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
