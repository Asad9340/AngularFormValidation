import { Component, Inject } from '@angular/core';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { NameEditorComponent } from './components/name-editor/name-editor.component';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CarouselComponent } from './components/carousel/carousel.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { Carousel2Component } from './components/carousel2/carousel2.component';

import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { PrivacyPolicyComponent } from "./components/privacy-policy/privacy-policy.component";
import { TableComponent } from './components/table/table.component';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserDetailsComponent,
    NameEditorComponent,
    MatIconModule,
    MatToolbarModule,
    CarouselComponent,
    OurServicesComponent,
    Carousel2Component,
    MatButtonModule,
    PrivacyPolicyComponent,
    TableComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  message: string = 'Hello from Angular & TypeScript!';
  showFullTitle = false;
  constructor(public dialog: MatDialog) {}
  newsData = [
    {
      Title:
        'Breaking News: Major Event Happens in the City That Affects Many People in Unexpected Ways',
      Description:
        'Details of the event are emerging, and it is expected to have a significant impact...',
      Date: '2024-08-28',
    },
    {
      Title: 'Technology Advances: New AI Model Changes the Industry',
      Description:
        'A new artificial intelligence model is making waves in the tech world...',
      Date: '2024-08-28',
    },
    {
      Title: 'Sports Update: Local Team Wins Championship',
      Description:
        'In an unexpected turn of events, the local team clinched the championship...',
      Date: '2024-08-28',
    },
  ];
  // openDialog() {
  //   this.dialog.open(DialogDataExampleDialog, {
  //     data: {
  //       animal: 'panda',
  //     },
  //   });
  // }




}

// @Component({
//   selector: 'dialog-data-example-dialog',
//   template: `
//     <h2 mat-dialog-title>Favorite Animal</h2>
//     <mat-dialog-content>
//       My favorite animal is:
//       <ul>
//         <li>
//           @if (data.animal === 'panda') {
//           <span>&#10003;</span>
//           } Panda
//         </li>
//         <li>
//           @if (data.animal === 'unicorn') {
//           <span>&#10003;</span>
//           } Unicorn
//         </li>
//         <li>
//           @if (data.animal === 'lion') {
//           <span>&#10003;</span>
//           } Lion
//         </li>
//       </ul>
//     </mat-dialog-content>
//   `,
//   standalone: true,
//   imports: [MatDialogTitle, MatDialogContent],
// })
// export class DialogDataExampleDialog {
//   constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
// }
