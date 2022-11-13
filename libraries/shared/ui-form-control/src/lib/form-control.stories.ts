import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';

import {
  ControlBuilder,
  ControlCategory,
  ControlType,
} from '@vl/shared/storybook-utils';

import { FormControlComponent } from './form-control.component';

export default {
  title: 'Molecules/Form Control',
  component: FormControlComponent,
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule, FormsModule],
    }),
  ],
  argTypes: {
    value: new ControlBuilder('Value')
      .setCategory(ControlCategory.Options)
      .setControlType(ControlType.Text)
      .build(),
    disabled: new ControlBuilder('Disabled')
      .setCategory(ControlCategory.Options)
      .setControlType(ControlType.Boolean)
      .build(),
    onInput: new ControlBuilder('OnInput')
      .setCategory(ControlCategory.Events)
      .action('On Input')
      .disable()
      .build(),
  },
  args: {
    value: 'Sample value',
    disabled: false,
  },
} as Meta;

const template: Story = (args) => ({
  template: `
  <vl-form-control [(ngModel)]="value" (ngModelChange)="onInput($event)" [disabled]="disabled"></vl-form-control>
`,
  props: args,
});
export const primary = template.bind({});
export const secondary = template.bind({});

secondary.args = {
  disabled: true,
};
