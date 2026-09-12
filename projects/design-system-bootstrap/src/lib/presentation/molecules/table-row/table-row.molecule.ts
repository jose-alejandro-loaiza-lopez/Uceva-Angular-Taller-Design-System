import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableCell, TableRowType } from '../../../core/interfaces/core.interface';
import { CellAtom } from '../../atoms/cell/cell.atom';
import { HeaderCellAtom } from '../../atoms/header-cell/header-cell.atom';

/**
 * @component TableRowMolecule
 *
 * @description
 * Componente tipo **Molécula** según Atomic Design.
 * Representa una fila (`<tr>`) de una tabla compuesta por los átomos
 * `CellAtom` (`td`) o `HeaderCellAtom` (`th`) según el tipo de fila.
 *
 * @remarks
 * Se aplica sobre un elemento `tr` real mediante selector de atributo,
 * respetando la estructura semántica de las tablas HTML.
 *
 * @selector tr[dsb-table-row-molecule]
 *
 * @standalone true
 */
@Component({
  selector: 'tr[dsb-table-row-molecule]',
  templateUrl: './table-row.molecule.html',
  host: { '(click)': 'onSelectRow()' },
  imports: [CellAtom, HeaderCellAtom],
})
export class TableRowMolecule {
  /** Celdas que conforman la fila */
  @Input() cells: TableCell[] = [];

  /** Tipo de fila: `header` para encabezado o `body` para datos */
  @Input() type: TableRowType = 'body';

  /**
   * Evento emitido al hacer click sobre la fila.
   *
   * @emits void
   */
  @Output() selectedRow: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Emite el evento `selectedRow`.
   *
   * @returns {void}
   */
  onSelectRow(): void {
    this.selectedRow.emit();
  }
}