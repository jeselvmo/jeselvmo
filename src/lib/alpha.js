export const decimal = {
  'en-US': '.',
  ar: '٫'
};

export const englishLocales = ['AU', 'GB', 'HK', 'IN', 'NZ', 'ZA', 'ZM'];

for (let locale, i = 0; i < englishLocales.length; i++) {
  locale = `en-${englishLocales[i]}`;
  decimal[locale] = decimal['en-US'];
}

// Source: http://www.localeplanet.com/java/
export const arabicLocales = [
  'AE',
  'BH',
  'DZ',
  'EG',
  'IQ',
  'JO',
  'KW',
  'LB',
  'LY',
  'MA',
  'QM',
  'QA',
  'SA',
  'SD',
  'SY',
  'TN',
  'YE'
];

for (let locale, i = 0; i < arabicLocales.length; i++) {
  locale = `ar-${arabicLocales[i]}`;
  decimal[locale] = decimal.ar;
}

// Source: https://en.wikipedia.org/wiki/Decimal_mark
export const dotDecimal = ['ar-EG', 'ar-LB', 'ar-LY'];
export const commaDecimal = [
  'bg-BG',
  'cs-CZ',
  'da-DK',
  'de-DE',
  'el-GR',
  'en-ZM',
  'es-ES',
  'fr-FR',
  'it-IT',
  'ku-IQ',
  'hu-HU',
  'nb-NO',
  'nn-NO',
  'nl-NL',
  'pl-PL',
  'pt-PT',
  'ru-RU',
  'sl-SI',
  'sr-RS@latin',
  'sr-RS',
  'sv-SE',
  'tr-TR',
  'uk-UA'
];

for (let i = 0; i < dotDecimal.length; i++) {
  decimal[dotDecimal[i]] = decimal['en-US'];
}

for (let i = 0; i < commaDecimal.length; i++) {
  decimal[commaDecimal[i]] = ',';
}

decimal['pt-BR'] = decimal['pt-PT'];
decimal['pl-Pl'] = decimal['pl-PL'];
