import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-13-1713';

  public formFields = {
    signIn: {
      username: {
        labelHidden: false,
        placeholder: 'Custom Placeholder',
        isRequired: true,
        label: 'Custom Label',
      },
    },
  };
}
