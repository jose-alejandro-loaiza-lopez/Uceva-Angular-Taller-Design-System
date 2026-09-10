import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MOCK_CATALOG_CARDS, MOCK_CATALOG_PLACEHOLDER } from '../../../mocks/catalog.mocks';
import { CardListMolecule } from '../../molecules/card-list/card-list.molecule';
import { SearchFormMolecule } from '../../molecules/search-form/search-form.molecule';
import { CatalogOrganism } from './catalog.organism';

describe('CatalogOrganism', () => {
  let component: CatalogOrganism;
  let fixture: ComponentFixture<CatalogOrganism>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogOrganism, SearchFormMolecule, CardListMolecule],
    }).compileComponents();
    fixture = TestBed.createComponent(CatalogOrganism);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia crear el componente', () => { expect(component).toBeTruthy(); });

  it('deberia inicializar cards como arreglo vacio por defecto', () => {
    expect(component.cards).toEqual([]);
  });

  it('deberia inicializar searchTerm vacio por defecto', () => {
    expect(component.searchTerm).toBe('');
  });

  it('deberia renderizar la molecula de busqueda', () => {
    const search = fixture.debugElement.query(By.css('dsb-search-form-molecule'));
    expect(search).toBeTruthy();
  });

  it('deberia pasar el placeholder al SearchFormMolecule', () => {
    component.placeholder = MOCK_CATALOG_PLACEHOLDER;
    fixture.detectChanges();
    const search = fixture.debugElement.query(By.css('dsb-search-form-molecule'));
    expect(search.componentInstance.placeholder).toBe(MOCK_CATALOG_PLACEHOLDER);
  });

  it('deberia renderizar la molecula de lista de tarjetas', () => {
    const list = fixture.debugElement.query(By.css('dsb-card-list-molecule'));
    expect(list).toBeTruthy();
  });

  it('deberia pasar todas las tarjetas al CardListMolecule', () => {
    component.cards = MOCK_CATALOG_CARDS;
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('dsb-card-list-molecule'));
    expect(list.componentInstance.cards.length).toBe(MOCK_CATALOG_CARDS.length);
  });

  it('filteredCards deberia retornar todas las tarjetas cuando no hay busqueda', () => {
    component.cards = MOCK_CATALOG_CARDS;
    expect(component.filteredCards.length).toBe(MOCK_CATALOG_CARDS.length);
  });

  it('filteredCards deberia filtrar las tarjetas por titulo', () => {
    component.cards = MOCK_CATALOG_CARDS;
    component.onSearch('angular');
    expect(component.filteredCards.length).toBe(1);
    expect(component.filteredCards[0].title).toBe('Angular Design');
  });

  it('filteredCards deberia filtrar las tarjetas por texto', () => {
    component.cards = MOCK_CATALOG_CARDS;
    component.onSearch('pruebas');
    expect(component.filteredCards.length).toBe(1);
    expect(component.filteredCards[0].title).toBe('Jest Testing');
  });

  it('filteredCards deberia retornar vacio cuando no hay coincidencias', () => {
    component.cards = MOCK_CATALOG_CARDS;
    component.onSearch('no-existe');
    expect(component.filteredCards.length).toBe(0);
  });

  it('filteredCards deberia ser sensible a mayusculas y espacios', () => {
    component.cards = MOCK_CATALOG_CARDS;
    component.onSearch('  ANGULAR  ');
    expect(component.filteredCards.length).toBe(1);
    expect(component.filteredCards[0].title).toBe('Angular Design');
  });

  it('deberia emitir selectedCard al seleccionar una tarjeta', () => {
    const spy = jest.spyOn(component.selectedCard, 'emit');
    component.onSelectCard('catalog-1');
    expect(spy).toHaveBeenCalledWith('catalog-1');
  });

  it('deberia emitir selectedCard al hacer click en una tarjeta', () => {
    component.cards = MOCK_CATALOG_CARDS;
    const spy = jest.spyOn(component.selectedCard, 'emit');
    fixture.detectChanges();
    const cardList = fixture.debugElement.query(By.css('dsb-card-list-molecule'));
    const buttons = cardList.queryAll(By.css('button'));
    buttons[0].nativeElement.click();
    expect(spy).toHaveBeenCalledWith(MOCK_CATALOG_CARDS[0].key);
  });
});