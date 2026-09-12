import { Component, Input } from '@angular/core';

/**
 * @component CellAtom
 *
 * @description
 * Componente tipo **Átomo** según Atomic Design.
 * Representa una celda de datos (`<td>`) dentro de una tabla.
 *
 * @remarks
 * Se aplica sobre un elemento `td` real mediante selector de atributo,
 * respetando la estructura semántica que exige el parser HTML para tablas
 * y permitiendo que el propio host reciba clases CSS adicionales.
 *
 * @selector td[dsb-cell-atom]
 *
 * @standalone true
 */
@Component({
  selector: 'td[dsb-cell-atom]',
  templateUrl: './cell.atom.html',
})
export class CellAtom {
  /**
   * Contenido visible de la celda.
   *
   * @type {string}
   * @default ''
   */
  @Input() content: string = '';
}