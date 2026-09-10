import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardListData } from '../../../core/interfaces/core.interface';
import { BadgeAtom } from '../../atoms/badge/badge.atom';
import { ButtonAtom } from '../../atoms/button/button.atom';
import { CardAtom } from '../../atoms/card/card.atom';

/**
 * @component CardListMolecule
 *
 * @description
 * Componente tipo **Molécula** según Atomic Design.
 * Combina los átomos `CardAtom`, `BadgeAtom` y `ButtonAtom` para renderizar
 * una lista de tarjetas reutilizables con acciones.
 *
 * @selector dsb-card-list-molecule
 *
 * @standalone true
 */
@Component({
  selector: 'dsb-card-list-molecule',
  templateUrl: './card-list.molecule.html',
  imports: [CardAtom, BadgeAtom, ButtonAtom],
})
export class CardListMolecule {
  /** Lista de tarjetas a renderizar */
  @Input() cards: CardListData[] = [];

  /**
   * Evento emitido al presionar el botón de una tarjeta.
   *
   * @emits string Identificador de la tarjeta seleccionada
   */
  @Output() selectedCard: EventEmitter<string> = new EventEmitter<string>();

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