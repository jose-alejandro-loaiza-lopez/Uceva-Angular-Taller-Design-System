import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MOCK_TABLE_ROWS } from '../../../mocks/table.molecule.mocks';
import { TableBodyMolecule } from './table-body.molecule';

describe('TableBodyMolecule', () => {
  let component: TableBodyMolecule;
  let fixture: ComponentFixture<TableBodyMolecule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableBodyMolecule],
    }).compileComponents();

    fixture = TestBed.createComponent(TableBodyMolecule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('deberia inicializar rows como arreglo vacio por defecto', () => {
    expect(component.rows).toEqual([]);
  });

  it('deberia renderizar una fila por cada row del cuerpo', () => {
    component.rows = MOCK_TABLE_ROWS;
    fixture.detectChanges();
    const trs = fixture.debugElement.queryAll(By.css('tr'));
    expect(trs.length).toBe(MOCK_TABLE_ROWS.length);
  });

  it('deberia renderizar las celdas de cada fila del cuerpo', () => {
    component.rows = MOCK_TABLE_ROWS;
    fixture.detectChanges();
    const tds = fixture.debugElement.queryAll(By.css('td'));
    expect(tds.length).toBe(
      MOCK_TABLE_ROWS.reduce((total, row) => total + row.length, 0)
    );
  });

  it('deberia emitir selectedRow con el indice al hacer click en una fila', () => {
    component.rows = MOCK_TABLE_ROWS;
    fixture.detectChanges();
    const spy = jest.spyOn(component.selectedRow, 'emit');
    const trs = fixture.debugElement.queryAll(By.css('tr'));
    trs[1].nativeElement.click();
    expect(spy).toHaveBeenCalledWith(1);
  });

  it('deberia emitir selectedRow al hacer click en la primera fila', () => {
    component.rows = MOCK_TABLE_ROWS;
    fixture.detectChanges();
    const spy = jest.spyOn(component.selectedRow, 'emit');
    const trs = fixture.debugElement.queryAll(By.css('tr'));
    trs[0].nativeElement.click();
    expect(spy).toHaveBeenCalledWith(0);
  });
});