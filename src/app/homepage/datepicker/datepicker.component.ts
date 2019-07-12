import { Component } from '@angular/core';


@Component({
  selector: 'nb-datepicker-showcase',
  template: `
        <input nbInput placeholder="Pick Date" [nbDatepicker]="formpicker">
        <nb-datepicker #formpicker></nb-datepicker>
  `,
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerShowcaseComponent {
}