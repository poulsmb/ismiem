// Константы сайта ISMIEM
export const SITE_CONFIG = {
  name: "ISMIEM",
  fullName: "Международный семинар по математическому и информационному образованию",
  fullNameEn: "International Seminar on Mathematics and Informatics Education by Mordkovich",
  namedAfter: "им. А. Г. Мордковича",
  domain: "ISMIEM.org",
  foundedYear: 1987,
  totalSeminars: 44,
} as const;

// Навигация
export const NAV_ITEMS = [
  { label: "О семинаре", href: "/about" },
  { label: "Миссия", href: "/mission" },
  { label: "Руководители", href: "/committees" },
  { label: "Архив", href: "/archive" },
  { label: "Объявления", href: "/announcements" },
  { label: "Контакты", href: "/contact" },
] as const;

// Внешние ссылки
export const EXTERNAL_LINKS = {
  matheduCollection: "https://www.mathedu.ru/catalogue/collections/groups/#materialy_seminara_prepodavateley_matematiki_vuzov",
  mathedu43: "https://www.mathedu.ru/text/materialy_43_seminara_prepodavateley_matematiki_2024/p0/",
} as const;
