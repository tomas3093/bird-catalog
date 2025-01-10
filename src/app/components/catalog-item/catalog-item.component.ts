import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CatalogItem, SpeciesName } from '../../core/model/species';
import { ImageModule } from 'primeng/image';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { LocalizedNamePipe } from '../../core/pipes/LocalizedNamePipe';
import { TooltipModule } from 'primeng/tooltip';
import { TypedTranslatePipe } from '../../core/pipes/TypedTranslatePipe';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ImageModule, TagModule, ButtonModule, LocalizedNamePipe, TooltipModule, TypedTranslatePipe]
})
export class CatalogItemComponent {
  speciesName = input.required<SpeciesName>();
  thumbnailSrc = input.required<string>();
  viewDetailClick = output<void>();
}
