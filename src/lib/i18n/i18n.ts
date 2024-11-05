import { writable, derived } from 'svelte/store';
import { translations } from './translations';

type Locale = keyof typeof translations;
type TranslationKey = keyof typeof translations.en;

export const locale = writable<Locale>('en');
export const locales = Object.keys(translations) as Locale[];

function translate(locale: Locale, key: TranslationKey): string {
  return translations[locale][key];
}

export const t = derived(locale, ($locale) => 
  (key: TranslationKey) => translate($locale, key)
);