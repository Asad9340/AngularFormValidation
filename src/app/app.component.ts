import { Component } from '@angular/core';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { NameEditorComponent } from './components/name-editor/name-editor.component';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CarouselComponent } from './components/carousel/carousel.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserDetailsComponent,
    NameEditorComponent,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    CarouselComponent,
    OurServicesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  message: string = 'Hello from Angular & TypeScript!';
}
