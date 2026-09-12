import { Component, Input } from '@angular/core';
import { TableCell } from '../../../core/interfaces/core.interface';
import { TableRowMolecule } from '../table-row/table-row.molecule';

/**
 * @component TableHeadMolecule
 *
 * @description
 * Componente tipo **Molécula** según Atomic Design.
 * Representa el cuerpo de encabezados (`<thead>`) de una tabla,
 * compuesto por la molécula `TableRowMolecule` con tipo `header`
 * que a su vez usa el átomo `HeaderCellAtom`.
 *
 * @selector thead[dsb-table-head-molecule]
 *
 * @standalone true
 */
@Component({
  selector: 'thead[dsb-table-head-molecule]',
  templateUrl: './table-head.molecule.html',
  imports: [TableRowMolecule],
})
export class TableHeadMolecule {
  /** Nombres de las columnas a mostrar en el encabezado */
  @Input() columns: string[] = [];

  /**
   * Convierte las columnas en celdas de encabezado.
   *
   * @returns {TableCell[]} Celdas de encabezado para la fila del `thead`
   */
  getHeaderCells(): TableCell[] {
    return this.columns.map((column) => ({ content: column }));
  }
}