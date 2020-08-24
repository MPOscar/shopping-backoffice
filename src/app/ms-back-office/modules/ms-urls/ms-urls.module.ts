import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatPaginatorModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import {
  MatAutocompleteModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule,
  MatNativeDateModule, MatRadioModule, MatSliderModule, MatSlideToggleModule
} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
//
import { AskBeforeRefreshModule } from '../../../ui/modules/ask-before-refresh/ask-before-refresh.module';
import { ErrorMessagesModule } from '../../../ui/modules/error-messages/error-messages.module';
//
import { UrlFormComponent } from './components/url-form/url-form.component';
import { UrlsTableComponent } from './components/urls-table/urls-table.component';
import { DeleteUrlComponent } from './components/delete-url/delete-url.component';
import { EditUrlComponent } from './components/edit-url/edit-url.component';
import { MsUrlsRoutingModule } from './ms-urls-routing.module';
import { NewUrlComponent } from './components/new-url/new-url.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    TranslateModule,
    MsUrlsRoutingModule,
    AskBeforeRefreshModule,
    ErrorMessagesModule,
  ],
  declarations: [
    UrlFormComponent,
    UrlsTableComponent,    
    DeleteUrlComponent,    
    EditUrlComponent,
    NewUrlComponent    
  ],
  exports: [
    UrlFormComponent,
    UrlsTableComponent,    
    DeleteUrlComponent,    
    EditUrlComponent,
    NewUrlComponent 
  ],
  entryComponents: [
    NewUrlComponent,
    EditUrlComponent,
  ]
})
export class MsUrlsModule { }
