import { Component } from '@angular/core';
import { 
  ButtonGroupData, 
  ButtonGroupMolecule, 
  CardListData,
  CardListMolecule,
  ContainerAtom, 
  NavLink, 
  NavLinkMolecule,
  SearchFormMolecule,
} from '@brejcha13320/design-system-bootstrap';

@Component({
  templateUrl: './molecules.html',
  imports: [
    ContainerAtom,
    ButtonGroupMolecule,
    NavLinkMolecule,
    SearchFormMolecule,
    CardListMolecule,
  ],
})
export class Molecules {
  buttonsGroupData: ButtonGroupData[] = [
    { idButton: 'idButtonPrimary', type: 'primary', text: 'Text Primary' },
    { idButton: 'idButtonSecondary', type: 'secondary', text: 'Text Secondary' },
    { idButton: 'idButtonSuccess', type: 'success', text: 'Text Success' },
    { idButton: 'idButtonDanger', type: 'danger', text: 'Text Danger' },
    { idButton: 'idButtonWarning', type: 'warning', text: 'Text Warning' },
    { idButton: 'idButtonInfo', type: 'info', text: 'Text Info' },
    { idButton: 'idButtonLight', type: 'light', text: 'Text Light' },
    { idButton: 'idButtonDark', type: 'dark', text: 'Text Dark' },
  ];

  navLinks: NavLink[] = [
    { text: 'Link 1', url: '/atoms' },
    { text: 'Link 2', url: '/molecules' },
    { text: 'Link 3', url: '/organisms' },
  ];

  onClick(idButton: string){
    alert(`Click en el Boton de Grupo ${idButton}`);
  }

  cards: CardListData[] = [
    { key: 'card-1', title: 'Tarjeta Uno', text: 'Descripción de la primera tarjeta', badge: 'Nuevo', buttonText: 'Ver' },
    { key: 'card-2', title: 'Tarjeta Dos', text: 'Descripción de la segunda tarjeta', buttonText: 'Ver' },
    { key: 'card-3', title: 'Tarjeta Tres', text: 'Descripción de la tercera tarjeta', badge: 'Pro', badgeType: 'dark', buttonText: 'Comprar' },
  ];

  onSelectCard(key: string){
    alert(`Tarjeta seleccionada ${key}`);
  }

  onSubmitSearch(term: string){
    alert(`Buscando: ${term}`);
  }
}
