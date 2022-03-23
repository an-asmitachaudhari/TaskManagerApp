import { Component, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'TaskManagerApp';

  loadedFeature: any;

  constructor() {}

  ngOnInit(): void {}

  onNavigate(feature: any) {
    this.loadedFeature = feature;
  }

  /*this.submitted = true;

  // Returns false if form is invalid
  if (this.RegisterUserData.invalid) {
    return;
  }

  console.log("Form Values" + JSON.stringify(this.RegisterUserData.value));
}*/

  /*upload(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);
  }
}*/
}
