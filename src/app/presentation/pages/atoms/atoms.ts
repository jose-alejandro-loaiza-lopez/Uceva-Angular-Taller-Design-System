import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  BadgeAtom,
  BadgeType,
  BadgeTypeText,
  ButtonAtom,
  ButtonType,
  CardAtom,
  ContainerAtom,
  IconAtom,
  InputAtom,
} from '@brejcha13320/design-system-bootstrap';

@Component({
  templateUrl: './atoms.html',
  imports: [
    BadgeAtom,
    ButtonAtom,
    CardAtom,
    ContainerAtom,
    IconAtom,
    InputAtom,
    CommonModule,
  ],
})
export class Atoms {
  badges: { type: BadgeType, typeText: BadgeTypeText}[] = [
    { type: 'primary', typeText: 'text-white' },
    { type: 'secondary', typeText: 'text-white' },
    { type: 'success', typeText: 'text-white' },
    { type: 'danger', typeText: 'text-white' },
    { type: 'warning', typeText: 'text-dark' },
    { type: 'info', typeText: 'text-dark' },
    { type: 'light', typeText: 'text-dark' },
    { type: 'dark', typeText: 'text-white' },
  ];

  buttons: { type: ButtonType, idButton: string}[] = [
    { type: 'primary', idButton: 'idButttonPrimary' },
    { type: 'secondary', idButton: 'idButttonSecondary' },
    { type: 'success', idButton: 'idButttonSuccess' },
    { type: 'danger', idButton: 'idButttonDanger' },
    { type: 'warning', idButton: 'idButttonWarning' },
    { type: 'info', idButton: 'idButttonInfo' },
    { type: 'light', idButton: 'idButttonLight' },
    { type: 'dark', idButton: 'idButttonDark' },
  ];

  icons: { name: string, size: number }[] = [
    { name: 'bootstrap', size: 1 },
    { name: 'apple', size: 2 },
    { name: 'bell', size: 3 },
    { name: 'android', size: 4 },
    { name: 'ban', size: 5 },
  ]

  cards: { title: string, text: string}[] = [
    { title: 'Card 1', text: 'Este es un ejemplo de tarjeta atómica.' },
  ];

  inputs: { id: string, label: string, placeholder: string, type: string }[] = [
    { id: 'inputName', label: 'Nombre', placeholder: 'Ingrese su nombre', type: 'text' },
    { id: 'inputEmail', label: 'Correo', placeholder: 'correo@ejemplo.com', type: 'email' },
    { id: 'inputPassword', label: 'Contraseña', placeholder: 'Ingrese su contraseña', type: 'password' },
  ];

  onClick(idButton: string){
    alert(`Click en el Boton ${idButton}`);
  }

  onInputChange(value: string){
    console.log('Valor del input:', value);
  }

}