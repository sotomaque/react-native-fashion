// import { initReactI18next } from 'react-i18next';
// import { format } from 'date-fns';
// // Only bundle the locales that we need in the application.
// import enUS from 'date-fns/locale/en-US';
// import pt from 'date-fns/locale/pt';
// import i18n, { FormatFunction, LanguageDetectorModule } from 'i18next';

// import resourcesEN from '../../lang/en.json';
// import resourcesPT from '../../lang/pt.json';
// import uomEN from '../../lang/uom.en.json';
// import uomPT from '../lang/uom.pt.json';

// const languageToLocale: Record<string, Locale> = {
//   en: enUS,
//   pt,
// };
// const defaultLocale = enUS;

// const formatDate: FormatFunction = (date, dateFormat, language) => {
//   const locale = languageToLocale[language || ''] || defaultLocale;
//   return format(date, dateFormat || '', { locale });
// };

// const formatValue: FormatFunction = (value, format, language) => {
//   if (value instanceof Date) {
//     return formatDate(value, format, language);
//   }
//   return value.toString();
// };

// const fallback = 'en';
// export const I18NextNamespace = 'shared';
// const uomNamespace = 'uom';
// const namespaces = [I18NextNamespace, uomNamespace];

// const i18nextConfiguration = {
//   fallbackLng: fallback,
//   resources: {
//     en: {
//       [I18NextNamespace]: resourcesEN,
//       [uomNamespace]: uomEN,
//     },
//     pt: {
//       [I18NextNamespace]: resourcesPT,
//       [uomNamespace]: uomPT,
//     },
//   },
//   ns: namespaces,
//   defaultNS: I18NextNamespace,
//   interpolation: {
//     escapeValue: false,
//     format: formatValue,
//   },
// };

// export const supportedLocales = {
//   en: 'English',
//   pt: 'Português',
// };

// let onInitialized: (value: unknown) => void;
// const i18nInitialized = new Promise((resolve) => {
//   onInitialized = resolve;
// });

// export const initI18n = (
//   languageDetector: LanguageDetectorModule
// ): Promise<void> =>
//   i18n
//     .use(languageDetector)
//     .use(initReactI18next)
//     .init(i18nextConfiguration)
//     .then(onInitialized);

// export const i18nModule = i18n;

// export const addI18nResourceBundle = async (
//   language: string,
//   namespace: string,
//   resources: Record<string, unknown>
// ): Promise<void> => {
//   await i18nInitialized;
//   i18n.addResourceBundle(language, namespace, resources);
// };
