/**
 * @module components/common
 * @description Библиотека переиспользуемых компонентов сайта ISMIEM
 * 
 * Компоненты разделены на категории:
 * - **Layout** - структурные компоненты страниц (PageHero, SectionCard, InfoBanner)
 * - **Data Display** - отображение данных (StatsBar, Timeline, NumberedList, TagCloud)
 * - **Cards** - карточки контента (FeatureCard, SeminarCard, LeaderCard, AnnouncementCard)
 * - **Pages** - шаблоны страниц (LeaderPage)
 * - **Media** - медиа-компоненты (PhotoGallery)
 * - **Forms** - формы и интерактив (ContactForm, FAQSection)
 * - **Navigation** - навигация (CTAButtons)
 * 
 * @example
 * ```tsx
 * import { PageHero, SectionCard, StatsBar } from "@/components/common";
 * ```
 */

// Layout - структурные компоненты страниц
export { PageHero } from "./PageHero";
export { SectionCard } from "./SectionCard";
export { InfoBanner } from "./InfoBanner";

// Data Display - отображение данных
export { StatsBar } from "./StatsBar";
export { Timeline } from "./Timeline";
export { NumberedList } from "./NumberedList";
export { TagCloud } from "./TagCloud";

// Cards - карточки контента
export { FeatureCard } from "./FeatureCard";
export { SeminarCard } from "./SeminarCard";
export { LeaderCard } from "./LeaderCard";
export { AnnouncementCard, UpcomingEventCard } from "./AnnouncementCard";
export type { AnnouncementData, UpcomingEventData } from "./AnnouncementCard";

// Pages - шаблоны страниц
export { default as LeaderPage } from "./LeaderPage";
export type { LeaderData } from "./LeaderPage";

// Media - медиа-компоненты
export { PhotoGallery } from "./PhotoGallery";

// Forms - формы и интерактив
export { ContactForm } from "./ContactForm";
export { FAQSection } from "./FAQSection";

// Navigation - навигация
export { CTAButtons } from "./CTAButtons";
