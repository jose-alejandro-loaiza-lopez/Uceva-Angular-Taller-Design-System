import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableRow } from '../../../core/interfaces/core.interface';
import { TableBodyMolecule } from '../../molecules/table-body/table-body.molecule';
import { TableHeadMolecule } from '../../molecules/table-head/table-head.molecule';

/**
 * @component TableOrganism
 *
 * @description
 * Componente tipo **Organismo** según Atomic Design.
 * Compone las moléculas `TableHeadMolecule` (TableRowMolecule + HeaderCellAtom)
 * y `TableBodyMolecule` (TableRowMolecule + CellAtom) para conformar
 * una tabla funcional y reutilizable con estilos Bootstrap.
 *
 * @selector table[dsb-table-organism]
 *
 * @standalone true
 */
@Component({
  selector: 'table[dsb-table-organism]',
  templateUrl: './table.organism.html',
  host: { '[class]': 'getClass()' },
  imports: [TableHeadMolecule, TableBodyMolecule],
})
export class TableOrganism {
  /** Nombres de las columnas del encabezado */
  @Input() headers: string[] = [];

  /** Filas de datos del cuerpo de la tabla */
  @Input() rows: TableRow[] = [];

  /** Aplica el estilo de filas alternadas de Bootstrap */
  @Input() striped: boolean = false;

  /** Aplica el efecto hover sobre las filas */
  @Input() hoverable: boolean = true;

  /**
   * Evento emitido al seleccionar una fila de la tabla.
   *
   * @emits number Índice de la fila seleccionada
   */
  @Output() selectedRow: EventEmitter<number> = new EventEmitter<number>();

  /**
   * Construye las clases CSS del organismo según los estilos configurados.
   *
   * @returns {string} Clases Bootstrap aplicadas a la tabla
   */
  getClass(): string {
    return [
      'table',
      this.striped ? 'table-striped' : '',
      this.hoverable ? 'table-hover' : '',
      'align-middle',
    ]
      .filter(Boolean)
      .join(' ');
  }

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