import { writable, derived } from 'svelte/store';
import { messages } from './messages';

export const locale = writable('en');
export const locales = Object.keys(messages);

function translate(locale: string, key: string, vars: Record<string, string> = {}) {
  if (!messages[locale]) return key;
  
  let text = messages[locale][key];
  
  Object.keys(vars).forEach((k) => {
    const regex = new RegExp(`{{${k}}}`, 'g');
    text = text.replace(regex, vars[k]);
  });
  
  return text;
}

export const t = derived(locale, ($locale) => (key: string, vars = {}) => 
  translate($locale, key, vars)
);