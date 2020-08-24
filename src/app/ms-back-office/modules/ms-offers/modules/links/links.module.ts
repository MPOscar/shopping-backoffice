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
import { AskBeforeRefreshModule } from '../../../../../ui/modules/ask-before-refresh/ask-before-refresh.module';
import { ErrorMessagesModule } from '../../../../../ui/modules/error-messages/error-messages.module';
//
import { LinkFormComponent } from './components/link-form/link-form.component';
import { LinksTableComponent } from './components/links-table/links-table.component';
import { DeleteLinkComponent } from './components/delete-link/delete-link.component';
import { EditLinkComponent } from './components/edit-link/edit-link.component';
import { NewLinkComponent } from './components/new-link/new-link.component';



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
    AskBeforeRefreshModule,
    ErrorMessagesModule
  ],
  declarations: [
    LinkFormComponent,
    LinksTableComponent,    
    DeleteLinkComponent,    
    EditLinkComponent,
    NewLinkComponent    
  ],
  exports: [
    LinkFormComponent,
    LinksTableComponent,    
    DeleteLinkComponent,    
    EditLinkComponent,
    NewLinkComponent 
  ],
  entryComponents: [
    NewLinkComponent,
    EditLinkComponent,
  ]
})
export class MsLinksModule { }
