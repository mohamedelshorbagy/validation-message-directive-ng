import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ValidationMessageDirective } from './validation-message/validation-message.directive';
import { ControlErrorContainerDirective } from './validation-message/control-container.directive';
import { ErrorMessageComponent } from './error-message/error-message.component';


@NgModule({
  declarations: [
    AppComponent,
    ValidationMessageDirective,
    ControlErrorContainerDirective,
    ErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [ErrorMessageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
