import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonType } from '../../../core/interfaces/core.interface';
import { ButtonAtom } from '../../atoms/button/button.atom';
import { InputAtom } from '../../atoms/input/input.atom';

/**
 * @component SearchFormMolecule
 *
 * @description
 * Componente tipo **Molécula** según Atomic Design.
 * Combina los átomos `InputAtom` y `ButtonAtom` para formar
 * un formulario de búsqueda funcional y reutilizable.
 *
 * @selector dsb-search-form-molecule
 *
 * @standalone true
 */
@Component({
  selector: 'dsb-search-form-molecule',
  templateUrl: './search-form.molecule.html',
  imports: [InputAtom, ButtonAtom],
})
export class SearchFormMolecule {
  /** Texto de ayuda del campo de búsqueda */
  @Input() placeholder: string = '';

  /** Texto visible del botón de búsqueda */
  @Input() buttonText: string = 'Buscar';

  /** Tipo visual del botón de búsqueda */
  @Input() buttonType: ButtonType = 'primary';

  /**
   * Evento emitido al enviar la búsqueda.
   *
   * @emits string Término de búsqueda
   */
  @Output() submitSearch: EventEmitter<string> = new EventEmitter<string>();

  /** Término de búsqueda actual */
  searchTerm: string = '';

  /**
   * Actualiza el término de búsqueda con el valor del input.
   *
   * @param value Valor escrito en el campo de búsqueda
   * @returns {void}
   */
  onInputChange(value: string): void {
    this.searchTerm = value;
  }

  /**
   * Emite el evento `submitSearch` con el término actual.
   *
   * @returns {void}
   */
  onSubmit(): void {
    this.submitSearch.emit(this.searchTerm);
  }
}