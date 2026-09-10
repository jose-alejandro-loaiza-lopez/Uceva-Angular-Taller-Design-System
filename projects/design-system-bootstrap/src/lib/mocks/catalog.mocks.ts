import { CardListData } from '../core/interfaces/core.interface';

export const MOCK_CATALOG_PLACEHOLDER = 'Buscar en el catalogo';

export const MOCK_CATALOG_CARDS: CardListData[] = [
  { key: 'catalog-1', title: 'Angular Design', text: 'Libreria de componentes para Angular', badge: 'Nuevo', buttonText: 'Ver' },
  { key: 'catalog-2', title: 'Bootstrap Icons', text: 'Iconos para interfaces modernas', buttonText: 'Ver' },
  { key: 'catalog-3', title: 'Jest Testing', text: 'Pruebas unitarias con Jest', badge: 'Pro', badgeType: 'dark', buttonText: 'Comprar' },
];