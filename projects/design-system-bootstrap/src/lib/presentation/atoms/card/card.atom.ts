import { Component, Input } from '@angular/core';

/**
 * @component CardAtom
 *
 * @description
 * Componente tipo **Átomo** según Atomic Design.
 * Representa una tarjeta básica y reutilizable basada en Bootstrap,
 * con un título, un texto descriptivo y contenido proyectado mediante `ng-content`.
 *
 * @selector dsb-card-atom
 *
 * @standalone true
 */
@Component({
  selector: 'dsb-card-atom',
  templateUrl: './card.atom.html',
})
export class CardAtom {
  /** Título de la tarjeta */
  @Input({ required: true }) title: string = '';

  /** Texto descriptivo de la tarjeta */
  @Input() text: string = '';
}