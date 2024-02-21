// sample data for each country
const data = [
    {name: 'Ghana', img:`https://imgs.search.brave.com/KiwICC9za5lTQw76meLtWUaSvsAVymMIcuja8ny2Kwo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDgz/MjYzNjY3L3ZlY3Rv/ci9mbGFnLW9mLWdo/YW5hLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1wREdFRFRw/Q1haQlhFNzVMVW9l/bnQ1c0g5eVVwb2Zn/dkNnWm90emRVV0s4/PQ`, category: 'Accra', info:`
    Ghana, nestled along the West African coast, is a country steeped in cultural vibrancy and historical significance. Gaining independence from British rule in 1957, it became the first sub-Saharan African nation to do so, marking a pivotal moment in the continent's decolonization. Accra, its capital city, pulsates with the rhythm of daily life, serving as a dynamic hub of commerce, culture, and politics. Ghanaians are renowned for their warm hospitality, welcoming visitors with open arms to experience their rich traditions, music, dance, and festivals like Panafest, which celebrate Pan-Africanism and cultural exchange. The nation's economy is driven by agriculture, particularly cocoa production, mining (notably gold), and oil extraction from offshore reserves. Despite economic growth, challenges persist, including poverty, infrastructure development, and healthcare accessibility. Nevertheless, Ghana's stable political environment, commitment to democracy, and strides in gender equality underscore its status as a beacon of progress in the region, attracting both tourists and investors drawn to its diverse tapestry of culture, natural beauty, and promising future.`, popu:`Over 34 Million`},
    {name: 'Nigeria',img: `https://imgs.search.brave.com/Xoym6M2mApQPiSWLlDsdHd0qbdShe6uDQvEokCMB7Lg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vNjgvNTA2OC0w/MDQtNzJBM0YyNTAv/RmxhZy1OaWdlcmlh/LmpwZw`, category: 'Abuja', info:`Nigeria, located in West Africa, is the most populous country on the continent and one of the largest economies in Africa. With a rich cultural tapestry, diverse landscapes, and a complex history, Nigeria is home to over 250 ethnic groups, each with its own traditions and languages. Its economy is largely driven by oil exports, but the country also boasts a burgeoning tech sector and a growing middle class. Despite its potential, Nigeria faces challenges such as political instability, corruption, and socioeconomic disparities, but ongoing efforts aim to address these issues and unlock the country's full potential.`, popu:`Over 223 Million`},
    {name: 'Cameroon', img: `https://imgs.search.brave.com/dVPK61O9KAh2HU5Avsg_2A3Wl6NAVeBir0U5_c-bTNQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI5/MzQ3MTA4MC9waG90/by9mbGFnLW9mLWNh/bWVyb29uLXNpbGsu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTZydjRiMXdIRHZD/QTRNMlJoaVh1UzVR/bV9tVkVuUVkzVDBm/azNPUV9kaVE9`, info:`In Cameroon, a young artist named Kofi meets Malik, a traveler from the north. Inspired by Malik's stories of the country's diverse landscapes, they embark on a journey together, forging a deep friendship. As they explore Cameroon's wild heart, Kofi realizes that true beauty lies in the connections between people, which he captures in his art, celebrating the nation's unity and resilience.`, category: 'Yaoundé', popu:`Over 28 Million`},
    {name: 'Belgium', img:`https://imgs.search.brave.com/mrk-W6qp5jEDewDL0UmxonccA19K3fBPg_fWJmGo8nQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzYyLzE5LzIw/LzM2MF9GXzYyMTky/MDk2XzBOdG9rM213/WjZkeG16dUI5TmVO/Z05QSmZNM21yMmho/LmpwZw`, info:`Belgium, situated in Western Europe, is a small yet diverse country known for its rich history, multicultural society, and contributions to art, architecture, and gastronomy. With three official languages - Dutch, French, and German - reflecting its linguistic and cultural diversity, Belgium is a unique blend of influences from neighboring countries. The capital city, Brussels, serves as the headquarters of the European Union and NATO, highlighting Belgium's importance on the global stage. The country is famous for its medieval cities such as Bruges and Ghent, renowned for their well-preserved architecture and picturesque canals. Belgium is also celebrated for its culinary delights, including world-famous chocolate, beer, and waffles. Despite its small size, Belgium has made significant cultural and historical contributions to Europe and the world, making it a fascinating and vibrant destination to explore.`, category: 'Brussels', popu:`over 11.5 million`},
    {name: 'United Arab Emirates, The', img:`https://imgs.search.brave.com/rkHaa0NL-GaI4HH8Kb92l5cI_qS-OdCTb1ywYE534lo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9teWJh/eXV0Y2RuLmJheXV0/LmNvbS9teWJheXV0/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9VQUUt/ZmxhZy1oaXN0b3J5/LUEtMDYtMDgtMS0x/MDI0eDY0MC5qcGc`, info:`The United Arab Emirates (UAE) is a federation of seven emirates located in the Arabian Peninsula in the Middle East. It is known for its rapid economic growth, modern infrastructure, and vibrant cultural scene. The capital, Abu Dhabi, is home to significant government institutions and the country's largest oil reserves, while Dubai is a global hub for finance, tourism, and trade, boasting iconic skyscrapers, luxury shopping, and extravagant entertainment options. The UAE's economy is largely driven by oil and gas exports, but the government has invested heavily in diversifying into sectors like tourism, finance, and renewable energy. The country's population is diverse, with a significant expatriate community contributing to its cosmopolitan atmosphere. Despite its desert climate, the UAE offers a range of attractions including pristine beaches, desert safaris, and world-class theme parks. The UAE's progressive outlook and ambitious development projects have positioned it as a dynamic and influential player in the region and on the global stage.`, category: 'Abu Dhabi', popu:`Over 9.9 million`},
    {name: 'United Kingdom', img:`https://imgs.search.brave.com/E8VH5Fy6bLomAEMp3aItxqK0ePvMT-yH17ANXvyVJI8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE4/MTAyNTI1Ny9waG90/by91bml0ZWQta2lu/Z2RvbS1mbGFnLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1I/TE55ZVI2R1dtMjhS/M1BidmdwaEt6NkhD/Vlo3bHZab1JwNTBi/YXpJMEE0PQ`, info:` The United Kingdom (UK) is a sovereign country located off the northwestern coast of mainland Europe. It consists of four constituent countries: England, Scotland, Wales, and Northern Ireland. The UK has a rich history, with significant cultural, political, and economic influence globally. Its capital city, London, is a leading global financial center and a cultural hub, renowned for its historic landmarks, museums, theaters, and diverse population.
    
    The UK has a constitutional monarchy with a parliamentary democracy, and the monarch serves as the ceremonial head of state. The country's political system operates under the rule of law and is governed by the UK Parliament, which consists of the House of Commons and the House of Lords.
    
    The UK has a mixed economy with a strong emphasis on services, including finance, healthcare, education, and tourism. It is also a major exporter of goods such as machinery, vehicles, and pharmaceuticals. While historically reliant on industries like manufacturing and coal mining, the UK has undergone significant economic transformation, particularly in the service sector.
    
    The UK is known for its cultural contributions in literature, music, film, and art. It has produced influential figures in various fields, including William Shakespeare, the Beatles, and J.K. Rowling. The country's diverse landscapes range from rolling hills and lush countryside to rugged coastlines and vibrant cities, making it a popular destination for tourists and outdoor enthusiasts alike.
    
    Despite its historical and cultural significance, the UK faces challenges including Brexit-related uncertainties, regional disparities in economic development, and debates over issues such as immigration and national identity. Nonetheless, the UK remains a key player on the global stage, with enduring influence in politics, economics, and culture.`, category: 'London', popu:`Over 67 million`},
    {name: 'United States of America', img:`https://imgs.search.brave.com/NFYwCUz19YsmbtrmaMXOPnfj_JXHMM2zc9gw2z7vqEY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9m/bGFnLXVuaXRlZC1z/dGF0ZXMtYW1lcmlj/YV8xNDAxLTI1My5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw`,info:`The United States of America (USA) is a vast and diverse country located in North America, bordered by Canada to the north and Mexico to the south. It comprises 50 states, each with its own distinct culture, geography, and history. The capital city is Washington, D.C., while New York City is the largest metropolitan area and a global financial and cultural center.
    
    The USA is known for its significant influence on the world stage, with the world's largest economy and a powerful military. It is a democratic republic with a federal system of government, consisting of three branches: executive, legislative, and judicial. The President serves as both the head of state and the head of government.
    
    The country's population is highly diverse, with people from various ethnic, cultural, and religious backgrounds. It is often referred to as a melting pot due to its history of immigration and multiculturalism. English is the most widely spoken language, but Spanish and other languages are also spoken in certain regions.
    
    The USA is renowned for its innovation and technological advancements, particularly in industries such as information technology, aerospace, and biotechnology. It is home to some of the world's leading universities, research institutions, and companies.
    
    The country's landscape is incredibly varied, encompassing vast plains, rugged mountains, lush forests, and expansive coastlines. National parks such as Yellowstone and the Grand Canyon attract millions of visitors each year, offering opportunities for outdoor recreation and exploration.
    
    Despite its strengths, the USA faces challenges including social inequality, political polarization, racial tensions, and environmental issues. However, it remains a beacon of democracy, freedom, and opportunity for millions of people around the world, embodying the American Dream of prosperity and success through hard work and determination.`, category: 'New York City', popu:`Over 341 million` },
    {name: 'Canada', img:`https://imgs.search.brave.com/QJEqtmYvuXJIL1pDjfWko9ooS8Io6J-0e44aHhD1My4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzYyLzE5Lzgz/LzM2MF9GXzYyMTk4/MzkwX2RoV01xNGJT/ZEcwQzB6YWFYTDIy/c01nS3lKMGZhbHMz/LmpwZw`, info:`Canada, located in North America, is the second-largest country in the world by land area, known for its stunning natural landscapes, diverse culture, and high standard of living. It is a constitutional monarchy with a parliamentary democracy, with Queen Elizabeth II as the ceremonial head of state and a Prime Minister as the head of government.
    
    The country is divided into ten provinces and three territories, each with its own distinct characteristics and governance. The capital city is Ottawa, while other major cities include Toronto, Vancouver, and Montreal.
    
    Canada's economy is highly developed and diverse, with significant industries including natural resources, manufacturing, technology, and services. It is known for its abundance of natural resources such as oil, minerals, and timber, as well as its strong banking and financial sector.
    
    Canada is celebrated for its commitment to multiculturalism and diversity, with a rich tapestry of cultural influences from Indigenous peoples, French and British settlers, and immigrants from around the world. It is officially bilingual, with English and French as its two official languages.
    
    The country is renowned for its pristine wilderness, including vast forests, rugged mountains, and picturesque coastlines. It is home to numerous national parks and protected areas, offering opportunities for outdoor activities such as hiking, skiing, and wildlife watching.
    
    Despite its strengths, Canada faces challenges such as climate change, Indigenous rights, and regional disparities in economic development. However, it remains a peaceful, inclusive, and prosperous nation, admired for its quality of life, social welfare programs, and commitment to human rights and environmental sustainability.`, category: 'Ottawa', popu:`Over 38 million`},
    {name: 'Jamaica', img:`https://imgs.search.brave.com/aeLQ4ooR9EE-GiUeRP49tl35wu3kyINonCNVHdmIiPM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vMjAvNTEyMC0w/MDQtM0U5RDg2OUUv/RmxhZy1KYW1haWNh/LmpwZw`, info:`Jamaica, located in the Caribbean Sea, is an island nation renowned for its vibrant culture, stunning natural beauty, and reggae music. It gained independence from British colonial rule in 1962 and is a member of the Commonwealth of Nations. The capital city is Kingston, known for its lively music scene and historical landmarks.

    Jamaica's economy is diverse, with key sectors including tourism, agriculture (notably sugar, coffee, and bananas), mining (bauxite and alumina), and manufacturing. The country is famous for its white sand beaches, crystal-clear waters, and lush tropical landscapes, attracting millions of tourists each year.
    
    The Jamaican people are known for their warmth, hospitality, and strong sense of community. The island's culture is a vibrant mix of African, European, and indigenous influences, reflected in its music, dance, cuisine, and religious practices.
    
    Reggae music, pioneered by Jamaican musician Bob Marley, has become a global symbol of peace, love, and social justice, embodying the spirit of the island. Jamaica has also made significant contributions to the world of sports, particularly in athletics (track and field) and cricket.
    
    Despite its natural beauty and cultural richness, Jamaica faces challenges such as poverty, crime, and environmental degradation. However, efforts are underway to address these issues and promote sustainable development and economic growth.
    
    Overall, Jamaica remains a beloved destination for travelers seeking sun, sand, and authentic Caribbean experiences, with its unique blend of culture, music, and natural wonders captivating visitors from around the world.`, category: 'Kingston', popu:`Over 2.5 million`},
    {name: 'Japan', img:`https://imgs.search.brave.com/keFKQdpogcJcROnmGBxzSMHY9oa7olh3O2goSUrs5QU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzYyLzE5LzU0/LzM2MF9GXzYyMTk1/NDE2X3dmek00QmF6/NzBPakVVNTRFaHND/cHZ1UVdsSWh1a1Bn/LmpwZw`, info:`Japan, an island nation located in East Asia, is renowned for its rich cultural heritage, technological innovation, and stunning natural landscapes. With a population of over 125 million people, Japan is one of the most densely populated countries in the world.
    
    The capital city, Tokyo, is a bustling metropolis known for its vibrant blend of traditional and modern influences, iconic skyscrapers, and dynamic street life. Japan's other major cities, including Kyoto, Osaka, and Hiroshima, each offer their own unique attractions and cultural experiences.
    
    Japan has a long and fascinating history, with a rich tradition of arts, literature, and craftsmanship. The country's traditional arts, such as tea ceremonies, ikebana (flower arranging), and kabuki theater, are still practiced and revered today.
    
    In addition to its cultural heritage, Japan is also known for its technological advancements and innovation. The country is a global leader in industries such as automotive manufacturing, electronics, robotics, and high-speed rail.
    
    Japan's natural beauty is evident in its picturesque landscapes, including snow-capped mountains, lush forests, and pristine beaches. The iconic Mount Fuji, a symbol of Japan's natural beauty and spirituality, attracts millions of visitors each year.
    
    Despite its many strengths, Japan faces challenges such as an aging population, economic stagnation, and natural disasters such as earthquakes and tsunamis. However, the Japanese people are known for their resilience and determination in the face of adversity.
    
    Overall, Japan is a country of contrasts, where ancient traditions coexist with cutting-edge technology, and where natural beauty is revered alongside urban innovation. It is a destination that offers visitors a diverse range of experiences, from cultural immersion to outdoor adventure, making it a truly unforgettable destination.`, category: 'Tokyo', popu:`Over 123 million`},
    {name: 'Spain', img:`https://imgs.search.brave.com/I7lWTE4RsNu-zZ5CjeLGB2As0BhJo226OlF6__2-ogU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZmxhZ3NvbmxpbmUu/aXQvdXBsb2Fkcy8y/MDE2LTktMi8zMTUt/MjA1L3NwYWduYS5q/cGc`, info:`Spain, located in southwestern Europe, is a vibrant and diverse country known for its rich history, cultural heritage, and stunning landscapes. With a population of over 47 million people, Spain is a constitutional monarchy with a parliamentary system of government.

    The capital city, Madrid, is a bustling metropolis known for its world-class museums, vibrant nightlife, and historic landmarks such as the Royal Palace and Prado Museum. Other major cities like Barcelona, Valencia, and Seville offer their own unique blend of culture, architecture, and cuisine.
    
    Spain has a deep-rooted cultural heritage influenced by its diverse history of Roman, Moorish, and Christian civilizations. This is evident in its architecture, with iconic landmarks such as the Alhambra in Granada, the Sagrada Familia in Barcelona, and the Alcazar in Seville.
    
    The country is renowned for its culinary tradition, with dishes like paella, tapas, and gazpacho enjoyed both locally and internationally. Spanish wine, particularly from regions like Rioja and Catalonia, is also highly esteemed around the world.
    
    Spain's natural beauty is diverse, ranging from the snow-capped peaks of the Pyrenees in the north to the sunny beaches of the Mediterranean coast in the south. The country's islands, including the Balearic Islands and the Canary Islands, offer idyllic beaches, volcanic landscapes, and unique ecosystems.
    
    Despite its many attractions, Spain faces challenges such as unemployment, regional disparities, and political tensions, particularly in regions like Catalonia and the Basque Country. However, Spain remains a popular destination for tourists, retirees, and expatriates alike, drawn to its rich culture, warm climate, and high quality of life.`, category: 'Madrid', popu:`Over 47 million`},
    {name: 'Germany', img:`https://imgs.search.brave.com/OKOMQ7NWvZWYVUslNqkx7WNKXOoYdHHVNvg6uZhwcSI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzcwLzcyLzg2/LzM2MF9GXzU3MDcy/ODYyNl9DaGJDcWFX/WEVzYldHa255OUpZ/M0l6bXlxaWUxWlpC/bi5qcGc`, info:`Germany, located in central Europe, is a country known for its rich history, cultural heritage, and economic strength. With a population of over 83 million people, Germany is a federal parliamentary republic with Berlin as its capital and largest city.
    
    Germany has played a central role in European history, with a legacy that includes the Holy Roman Empire, the Protestant Reformation, and two World Wars. Today, it is a leading global economic power and a key player in the European Union.
    
    The country is renowned for its technological innovation, precision engineering, and automotive industry. German companies such as Volkswagen, BMW, and Siemens are world leaders in their respective fields.
    
    Germany's cultural landscape is diverse, with contributions to literature, philosophy, music, and the arts. The country is home to renowned composers like Ludwig van Beethoven and Johann Sebastian Bach, as well as influential philosophers such as Immanuel Kant and Friedrich Nietzsche.
    
    Germany is also known for its picturesque landscapes, including the Bavarian Alps, the Black Forest, and the Rhine Valley. The country's efficient public transportation system and well-maintained bicycle paths make it easy to explore its natural beauty.
    
    Despite its strengths, Germany faces challenges such as demographic change, integration of immigrants, and environmental sustainability. However, the German people are known for their strong work ethic, commitment to social welfare, and dedication to democracy and human rights.
    
    Overall, Germany is a country that combines a rich cultural heritage with modern innovation, making it a dynamic and influential player on the global stage.`, category: 'Berlin', popu:`Over 84.4 million`},
    {name: 'France', img:`https://imgs.search.brave.com/Ds5GYcjTFXIeqHrBheOMjG58uOI_mDWczTu2S-QyPnQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTMx/MDgyOTU4L3Bob3Rv/L2ZyYW5jZS1mbGFn/LXdhdmluZy1iYWNr/Z3JvdW5kLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1BZk1h/bklvd2d6VGtFWDhL/Tms0aEVzelVsWVlG/eUF4VlFnTEdzcW9a/SWdnPQ`, info:`France, located in Western Europe, is a country renowned for its rich history, culture, and contributions to art, literature, and cuisine. With a population of over 67 million people, France is a republic with Paris as its capital and largest city.
    
    France has a long and storied history, with a legacy that includes the Gauls, the Roman Empire, and the French Revolution. It is known for its iconic landmarks such as the Eiffel Tower, Notre-Dame Cathedral, and the Louvre Museum, home to the Mona Lisa and countless other masterpieces.
    
    The country is celebrated for its culinary tradition, with French cuisine recognized as a UNESCO Intangible Cultural Heritage. French wine, cheese, bread, and pastries are enjoyed worldwide, and dining is considered an essential part of French culture.
    
    France is also known for its fashion industry, with Paris being one of the world's fashion capitals alongside Milan, New York, and London. The country's luxury brands such as Chanel, Louis Vuitton, and Dior are synonymous with elegance and style.
    
    France's diverse landscapes range from the picturesque countryside of Provence to the glamorous French Riviera and the rugged coastlines of Brittany. The country's efficient high-speed train network and extensive public transportation system make it easy to explore its natural beauty and cultural treasures.
    
    Despite its strengths, France faces challenges such as immigration, social inequality, and terrorism. However, the French people are known for their resilience, creativity, and commitment to liberty, equality, and fraternity, values enshrined in the French national motto.
    
    Overall, France is a country that combines a rich cultural heritage with modern innovation, making it a beloved destination for tourists and a dynamic player on the global stage.`, category: 'Paris', popu:`Over 68.4 million`},
    {name: 'Brazil', img:`https://imgs.search.brave.com/sh7X1oCSrbJqiQsQ-iEoR3CDcMcFqIjzwlFpkUrk65s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZmxhZ3NvbmxpbmUu/aXQvdXBsb2Fkcy8y/MDE2LTYtNi80MjAt/MjcyL2JyYXppbC5q/cGc`, info:`Brazil, located in South America, is the largest country in both land area and population in the region. With a population of over 213 million people, Brazil is known for its diverse culture, stunning natural landscapes, and vibrant cities.
    
    The capital city is Brasília, known for its modernist architecture and status as a UNESCO World Heritage Site. However, the most populous city is São Paulo, followed by Rio de Janeiro, famous for its iconic beaches and annual Carnival celebration.
    
    Brazil is celebrated for its rich cultural heritage, influenced by Indigenous, African, Portuguese, and immigrant cultures. This cultural diversity is evident in its music, dance, cuisine, and religious practices, making Brazil a vibrant and dynamic country.
    
    The country is also known for its stunning natural beauty, including the Amazon Rainforest, the Pantanal wetlands, and the Iguaçu Falls. Brazil's biodiversity is among the richest in the world, with a vast array of plant and animal species found nowhere else on Earth.
    
    Economically, Brazil is a major global player, with a diverse economy that includes agriculture, mining, manufacturing, and services. It is one of the world's leading producers of commodities such as coffee, sugar, soybeans, and beef.
    
    Despite its many strengths, Brazil faces challenges such as income inequality, crime, corruption, and environmental degradation. However, efforts are underway to address these issues and promote sustainable development and economic growth.
    
    Overall, Brazil is a country of contrasts, where natural beauty and cultural diversity coexist with urban development and economic challenges. It remains a beloved destination for tourists and a dynamic player on the global stage.`, category: 'Rio de Janeiro', popu:`Over 216 million`},
    {name: 'Argentina', img:`https://imgs.search.brave.com/ZBMLGlYzp2ZsStE_P14Wv-uiIOwESWwr-IyC4AetnM0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzYyLzE5LzUz/LzM2MF9GXzYyMTk1/MzkxXzdtT0J4NWhW/a1BSZThSYndESFQ1/VmRteFZEeGd0TGRy/LmpwZw`, info:`Argentina, located in South America, is the second-largest country in the region both in terms of land area and population. With a population of over 45 million people, Argentina is known for its rich cultural heritage, stunning natural landscapes, and vibrant cities.

    The capital city is Buenos Aires, a cosmopolitan metropolis known for its European-style architecture, vibrant arts scene, and passionate tango dancing. Other major cities include Córdoba, Rosario, and Mendoza, each offering its own unique attractions and cultural experiences.
    
    Argentina's cultural heritage is diverse, with influences from Indigenous peoples, Spanish colonizers, and immigrants from around the world. This cultural diversity is evident in its music, dance, cuisine, and religious practices, making Argentina a vibrant and dynamic country.
    
    The country is also celebrated for its stunning natural beauty, including the Andes Mountains, the vast Pampas grasslands, and the spectacular Iguazú Falls. Argentina's diverse ecosystems support a wide range of plant and animal species, making it a paradise for nature lovers and outdoor enthusiasts.
    
    Economically, Argentina is a major global player, with a diverse economy that includes agriculture, manufacturing, mining, and services. It is one of the world's leading producers of commodities such as soybeans, beef, and wine.
    
    Despite its many strengths, Argentina faces challenges such as inflation, poverty, political instability, and environmental degradation. However, efforts are underway to address these issues and promote sustainable development and economic growth.
    
    Overall, Argentina is a country of contrasts, where natural beauty and cultural diversity coexist with urban development and economic challenges. It remains a beloved destination for tourists and a dynamic player on the global stage.`, category: 'Buenos Aires ', popu:`Over 45.5 million`},
    {name: 'Colombia', img:`https://imgs.search.brave.com/YNN47Y313WXsRUiMzCv2gqeq-nE_c5PeNFwiTeg_aTU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzQ5LzMwLzY4/LzM2MF9GXzQ5MzA2/ODUyX2lzRmZ0Tk91/blpib1BJeDdiUDdP/dWF5Y29GMDJCQXJr/LmpwZw`, info:`Colombia, located in South America, is a diverse and vibrant country known for its rich cultural heritage, stunning natural landscapes, and warm hospitality. With a population of over 50 million people, Colombia is the fourth-largest country in the region both in terms of land area and population.
    
    The capital city is Bogotá, a bustling metropolis nestled high in the Andes Mountains, known for its colonial architecture, vibrant street art, and thriving culinary scene. Other major cities include Medellín, known for its innovative urban development, and Cartagena, a UNESCO World Heritage Site renowned for its well-preserved colonial architecture and vibrant Caribbean culture.
    
    Colombia's cultural heritage is diverse, with influences from Indigenous peoples, Spanish colonizers, African slaves, and immigrants from around the world. This cultural diversity is evident in its music, dance, cuisine, and religious practices, making Colombia a lively and dynamic country.
    
    The country is also celebrated for its stunning natural beauty, including the Amazon Rainforest, the Andes Mountains, and the Caribbean coast. Colombia's diverse ecosystems support a wide range of plant and animal species, making it a paradise for nature lovers and outdoor enthusiasts.
    
    Economically, Colombia is a major global player, with a diverse economy that includes agriculture, mining, manufacturing, and services. It is one of the world's leading producers of commodities such as coffee, flowers, and emeralds.
    
    Despite its many strengths, Colombia faces challenges such as poverty, inequality, political instability, and the legacy of decades of internal conflict. However, efforts are underway to address these issues and promote sustainable development, peace, and economic growth.
    
    Overall, Colombia is a country of contrasts, where natural beauty and cultural diversity coexist with urban development and economic challenges. It remains a beloved destination for tourists and a dynamic player on the global stage.`, category: 'Bogotá', popu:`Over 52 million`},
    {name: 'Portugal', img:`https://imgs.search.brave.com/_h1AP2nvzxFg5Op0-KqpO3x6q7kD5dg3k7zrYrz2ZDM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzcwLzI1LzE5/LzM2MF9GXzcwMjUx/OTMxX2swU0s5bnhR/RkNkUmhsR0pyOHho/YjF6MDdCODlEaXFv/LmpwZw`, info:`Portugal, located in southwestern Europe, is a country known for its rich history, diverse culture, and stunning landscapes. With a population of over 10 million people, Portugal is the westernmost country in mainland Europe.
    
    The capital city is Lisbon, a vibrant metropolis known for its historic architecture, lively neighborhoods, and scenic views of the Tagus River. Other major cities include Porto, known for its picturesque riverside district and port wine production, and Faro, the gateway to the Algarve region's stunning beaches.
    
    Portugal's cultural heritage is diverse, with influences from Celtic, Roman, Moorish, and Christian civilizations. This cultural richness is evident in its music, dance, cuisine, and religious festivals, making Portugal a lively and dynamic country.
    
    The country is also celebrated for its stunning natural beauty, including the rugged coastline of the Atlantic Ocean, the rolling hills of the Douro Valley wine region, and the picturesque islands of the Azores and Madeira.
    
    Economically, Portugal is a member of the European Union and has a mixed economy that includes agriculture, tourism, manufacturing, and services. It is known for its wine production, cork industry, and textile manufacturing.
    
    Despite its many strengths, Portugal faces challenges such as unemployment, emigration, and an aging population. However, efforts are underway to address these issues and promote sustainable development, innovation, and economic growth.
    
    Overall, Portugal is a country of contrasts, where historic charm and natural beauty coexist with modern development and economic challenges. It remains a beloved destination for tourists and a dynamic player on the global stage.`, category: 'Lisbon', popu:`Over 10 million`},
    {name: 'Mexico', img:`https://imgs.search.brave.com/8S0pstC8WTkPnJRn1-50eNmgyMdHpxWKdHxDl8I9PIE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzYyLzE5LzYy/LzM2MF9GXzYyMTk2/MjY5X3p1MXNRcmpS/OUhvejh2TUVTa3F5/bUhmOHlaa1FScFhI/LmpwZw`, info:`Mexico, located in North America, is a country known for its rich history, vibrant culture, and diverse landscapes. With a population of over 126 million people, Mexico is the 11th most populous country in the world.
    
    The capital city is Mexico City, one of the largest metropolitan areas in the world and a hub of culture, art, and history. Other major cities include Guadalajara, Monterrey, and Cancún, each offering its own unique attractions and experiences.
    
    Mexico's cultural heritage is diverse, with influences from Indigenous peoples, Spanish colonizers, and immigrants from around the world. This cultural richness is evident in its music, dance, cuisine, and religious festivals, making Mexico a lively and dynamic country.
    
    The country is also celebrated for its stunning natural beauty, including pristine beaches along the Pacific and Caribbean coasts, lush jungles, and arid deserts. Mexico is home to numerous UNESCO World Heritage Sites, ancient ruins such as Teotihuacan and Chichen Itza, and vibrant colonial cities like Oaxaca and San Miguel de Allende.
    
    Economically, Mexico is a major global player, with a diverse economy that includes agriculture, manufacturing, tourism, and services. It is one of the world's leading producers of commodities such as silver, oil, and avocados.
    
    Despite its many strengths, Mexico faces challenges such as poverty, inequality, crime, and corruption. However, efforts are underway to address these issues and promote sustainable development, innovation, and economic growth.
    
    Overall, Mexico is a country of contrasts, where historic charm and natural beauty coexist with modern development and economic challenges. It remains a beloved destination for tourists and a dynamic player on the global stage.`, category: 'Mexico City', popu:`Over 128 million`},
    {name: 'Norway', img:`https://imgs.search.brave.com/bhrwAzd4U410-Sz-Zb7TtlJKI2Zp3z9UTN-F9N5bGNQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzYyLzE5LzUy/LzM2MF9GXzYyMTk1/MjA2X0t3SWIyN3A3/bGREeE05OXkwT3Jl/Rko1WDluVG9za2Iy/LmpwZw`, info:`Norway, situated in Northern Europe, is a country known for its stunning natural beauty, high standard of living, and rich cultural heritage. With a population of about 5.4 million people, Norway is a constitutional monarchy with a parliamentary system of government.

    The capital city is Oslo, a modern and cosmopolitan metropolis surrounded by fjords and green spaces. Norway is also characterized by its charming towns and cities, including Bergen, Trondheim, and Stavanger, each with its own unique historical and cultural attractions.
    
    Norway's cultural heritage is deeply rooted in its Viking history, folklore, and traditional art forms. The country has produced renowned figures in literature, such as playwright Henrik Ibsen, and in visual arts, like painter Edvard Munch.
    
    The country is celebrated for its breathtaking natural landscapes, including fjords, mountains, and the Northern Lights. Outdoor activities like hiking, skiing, and fishing are popular, and Norway's commitment to environmental sustainability is reflected in its clean and well-preserved natural environment.
    
    Economically, Norway is prosperous, thanks in part to its significant oil and gas reserves. The country has a robust welfare system and is known for its commitment to social equality and inclusive policies.
    
    Despite its strengths, Norway faces challenges such as managing its oil wealth, addressing environmental concerns, and navigating the complexities of global economic dynamics. However, Norway continues to be a role model for sustainable development and a sought-after destination for those seeking natural beauty, cultural richness, and a high quality of life.`, category: ' Oslo', popu:`Over 5.4 million`},
    {name: 'Moocco', img:`https://imgs.search.brave.com/-G0PDBjtTd923W9y5KsNcqX1fMYdYKO09wFz0jDKIWc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgy/ODIyNTIwL3Bob3Rv/L21vcm9jY28tZmxh/Zy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9S0ctZUoxZjlN/dEYtbllCSE9VYXFl/UHcxQmFJWmxWWjVX/T3QwWXBRbVpWQT0`, info:`Morocco, located in North Africa, is a country known for its rich history, diverse culture, and vibrant landscapes. With a population of over 36 million people, Morocco is a constitutional monarchy with a parliamentary system.

    The capital city is Rabat, while other major cities such as Casablanca, Marrakech, and Fes showcase the country's cultural and historical richness. Morocco is renowned for its traditional architecture, intricate mosaics, and bustling markets known as souks.
    
    Morocco's cultural heritage is a fusion of Arab, Berber, and French influences, evident in its language, cuisine, and art. The country's traditional music, dance, and festivals, such as the colorful celebrations of Eid al-Fitr and Ramadan, are integral parts of Moroccan identity.
    
    The country boasts diverse landscapes, from the Sahara Desert with its golden dunes to the Atlas Mountains and the picturesque coastal areas along the Atlantic and Mediterranean. Morocco's natural beauty attracts tourists interested in adventure, history, and cultural experiences.
    
    Economically, Morocco has a diverse economy that includes agriculture, mining, manufacturing, and tourism. The country is known for producing phosphates, textiles, and handicrafts. Tourism, centered around its historic cities, landscapes, and cultural attractions, is a significant contributor to the economy.
    
    Despite its strengths, Morocco faces challenges such as unemployment, poverty, and social inequality. The government is working on economic reforms and infrastructure development to address these issues and promote sustainable growth.
    
    Overall, Morocco is a country of contrasts, where ancient traditions and modern influences coexist, making it a captivating destination for those seeking a blend of history, culture, and natural beauty.`, category: 'Rabat', popu:`Over 37.8 million`},
    {name: 'Poland', img:`https://imgs.search.brave.com/P3-mpC28pbt87LlVJ-EDUEmIAajJRp-f9Lp7Eb7wVXU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9mbGFnLXBvbGFu/ZC1mbGFnLXBvbGFu/ZC13YXZpbmctd2lu/ZF8xNTY3MTktNjMy/LmpwZz9zaXplPTYy/NiZleHQ9anBn`, info:`Poland, located in Central Europe, is a country with a rich history, vibrant culture, and diverse landscapes. With a population of over 38 million people, Poland is a parliamentary republic with Warsaw as its capital and largest city.

    Poland's history is marked by periods of prosperity and turmoil, including the medieval Piast and Jagiellonian dynasties, the partitions of the 18th century, and the devastation of World War II. Today, Poland is a member of the European Union and NATO, with a growing economy and strong ties to its European neighbors.
    
    The country is renowned for its cultural heritage, with contributions to literature, music, art, and science. Polish composers such as Frédéric Chopin and scientists like Marie Curie have left lasting legacies. The country's folk traditions, including colorful festivals, intricate crafts, and delicious cuisine, reflect its rich cultural diversity.
    
    Poland's natural landscapes are diverse, ranging from the sandy beaches of the Baltic coast to the rolling hills of the Mazury Lake District and the picturesque Tatra Mountains. The country's national parks and nature reserves protect valuable ecosystems and provide opportunities for outdoor activities like hiking, skiing, and wildlife watching.
    
    Economically, Poland has undergone significant transformation since the fall of communism in 1989, transitioning to a market-oriented economy and experiencing rapid growth. The country's key industries include manufacturing, agriculture, IT, and tourism.
    
    Despite its strengths, Poland faces challenges such as air pollution, unemployment, and emigration. Efforts are underway to address these issues and promote sustainable development, innovation, and economic prosperity.
    
    Overall, Poland is a country of resilience and opportunity, where history, culture, and natural beauty come together to create a unique and vibrant identity.`, category: 'Warsaw', popu:`Over 41 million`},
    {name: 'Finland', img:`https://imgs.search.brave.com/5zcfFNEBIJfoAhAtAL-LxnKOi8Wwvrfbl-7pIi7hlvM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzYyLzE4Lzgw/LzM2MF9GXzYyMTg4/MDk4XzliZGJ3VWFD/UlJNRTF6OFlBamJq/bG9yM1RHTEYwTXcw/LmpwZw`, info:`Finland, located in Northern Europe, is a country known for its stunning natural landscapes, innovative design, and high quality of life. With a population of around 5.5 million people, Finland is a parliamentary republic with Helsinki as its capital and largest city.

    Finland's history is characterized by its resilience and independence, having been ruled by Sweden and Russia before gaining its independence in 1917. Today, Finland is a member of the European Union and is known for its commitment to democracy, education, and social welfare.
    
    The country is celebrated for its natural beauty, including thousands of lakes, dense forests, and the stunning archipelago of the Baltic Sea. Finland's national parks and wilderness areas offer opportunities for outdoor activities such as hiking, skiing, and berry picking, making it a paradise for nature lovers.
    
    Finland is also known for its innovative design and technology sector, with companies like Nokia, Rovio (creators of Angry Birds), and Marimekko gaining international acclaim. The country's design aesthetic is characterized by simplicity, functionality, and sustainability, influencing industries from furniture to fashion.
    
    Finland's education system is among the best in the world, known for its focus on equity, individualized learning, and teacher training. The country also ranks highly in measures of healthcare, safety, and overall quality of life.
    
    Despite its strengths, Finland faces challenges such as an aging population, regional disparities, and the integration of immigrants. However, the Finnish people are known for their resilience, innovation, and commitment to social equality, making Finland a unique and dynamic country with much to offer.`, category: 'Helsinki', popu:`5.6 million`},
    {name: 'Iceland', img:`https://imgs.search.brave.com/Ig40-Cwnr33JWtW0_S6hafsWCmw08QgRnljjPLTyiss/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgy/ODIyOTk4L3Bob3Rv/L2ljZWxhbmQtZmxh/Zy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9NWc0M1plMG1W/a1NRS21nNnUtalpI/QXVLQkVwUDJzS2pB/Tm8wZm9Zd0ZZbz0`, info:`Iceland, located in the North Atlantic Ocean, is a Nordic island country known for its stunning natural beauty, geothermal wonders, and Viking heritage. With a population of around 370,000 people, Iceland is one of the most sparsely populated countries in Europe.

    The capital city is Reykjavik, the northernmost capital in the world, known for its vibrant arts scene, colorful houses, and lively nightlife. Other major towns include Akureyri and Hafnarfjörður, each offering their own unique charm and attractions.
    
    Iceland's landscape is characterized by rugged volcanic terrain, majestic glaciers, cascading waterfalls, and natural hot springs. The country's unique geological features, including geysers, lava fields, and black sand beaches, make it a paradise for outdoor enthusiasts and photographers.
    
    Iceland is also known for its progressive and innovative culture, with a strong emphasis on renewable energy, gender equality, and environmental sustainability. The country is powered almost entirely by renewable sources such as geothermal and hydroelectric power, making it a global leader in clean energy.
    
    Iceland's cultural heritage is deeply rooted in its Viking past, with ancient sagas, folklore, and traditions still influencing modern Icelandic society. The country is also known for its rich literary tradition, producing renowned authors such as Halldór Laxness and Nobel laureate Halldór Laxness.
    
    Despite its small population, Iceland has a high standard of living, with a strong economy driven by tourism, fishing, and renewable energy. The country's tourism industry has boomed in recent years, attracting visitors from around the world eager to experience its natural wonders and unique culture.
    
    Overall, Iceland is a land of contrasts, where ancient traditions and modern innovation coexist amidst breathtaking natural beauty, making it a truly unforgettable destination for travelers seeking adventure, culture, and tranquility.`, category: 'Reykjavk', popu:`Over 375 thusand`},
    {name: 'Italy', img:`https://imgs.search.brave.com/lcfEmUG4Bje5PPJv5lYW2HMe_Fise777jJMPyscNhuM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzYyLzE4LzY0/LzM2MF9GXzYyMTg2/NDc3X3RQY0Nrb1E1/WXUzQVRsdW1xeHgw/ODZtTG9BandOSHM2/LmpwZw`, info:`Italy, located in Southern Europe, is a country known for its rich history, vibrant culture, and stunning landscapes. With a population of over 60 million people, Italy is a democratic republic with Rome as its capital and largest city.

    Italy's history is steeped in ancient civilization, with landmarks such as the Colosseum, the Roman Forum, and the ruins of Pompeii serving as reminders of its glorious past. The country was also a center of the Renaissance, producing renowned artists like Leonardo da Vinci, Michelangelo, and Raphael.
    
    The country is celebrated for its cultural heritage, including its cuisine, fashion, architecture, and art. Italian cuisine, with its emphasis on fresh ingredients and regional specialties, is renowned worldwide, while Italian fashion brands like Gucci, Prada, and Versace set trends on the global stage.
    
    Italy's landscape is diverse, featuring rugged mountains, rolling hills, and picturesque coastlines. The country's iconic landmarks include the canals of Venice, the Renaissance architecture of Florence, and the Amalfi Coast's stunning cliffs and beaches.
    
    Economically, Italy is a major global player, with a diverse economy that includes manufacturing, tourism, agriculture, and services. The country is known for its luxury goods, automotive industry, and design expertise.
    
    Despite its many strengths, Italy faces challenges such as high unemployment, political instability, and a large public debt. However, the Italian people are known for their resilience, creativity, and commitment to their cultural heritage.
    
    Overall, Italy is a country of contrasts, where ancient history and modern innovation coexist amidst breathtaking natural beauty, making it a beloved destination for tourists and a dynamic player on the global stage.`, category: 'Rome', popu:` 58.9 million`},
]


