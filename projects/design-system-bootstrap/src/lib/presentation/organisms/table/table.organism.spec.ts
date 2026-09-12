import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MOCK_TABLE_HEADERS, MOCK_TABLE_ROWS } from '../../../mocks/table.molecule.mocks';
import { TableBodyMolecule } from '../../molecules/table-body/table-body.molecule';
import { TableHeadMolecule } from '../../molecules/table-head/table-head.molecule';
import { TableOrganism } from './table.organism';

describe('TableOrganism', () => {
  let component: TableOrganism;
  let fixture: ComponentFixture<TableOrganism>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableOrganism, TableHeadMolecule, TableBodyMolecule],
    }).compileComponents();

    fixture = TestBed.createComponent(TableOrganism);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('deberia inicializar headers como arreglo vacio por defecto', () => {
    expect(component.headers).toEqual([]);
  });

  it('deberia inicializar rows como arreglo vacio por defecto', () => {
    expect(component.rows).toEqual([]);
  });

  it('deberia inicializar striped en false y hoverable en true por defecto', () => {
    expect(component.striped).toBe(false);
    expect(component.hoverable).toBe(true);
  });

  it('deberia renderizar la molecula de encabezado cuando hay headers', () => {
    component.headers = MOCK_TABLE_HEADERS;
    fixture.detectChanges();
    const thead = fixture.debugElement.query(By.css('thead'));
    expect(thead).toBeTruthy();
  });

  it('deberia pasar los encabezados al TableHeadMolecule', () => {
    component.headers = MOCK_TABLE_HEADERS;
    fixture.detectChanges();
    const thead = fixture.debugElement.query(By.css('thead'));
    expect(thead.componentInstance.columns).toEqual(MOCK_TABLE_HEADERS);
  });

  it('deberia renderizar un th por cada encabezado', () => {
    component.headers = MOCK_TABLE_HEADERS;
    fixture.detectChanges();
    const ths = fixture.debugElement.queryAll(By.css('th'));
    expect(ths.length).toBe(MOCK_TABLE_HEADERS.length);
  });

  it('deberia renderizar la molecula de cuerpo', () => {
    const tbody = fixture.debugElement.query(By.css('tbody'));
    expect(tbody).toBeTruthy();
  });

  it('deberia pasar las filas al TableBodyMolecule', () => {
    component.rows = MOCK_TABLE_ROWS;
    fixture.detectChanges();
    const tbody = fixture.debugElement.query(By.css('tbody'));
    expect(tbody.componentInstance.rows.length).toBe(MOCK_TABLE_ROWS.length);
  });

  it('deberia renderizar una fila por cada row', () => {
    component.rows = MOCK_TABLE_ROWS;
    fixture.detectChanges();
    const trs = fixture.debugElement.queryAll(By.css('tr'));
    expect(trs.length).toBe(MOCK_TABLE_ROWS.length);
  });

  it('deberia emitir selectedRow con el indice al hacer click en una fila', () => {
    component.rows = MOCK_TABLE_ROWS;
    fixture.detectChanges();
    const spy = jest.spyOn(component.selectedRow, 'emit');
    const trs = fixture.debugElement.queryAll(By.css('tr'));
    trs[1].nativeElement.click();
    expect(spy).toHaveBeenCalledWith(1);
  });

  it('getClass deberia retornar las clases base por defecto', () => {
    expect(component.getClass()).toBe('table table-hover align-middle');
  });

  it('getClass deberia agregar table-striped cuando striped es true', () => {
    component.striped = true;
    expect(component.getClass()).toContain('table-striped');
  });

  it('getClass deberia omitir table-hover cuando hoverable es false', () => {
    component.hoverable = false;
    expect(component.getClass()).not.toContain('table-hover');
  });
});