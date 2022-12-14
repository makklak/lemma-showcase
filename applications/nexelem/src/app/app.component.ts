import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nex-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'Nexelem but with new title to check affected CI';
}
