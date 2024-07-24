import { Component, input, output } from '@angular/core';
import { CatalogItem } from '../../core/model/species';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
})
export class CatalogItemComponent {
  item = input.required<CatalogItem>();
  viewDetailClick = output<void>();
}
