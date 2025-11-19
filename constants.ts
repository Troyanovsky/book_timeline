import { Book, HistoricalPeriod, CountryCode } from './types';

export const BOOKS: Book[] = [
  {
    id: '1',
    title: 'Les Misérables',
    author: 'Victor Hugo',
    country: CountryCode.FR,
    startYear: 1815,
    endYear: 1832,
    pubYear: 1862,
    description: 'Following the lives of several characters, focusing on the struggles of ex-convict Jean Valjean and his experience of redemption.',
    tags: ['Classic', 'Revolution', 'Social']
  },
  {
    id: '2',
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    country: CountryCode.RU,
    startYear: 1805,
    endYear: 1820,
    pubYear: 1869,
    description: 'Chronicles the French invasion of Russia and the impact of the Napoleonic era on Tsarist society through the stories of five Russian aristocratic families.',
    tags: ['War', 'Philosophy', 'Epic']
  },
  {
    id: '3',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    country: CountryCode.UK,
    startYear: 1811,
    endYear: 1812,
    pubYear: 1813,
    description: 'A romantic novel of manners that follows the character development of Elizabeth Bennet.',
    tags: ['Romance', 'Satire']
  },
  {
    id: '4',
    title: 'A Tale of Two Cities',
    author: 'Charles Dickens',
    country: CountryCode.FR, // Set in both, primary context often FR revolution
    startYear: 1775,
    endYear: 1793,
    pubYear: 1859,
    description: 'Set in London and Paris before and during the French Revolution.',
    tags: ['Historical', 'Revolution']
  },
  {
    id: '5',
    title: 'Gone with the Wind',
    author: 'Margaret Mitchell',
    country: CountryCode.US,
    startYear: 1861,
    endYear: 1873,
    pubYear: 1936,
    description: 'Set in Clayton County and Atlanta, Georgia, during the American Civil War and Reconstruction Era.',
    tags: ['Civil War', 'Romance']
  },
  {
    id: '6',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    country: CountryCode.US,
    startYear: 1922,
    endYear: 1922,
    pubYear: 1925,
    description: 'A portrait of the Jazz Age in all its decadence and excess.',
    tags: ['Jazz Age', 'Tragedy']
  },
  {
    id: '7',
    title: 'All Quiet on the Western Front',
    author: 'Erich Maria Remarque',
    country: CountryCode.DE,
    startYear: 1914,
    endYear: 1918,
    pubYear: 1929,
    description: 'Describes the German soldiers\' extreme physical and mental stress during the war.',
    tags: ['WWI', 'Anti-war']
  },
  {
    id: '8',
    title: 'For Whom the Bell Tolls',
    author: 'Ernest Hemingway',
    country: CountryCode.ES,
    startYear: 1937,
    endYear: 1937,
    pubYear: 1940,
    description: 'It tells the story of Robert Jordan, a young American volunteer attached to a Republican guerrilla unit during the Spanish Civil War.',
    tags: ['War', 'Adventure']
  },
  {
    id: '9',
    title: 'The Grapes of Wrath',
    author: 'John Steinbeck',
    country: CountryCode.US,
    startYear: 1930,
    endYear: 1939,
    pubYear: 1939,
    description: 'Set during the Great Depression, the novel focuses on the Joads, a poor family of tenant farmers driven from their Oklahoma home.',
    tags: ['Depression', 'Social']
  },
  {
    id: '10',
    title: 'Middlemarch',
    author: 'George Eliot',
    country: CountryCode.UK,
    startYear: 1829,
    endYear: 1832,
    pubYear: 1871,
    description: 'A study of provincial life in the fictional Midlands town of Middlemarch.',
    tags: ['Realism', 'Society']
  },
  {
    id: '11',
    title: 'Wolf Hall',
    author: 'Hilary Mantel',
    country: CountryCode.UK,
    startYear: 1500,
    endYear: 1535,
    pubYear: 2009,
    description: 'A fictionalized biography documenting the rapid rise to power of Thomas Cromwell in the court of Henry VIII.',
    tags: ['Historical', 'Tudor']
  },
  {
    id: '12',
    title: 'The Three Musketeers',
    author: 'Alexandre Dumas',
    country: CountryCode.FR,
    startYear: 1625,
    endYear: 1628,
    pubYear: 1844,
    description: 'Recounts the adventures of a young man named d\'Artagnan after he leaves home to travel to Paris.',
    tags: ['Adventure', 'Classic']
  }
];

