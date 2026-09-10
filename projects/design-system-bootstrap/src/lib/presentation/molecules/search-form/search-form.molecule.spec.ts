import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  MOCK_SEARCH_BUTTON_TEXT,
  MOCK_SEARCH_TERM,
} from '../../../mocks/search-form.mocks';
import { SearchFormMolecule } from './search-form.molecule';

describe('SearchFormMolecule', () => {
  let component: SearchFormMolecule;
  let fixture: ComponentFixture<SearchFormMolecule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchFormMolecule],
    }).compileComponents();
    fixture = TestBed.createComponent(SearchFormMolecule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia crear el componente', () => { expect(component).toBeTruthy(); });

  it('deberia inicializar searchTerm vacio por defecto', () => {
    expect(component.searchTerm).toBe('');
  });

  it('deberia inicializar buttonText con el valor por defecto', () => {
    expect(component.buttonText).toBe('Buscar');
  });

  it('deberia renderizar el componente con button y input', () => {
    const input = fixture.debugElement.query(By.css('dsb-input-atom'));
    const button = fixture.debugElement.query(By.css('dsb-button-atom'));
    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it('deberia pasar el texto del boton configurado', () => {
    component.buttonText = MOCK_SEARCH_BUTTON_TEXT;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('dsb-button-atom'));
    expect(button.componentInstance.text).toBe(MOCK_SEARCH_BUTTON_TEXT);
  });

  it('deberia actualizar searchTerm cuando cambia el input', () => {
    component.onInputChange(MOCK_SEARCH_TERM);
    expect(component.searchTerm).toBe(MOCK_SEARCH_TERM);
  });

  it('deberia emitir submitSearch al hacer submit', () => {
    component.searchTerm = MOCK_SEARCH_TERM;
    const spy = jest.spyOn(component.submitSearch, 'emit');
    component.onSubmit();
    expect(spy).toHaveBeenCalledWith(MOCK_SEARCH_TERM);
  });

  it('deberia emitir submitSearch al hacer click en el boton', () => {
    component.searchTerm = MOCK_SEARCH_TERM;
    const spy = jest.spyOn(component.submitSearch, 'emit');
    const button = fixture.debugElement.query(By.css('button'));
    button.nativeElement.click();
    expect(spy).toHaveBeenCalledWith(MOCK_SEARCH_TERM);
  });
});