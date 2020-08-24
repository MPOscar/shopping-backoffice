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
import { EditorModule } from 'primeng/editor';
//
import { ImageCardModule } from '../../../ui/modules/image-card/image-card.module';
import { AskBeforeRefreshModule } from '../../../ui/modules/ask-before-refresh/ask-before-refresh.module';
//
import { SocialNetworksFormComponent } from './components/social-networks-form/social-networks-form.component';
import { EditSocialNetworksComponent } from './components/edit-social-networks/edit-social-networks.component';

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
    MatRadioModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    TranslateModule,
    AskBeforeRefreshModule,
    ImageCardModule,
    EditorModule,
  ],
  declarations: [
    SocialNetworksFormComponent,
    EditSocialNetworksComponent,
  ],
  exports: [
    SocialNetworksFormComponent,
    EditSocialNetworksComponent,
  ],
  entryComponents: [
    EditSocialNetworksComponent,
  ]
})
export class MsSocialNetworksModule { }
