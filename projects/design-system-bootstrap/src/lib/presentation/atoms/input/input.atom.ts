import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * @component InputAtom
 *
 * @description
 * Componente tipo **Átomo** según Atomic Design.
 * Representa un campo de entrada de texto reutilizable basado en Bootstrap.
 * Emite su valor cada vez que el usuario escribe.
 *
 * @selector dsb-input-atom
 *
 * @standalone true
 */
@Component({
  selector: 'dsb-input-atom',
  templateUrl: './input.atom.html',
})
export class InputAtom {
  /** Identificador único del campo */
  @Input({ required: true }) id: string = '';

  /** Etiqueta visible del campo */
  @Input() label: string = '';

  /** Texto de ayuda mostrado dentro del campo */
  @Input() placeholder: string = '';

  /** Tipo de campo (`text`, `email`, `password`, etc.) */
  @Input() type: string = 'text';

  /**
   * Evento emitido cuando cambia el valor del campo.
   *
   * @emits string Nuevo valor del campo
   */
  @Output() changeValue: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Emite el nuevo valor del campo.
   *
   * @param value Nuevo valor del input
   * @returns {void}
   */
  onChange(value: string): void {
    this.changeValue.emit(value);
  }
}