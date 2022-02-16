export type i18nLocale = {
  /** Language example en */
  lang: string;
  /** Name example en-US */
  name: string;
};

export const SUPPORTED_LOCALES: i18nLocale[] = [
  {
    name: 'en-US',
    lang: 'en',
  },
  {
    name: 'es-AR',
    lang: 'es',
  },
];
export const SUPPORTED_LANGUAGES: string[] = ['en', 'es'];

/**
 * Language used by default if no user language can be resolved.
 * Defaults to en-US
 * @type {string}
 */
export const DEFAULT_LOCALE: string = 'en';
