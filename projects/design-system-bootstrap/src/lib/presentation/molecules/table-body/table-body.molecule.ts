import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableRow } from '../../../core/interfaces/core.interface';
import { TableRowMolecule } from '../table-row/table-row.molecule';

/**
 * @component TableBodyMolecule
 *
 * @description
 * Componente tipo **Molécula** según Atomic Design.
 * Representa el cuerpo de datos (`<tbody>`) de una tabla,
 * compuesto por la molécula `TableRowMolecule` con tipo `body`
 * que a su vez usa el átomo `CellAtom`.
 *
 * @selector tbody[dsb-table-body-molecule]
 *
 * @standalone true
 */
@Component({
  selector: 'tbody[dsb-table-body-molecule]',
  templateUrl: './table-body.molecule.html',
  imports: [TableRowMolecule],
})
export class TableBodyMolecule {
  /** Filas de datos que conforman el cuerpo de la tabla */
  @Input() rows: TableRow[] = [];

  /**
   * Evento emitido al seleccionar una fila del cuerpo.
   *
   * @emits number Índice de la fila seleccionada
   */
  @Output() selectedRow: EventEmitter<number> = new EventEmitter<number>();

  /**
   * Emite el índice de la fila seleccionada.
   *
   * @param index Índice de la fila en el arreglo `rows`
   * @returns {void}
   */
  onSelectRow(index: number): void {
    this.selectedRow.emit(index);
  }
}