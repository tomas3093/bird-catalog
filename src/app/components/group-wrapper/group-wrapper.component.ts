import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-group-wrapper',
  templateUrl: './group-wrapper.component.html',
})
export class GroupWrapperComponent {
  title = input.required<string>();
  thumbnailSrc = input.required<string>();
  groupClick = output<void>();
}
