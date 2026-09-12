import { Component } from '@angular/core';
import {
  CardListData,
  CatalogOrganism,
  ContainerAtom,
  NavbarConfig,
  NavbarOrganism,
  TableOrganism,
  TableRow,
} from '@brejcha13320/design-system-bootstrap';

@Component({
  selector: 'app-organisms',
  templateUrl: './organisms.html',
  imports: [NavbarOrganism, CatalogOrganism, TableOrganism, ContainerAtom],
})
export class Organisms {
  navbarConfig: NavbarConfig = {
    title: 'Taller Sistema de Diseño',
    iconConfig: {
      icon: 'bootstrap',
      size: 2
    },
    navLinks: [
      { text: 'Átomos', url: '/atoms' },
      { text: 'Moléculas', url: '/molecules' },
      { text: 'Organismos', url: '/organisms' },
    ]
  }

  catalogCards: CardListData[] = [
    { key: 'card-1', title: 'Card 1', text: 'Descripción de la primera tarjeta', badge: 'Nuevo', buttonText: 'Ver' },
    { key: 'card-2', title: 'Card 2', text: 'Descripción de la segunda tarjeta', buttonText: 'Ver' },
    { key: 'card-3', title: 'Card 3', text: 'Descripción de la tercera tarjeta', badge: 'Pro', badgeType: 'dark', buttonText: 'Comprar' },
  ];

  onSelectCatalogCard(key: string){
    alert(`Tarjeta del catálogo seleccionada: ${key}`);
  }

  tableHeaders: string[] = ['Nombre', 'Edad', 'Ciudad'];

  tableRows: TableRow[] = [
    [{ content: 'Juan Perez' }, { content: '25' }, { content: 'Cali' }],
    [{ content: 'Ana Gomez' }, { content: '30' }, { content: 'Bogota' }],
    [{ content: 'Luis Mora' }, { content: '28' }, { content: 'Medellin' }],
  ];

  onSelectTableRow(index: number){
    alert(`Fila de la tabla seleccionada: ${index}`);
  }
}
