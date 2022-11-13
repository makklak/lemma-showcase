import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Optional,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

type UnaryFunction<T> = (value: T) => void;

@Component({
  selector: 'vl-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormControlComponent implements ControlValueAccessor {
  @ViewChild('inputEl', { static: true })
  readonly inputElementRef!: ElementRef<HTMLInputElement>;

  private get inputElement(): HTMLInputElement {
    return this.inputElementRef.nativeElement;
  }

  onChangeCallback?: UnaryFunction<string> = () => {
    return;
  };
  onTouchCallback?: UnaryFunction<void> = () => {
    return;
  };

  constructor(@Optional() ngControl?: NgControl) {
    if (ngControl) {
      ngControl.valueAccessor = this;
    }
  }

  registerOnChange(onChange: UnaryFunction<string>): void {
    this.onChangeCallback = onChange;
  }

  registerOnTouched(onTouch: UnaryFunction<void>): void {
    this.onTouchCallback = onTouch;
  }

  setDisabledState(disabled: boolean): void {
    this.inputElement.disabled = disabled;
  }

  writeValue(value: string): void {
    this.inputElement.value = value;
  }
}
