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
  { id: 'fp1', country: CountryCode.FR, name: 'French Revolution', startYear: 1789, endYear: 1799, type: 'war', description: 'Period of radical political and societal change in France.', detailedDescription: 'The French Revolution was a period of radical political and societal change in France that began with the Estates General of 1789 and ended with the formation of the French Consulate in November 1799. Many of its ideas are considered fundamental principles of liberal democracy, while phrases like liberté, égalité, fraternité reappeared in other revolts, such as the 1917 Russian Revolution.' },
  { id: 'fp2', country: CountryCode.FR, name: 'Napoleonic Wars', startYear: 1803, endYear: 1815, type: 'war', description: 'A series of major global conflicts pitted the French Empire against various coalitions.', detailedDescription: 'The Napoleonic Wars were a series of major global conflicts fought during Napoleon Bonaparte\'s imperial rule over France (1805–1815). They formed a continuation of the wars sparked by the French Revolution of 1789. The wars revolutionized European armies and played out on an unprecedented scale, mainly owing to the application of modern mass conscription. French power rose quickly, conquering most of Europe by the end of 1807, but collapsed rapidly after France\'s disastrous invasion of Russia in 1812.' },
  { id: 'fp3', country: CountryCode.FR, name: 'Bourbon Restoration', startYear: 1815, endYear: 1830, type: 'political', description: 'Return of the House of Bourbon to the throne.', detailedDescription: 'The Bourbon Restoration was the period of French history during which the House of Bourbon returned to power after the first fall of Napoleon on 6 April 1814. The Bourbon Restoration lasted until the July Revolution of 26 July 1830. Louis XVIII and Charles X, brothers of the executed Louis XVI, successively mounted the throne and instituted a conservative government intended to restore the proprieties, if not all the institutions, of the Ancien Régime.' },
  { id: 'fp4', country: CountryCode.FR, name: 'July Monarchy', startYear: 1830, endYear: 1848, type: 'political', description: 'A liberal constitutional monarchy under Louis Philippe I.', detailedDescription: 'The July Monarchy was a liberal constitutional monarchy in France under Louis Philippe I, starting on 26 July 1830, with the July Revolution of 1830, and ending 23 February 1848, with the Revolution of 1848. It marks the end of the Bourbon Restoration (1814–1830). It began with the overthrow of the conservative government of Charles X, the last king of the House of Bourbon. Louis Philippe, a member of the more liberal Orléans branch of the House of Bourbon, proclaimed himself as Roi des Français ("King of the French") rather than "King of France".' },
  { id: 'fp5', country: CountryCode.FR, name: 'Belle Époque', startYear: 1871, endYear: 1914, type: 'era', description: 'Period of peace and prosperity in France before World War I.', detailedDescription: 'The Belle Époque was a period of French and European history that is conventionally dated as starting in 1871 and ending when World War I began in 1914. Occurring during the era of the Third French Republic, it was a period characterized by optimism, regional peace, economic prosperity, colonial expansion, and technological, scientific, and cultural innovations. In this era of France\'s cultural and artistic climate, the arts flourished with numerous masterpieces of literature, music, theater, and visual art gaining recognition.' },
  { id: 'fp6', country: CountryCode.FR, name: 'Second Empire', startYear: 1852, endYear: 1870, type: 'political', description: 'The imperial Bonapartist regime of Napoleon III.', detailedDescription: 'The Second French Empire was the Imperial Bonapartist regime of Napoleon III from 1852 to 1870, between the Second Republic and the Third Republic. The period was one of significant economic growth and urban renewal in Paris under Baron Haussmann. Napoleon III pursued an active foreign policy in Europe, Mexico, and the Far East. The regime promoted industrial development, banking, and railway construction. However, it ended in defeat with the Franco-Prussian War, leading to Napoleon III\'s capture at the Battle of Sedan and the proclamation of the Third Republic.' },
  { id: 'fp7', country: CountryCode.FR, name: 'Franco-Prussian War', startYear: 1870, endYear: 1871, type: 'war', description: 'War between France and Prussia that led to German unification.', detailedDescription: 'The Franco-Prussian War was a conflict between the Second French Empire and the Kingdom of Prussia. Prussian Chancellor Otto von Bismarck planned the war as part of his strategy to unify Germany under Prussian leadership. The French were decisively defeated, Napoleon III was captured, and the war led to the end of the Second Empire and the proclamation of the German Empire at Versailles. France lost the provinces of Alsace and Lorraine, which became a source of friction between France and Germany for decades. The defeat deeply impacted French national consciousness and contributed to revanchist sentiment.' },
  { id: 'fp8', country: CountryCode.FR, name: 'World War I', startYear: 1914, endYear: 1918, type: 'war', description: 'The Great War, with France as a major Allied power.', detailedDescription: 'World War I was a devastating conflict for France, fought primarily on French soil in the Western Front. France mobilized over 8 million soldiers and suffered approximately 1.4 million military deaths, one of the highest casualty rates of any nation. Major battles included Verdun and the Somme. The war was characterized by trench warfare, massive artillery bombardments, and enormous loss of life. France emerged victorious as part of the Allied powers, regaining Alsace-Lorraine, but the war left deep scars on French society, economy, and an entire generation. The Treaty of Versailles was signed at the Palace of Versailles in 1919.' },
  { id: 'fp9', country: CountryCode.FR, name: 'World War II & Occupation', startYear: 1939, endYear: 1945, type: 'war', description: 'Nazi occupation of France and the Resistance.', detailedDescription: 'World War II saw France defeated by Nazi Germany in June 1940, leading to the division of the country into an occupied zone in the north and west, and the collaborationist Vichy regime in the south. The French Resistance (La Résistance) fought against the occupation through sabotage, intelligence gathering, and armed struggle. General Charles de Gaulle led the Free French Forces from London. The period was marked by deportation of Jews to concentration camps, collaboration, resistance, and eventual liberation in 1944-1945. The war profoundly affected French identity and politics for generations.' },

  // UK
  { id: 'ukp1', country: CountryCode.UK, name: 'Georgian Era', startYear: 1714, endYear: 1820, type: 'era', description: 'Period of the Hanoverian kings, including the Regency sub-period.', detailedDescription: 'The Georgian era was a period in British history from 1714 to c. 1830–37, named after the Hanoverian kings George I, George II, George III and George IV. The definition of the Georgian era is often extended to include the relatively short reign of William IV, which ended with his death in 1837. The era was marked by significant developments in the arts, architecture, and culture, as well as the beginning of the Industrial Revolution. It was also a time of political stability and the expansion of the British Empire.' },
  { id: 'ukp2', country: CountryCode.UK, name: 'Regency Era', startYear: 1811, endYear: 1820, type: 'era', description: 'A sub-period of the Georgian era, noted for its elegance and achievements in the fine arts.', detailedDescription: 'The Regency era of British history officially spanned the years 1811 to 1820, though the term is commonly applied to the extended period from c. 1795 to 1837. King George III had become permanently insane in 1810, and his eldest son, the Prince of Wales, ruled as his proxy as Prince Regent. The Regency is noted for its elegance and achievements in the fine arts and architecture. This period saw the emergence of Regency architecture and was marked by distinctive trends in British architecture, literature, fashions, politics, and culture.' },
  { id: 'ukp3', country: CountryCode.UK, name: 'Victorian Era', startYear: 1837, endYear: 1901, type: 'era', description: 'Period of Queen Victoria\'s reign, characterized by industrial expansion and moral strictness.', detailedDescription: 'The Victorian era was the period of Queen Victoria\'s reign, from 20 June 1837 until her death on 22 January 1901. The era followed the Georgian period and preceded the Edwardian period, and its later half overlaps with the first part of the Belle Époque era of Continental Europe. It was a long period of peace, prosperity, refined sensibilities and national self-confidence for Britain. Some scholars date the beginning of the period in terms of sensibilities and political concerns to the passage of the Reform Act 1832.' },
  { id: 'ukp4', country: CountryCode.UK, name: 'Tudor Period', startYear: 1485, endYear: 1603, type: 'era', description: 'The period between the end of the Wars of the Roses and the accession of James I.', detailedDescription: 'The Tudor period occurred between 1485 and 1603 in England and Wales and includes the Elizabethan period during the reign of Elizabeth I until 1603. The Tudor period coincides with the dynasty of the House of Tudor in England whose first monarch was Henry VII. Historian John Guy argued that "England was economically healthier, more expansive, and more optimistic under the Tudors" than at any time since the Roman occupation. The period saw the English Reformation, the expansion of trade, and the beginnings of English colonialism.' },
  { id: 'ukp5', country: CountryCode.UK, name: 'Edwardian Era', startYear: 1901, endYear: 1910, type: 'era', description: 'Period of King Edward VII\'s reign, marked by social change and technological progress.', detailedDescription: 'The Edwardian era or Edwardian period of British history spanned the reign of King Edward VII, 1901 to 1910, and is sometimes extended to the start of the First World War. The death of Queen Victoria in January 1901 marked the end of the Victorian era. The Edwardian era is often seen as a golden age of peace and prosperity, though this was more true for the upper and middle classes than for the working class. The era was characterized by significant social, political, and technological changes, including the rise of the Labour Party and the suffragette movement.' },
  { id: 'ukp6', country: CountryCode.UK, name: 'English Civil War', startYear: 1642, endYear: 1651, type: 'war', description: 'Wars between Parliamentarians and Royalists that led to the execution of Charles I.', detailedDescription: 'The English Civil War was a series of civil wars and political machinations between Parliamentarians ("Roundheads") and Royalists ("Cavaliers") over the manner of England\'s governance and issues of religious freedom. The wars led to the trial and execution of Charles I in 1649, the exile of his son Charles II, and the replacement of English monarchy with the Commonwealth of England (1649–1653) and then with a Protectorate (1653–1659) under Oliver Cromwell\'s personal rule. The period fundamentally changed the balance of power between Parliament and the monarchy.' },
  { id: 'ukp7', country: CountryCode.UK, name: 'Restoration Period', startYear: 1660, endYear: 1688, type: 'political', description: 'Return of the monarchy under Charles II and James II.', detailedDescription: 'The Restoration of the English monarchy began in 1660 when Charles II returned to the throne following the republican Commonwealth period. The Restoration was marked by a flowering of literature and drama, scientific advancement through the Royal Society, and religious tensions between Anglicans, Catholics, and Dissenters. The period saw the Great Plague of London (1665) and the Great Fire of London (1666). It ended with the Glorious Revolution of 1688, when James II was deposed and replaced by William III and Mary II, establishing parliamentary supremacy and Protestant succession.' },
  { id: 'ukp8', country: CountryCode.UK, name: 'Industrial Revolution', startYear: 1760, endYear: 1840, type: 'era', description: 'Period of rapid industrial and technological change.', detailedDescription: 'The Industrial Revolution was a period of major industrialization and innovation that transformed Britain from an agrarian society into an industrial powerhouse. It began in Britain and spread to other parts of the world. Key developments included the steam engine, mechanized textile production, iron and steel manufacturing, improved transportation (canals and railways), and urbanization. The revolution created enormous wealth but also significant social problems including poor working conditions, child labor, urban overcrowding, and pollution. It fundamentally changed British society, economy, and its position in the world.' },
  { id: 'ukp9', country: CountryCode.UK, name: 'World War I', startYear: 1914, endYear: 1918, type: 'war', description: 'The Great War, Britain\'s involvement as a major Allied power.', detailedDescription: 'World War I was a catastrophic conflict for Britain, resulting in approximately 880,000 British military deaths and over 1.6 million wounded. Britain entered the war in August 1914 following Germany\'s invasion of Belgium. British forces fought on the Western Front, in Gallipoli, the Middle East, and other theaters. The war saw the introduction of new weapons including tanks and poison gas. Major battles included the Somme, Passchendaele, and Ypres. The war profoundly impacted British society, decimating a generation of young men, changing women\'s roles, and beginning the decline of the British Empire. The "Lost Generation" became a defining cultural reference.' },
  { id: 'ukp10', country: CountryCode.UK, name: 'World War II', startYear: 1939, endYear: 1945, type: 'war', description: 'Britain\'s fight against Nazi Germany and the Axis powers.', detailedDescription: 'World War II saw Britain stand against Nazi Germany, especially during the critical period of 1940-1941 when it fought largely alone after the fall of France. Prime Minister Winston Churchill led the nation through the Blitz, the Battle of Britain, and eventual victory as part of the Allied powers. The war involved massive civilian participation, evacuation of children, rationing, and women\'s involvement in war work. The British Empire\'s resources were mobilized globally. Though victorious, Britain emerged economically weakened, leading to the end of empire and a shift in global power to the United States and Soviet Union. The war cost approximately 450,000 British lives.' },

  // USA
  { id: 'usp1', country: CountryCode.US, name: 'Civil War', startYear: 1861, endYear: 1865, type: 'war', description: 'War fought between the Union and the Confederacy.', detailedDescription: 'The American Civil War was a civil war in the United States between the Union and the Confederacy, which had been formed by states that had seceded from the Union. The central cause of the war was the dispute over whether slavery would be permitted to expand into the western territories, leading to more slave states, or be prevented from doing so, which many believed would place slavery on a course of ultimate extinction. The war resulted in approximately 620,000 to 750,000 soldier deaths, along with an undetermined number of civilian casualties, making it the deadliest military conflict in American history.' },
  { id: 'usp2', country: CountryCode.US, name: 'Reconstruction', startYear: 1865, endYear: 1877, type: 'political', description: 'Period following the Civil War of rebuilding the South.', detailedDescription: 'The Reconstruction era was a period in American history following the American Civil War (1861–1865) and lasting until approximately the Compromise of 1877. During Reconstruction, attempts were made to rebuild the country after the bloody Civil War, bring the former Confederate states back into the United States, and to redress the political, social, and economic legacies of slavery. The period saw the passage of the 13th, 14th, and 15th Amendments to the Constitution, which abolished slavery, granted citizenship to former slaves, and protected their voting rights. However, the period also saw the rise of violent opposition to these changes, including the formation of the Ku Klux Klan.' },
  { id: 'usp3', country: CountryCode.US, name: 'Roaring Twenties', startYear: 1920, endYear: 1929, type: 'era', description: 'A period of economic prosperity and cultural dynamism.', detailedDescription: 'The Roaring Twenties, sometimes stylized as Roaring \'20s, refers to the 1920s decade in music and fashion, as it happened in Western society and Western culture. It was a period of economic prosperity with a distinctive cultural edge in the United States and Europe, particularly in major cities such as Berlin, Buenos Aires, Chicago, London, Los Angeles, New York City, Paris, and Sydney. In France, the decade was known as the "Années folles" (\'crazy years\'), emphasizing the era\'s social, artistic and cultural dynamism. Jazz music blossomed, the flapper redefined the modern look for British and American women, and Art Deco peaked.' },
  { id: 'usp4', country: CountryCode.US, name: 'Great Depression', startYear: 1929, endYear: 1939, type: 'era', description: 'Severe worldwide economic depression.', detailedDescription: 'The Great Depression was a severe worldwide economic depression that took place during the 1930s, beginning in the United States. The timing of the Great Depression varied across nations; in most countries it started in 1929 and lasted until the late 1930s. It was the longest, deepest, and most widespread depression of the 20th century. The Great Depression is commonly used as an example of how far the world\'s economy can decline. The depression originated in the United States, after a major fall in stock prices that began around September 4, 1929, and became worldwide news with the stock market crash of October 29, 1929 (known as Black Tuesday).' },
  { id: 'usp5', country: CountryCode.US, name: 'Gilded Age', startYear: 1870, endYear: 1900, type: 'era', description: 'Period of rapid economic growth and stark wealth inequality.', detailedDescription: 'The Gilded Age was an era of rapid economic growth in the United States, especially in the North and West. American wages were much higher than in Europe, which attracted millions of immigrants. The increase in industrial production created a new class of wealthy industrialists and a prosperous middle class. However, it also produced extreme poverty, especially in urban areas, and political corruption was widespread. The period saw the rise of "robber barons" like Carnegie, Rockefeller, and Vanderbilt, labor unrest, and the emergence of Progressive reform movements. Mark Twain coined the term to describe the era\'s gilded, but corrupt, nature.' },
  { id: 'usp6', country: CountryCode.US, name: 'Progressive Era', startYear: 1890, endYear: 1920, type: 'era', description: 'Period of social activism and political reform.', detailedDescription: 'The Progressive Era was a period of widespread social activism and political reform across the United States focused on defeating corruption, monopoly, waste, and inefficiency. Progressives sought to address problems caused by industrialization, urbanization, immigration, and political corruption. Main reform movements included women\'s suffrage, labor rights, prohibition, antitrust legislation, and improved working conditions. Key figures included Theodore Roosevelt, Woodrow Wilson, and Jane Addams. The era saw constitutional amendments including women\'s suffrage (19th Amendment) and prohibition (18th Amendment), as well as significant labor and business regulations.' },
  { id: 'usp7', country: CountryCode.US, name: 'World War I', startYear: 1917, endYear: 1918, type: 'war', description: 'American involvement in the Great War.', detailedDescription: 'The United States entered World War I in April 1917, after maintaining neutrality for nearly three years. President Woodrow Wilson sought to keep America out of the war, but German submarine warfare, including the sinking of the Lusitania and the Zimmermann Telegram, pushed public opinion toward intervention. American entry proved decisive in Allied victory, with over 2 million soldiers deployed to France. The war resulted in approximately 116,000 American deaths. The experience accelerated American emergence as a world power, though the Senate\'s rejection of the Treaty of Versailles and the League of Nations marked a return to isolationism in the 1920s and 1930s.' },
  { id: 'usp8', country: CountryCode.US, name: 'World War II', startYear: 1941, endYear: 1945, type: 'war', description: 'American involvement following Pearl Harbor.', detailedDescription: 'The United States entered World War II after the Japanese attack on Pearl Harbor on December 7, 1941. America fought on two major fronts: against Japan in the Pacific and against Germany and Italy in Europe and North Africa. The war mobilized American industry and society on an unprecedented scale, with over 16 million Americans serving in the armed forces. The home front saw rationing, women entering the workforce in large numbers ("Rosie the Riveter"), and the controversial internment of Japanese Americans. The war ended with Allied victory in Europe (May 1945) and Japan\'s surrender following the atomic bombings of Hiroshima and Nagasaki (August 1945). The war cost over 400,000 American lives but established the US as a global superpower.' },
  { id: 'usp9', country: CountryCode.US, name: 'Civil Rights Movement', startYear: 1954, endYear: 1968, type: 'era', description: 'Struggle for racial equality and justice.', detailedDescription: 'The Civil Rights Movement was a decades-long struggle by African Americans and their allies to end institutionalized racial discrimination, disenfranchisement, and segregation. Key events included the Brown v. Board of Education decision (1954), the Montgomery Bus Boycott (1955-1956), the March on Washington (1963) where Martin Luther King Jr. delivered his "I Have a Dream" speech, and the passage of the Civil Rights Act (1964) and Voting Rights Act (1965). The movement employed strategies of nonviolent resistance, civil disobedience, and legal challenges. It fundamentally transformed American society and inspired other social justice movements. The era is often marked as ending with King\'s assassination in 1968, though the struggle for racial justice continued.' },
  { id: 'usp10', country: CountryCode.US, name: 'Cold War Era', startYear: 1947, endYear: 1991, type: 'era', description: 'Period of geopolitical tension with the Soviet Union.', detailedDescription: 'The Cold War was a state of geopolitical tension between the United States and the Soviet Union and their respective allies. It began after World War II and lasted until the dissolution of the Soviet Union in 1991. The Cold War was characterized by proxy wars, nuclear arms race, space race, espionage, and ideological competition between capitalism and communism. Major events included the Korean War, Cuban Missile Crisis, Vietnam War, and various interventions in Latin America, Africa, and Asia. Domestically, it influenced American politics through McCarthyism, affected education and scientific research, and shaped popular culture. The era ended with the fall of the Berlin Wall (1989) and Soviet collapse, leaving the US as the sole superpower.' },

  // Russia
  { id: 'rup1', country: CountryCode.RU, name: 'Napoleonic Invasion', startYear: 1812, endYear: 1812, type: 'war', description: 'The Patriotic War of 1812.', detailedDescription: 'The French invasion of Russia, also known as the Patriotic War of 1812 in Russia and the Second Polish War in Poland, began on 24 June 1812 when Napoleon\'s Grande Armée crossed the Neman River to engage and defeat the Russian army. Napoleon hoped to compel Tsar Alexander I of Russia to cease trading with British merchants through proxies in an effort to pressure the United Kingdom to sue for peace. The invasion was a catastrophic failure for Napoleon, with the Grande Armée suffering massive casualties from combat, starvation, disease, and the freezing Russian winter. The campaign effectively ended Napoleon\'s dominance in Europe.' },
  { id: 'rup2', country: CountryCode.RU, name: 'Reign of Nicholas I', startYear: 1825, endYear: 1855, type: 'political', description: 'Reactionary period marked by geographical expansion and economic stagnation.', detailedDescription: 'The reign of Nicholas I of Russia lasted from 1825 to 1855. Nicholas I was a reactionary who maintained a strict authoritarian system of government. His reign was characterized by geographical expansion, economic stagnation, poor administrative policies, and the suppression of dissent. He codified Russian law and pursued an aggressive foreign policy, but his reign ended with Russia\'s defeat in the Crimean War (1853–1856), which exposed the empire\'s weaknesses. Despite his efforts to suppress revolutionary movements, his reign saw the rise of Russian literature\'s golden age, with writers like Pushkin, Gogol, and Lermontov producing their greatest works.' },
  { id: 'rup3', country: CountryCode.RU, name: 'Decembrist Revolt', startYear: 1825, endYear: 1825, type: 'war', description: 'Failed uprising by army officers against Nicholas I.', detailedDescription: 'The Decembrist Revolt took place in December 1825, when a group of military officers led about 3,000 soldiers in a protest against Nicholas I\'s assumption of the throne. The rebels, known as Decembrists, were influenced by liberal and radical ideas from Western Europe and sought to establish a constitutional monarchy or republic and abolish serfdom. The revolt was quickly suppressed, with leaders executed or exiled to Siberia. Though it failed, the Decembrist Revolt became a symbolic moment in Russian history, inspiring future generations of revolutionaries and reformers. The harsh punishment of the Decembrists set the tone for Nicholas I\'s repressive reign.' },
  { id: 'rup4', country: CountryCode.RU, name: 'Russian Revolution', startYear: 1917, endYear: 1917, type: 'war', description: 'Revolution that overthrew the Tsarist regime and established Soviet power.', detailedDescription: 'The Russian Revolution of 1917 was a period of political and social revolution that took place in the former Russian Empire. It occurred in two major phases: the February Revolution, which overthrew the Tsarist autocracy and established a Provisional Government, and the October Revolution (November by Gregorian calendar), in which the Bolsheviks led by Vladimir Lenin overthrew the Provisional Government and established Soviet power. The revolution was driven by Russia\'s disastrous involvement in World War I, economic hardship, food shortages, and deep-seated social inequality. It led to the Russian Civil War (1918-1922) and the establishment of the Soviet Union, fundamentally reshaping Russia and influencing global politics throughout the 20th century.' },
  { id: 'rup5', country: CountryCode.RU, name: 'Soviet Union Era', startYear: 1922, endYear: 1991, type: 'era', description: 'Period of communist rule from formation to dissolution.', detailedDescription: 'The Soviet Union (USSR) was a socialist state that existed from 1922 to 1991, encompassing Russia and 14 other republics. The era included Lenin\'s New Economic Policy, Stalin\'s forced collectivization and industrialization, the Great Purges, World War II (the Great Patriotic War), the Cold War, Khrushchev\'s Thaw, Brezhnev\'s stagnation, and finally Gorbachev\'s perestroika and glasnost reforms. The Soviet period saw rapid industrialization, victory over Nazi Germany, emergence as a superpower, the space race, and significant scientific achievements, but also political repression, famines, labor camps (Gulags), and economic inefficiency. The USSR collapsed in 1991, ending one of history\'s most significant social experiments.' },

  // Germany
  { id: 'dep1', country: CountryCode.DE, name: 'German Confederation', startYear: 1815, endYear: 1866, type: 'political', description: 'Association of German-speaking states created by the Congress of Vienna.', detailedDescription: 'The German Confederation was an association of 39 predominantly German-speaking sovereign states in Central Europe, created by the Congress of Vienna in 1815 as a replacement of the former Holy Roman Empire. It was a loose political association, formed for mutual defense, with no central executive or judiciary. Delegates met in a Federal Assembly in Frankfurt. The Confederation was weakened by rivalry between Prussia and Austria, and was dissolved in 1866 following the Austro-Prussian War, paving the way for Prussian dominance and eventual German unification under Otto von Bismarck.' },
  { id: 'dep2', country: CountryCode.DE, name: 'German Empire', startYear: 1871, endYear: 1918, type: 'political', description: 'Period of the German Empire under Kaiser Wilhelm I and II.', detailedDescription: 'The German Empire, also referred to as Imperial Germany, was the period of the German Reich from the unification of Germany in 1871 until the November Revolution in 1918, when the German Reich changed its form of government from a monarchy to a republic. The empire was founded on 18 January 1871, when the south German states, except for Austria, joined the North German Confederation and the new constitution came into force, changing the name of the federal state to the German Empire and introducing the title of German Emperor for Wilhelm I, King of Prussia. The German Empire became the industrial, technological, and scientific giant of Europe.' },
  { id: 'dep3', country: CountryCode.DE, name: 'World War I', startYear: 1914, endYear: 1918, type: 'war', description: 'Global war originating in Europe.', detailedDescription: 'World War I or the First World War, often abbreviated as WWI, was a global conflict that lasted from 1914 to 1918. One of the deadliest conflicts in history, an estimated 9 million soldiers died in combat, while over 5 million civilians died from occupation, bombardment, hunger, and disease. The genocide of Armenians and the 1918 Spanish flu pandemic spread by the movement of combatants during the war caused many millions of additional deaths worldwide. The war was fought between two coalitions, the Allies and the Central Powers (led by Germany). Fighting occurred throughout Europe, the Middle East, Africa, the Pacific, and parts of Asia.' },
  { id: 'dep4', country: CountryCode.DE, name: 'Weimar Republic', startYear: 1918, endYear: 1933, type: 'political', description: 'The German state between 1918 and 1933.', detailedDescription: 'The Weimar Republic, officially the German Reich, was the German state from 1918 to 1933, as it existed as a federal constitutional republic. The state was officially named the German Reich, and was also referred to as the German Republic. The first term refers to the city of Weimar, where the republic\'s constituent assembly first took place. The period was marked by political instability, economic hardship including hyperinflation in the early 1920s, and the eventual rise of Adolf Hitler and the Nazi Party. Despite these challenges, the Weimar period was also a time of significant cultural and intellectual achievement, particularly in Berlin.' },
  { id: 'dep5', country: CountryCode.DE, name: 'World War II', startYear: 1939, endYear: 1945, type: 'war', description: 'Global war involving Germany and the Axis powers.', detailedDescription: 'World War II or the Second World War was a global conflict that lasted from 1939 to 1945. The vast majority of the world\'s countries, including all of the great powers, fought as part of two opposing military alliances: the Allies and the Axis. World War II was by far the deadliest conflict in history, resulting in an estimated 70 to 85 million fatalities. Germany, under the dictatorship of Adolf Hitler and the Nazi Party, initiated the war in Europe with the invasion of Poland on 1 September 1939. The war in Europe concluded with the liberation of German-occupied territories and the invasion of Germany by the Western Allies and the Soviet Union, culminating in the fall of Berlin to Soviet troops and the suicide of Hitler on 30 April 1945.' },
  { id: 'dep6', country: CountryCode.DE, name: 'Postwar Germany', startYear: 1945, endYear: 1990, type: 'era', description: 'Period of reconstruction and division into East and West Germany.', detailedDescription: 'The history of Germany from 1945 to 1990 spans the period following World War II during the Division of Germany. The Potsdam Agreement was made between the major winners of World War II (US, UK, and USSR) on 1 August 1945, in which Germany was separated into four zones of occupation. The Federal Republic of Germany (West Germany) and the German Democratic Republic (East Germany) were established in 1949. West Germany aligned with Western democracies and experienced an "economic miracle" (Wirtschaftswunder), while East Germany became a Soviet satellite state. The Berlin Wall, erected in 1961, became the symbol of the Cold War division until its fall in 1989.' },
  { id: 'dep7', country: CountryCode.DE, name: 'Reunified Germany', startYear: 1990, endYear: 2000, type: 'political', description: 'Period following German reunification.', detailedDescription: 'German reunification was the process in 1990 in which the German Democratic Republic (East Germany) became part of the Federal Republic of Germany (West Germany) to form the reunited nation of Germany. The reunification, which officially took place on 3 October 1990, was the culmination of the end of the Cold War and the fall of the Berlin Wall in November 1989. The process involved significant economic, social, and political challenges, including the integration of two very different economic systems, the modernization of East German infrastructure, and the reconciliation of different political cultures. Despite initial difficulties, reunification was largely successful and Germany emerged as a leading European power.' },
  { id: 'dep8', country: CountryCode.DE, name: 'Nazi Germany', startYear: 1933, endYear: 1945, type: 'political', description: 'Period of Nazi dictatorship under Adolf Hitler.', detailedDescription: 'Nazi Germany, officially the German Reich and later the Greater German Reich, was the German state between 1933 and 1945, when Adolf Hitler and the Nazi Party controlled the country through a totalitarian dictatorship. The regime was characterized by extreme nationalism, militarism, racism, and antisemitism. It pursued aggressive expansionist policies leading to World War II and perpetrated the Holocaust, the systematic genocide of six million Jews and millions of others deemed "undesirable." The regime promoted Aryan racial supremacy, suppressed opposition, controlled media and culture, and mobilized the economy for war. Nazi Germany was responsible for some of history\'s worst atrocities and its defeat in 1945 led to occupation, division, and a decades-long process of coming to terms with its crimes.' },

  // Spain
  { id: 'esp1', country: CountryCode.ES, name: 'Spanish Civil War', startYear: 1936, endYear: 1939, type: 'war', description: 'Military revolt against the Republican government of Spain.', detailedDescription: 'The Spanish Civil War was a civil war in Spain fought from 1936 to 1939 between the Republicans, who were loyal to the democratic Spanish Republic, and the Nationalists, a rebel group led by General Francisco Franco. The Nationalists prevailed, and Franco ruled Spain for the next 36 years, from 1939 until his death in 1975. The war became notable for the passion and political division it inspired, and for the many atrocities that occurred. The war was a major proxy war of the era, with the Nationalists receiving support from Fascist Italy and Nazi Germany, while the Republicans were supported by the Soviet Union and international volunteers in the International Brigades.' },
  { id: 'esp2', country: CountryCode.ES, name: 'Generation of \'27', startYear: 1923, endYear: 1936, type: 'era', description: 'Influential group of poets, writers, and artists in Spain.', detailedDescription: 'The Generation of \'27 was an influential group of poets, writers, and artists that arose in Spanish literary and artistic circles between 1923 and 1927, essentially out of a shared desire to experience and work with avant-garde forms of art and poetry. Their first formal meeting took place in Seville in 1927 to mark the 300th anniversary of the death of the baroque poet Luis de Góngora. The group included Federico García Lorca, Rafael Alberti, Vicente Aleixandre, Dámaso Alonso, and Luis Cernuda, among others. They combined traditional Spanish literary forms with modernist techniques and were deeply influenced by European avant-garde movements.' },
  { id: 'esp3', country: CountryCode.ES, name: 'Franco Dictatorship', startYear: 1939, endYear: 1975, type: 'political', description: 'Authoritarian regime under General Francisco Franco.', detailedDescription: 'The Francoist dictatorship was the period of Spanish history from 1939 to 1975, when Francisco Franco ruled Spain as a military dictator. Following his victory in the Spanish Civil War, Franco established an authoritarian, nationalist, and Catholic regime. The dictatorship was characterized by political repression, censorship, suppression of regional languages and cultures (particularly Basque and Catalan), and economic autarky initially, followed by economic liberalization in the 1960s. Thousands of political opponents were executed or imprisoned, and many went into exile. Spain remained neutral in World War II but was internationally isolated until the 1950s. The regime gradually modernized economically while maintaining political authoritarianism until Franco\'s death in 1975.' },
  { id: 'esp4', country: CountryCode.ES, name: 'Spanish Transition', startYear: 1975, endYear: 1982, type: 'political', description: 'Transition from dictatorship to democracy.', detailedDescription: 'The Spanish Transition to democracy (La Transición) was the period during which Spain moved from the Francoist dictatorship to a liberal democratic system. It began with Franco\'s death in November 1975 and is generally considered complete with the Socialist Party\'s (PSOE) electoral victory in 1982. King Juan Carlos I played a crucial role, as did Prime Minister Adolfo Suárez. The transition included legalization of political parties, the first democratic elections (1977), adoption of the Constitution of 1978, and the defeat of a military coup attempt in 1981. The process demonstrated remarkable consensus among political forces and is often cited as a model peaceful transition. It established Spain as a parliamentary constitutional monarchy and paved the way for Spain\'s entry into the European Community in 1986.' },

  // Colombia
  { id: 'cop1', country: CountryCode.CO, name: 'Thousand Days\' War', startYear: 1899, endYear: 1902, type: 'war', description: 'Civil war between Liberal and Conservative parties.', detailedDescription: 'The Thousand Days\' War was a civil war fought in Colombia from 17 October 1899 to 21 November 1902, at first between the Liberal Party and the government led by the National Party, and later between the Liberal Party and the Conservative Party. The war resulted in a Conservative victory and between 100,000 and 180,000 deaths. The conflict was triggered by the struggle between Liberals and Conservatives for political power, but was also influenced by economic factors including the collapse of coffee prices. The war devastated the Colombian economy and contributed to the loss of Panama, which declared independence in 1903 with U.S. support.' },
  { id: 'cop2', country: CountryCode.CO, name: 'Colombian Conservative Era', startYear: 1886, endYear: 1930, type: 'political', description: 'Period of Conservative Party dominance.', detailedDescription: 'The Conservative Hegemony in Colombia was a period of Colombian history in which the Conservative Party dominated Colombian politics. The period began in 1886 with Rafael Núñez\'s election and the creation of the Constitution of 1886, which established a centralist and authoritarian regime. The Conservative Party maintained power through a combination of electoral manipulation, repression of opposition, and alliance with the Catholic Church. The period saw significant economic development, particularly in coffee production, but also increasing social tensions that would eventually lead to political violence. The hegemony ended in 1930 when the Liberal Party returned to power.' },
  { id: 'cop3', country: CountryCode.CO, name: 'La Violencia', startYear: 1948, endYear: 1958, type: 'war', description: 'Period of civil conflict between Liberal and Conservative parties.', detailedDescription: 'La Violencia was a ten-year civil war in Colombia from 1948 to 1958, between the Colombian Conservative Party and the Colombian Liberal Party, fought mainly in the countryside. The conflict was triggered by the assassination of Liberal leader Jorge Eliécer Gaitán on 9 April 1948, which led to massive riots in Bogotá known as the Bogotazo. The period was characterized by extreme violence, with estimates of deaths ranging from 200,000 to 300,000. The conflict involved not only political parties but also regional, class, and rural-urban tensions. The violence led to massive internal displacement and had lasting effects on Colombian society and politics.' },
  { id: 'cop4', country: CountryCode.CO, name: 'National Front', startYear: 1958, endYear: 1974, type: 'political', description: 'Power-sharing agreement between Liberal and Conservative parties.', detailedDescription: 'The National Front was a period in the history of Colombia in which the two main political parties, the Liberal Party and the Conservative Party, agreed to rotate power, intercalating for a period of four presidential terms. The agreement was designed to end La Violencia and restore political stability. Under the National Front, the presidency alternated between the parties every four years from 1958 to 1974, and parity in legislative and bureaucratic positions was maintained until 1978. While the arrangement successfully ended the partisan violence, it also excluded other political movements and contributed to the rise of guerrilla groups and drug cartels in subsequent decades.' },

  // Mexico
  { id: 'mep1', country: CountryCode.MX, name: 'Porfiriato', startYear: 1876, endYear: 1911, type: 'political', description: 'Era of Porfirio Díaz\'s authoritarian rule.', detailedDescription: 'The Porfiriato is a term given to the period when General Porfirio Díaz ruled Mexico as president in the late 19th and early 20th centuries, serving seven terms from 1876 to 1880 and from 1884 to 1911. The Porfiriato was characterized by significant economic growth, modernization, and foreign investment, particularly in railroads and mining. However, it was also marked by political repression, limited democracy, increasing inequality, and the concentration of land ownership. The regime\'s slogan "Order and Progress" reflected its priorities. The social and economic tensions of the Porfiriato ultimately led to the Mexican Revolution of 1910.' },
  { id: 'mep2', country: CountryCode.MX, name: 'Mexican Revolution', startYear: 1910, endYear: 1920, type: 'war', description: 'Major armed struggle that fundamentally transformed Mexican culture and government.', detailedDescription: 'The Mexican Revolution was a major armed struggle that radically changed Mexican culture and government. Although recent research has focused on local and regional aspects of the Revolution, it was a genuinely national revolution. Its outbreak in 1910 resulted from the failure of the 31-year-long regime of Porfirio Díaz to find a managed solution to the presidential succession. The revolution saw a complex series of armed conflicts involving various factions and leaders including Francisco Madero, Emiliano Zapata, Pancho Villa, and Venustiano Carranza. The revolution resulted in significant social, political, and economic changes, including land reform, the Constitution of 1917, and the establishment of a new political order.' },
  { id: 'mep3', country: CountryCode.MX, name: 'Maximato', startYear: 1928, endYear: 1934, type: 'political', description: 'Period of transitional presidents under Plutarco Elías Calles\' influence.', detailedDescription: 'The Maximato was a non-constitutional authoritarian period in Mexican history from 1928 to 1934, during which former president Plutarco Elías Calles, known as the "Jefe Máximo" (Supreme Chief), continued to exercise power and control over the government through a series of puppet presidents. The period began after the assassination of president-elect Álvaro Obregón in 1928 and saw three presidents in succession: Emilio Portes Gil, Pascual Ortiz Rubio, and Abelardo L. Rodríguez. During this time, Calles founded the National Revolutionary Party (PNR), the predecessor of the Institutional Revolutionary Party (PRI). The Maximato ended when Lázaro Cárdenas became president in 1934 and expelled Calles from Mexico in 1936.' }
];
