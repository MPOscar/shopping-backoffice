import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
//
import { TranslateService } from '@ngx-translate/core';
//
import { ErrorHandlingService } from '../../../../../error-handling/services/error-handling.service';
import { HandledError } from '../../../../../error-handling/models/handled-error';
import { Face, State } from '../../../../../ui/modules/images-card/models/face';
import { ImageCardComponent } from '../../../../../ui/modules/image-card/components/image-card/image-card.component';
import { BaseReactiveFormComponent } from '../../../../../ui/components/base-reactive-form/base-reactive-form-component';
import { LinkShopsBrandModalComponent } from '../../../ms-shops/components/link-shops-brand/link-shops-brand-modal.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Shop } from '../../../ms-shops/models/shops';
import { ToastrService } from '../../../../../error-handling/services/toastr.service';
import { Header } from '../../models/layout';

const errorKey = 'Error';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'headers-form',
    templateUrl: './headers-form.component.html',
    styleUrls: ['./headers-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeadersFormComponent extends BaseReactiveFormComponent<Header> implements OnInit {

    @Input() faceList: Array<Face> = [];

    @Input() principal: Face;

    faces: FormControl;

    @Input() brandId: string;

    linkedShops: Array<any>;

    modalRef: MatDialogRef<LinkShopsBrandModalComponent>;

    shops: Array<Shop>;

    shops2: Array<Shop>;

    displayOnBrandsCount = 0;

    @ViewChild('shops') fileInput: ElementRef;

    @ViewChild(ImageCardComponent) imageCardComponent: ImageCardComponent;

    constructor(
        public activatedRoute: ActivatedRoute,
        public dialog: MatDialog,
        private errorHandlingService: ErrorHandlingService,
        private formBuilder: FormBuilder,
        private toastr: ToastrService,
        translateService: TranslateService) {
        super(translateService);
        // setTranslations(this.translateService, TRANSLATIONS);TODO
    }

    ngOnInit() {
        this.shops = this.activatedRoute.snapshot.data.shops;
        this.shops2 = this.activatedRoute.snapshot.data.shops;
        const validationsErrors: any[] = [
            {
                type: 'required',
                key: 'Required Field',
                params: null,
                translation: ''
            }
        ];

        this.validationErrorMessages = validationsErrors;

        this.createFormGroup();
        if (this.data.imgUrl) {
            const face: Face = {
                imgUrl: this.data.imgUrl,
                state: State.Edited
            };
            this.formGroup.get('images').setValue([face]);
            this.imageCardComponent.initialize(face);
        }
    }

    createFormGroup() {
        const urlRegexp = '(http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-\\/]))?';
        this.formGroup = new FormGroup({
            images: new FormControl(),
            display: new FormControl(this.data.display, [Validators.required]),
            label: new FormControl(this.data.label),
            displayOnPage: new FormControl(this.data.displayOnPage),
            link: new FormControl(this.data.link, [Validators.required,
                                Validators.pattern(urlRegexp)]),
        });
    }

    submitClicked() {
        if (this.formGroup.valid) {
            this.accept.emit(this.data);
        } else {
            this.triggerValidation();
        }
    }

}

