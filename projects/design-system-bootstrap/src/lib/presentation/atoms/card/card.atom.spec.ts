import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  MOCK_CARD_TEXT,
  MOCK_CARD_TITLE,
  MOCK_CARD_TITLE_UPDATE,
} from '../../../mocks/card.mocks';
import { CardAtom } from './card.atom';

describe('CardAtom', () => {
  let component: CardAtom;
  let fixture: ComponentFixture<CardAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [CardAtom] }).compileComponents();
    fixture = TestBed.createComponent(CardAtom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia crear el componente', () => { expect(component).toBeTruthy(); });

  it('deberia inicializar title y text como string vacio por defecto', () => {
    expect(component.title).toBe('');
    expect(component.text).toBe('');
  });

  it('deberia renderizar el contenedor de la tarjeta', () => {
    const card = fixture.debugElement.query(By.css('.card'));
    expect(card).toBeTruthy();
  });

  it('deberia renderizar el titulo de la tarjeta', () => {
    component.title = MOCK_CARD_TITLE;
    fixture.detectChanges();
    const title = fixture.debugElement.query(By.css('.card-title'));
    expect(title).toBeTruthy();
    expect(title.nativeElement.textContent).toContain(MOCK_CARD_TITLE);
  });

  it('deberia actualizar el titulo cuando cambia el input', () => {
    component.title = MOCK_CARD_TITLE;
    fixture.detectChanges();
    let title = fixture.debugElement.query(By.css('.card-title'));
    expect(title.nativeElement.textContent).toContain(MOCK_CARD_TITLE);

    component.title = MOCK_CARD_TITLE_UPDATE;
    fixture.detectChanges();
    title = fixture.debugElement.query(By.css('.card-title'));
    expect(title.nativeElement.textContent).toContain(MOCK_CARD_TITLE_UPDATE);
  });

  it('deberia renderizar el texto de la tarjeta', () => {
    component.text = MOCK_CARD_TEXT;
    fixture.detectChanges();
    const text = fixture.debugElement.query(By.css('.card-text'));
    expect(text).toBeTruthy();
    expect(text.nativeElement.textContent).toContain(MOCK_CARD_TEXT);
  });
});