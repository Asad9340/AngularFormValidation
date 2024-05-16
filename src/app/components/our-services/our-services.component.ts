import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css',
})
export class OurServicesComponent implements OnInit {
  services = [
    {
      title: 'Moving home',
      description:
        'Moving home is stressful, but getting a mortgage doesn’t have to be. We can discuss all the different routes you can take and advise you on the best deal to suit your individual financial situation.',
    },
    {
      title: 'First time buyer',
      description:
        'Getting onto the property ladder can seem daunting unless you have the right advice and guidance. We specialise in getting mortgages for first time buyers, so you are in good hands.',
    },
    // Add more services as needed
  ];

  ngOnInit(): void {}
}