export const PERIODS: HistoricalPeriod[] = [
  // France
  { id: 'fp1', country: CountryCode.FR, name: 'French Revolution', startYear: 1789, endYear: 1799, type: 'war', description: 'Period of radical political and societal change in France.' },
  { id: 'fp2', country: CountryCode.FR, name: 'Napoleonic Wars', startYear: 1803, endYear: 1815, type: 'war', description: 'A series of major global conflicts pitted the French Empire against various coalitions.' },
  { id: 'fp3', country: CountryCode.FR, name: 'Bourbon Restoration', startYear: 1815, endYear: 1830, type: 'political', description: 'Return of the House of Bourbon to the throne.' },
  { id: 'fp4', country: CountryCode.FR, name: 'July Monarchy', startYear: 1830, endYear: 1848, type: 'political', description: 'A liberal constitutional monarchy under Louis Philippe I.' },

  // UK
  { id: 'ukp1', country: CountryCode.UK, name: 'Regency Era', startYear: 1811, endYear: 1820, type: 'era', description: 'A sub-period of the Georgian era, noted for its elegance and achievements in the fine arts.' },
  { id: 'ukp2', country: CountryCode.UK, name: 'Victorian Era', startYear: 1837, endYear: 1901, type: 'era', description: 'Period of Queen Victoria\'s reign, characterized by industrial expansion and moral strictness.' },
  { id: 'ukp3', country: CountryCode.UK, name: 'Tudor Period', startYear: 1485, endYear: 1603, type: 'era', description: 'The period between the end of the Wars of the Roses and the accession of James I.' },

  // USA
  { id: 'usp1', country: CountryCode.US, name: 'Civil War', startYear: 1861, endYear: 1865, type: 'war', description: 'War fought between the Union and the Confederacy.' },
  { id: 'usp2', country: CountryCode.US, name: 'Reconstruction', startYear: 1865, endYear: 1877, type: 'political', description: 'Period following the Civil War of rebuilding the South.' },
  { id: 'usp3', country: CountryCode.US, name: 'Roaring Twenties', startYear: 1920, endYear: 1929, type: 'era', description: 'A period of economic prosperity and cultural dynamism.' },
  { id: 'usp4', country: CountryCode.US, name: 'Great Depression', startYear: 1929, endYear: 1939, type: 'era', description: 'Severe worldwide economic depression.' },

  // Russia
  { id: 'rup1', country: CountryCode.RU, name: 'Napoleonic Invasion', startYear: 1812, endYear: 1812, type: 'war', description: 'The Patriotic War of 1812.' },
  { id: 'rup2', country: CountryCode.RU, name: 'Reign of Nicholas I', startYear: 1825, endYear: 1855, type: 'political', description: 'Reactionary period marked by geographical expansion and economic stagnation.' },

  // Germany
  { id: 'dep1', country: CountryCode.DE, name: 'World War I', startYear: 1914, endYear: 1918, type: 'war', description: 'Global war originating in Europe.' },
  { id: 'dep2', country: CountryCode.DE, name: 'Weimar Republic', startYear: 1918, endYear: 1933, type: 'political', description: 'The German state between 1918 and 1933.' },

  // Spain
  { id: 'esp1', country: CountryCode.ES, name: 'Spanish Civil War', startYear: 1936, endYear: 1939, type: 'war', description: 'Military revolt against the Republican government of Spain.' }
];
