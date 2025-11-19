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
  },
  {
    id: '13',
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    country: CountryCode.UK,
    startYear: 1770,
    endYear: 1802,
    pubYear: 1847,
    description: 'A tragic love story set in the Yorkshire moors, following the intense and destructive relationship between Catherine Earnshaw and Heathcliff.',
    tags: ['Romance', 'Gothic', 'Tragedy']
  },
  {
    id: '14',
    title: 'One Hundred Years of Solitude',
    author: 'Gabriel García Márquez',
    country: CountryCode.CO,
    startYear: 1900,
    endYear: 1967,
    pubYear: 1967,
    description: 'Multi-generational saga of the Buendía family in the fictional town of Macondo, blending magical realism with Latin American history.',
    tags: ['Magical Realism', 'Family Saga', 'Latin American']
  },
  {
    id: '15',
    title: 'Love in the Time of Cholera',
    author: 'Gabriel García Márquez',
    country: CountryCode.CO,
    startYear: 1880,
    endYear: 1930,
    pubYear: 1985,
    description: 'A love story spanning over fifty years between Florentino Ariza and Fermina Daza, set against the backdrop of Caribbean society.',
    tags: ['Romance', 'Magical Realism', 'Latin American']
  },
  {
    id: '16',
    title: 'The Moon and Sixpence',
    author: 'W. Somerset Maugham',
    country: CountryCode.FR,
    startYear: 1890,
    endYear: 1915,
    pubYear: 1919,
    description: 'Based on the life of Paul Gauguin, following Charles Strickland who abandons his family to become an artist in Paris and Tahiti.',
    tags: ['Art', 'Biographical', 'Fiction']
  },
  {
    id: '17',
    title: 'The Sun Also Rises',
    author: 'Ernest Hemingway',
    country: CountryCode.ES,
    startYear: 1925,
    endYear: 1925,
    pubYear: 1926,
    description: 'Follows a group of American and British expatriates who travel from Paris to Pamplona to watch the bullfights.',
    tags: ['Lost Generation', 'Modernism', 'War Trauma']
  },
  {
    id: '18',
    title: 'Buddenbrooks',
    author: 'Thomas Mann',
    country: CountryCode.DE,
    startYear: 1835,
    endYear: 1876,
    pubYear: 1901,
    description: 'Chronicles the decline of a wealthy German merchant family over four generations, exploring themes of business, art, and morality.',
    tags: ['Family Saga', 'Decline', 'German Literature']
  },
  {
    id: '19',
    title: 'Berlin Alexanderplatz',
    author: 'Alfred Döblin',
    country: CountryCode.DE,
    startYear: 1927,
    endYear: 1928,
    pubYear: 1929,
    description: 'Tells the story of Franz Biberkopf, a small-time criminal who tries to reform in Weimar-era Berlin.',
    tags: ['Modernism', 'Urban', 'Crime']
  },
  {
    id: '20',
    title: 'The Tin Drum (Die Blechtrommel)',
    author: 'Günter Grass',
    country: CountryCode.DE,
    startYear: 1924,
    endYear: 1954,
    pubYear: 1959,
    description: 'A surreal novel about Oskar Matzerath, who decides to stop growing at age three and communicates through his tin drum.',
    tags: ['Magical Realism', 'WWII', 'Postwar']
  },
  {
    id: '21',
    title: 'The Reader (Der Vorleser)',
    author: 'Bernhard Schlink',
    country: CountryCode.DE,
    startYear: 1958,
    endYear: 1995,
    pubYear: 1995,
    description: 'Explores the relationship between a young man and an older woman, later revealing her past as a Nazi guard.',
    tags: ['Postwar', 'Holocaust', 'Moral']
  }
];

