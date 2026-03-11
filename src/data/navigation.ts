export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: 'Услуги',
    href: '/uslugi/',
    children: [
      { label: 'Терапия', href: '/uslugi/terapiya/' },
      { label: 'Имплантация', href: '/uslugi/implantaciya/' },
      { label: 'Протезирование', href: '/uslugi/protezirovanie/' },
      { label: 'Ортодонтия', href: '/uslugi/ortodontiya/' },
      { label: 'Гигиена и отбеливание', href: '/uslugi/gigiena-i-otbelivanie/' },
      { label: 'Хирургия', href: '/uslugi/hirurgiya/' },
      { label: 'Детская стоматология', href: '/uslugi/detskaya-stomatologiya/' },
      { label: 'Диагностика', href: '/uslugi/diagnostika/' },
      { label: 'Пародонтология', href: '/uslugi/parodontologiya/' },
    ],
  },
  { label: 'Врачи', href: '/vrachi/' },
  { label: 'Цены', href: '/ceny/' },
  { label: 'О клинике', href: '/o-klinike/' },
  { label: 'Блог', href: '/blog/' },
  { label: 'Контакты', href: '/kontakty/' },
];

export const footerNav = {
  services: mainNav[0].children!,
  info: [
    { label: 'О клинике', href: '/o-klinike/' },
    { label: 'Врачи', href: '/vrachi/' },
    { label: 'Лицензии', href: '/licenzii/' },
    { label: 'Отзывы', href: '/otzyvy/' },
    { label: 'Блог', href: '/blog/' },
  ],
  legal: [
    { label: 'Политика конфиденциальности', href: '/privacy/' },
  ],
};
