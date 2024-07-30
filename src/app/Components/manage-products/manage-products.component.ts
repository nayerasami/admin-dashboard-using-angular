import { Component } from '@angular/core';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent {
  openDialog() {
    const modalElement = document.getElementById('popupFormModal') as HTMLElement;
    const modal = new Modal(modalElement);
    modal.show();
  }
}
