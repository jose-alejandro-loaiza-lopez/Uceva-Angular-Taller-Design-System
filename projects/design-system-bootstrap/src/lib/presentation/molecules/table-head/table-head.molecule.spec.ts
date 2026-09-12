import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MOCK_TABLE_HEADERS } from '../../../mocks/table.molecule.mocks';
import { TableHeadMolecule } from './table-head.molecule';

describe('TableHeadMolecule', () => {
  let component: TableHeadMolecule;
  let fixture: ComponentFixture<TableHeadMolecule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableHeadMolecule],
    }).compileComponents();

    fixture = TestBed.createComponent(TableHeadMolecule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('deberia inicializar columns como arreglo vacio por defecto', () => {
    expect(component.columns).toEqual([]);
  });

  it('deberia renderizar una fila de encabezado con th por cada columna', () => {
    component.columns = MOCK_TABLE_HEADERS;
    fixture.detectChanges();
    const ths = fixture.debugElement.queryAll(By.css('th'));
    expect(ths.length).toBe(MOCK_TABLE_HEADERS.length);
  });

  it('deberia mostrar el texto de cada columna en el encabezado', () => {
    component.columns = MOCK_TABLE_HEADERS;
    fixture.detectChanges();
    const ths = fixture.debugElement.queryAll(By.css('th'));
    expect(ths[0].nativeElement.textContent).toBe(MOCK_TABLE_HEADERS[0]);
    expect(ths[2].nativeElement.textContent).toBe(MOCK_TABLE_HEADERS[2]);
  });

  it('getHeaderCells deberia convertir las columnas en TableCell', () => {
    component.columns = MOCK_TABLE_HEADERS;
    const cells = component.getHeaderCells();
    expect(cells.length).toBe(MOCK_TABLE_HEADERS.length);
    expect(cells[0].content).toBe(MOCK_TABLE_HEADERS[0]);
  });
});