data.forEach((country) => {
    country.name1 = `<div class="text-center"><img class="mx-auto" src="${country.img}" width="40%" alt=""></div><h1 class="text-center" style="color: blue; margin-bottom: 30px;">${country.name}</h1>`;
    country.category = `<div class="d-flex mb-2"><div><span class="fs-4 mt-5">Capital:</span><br><span class="fs-3 fw-bold text-primary">${country.category}</span></div><div class="ms-auto"><span class="fs-4 mt-5">Population :</span><br><span class="fs-3 fw-bold text-primary"> ${country.popu}</span></div></div>`;
    country.infom = `<div class="fw-bold">${country.info}</div>`;
  });

function renderResults(results) {
    const resultsContainer = document.getElementById("resultsContainer");
    resultsContainer.innerHTML = ""; // Clear previous results
  
    if (results.length === 0) {
      document.getElementById("noResultsMessage").style.display = "block";
    } else {
      document.getElementById("noResultsMessage").style.display = "none";
      results.forEach((item) => {
        const countryCard = document.getElementById("countryCard");
        const resultItem = document.createElement("div");
        const resultItems = document.createElement("div");
        const countryCategory = document.createElement("div");
        const countryInfo = document.createElement("div");
        resultItem.innerHTML = item.name;
        resultsContainer.appendChild(resultItem);
  
  
        resultItem.addEventListener("click", () => {
          let count = document.getElementById("count");
          // alert(item.Category);
          count.style.display = "block";
  
          countryCategory.innerHTML = item.category;
          resultItems.innerHTML = item.name1;
          countryInfo.innerHTML = item.infom;
  
          countryCard.innerHTML = "";
  
          countryCard.appendChild(resultItems);
          countryCard.appendChild(countryCategory);
          countryCard.appendChild(countryInfo);
        });
  
        resultItem.style.cursor = "pointer"; 
      });
    }
  }
  
// Function to perform filtering
function filterResults(query) {
    const filteredResults = data.filter(item => {
        // Perform case-insensitive search
        return item.name.toLowerCase().includes(query.toLowerCase());
    });
    renderResults(filteredResults);
}

// Event listener for search input
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function () {
    filterResults(this.value);
});

// Event listener for search button
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', function () {
    filterResults(searchInput.value);
});

// Initial rendering
filterResults('');

