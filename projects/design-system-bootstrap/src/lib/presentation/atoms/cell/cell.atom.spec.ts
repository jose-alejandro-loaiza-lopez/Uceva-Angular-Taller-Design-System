import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MOCK_CELL_CONTENT } from '../../../mocks/cell.mocks';
import { CellAtom } from './cell.atom';

describe('CellAtom', () => {
  let component: CellAtom;
  let fixture: ComponentFixture<CellAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CellAtom],
    }).compileComponents();

    fixture = TestBed.createComponent(CellAtom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('deberia inicializar content como string vacio por defecto', () => {
    expect(component.content).toBe('');
  });

  it('deberia renderizar el contenido dentro de la celda', () => {
    component.content = MOCK_CELL_CONTENT;
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toBe(MOCK_CELL_CONTENT);
  });

  it('deberia actualizar el contenido cuando cambia el input', () => {
    component.content = 'Texto modificado';
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toBe('Texto modificado');
  });
});