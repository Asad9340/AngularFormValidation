import { Component } from '@angular/core';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { NameEditorComponent } from './components/name-editor/name-editor.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserDetailsComponent, NameEditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  message: string = 'Hello from Angular & TypeScript!';
}
