import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel2.component.html',
  styleUrls: ['./carousel2.component.css'],
})
export class Carousel2Component {
  currentSlide = 0;
  itemsPerPage = 3;
  items = [
    {
      image:
        'https://i.postimg.cc/52PmHbZ4/53c3124c37375052ac831d0670b63e1c.jpg',
      title: 'Mortgage Network',
      description:
        'If you are interested in processing company provided cases, you will have support from the admin team at all times. You will receive...',
    },
    {
      image:
        'https://i.postimg.cc/NfD6VQG6/95a2526a4c9ed657eb771058cdaf73e2.jpg',
      title: 'Registered Individuals',
      description:
        'Join us as a self employed Mortgage and Protection Adviser. You will get full compliance support. Our compliance system is tech...',
    },
    {
      image:
        'https://i.postimg.cc/0NM7bmYn/ad9177fc2a3d7cbff2c2270d816268d3.jpg',
      title: 'Specialist Transaction',
      description:
        'We have access to specialist lenders, Private Equity and Institutional Investors. We can provide you access to specialist structuring...',
    },
    {
      image:
        'https://i.postimg.cc/NfD6VQG6/95a2526a4c9ed657eb771058cdaf73e2.jpg',
      title: 'Training',
      description:
        'We encourage you to join our training program. Our team of highly...',
    },
  ];

  getTransform() {
    return `translateX(-${this.currentSlide * (100 / this.itemsPerPage)}%)`;
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  nextSlide() {
    if (this.currentSlide < this.items.length - this.itemsPerPage) {
      this.currentSlide++;
    }
  }
}
