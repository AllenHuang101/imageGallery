import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { GalleryModal } from 'ionic-gallery-modal'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private images: any[] = [];

  constructor(public navCtrl: NavController, private modalCtrl: ModalController) {
    for (let i = 1; i < 5; i++) {
      this.images.push({
        url: `assets/imgs/${i}.jpg`
      });

      this.images[i - 1].title = `${i}.jpg`;
    }

  }

  openGallery() {
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: this.images,
      initialSlide: 0,
      closeIcon: 'back'
    });
    modal.present();
  }
}
