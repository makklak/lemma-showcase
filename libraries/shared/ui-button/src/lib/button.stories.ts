import { Meta, Story } from '@storybook/angular';

import {
  ControlBuilder,
  ControlCategory,
  ControlType,
} from '@vl/shared/storybook-utils';

import { ButtonComponent } from './button.component';

export default {
  title: 'Molecules/Button',
  component: ButtonComponent,
  argTypes: {
    label: new ControlBuilder('Label')
      .setCategory(ControlCategory.Texts)
      .setControlType(ControlType.Text)
      .build(),
    disabled: new ControlBuilder('Disabled')
      .setCategory(ControlCategory.Options)
      .setControlType(ControlType.Boolean)
      .build(),
    onClick: new ControlBuilder('OnClick')
      .setCategory(ControlCategory.Events)
      .action('On Click')
      .disable()
      .build(),
  },
  args: {
    label: 'Sample text',
    disabled: false,
  },
} as Meta;

const template: Story = (args) => ({
  template: `
    <button vl-button (click)="onClick($event)" [disabled]="disabled">{{label}}</button>
  `,
  props: args,
});

export const primary = template.bind({});
export const secondary = template.bind({});

secondary.args = {
  disabled: true,
};
