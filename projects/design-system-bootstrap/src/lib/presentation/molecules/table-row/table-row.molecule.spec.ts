import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TableCell } from '../../../core/interfaces/core.interface';
import { MOCK_TABLE_HEADERS, MOCK_TABLE_ROWS } from '../../../mocks/table.molecule.mocks';
import { TableRowMolecule } from './table-row.molecule';

describe('TableRowMolecule', () => {
  let component: TableRowMolecule;
  let fixture: ComponentFixture<TableRowMolecule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableRowMolecule],
    }).compileComponents();

    fixture = TestBed.createComponent(TableRowMolecule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('deberia inicializar cells como arreglo vacio por defecto', () => {
    expect(component.cells).toEqual([]);
  });

  it('deberia inicializar type como body por defecto', () => {
    expect(component.type).toBe('body');
  });

  it('deberia renderizar una celda td por cada cell de tipo body', () => {
    component.cells = MOCK_TABLE_ROWS[0];
    fixture.detectChanges();
    const tds = fixture.debugElement.queryAll(By.css('td'));
    expect(tds.length).toBe(MOCK_TABLE_ROWS[0].length);
  });

  it('deberia mostrar el contenido de cada celda de tipo body', () => {
    component.cells = MOCK_TABLE_ROWS[0];
    fixture.detectChanges();
    const tds = fixture.debugElement.queryAll(By.css('td'));
    expect(tds[0].nativeElement.textContent).toBe(MOCK_TABLE_ROWS[0][0].content);
  });

  it('deberia renderizar th con scope col cuando type es header', () => {
    const headerCells: TableCell[] = MOCK_TABLE_HEADERS.map((column) => ({ content: column }));
    component.cells = headerCells;
    component.type = 'header';
    fixture.detectChanges();
    const ths = fixture.debugElement.queryAll(By.css('th'));
    expect(ths.length).toBe(MOCK_TABLE_HEADERS.length);
    expect(ths[0].nativeElement.getAttribute('scope')).toBe('col');
  });

  it('deberia mostrar el contenido de cada celda de tipo header', () => {
    const headerCells: TableCell[] = MOCK_TABLE_HEADERS.map((column) => ({ content: column }));
    component.cells = headerCells;
    component.type = 'header';
    fixture.detectChanges();
    const ths = fixture.debugElement.queryAll(By.css('th'));
    expect(ths[0].nativeElement.textContent).toBe(MOCK_TABLE_HEADERS[0]);
  });

  it('deberia emitir selectedRow al hacer click en la fila', () => {
    const spy = jest.spyOn(component.selectedRow, 'emit');
    fixture.debugElement.nativeElement.click();
    expect(spy).toHaveBeenCalled();
  });
});