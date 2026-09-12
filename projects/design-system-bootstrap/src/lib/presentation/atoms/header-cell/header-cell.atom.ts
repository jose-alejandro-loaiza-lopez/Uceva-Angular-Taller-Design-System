import { Component, Input } from '@angular/core';

/**
 * @component HeaderCellAtom
 *
 * @description
 * Componente tipo **Átomo** según Atomic Design.
 * Representa una celda de encabezado (`<th>`) dentro de una tabla.
 *
 * @remarks
 * Se aplica sobre un elemento `th` real mediante selector de atributo,
 * respetando la estructura semántica que exige el parser HTML para tablas.
 * El `scope="col"` debe definirse desde la plantilla que lo compone
 * para mantener la accesibilidad.
 *
 * @selector th[dsb-header-cell-atom]
 *
 * @standalone true
 */
@Component({
  selector: 'th[dsb-header-cell-atom]',
  templateUrl: './header-cell.atom.html',
})
export class HeaderCellAtom {
  /**
   * Contenido visible de la celda de encabezado.
   *
   * @type {string}
   * @default ''
   */
  @Input() content: string = '';
}