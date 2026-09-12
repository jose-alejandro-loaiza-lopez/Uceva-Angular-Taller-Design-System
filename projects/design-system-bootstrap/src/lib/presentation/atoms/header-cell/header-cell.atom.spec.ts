import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MOCK_HEADER_CELL_CONTENT } from '../../../mocks/cell.mocks';
import { HeaderCellAtom } from './header-cell.atom';

describe('HeaderCellAtom', () => {
  let component: HeaderCellAtom;
  let fixture: ComponentFixture<HeaderCellAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderCellAtom],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderCellAtom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('deberia inicializar content como string vacio por defecto', () => {
    expect(component.content).toBe('');
  });

  it('deberia renderizar el contenido dentro de la celda de encabezado', () => {
    component.content = MOCK_HEADER_CELL_CONTENT;
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toBe(MOCK_HEADER_CELL_CONTENT);
  });

  it('deberia actualizar el contenido cuando cambia el input', () => {
    component.content = 'Encabezado modificado';
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toBe('Encabezado modificado');
  });
});