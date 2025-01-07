import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-group-wrapper',
  templateUrl: './group-wrapper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ImageModule]
})
export class GroupWrapperComponent {
  title = input.required<string>();
  thumbnailSrc = input.required<string>();
  groupClick = output<void>();
}