export const PERIODS: HistoricalPeriod[] = [
  // France
  { id: 'fp1', country: CountryCode.FR, name: 'French Revolution', startYear: 1789, endYear: 1799, type: 'war', description: 'Period of radical political and societal change in France.' },
  { id: 'fp2', country: CountryCode.FR, name: 'Napoleonic Wars', startYear: 1803, endYear: 1815, type: 'war', description: 'A series of major global conflicts pitted the French Empire against various coalitions.' },
  { id: 'fp3', country: CountryCode.FR, name: 'Bourbon Restoration', startYear: 1815, endYear: 1830, type: 'political', description: 'Return of the House of Bourbon to the throne.' },
  { id: 'fp4', country: CountryCode.FR, name: 'July Monarchy', startYear: 1830, endYear: 1848, type: 'political', description: 'A liberal constitutional monarchy under Louis Philippe I.' },
  { id: 'fp5', country: CountryCode.FR, name: 'Belle Époque', startYear: 1871, endYear: 1914, type: 'era', description: 'Period of peace and prosperity in France before World War I.' },

  // UK
  { id: 'ukp1', country: CountryCode.UK, name: 'Georgian Era', startYear: 1714, endYear: 1820, type: 'era', description: 'Period of the Hanoverian kings, including the Regency sub-period.' },
  { id: 'ukp2', country: CountryCode.UK, name: 'Regency Era', startYear: 1811, endYear: 1820, type: 'era', description: 'A sub-period of the Georgian era, noted for its elegance and achievements in the fine arts.' },
  { id: 'ukp3', country: CountryCode.UK, name: 'Victorian Era', startYear: 1837, endYear: 1901, type: 'era', description: 'Period of Queen Victoria\'s reign, characterized by industrial expansion and moral strictness.' },
  { id: 'ukp4', country: CountryCode.UK, name: 'Tudor Period', startYear: 1485, endYear: 1603, type: 'era', description: 'The period between the end of the Wars of the Roses and the accession of James I.' },
  { id: 'ukp5', country: CountryCode.UK, name: 'Edwardian Era', startYear: 1901, endYear: 1910, type: 'era', description: 'Period of King Edward VII\'s reign, marked by social change and technological progress.' },

  // USA
  { id: 'usp1', country: CountryCode.US, name: 'Civil War', startYear: 1861, endYear: 1865, type: 'war', description: 'War fought between the Union and the Confederacy.' },
  { id: 'usp2', country: CountryCode.US, name: 'Reconstruction', startYear: 1865, endYear: 1877, type: 'political', description: 'Period following the Civil War of rebuilding the South.' },
  { id: 'usp3', country: CountryCode.US, name: 'Roaring Twenties', startYear: 1920, endYear: 1929, type: 'era', description: 'A period of economic prosperity and cultural dynamism.' },
  { id: 'usp4', country: CountryCode.US, name: 'Great Depression', startYear: 1929, endYear: 1939, type: 'era', description: 'Severe worldwide economic depression.' },

  // Russia
  { id: 'rup1', country: CountryCode.RU, name: 'Napoleonic Invasion', startYear: 1812, endYear: 1812, type: 'war', description: 'The Patriotic War of 1812.' },
  { id: 'rup2', country: CountryCode.RU, name: 'Reign of Nicholas I', startYear: 1825, endYear: 1855, type: 'political', description: 'Reactionary period marked by geographical expansion and economic stagnation.' },

  // Germany
  { id: 'dep1', country: CountryCode.DE, name: 'German Confederation', startYear: 1815, endYear: 1866, type: 'political', description: 'Association of German-speaking states created by the Congress of Vienna.' },
  { id: 'dep2', country: CountryCode.DE, name: 'German Empire', startYear: 1871, endYear: 1918, type: 'political', description: 'Period of the German Empire under Kaiser Wilhelm I and II.' },
  { id: 'dep3', country: CountryCode.DE, name: 'World War I', startYear: 1914, endYear: 1918, type: 'war', description: 'Global war originating in Europe.' },
  { id: 'dep4', country: CountryCode.DE, name: 'Weimar Republic', startYear: 1918, endYear: 1933, type: 'political', description: 'The German state between 1918 and 1933.' },
  { id: 'dep5', country: CountryCode.DE, name: 'World War II', startYear: 1939, endYear: 1945, type: 'war', description: 'Global war involving Germany and the Axis powers.' },
  { id: 'dep6', country: CountryCode.DE, name: 'Postwar Germany', startYear: 1945, endYear: 1990, type: 'era', description: 'Period of reconstruction and division into East and West Germany.' },
  { id: 'dep7', country: CountryCode.DE, name: 'Reunified Germany', startYear: 1990, endYear: 2000, type: 'political', description: 'Period following German reunification.' }

  // Spain
  { id: 'esp1', country: CountryCode.ES, name: 'Spanish Civil War', startYear: 1936, endYear: 1939, type: 'war', description: 'Military revolt against the Republican government of Spain.' },
  { id: 'esp2', country: CountryCode.ES, name: 'Generation of \'27', startYear: 1923, endYear: 1936, type: 'era', description: 'Influential group of poets, writers, and artists in Spain.' },

  // Colombia
  { id: 'cop1', country: CountryCode.CO, name: 'Thousand Days\' War', startYear: 1899, endYear: 1902, type: 'war', description: 'Civil war between Liberal and Conservative parties.' },
  { id: 'cop2', country: CountryCode.CO, name: 'Colombian Conservative Era', startYear: 1886, endYear: 1930, type: 'political', description: 'Period of Conservative Party dominance.' },
  { id: 'cop3', country: CountryCode.CO, name: 'La Violencia', startYear: 1948, endYear: 1958, type: 'war', description: 'Period of civil conflict between Liberal and Conservative parties.' },
  { id: 'cop4', country: CountryCode.CO, name: 'National Front', startYear: 1958, endYear: 1974, type: 'political', description: 'Power-sharing agreement between Liberal and Conservative parties.' },

  // Mexico
  { id: 'mep1', country: CountryCode.MX, name: 'Porfiriato', startYear: 1876, endYear: 1911, type: 'political', description: 'Era of Porfirio Díaz\'s authoritarian rule.' },
  { id: 'mep2', country: CountryCode.MX, name: 'Mexican Revolution', startYear: 1910, endYear: 1920, type: 'war', description: 'Major armed struggle that fundamentally transformed Mexican culture and government.' },
  { id: 'mep3', country: CountryCode.MX, name: 'Maximato', startYear: 1928, endYear: 1934, type: 'political', description: 'Period of transitional presidents under Plutarco Elías Calles\' influence.' }
];
