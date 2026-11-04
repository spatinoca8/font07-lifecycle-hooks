import { Component, input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
})
export class TitleComponent {
  title = input.required<string>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onchanges');
    const titleChange = changes['title'];

    if (titleChange) {
      console.log('ngOnChanges TitleComponent', changes);
      console.log(`Previous: ${titleChange.previousValue}`);
      console.log(`Current: ${titleChange.currentValue}`);
      console.log(`Is first: ${titleChange.firstChange}`);
    }
  }
}
