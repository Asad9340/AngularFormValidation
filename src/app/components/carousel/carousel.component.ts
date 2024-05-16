import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
  imports: [CommonModule],
})
export class CarouselComponent implements OnInit, OnDestroy {
  slides = [
    {
      image:
        'https://i.postimg.cc/52PmHbZ4/53c3124c37375052ac831d0670b63e1c.jpg',
      text: 'London’s best! Representing globally globally',
    },
    {
      image:
        'https://i.postimg.cc/NfD6VQG6/95a2526a4c9ed657eb771058cdaf73e2.jpg',
      text: 'London’s best! Representing globally',
    },
    {
      image:
        'https://i.postimg.cc/0NM7bmYn/ad9177fc2a3d7cbff2c2270d816268d3.jpg',
      text: 'London’s best! Representing globally',
    },
  ];

  currentSlide = 0;
  slideInterval: any;

  ngOnInit() {
    this.startSlideShow();
  }

  ngOnDestroy() {
    clearInterval(this.slideInterval);
  }

  startSlideShow() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Change slide every 3 seconds
  }

  prevSlide() {
    this.currentSlide =
      this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
  }

  nextSlide() {
    this.currentSlide =
      this.currentSlide === this.slides.length - 1 ? 0 : this.currentSlide + 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}
