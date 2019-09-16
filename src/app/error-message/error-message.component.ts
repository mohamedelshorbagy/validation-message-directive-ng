import {
    Component, OnInit, Input,
    ChangeDetectorRef, ChangeDetectionStrategy
} from '@angular/core';

@Component({
    template: `<p class="feedback-message" [class.hide]="hide">{{ _text }}</p>`,
    styles: [
        `   
            .feedback-message {
                width: 100%;
                margin-top: .25rem;
                font-size: 80%;
                color: #dc3545;
            }
            .hide {
                display: none
            }
        `
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorMessageComponent implements OnInit {
    _text: any;
    hide: boolean;
    constructor(
        private changeDetection: ChangeDetectorRef
    ) {

    }


    @Input() set text(value) {
        if (value !== this._text) {
            this._text = value;
            this.hide = !value;
            this.changeDetection.detectChanges();
        }
    };

    ngOnInit() {

    }


}