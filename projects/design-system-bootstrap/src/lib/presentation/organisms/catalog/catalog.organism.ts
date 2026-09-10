import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardListData } from '../../../core/interfaces/core.interface';
import { CardListMolecule } from '../../molecules/card-list/card-list.molecule';
import { SearchFormMolecule } from '../../molecules/search-form/search-form.molecule';

/**
 * @component CatalogOrganism
 *
 * @description
 * Componente tipo **Organismo** según Atomic Design.
 * Compone las moléculas `SearchFormMolecule` (InputAtom + ButtonAtom)
 * y `CardListMolecule` (CardAtom + BadgeAtom + ButtonAtom) para conformar
 * una sección funcional de catálogo con búsqueda y filtrado en tiempo real.
 *
 * @selector dsb-catalog-organism
 *
 * @standalone true
 */
@Component({
  selector: 'dsb-catalog-organism',
  templateUrl: './catalog.organism.html',
  imports: [SearchFormMolecule, CardListMolecule],
})
export class CatalogOrganism {
  /** Lista de tarjetas a mostrar en el catálogo */
  @Input() cards: CardListData[] = [];

  /** Texto de ayuda del campo de búsqueda */
  @Input() placeholder: string = 'Buscar...';

  /**
   * Evento emitido al seleccionar una tarjeta del catálogo.
   *
   * @emits string Identificador de la tarjeta seleccionada
   */
  @Output() selectedCard: EventEmitter<string> = new EventEmitter<string>();

  /** Término de búsqueda actual */
  searchTerm: string = '';

  /**
   * Tarjetas filtradas según el término de búsqueda actual.
   *
   * @returns {CardListData[]} Lista de tarjetas que coinciden con la búsqueda
   */
  get filteredCards(): CardListData[] {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) {
      return this.cards;
    }
    return this.cards.filter(
      (card) =>
        card.title.toLowerCase().includes(term) ||
        card.text.toLowerCase().includes(term)
    );
  }

  /**
   * Actualiza el término de búsqueda recibido desde la molécula.
   *
   * @param term Término de búsqueda
   * @returns {void}
   */
  onSearch(term: string): void {
    this.searchTerm = term;
  }

  /**
   * Emite la `key` de la tarjeta seleccionada.
   *
   * @param key Identificador de la tarjeta
   * @returns {void}
   */
  onSelectCard(key: string): void {
    this.selectedCard.emit(key);
  }
}