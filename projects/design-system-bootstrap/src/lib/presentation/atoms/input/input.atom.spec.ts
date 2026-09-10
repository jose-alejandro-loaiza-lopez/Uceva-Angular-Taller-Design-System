import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  MOCK_INPUT_ID,
  MOCK_INPUT_LABEL,
  MOCK_INPUT_PLACEHOLDER,
  MOCK_INPUT_TYPE,
  MOCK_INPUT_VALUE,
} from '../../../mocks/input.mocks';
import { InputAtom } from './input.atom';

describe('InputAtom', () => {
  let component: InputAtom;
  let fixture: ComponentFixture<InputAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [InputAtom] }).compileComponents();
    fixture = TestBed.createComponent(InputAtom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia crear el componente', () => { expect(component).toBeTruthy(); });

  it('deberia inicializar label y placeholder como string vacio por defecto', () => {
    expect(component.label).toBe('');
    expect(component.placeholder).toBe('');
  });

  it('deberia definir type por defecto como text', () => {
    expect(component.type).toBe('text');
  });

  it('no deberia renderizar label cuando esta vacio', () => {
    const label = fixture.debugElement.query(By.css('label'));
    expect(label).toBeNull();
  });

  it('deberia renderizar el label del input', () => {
    component.id = MOCK_INPUT_ID;
    component.label = MOCK_INPUT_LABEL;
    fixture.detectChanges();
    const label = fixture.debugElement.query(By.css('label'));
    expect(label).toBeTruthy();
    expect(label.nativeElement.textContent).toContain(MOCK_INPUT_LABEL);
    expect(label.attributes['for']).toBe(MOCK_INPUT_ID);
  });

  it('deberia renderizar el input con id, type y placeholder', () => {
    component.id = MOCK_INPUT_ID;
    component.type = MOCK_INPUT_TYPE;
    component.placeholder = MOCK_INPUT_PLACEHOLDER;
    fixture.detectChanges();
    const input = fixture.debugElement.query(By.css('input'));
    expect(input.attributes['id']).toBe(MOCK_INPUT_ID);
    expect(input.attributes['type']).toBe(MOCK_INPUT_TYPE);
    expect(input.attributes['placeholder']).toBe(MOCK_INPUT_PLACEHOLDER);
  });

  it('deberia emitir changeValue cuando el usuario escribe', () => {
    const spy = jest.spyOn(component.changeValue, 'emit');
    component.id = MOCK_INPUT_ID;
    fixture.detectChanges();
    const input = fixture.debugElement.query(By.css('input'));
    input.nativeElement.value = MOCK_INPUT_VALUE;
    input.nativeElement.dispatchEvent(new Event('input'));
    expect(spy).toHaveBeenCalledWith(MOCK_INPUT_VALUE);
  });
});