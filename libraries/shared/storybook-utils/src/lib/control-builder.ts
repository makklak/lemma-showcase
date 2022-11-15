import { InputType } from '@storybook/csf/dist/story';

import { ControlCategory } from './control-category';

export enum ControlType {
  Boolean = 'boolean',
  Text = 'text',
}

type Control = InputType & {
  control?: ControlType;
  table?: Record<string, unknown>;
  [key: string]: unknown;
};

export class ControlBuilder {
  private control: Control = {};

  constructor(name?: string) {
    this.control.name = name;
  }

  build(): Readonly<Control> {
    return Object.freeze(this.control);
  }

  disable(): ControlBuilder {
    this.appendToTable('disable', true);

    return this;
  }

  action(actionName: string): ControlBuilder {
    this.control['action'] = actionName;

    return this;
  }

  setControlType(type: ControlType.Boolean): ControlBuilder;
  setControlType(type: ControlType.Text): ControlBuilder;

  setControlType(type: ControlType): ControlBuilder {
    switch (type) {
      case ControlType.Boolean:
        this.control.control = ControlType.Boolean;
        break;
      case ControlType.Text:
        this.control.control = ControlType.Text;
        break;
    }

    return this;
  }

  setCategory(category: ControlCategory): ControlBuilder {
    this.appendToTable('category', category);

    return this;
  }

  private appendToTable<T>(key: string, value: T): void {
    if (!this.control.table) {
      this.control.table = {};
    }

    this.control.table[key] = value;
  }
}
