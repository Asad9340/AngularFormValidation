import { Component } from '@angular/core';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { NameEditorComponent } from './components/name-editor/name-editor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserDetailsComponent, NameEditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  message: string = 'Hello from Angular & TypeScript!';
}
