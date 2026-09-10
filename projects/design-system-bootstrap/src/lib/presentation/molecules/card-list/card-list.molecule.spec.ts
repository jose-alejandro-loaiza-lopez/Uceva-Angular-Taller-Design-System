import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MOCK_CARD_LIST_DATA } from '../../../mocks/card-list.mocks';
import { CardListMolecule } from './card-list.molecule';

describe('CardListMolecule', () => {
  let component: CardListMolecule;
  let fixture: ComponentFixture<CardListMolecule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardListMolecule],
    }).compileComponents();
    fixture = TestBed.createComponent(CardListMolecule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia crear el componente', () => { expect(component).toBeTruthy(); });

  it('deberia inicializar cards como arreglo vacio por defecto', () => {
    expect(component.cards).toEqual([]);
  });

  it('deberia renderizar la cantidad correcta de tarjetas', () => {
    component.cards = MOCK_CARD_LIST_DATA;
    fixture.detectChanges();
    const cards = fixture.debugElement.queryAll(By.css('dsb-card-atom'));
    expect(cards.length).toBe(MOCK_CARD_LIST_DATA.length);
  });

  it('deberia mostrar el titulo y texto de cada tarjeta', () => {
    component.cards = MOCK_CARD_LIST_DATA;
    fixture.detectChanges();
    const cards = fixture.debugElement.queryAll(By.css('dsb-card-atom'));
    MOCK_CARD_LIST_DATA.forEach(({ title, text }, index) => {
      expect(cards[index].componentInstance.title).toBe(title);
      expect(cards[index].componentInstance.text).toBe(text);
    });
  });

  it('deberia renderizar el boton con el texto configurado en cada tarjeta', () => {
    component.cards = MOCK_CARD_LIST_DATA;
    fixture.detectChanges();
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons.length).toBe(MOCK_CARD_LIST_DATA.length);
    MOCK_CARD_LIST_DATA.forEach(({ buttonText }, index) => {
      expect(buttons[index].nativeElement.textContent).toContain(buttonText);
    });
  });

  it('deberia emitir la key de la tarjeta al hacer click en su boton', () => {
    component.cards = MOCK_CARD_LIST_DATA;
    const spy = jest.spyOn(component.selectedCard, 'emit');
    fixture.detectChanges();
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    buttons[0].nativeElement.click();
    expect(spy).toHaveBeenCalledWith(MOCK_CARD_LIST_DATA[0].key);
  });
});