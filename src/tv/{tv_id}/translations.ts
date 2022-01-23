export interface Data {
  name: string
  overview: string
  homepage: string
  tagline: string
}

export interface Translation {
  iso_3166_1: string
  iso_639_1: string
  name: string
  english_name: string
  data: Data
}

export interface TvShowTranslations {
  id: number
  translations: Translation[]
}

export const mockTvShowTranslations: TvShowTranslations = {
  id: 2316,
  translations: [
    {
      iso_3166_1: "BG",
      iso_639_1: "bg",
      name: "български език",
      english_name: "Bulgarian",
      data: {
        name: "Офисът",
        overview:
          "Какво се случва в офиса на една съвременна компания и какви са проблемите на екипа, работещ в нея?. Героите в сериала са млади, амбициозни и оригинални личности. Зрителите ще се запознаят с регионалния управител на компанията Майкъл, който мисли, че е най-готиният, най-забавният и най-добрият шеф за своите подчинени. Мнението на персонала обаче е напълно противоположно. Сътрудникът му Джим е влюбен в сгодената рецепционистка Пам, а през останалото време саботира съседа си по бюро- всезнайкото Дуайт.",
        homepage: "",
        tagline: "",
      },
    },
    {
      iso_3166_1: "BS",
      iso_639_1: "bs",
      name: "Bosanski",
      english_name: "Bosnian",
      data: {
        name: "The Office",
        overview:
          'Bazirana na istoimenoj britanskoj seriji, američka verzija bržeg tempa, prati dnevnu interakciju uredskih zaposlenika tvrtke "Dunder Mifflin" u Scrantonu u Pensylvaniji koja se bavi prodajom papira.\n\nLepezu likova predvode regionalni menadžer Michael Scott (Steve Carell), koji za sebe misli da je najbolji, najvoljeniji i najsmješniji šef na svijetu. Tu je i prodavač Jim Halpert (John Krasinski) koji je beznadno zaljubljen u uredsku tajnicu Pam Beesly (Jenna Fischer), koja je zaručena za drugoga. Jim obožava raditi spačke kolegi prodavaču Dwightu Schruteu (Rainn Wilson). Dwight je jedna od onih osoba koje je riječima teško opisati i za njega vrijedi ona izreka: "Moraš ga vidjeti da bi povjerovao".\n\nSerija je predvodnica "mocumentary" stila (kvazidokumentaristička je).',
        homepage: "",
        tagline: "",
      },
    },
    {
      iso_3166_1: "CZ",
      iso_639_1: "cs",
      name: "Český",
      english_name: "Czech",
      data: {
        name: "Kancl",
        overview:
          "Remake populárního britského Kanclu (2001). Fiktivní dokument o velkoobchodu s papírem z městečka Scranton v americké Pennsylvanii. Snadno oklamatelný, ignorantně necitlivý a přitom neškodný šéf Michael Scott, kterého zvárnil brilantní Steve Carrell, řídí tým individualit místní pobočky. Každý, kdo pracuje v kanceláři a má za šéfa tak trochu hodného idiota, se zde pozná. Narozdíl od britské verze, si americký Office vytvořil vlastní dějovou linii, která se prolíná jednotlivými sériemi. Autoři původního Kanclu Steve Merchant a Ricky Gervais se na The Office (US) podíleli jako producentni.  Seriál získal celou řadu ocenění, ať už v žánru seriálu nebo individuálních pro konkrétní herce. Hlavní cenu EMMY pro nejlepší komediální seriál získali tvůrci v letech 2006 i 2007",
        homepage: "",
        tagline: "",
      },
    },
    {
      iso_3166_1: "DK",
      iso_639_1: "da",
      name: "Dansk",
      english_name: "Danish",
      data: {
        name: "",
        overview: "",
        homepage: "",
        tagline: "",
      },
    },
    {
      iso_3166_1: "DE",
      iso_639_1: "de",
      name: "Deutsch",
      english_name: "German",
      data: {
        name: "",
        overview:
          "In der Papiergroßhandelsfirma Dunder Mifflin herrscht der alltägliche Bürowahnsinn. Verkaufsleiter Michael Scott hält sich für einen lustigen Entertainer und den besten Chef der Welt. Für weitere Egokrämpfe sorgt der pedantische Nerd Dwight Schrute, der um Michaels Posten buhlt. Zum bunten Büro-Team gehören u.a. der talentierte wie unterforderte Jim Halpert, die scheue Sekretärin Pam Beesly, der übermotivierte Ryan Howard sowie der spätere Regionalmanager Andy Bernard und die ehrgeizige Karrierefrau Karen Filippelli. Zusammen sabotieren sie die Langeweile und Arbeitspflicht des lästigen Alltags, der im fröhlichen Chaos versinkt.",
        homepage: "",
        tagline: "",
      },
    },
    {
      iso_3166_1: "GR",
      iso_639_1: "el",
      name: "ελληνικά",
      english_name: "Greek",
      data: {
        name: "",
        overview:
          "Τα όνειρα, οι φιλοδοξίες και η σκληρή καθημερινότητα μιας ομάδας εργαζομένων σε μια εταιρία προμήθειας χαρτιού. Κόντρες, συμπάθειες, προσωπικές ανησυχίες, καταστάσεις για γέλια και για κλάματα. Οι υπάλληλοι αυτής της εταιρίας είναι ίσως ο εφιάλτης του κάθε αφεντικού. Η δουλειά έρχεται σε δεύτερη μοίρα όταν αναλύουν την οικογενειακή τους ζωή και όταν κουτσομπολεύουν ο ένας τον άλλο. Οι λέξεις «απόλυση» και «προαγωγή» αποτελούν το «κόκκινο πανί». Ο διευθυντής Μάικλ Σκοτ πιστεύει πως έχει καταπληκτική αίσθηση του χιούμορ και όλες τις λύσεις για κάθε επιχειρηματικό πρόβλημα. Την ομάδα απαρτίζουν ο Τζιμ, ένας ταλαντούχος αλλά τεμπέλης πωλητής, ο προβληματικός Ντουάιτ, ο αδιάφορος Ράιαν και η γραμματέας Παμ...",
        homepage: "",
        tagline: "",
      },
    },
    {
      iso_3166_1: "US",
      iso_639_1: "en",
      name: "English",
      english_name: "English",
      data: {
        name: "",
        overview:
          "The everyday lives of office employees in the Scranton, Pennsylvania branch of the fictional Dunder Mifflin Paper Company.",
        homepage: "",
        tagline: "",
      },
    },
    {
      iso_3166_1: "ES",
      iso_639_1: "es",
      name: "Español",
      english_name: "Spanish",
      data: {
        name: "The Office",
        overview:
          "Steve Carell protagoniza The Office, un fresco y divertido vistazo, con formato pseudo-documental, al día a día en la vida de unos excéntricos trabajadores de la empresa Dunder Mifflin. El serio pero despistadísimo director Michael Scott se considera un magnífico jefe y mentor, pero realmente inspira más críticas que respeto a sus empleados.",
        homepage: "",
        tagline: "",
      },
    },
    {
      iso_3166_1: "MX",
      iso_639_1: "es",
      name: "Español",
      english_name: "Spanish",
      data: {
        name: "La oficina",
        overview:
          "La vida diaria de los empleados de una oficina de una compañía papelera localizada en Scranton, Pensilvania. Corrosivo retrato de los miembros de una empresa. Versión americana de una popular serie británica de la BBC del mismo título.",
        homepage: "",
        tagline: "",
      },
    },
    {
      iso_3166_1: "IR",
      iso_639_1: "fa",
      name: "فارسی",
      english_name: "Persian",
      data: {
        name: "آفیس",
        overview:
          "استان این سریال درباره گروهی از کارمندان می باشد که در یک شرکت مشغول به کارند. هر یک از این افراد رفتار ناپسندیده منحصر یه فردی دارند و در راس انها رئیس انها قرار دارد.",
        homepage: "",
        tagline: "",
      },
    },
    {
      iso_3166_1: "FI",
      iso_639_1: "fi",
      name: "suomi",
      english_name: "Finnish",
      data: {
        name: "Konttori",
        overview:
          "Konttori on yhdysvaltalainen komediasarja, joka perustuu samannimiseen brittisarjaan. Sarja on kuvitteellinen dokumenttiohjelma paperitarvikkeita myyvän Dunder Mifflin -yhtiön konttorista Scrantonissa, Pennsylvaniassa.",
        homepage: "",
        tagline: "",
      },
    },
    {
      iso_3166_1: "FR",
      iso_639_1: "fr",
      name: "Français",
      english_name: "French",
      data: {
        name: "The Office",
        overview:
          "Le quotidien d'un groupe d'employés de bureau dans une fabrique de papier en Pennsylvanie. Michael Scott, le responsable régional, pense être le mec le plus drôle du bureau. Il ne se doute pas que ses employés le tolèrent uniquement parce que c'est lui qui signe les chèques. S'efforçant de paraître cool et apprécié de tous, Michael est en fait perçu comme étant pathétique...",
        homepage: "",
        tagline: "",
      },
    },
    {
      iso_3166_1: "IL",
      iso_639_1: "he",
      name: "עִבְרִית",
      english_name: "Hebrew",
      data: {
        name: "המשרד",
        overview:
          "הסדרה מתארת את הווי היום-יום במשרד קטן ואופייני, מבעד לעיניים של צוות שבא לעשות סרט תיעודי על המקום: הבוס שמתאמץ מאוד להיות מגניב וכייפי; האהבות והרומנים בין העובדים; ההתעללויות ומעשי הקונדס כלפי העובדים המעצבנים; השעמום והשגרה השוחקת; והרבה משחקי כבוד ופוליטיקות פנימיות קטנוניות, של חבורת אנשים שצריכים להסתדר ביחד במשך יום שלם, אבל לא כל כך סובלים זה את זה ואת העבודה שלהם.",
        homepage: "",
        tagline: "מקום עבודה אמריקאי",
      },
    },
    {
      iso_3166_1: "HR",
      iso_639_1: "hr",
      name: "Hrvatski",
      english_name: "Croatian",
      data: {
        name: "U uredu",
        overview:
          "Svjež i smiješan pogled u mockumentarnom stilu na svakodnevne interakcije ekscentričnih radnika u tvrtki za opskrbu papirom Dunder Mifflin. Ova brza komedija parodira suvremenu američku kulturu ležernog razgovora tijekom pauze na poslu.",
        homepage: "",
        tagline: "",
      },
    },
    {
      iso_3166_1: "HU",
      iso_639_1: "hu",
      name: "Magyar",
      english_name: "Hungarian",
      data: {
        name: "A hivatal",
        overview:
          "A sorozat egy irodaszer forgalmazó cég mindennapjait mutatja be dokumentumfilm szerűen, szerepel benne mindent tudó főnök, seggnyaló helyettes, poéngyáros fickó, recepciós csaj és sok más karakter.",
        homepage: "",
        tagline: "",
      },
    },
    {
      iso_3166_1: "IT",
      iso_639_1: "it",
      name: "Italiano",
      english_name: "Italian",
      data: {
        name: "The Office US",
        overview:
          "Il direttore regionale della Dunder Mifflin, Michael Scott conduce la troupe del documentario e il suo staff in un viaggio attraverso atteggiamenti sconvenienti, commenti in buona fede ma inappropriati e una miriade di tecniche da dirigente mediocre. Michael non ha idea che i suoi impiegati in realtà lo sopportano a fatica. È convinto di essere il loro guru.",
        homepage: "",
        tagline: "E' quello che ha detto lei.",
      },
    },
    {
      iso_3166_1: "JP",
      iso_639_1: "ja",
      name: "日本語",
      english_name: "Japanese",
      data: {
        name: "ジ・オフィス",
        overview: "",
        homepage: "",
        tagline: "",
      },
    },
    {
      iso_3166_1: "KR",
      iso_639_1: "ko",
      name: "한국어/조선말",
      english_name: "Korean",
      data: {
        name: "더 오피스",
        overview:
          "팬실베니아 스크랜튼에 위치한 종이회사인 던더 미플린 직원들의 일상을 그린 코미디. BBC에서 방영된 동명 영국 시리즈의 할리우드 리메이크.",
        homepage: "",
        tagline: "",
      },
    },
    {
      iso_3166_1: "LT",
      iso_639_1: "lt",
      name: "Lietuvių",
      english_name: "Lithuanian",
      data: {
        name: "Biuras",
        overview:
          "Serialas pasakoja kostiumuotų darboholikų ir nuo 9 iki 17 val. biure sėdinčių darbuotojų gyvenimą vienoje popierių tiekiančių JAV kompanijų.",
        homepage: "",
        tagline: "",
      },
    },
    {
      iso_3166_1: "LV",
      iso_639_1: "lv",
      name: "Latviešu",
      english_name: "Latvian",
      data: {
        name: "Ofiss",
        overview: "",
        homepage: "",
        tagline: "",
      },
    },
    {
      iso_3166_1: "NL",
      iso_639_1: "nl",
      name: "Nederlands",
      english_name: "Dutch",
      data: {
        name: "",
        overview:
          "Een mockumentary over een groep kantoormedewerkers bij Dunder-Mifflin Paper Company in Scranton, Pennsylvania. Baas Michael Scott probeert, op zijn eigen manier, alles draaiende te houden. Hij krijgt van het hoofdkantoor te horen dat hij moet gaan inkrimpen, maar heeft het hier heel moeilijk mee en probeert dit uit te stellen. Zijn assistent Dwight denkt dat hij het voor het zeggen heeft en hoopt op promotie. Verder zijn er romances, fraude en gebeuren er de nodige ongevallen. Dit is een remake van de Britse versie.",
        homepage: "",
        tagline: "",
      },
    },
    {
      iso_3166_1: "NO",
      iso_639_1: "no",
      name: "Norsk",
      english_name: "Norwegian",
      data: {
        name: "",
        overview:
          "Arbeidsplassen vi nå skal besøke, er stedet for intriger, sladder, sær humor og et og annet dolk i ryggen.",
        homepage: "",
        tagline: "",
      },
    },
    {
      iso_3166_1: "PL",
      iso_639_1: "pl",
      name: "Polski",
      english_name: "Polish",
      data: {
        name: "Biuro",
        overview:
          "Serial oparty jest na na popularnej brytyjskiej serii o tym samym tytule. Podobnie jak oryginał, śledzi codzienne życie grupy pracowników pewnego biura zarządzanego przez managera regionalnego Michaela Scotta, który myśli, że jest najzabawniejszym i najrówniejszym szefem na świecie - co czyni go okropnym i nieznośnym. Całe biuro wiecznie się martwi, czy będą zwolnienia, czy będzie jakiś romans w biurze i czy Michael kiedykolwiek się zamknie.",
        homepage: "",
        tagline: "",
      },
    },
    {
      iso_3166_1: "PT",
      iso_639_1: "pt",
      name: "Português",
      english_name: "Portuguese",
      data: {
        name: "O Escritório",
        overview:
          "A série retrata a vida quotidiana dos empregados de escritório da empresa produtora de papel Dunder Mifflin Paper Company em Scranton, Pennsylvania. Uma adaptação da série da BBC com o mesmo nome.",
        homepage: "",
        tagline: "",
      },
    },
    {
      iso_3166_1: "BR",
      iso_639_1: "pt",
      name: "Português",
      english_name: "Portuguese",
      data: {
        name: "Vida de Escritório",
        overview:
          "Nesta irreverente adaptação da famosa série britânica, Steve Carell é Michael Scott, o egocêntrico, insensível e incompetente gerente regional de uma subsidiária da Dunder Mifflin Paper Company. Michael acredita ser o cara mais engraçado do escritório, uma fonte de sabedoria para negócios e o melhor amigo de seus funcionários. Ele nem desconfia que a sua equipe o tolera apenas pelo fato dele assinar o contracheque deles. Sem saber o que os seus funcionários pensam a seu respeito, Michael acaba sempre alternando decisões absurdas ou patéticas, mas sempre hilárias.",
        homepage: "",
        tagline: "",
      },
    },
    {
      iso_3166_1: "RO",
      iso_639_1: "ro",
      name: "Română",
      english_name: "Romanian",
      data: {
        name: "La birou",
        overview:
          "Serialul prezintă ziua de muncă a managerului David Brent (Ricky Gervais) și a angajaților săi.",
        homepage: "",
        tagline: "",
      },
    },
    {
      iso_3166_1: "RU",
      iso_639_1: "ru",
      name: "Pусский",
      english_name: "Russian",
      data: {
        name: "Офис",
        overview:
          "Сериал о трудовых буднях небольшого регионального офиса крупной компании, обитатели которого целыми днями должны терпеть закидоны своего непутёвого босса.",
        homepage: "",
        tagline: "Комедия для тех, у кого босс - идиот",
      },
    },
    {
      iso_3166_1: "SE",
      iso_639_1: "sv",
      name: "svenska",
      english_name: "Swedish",
      data: {
        name: "",
        overview:
          "Mockumentär som följer den tidvis absurda vardagen för en grupp kontorsarbetare, på jobbet och privat. Egon krockar, folk beter sig olämpligt och tristess bryts av galna upptåg och spratt.",
        homepage: "",
        tagline: "",
      },
    },
    {
      iso_3166_1: "TR",
      iso_639_1: "tr",
      name: "Türkçe",
      english_name: "Turkish",
      data: {
        name: "",
        overview:
          "Çalışanlarının mutluluğunu gözeterek şirket kurallarını esnetmeye çalışan, ara sıra masumane oyunların kurbanı, kaba ve taş kalpli bir şef: Michael Scott.\n\nHepsinin kendince takıntıları olan farklı yaş gruplarından personeliyle ile The Office çalışanlarının hayatlarına şöyle bir göz atıyor; bıkkın aynı zamanda yetenekli satış elemanı Jim, onun sosyopat, yalaka düşmanı Dwight, kibar ve dürüst resepsiyonisti Pam ve isteksiz, kayıtsız stajyeri Ryan.",
        homepage: "",
        tagline: "",
      },
    },
    {
      iso_3166_1: "UA",
      iso_639_1: "uk",
      name: "Український",
      english_name: "Ukrainian",
      data: {
        name: "Офіс",
        overview:
          "Серіал розказує про життя працівників офісу компанії паперу Dunder Mifflin у Скрентоні, Пенсильванія. Щоб як найближче створити ефект документального фільму серіал знімають лише одною камерою, без глядачів та консервованого сміху, як це часто роблять у сіткомах.",
        homepage: "",
        tagline: "",
      },
    },
    {
      iso_3166_1: "CN",
      iso_639_1: "zh",
      name: "普通话",
      english_name: "Mandarin",
      data: {
        name: "办公室",
        overview:
          "本剧发生在“Dunder Mifflin”纸业公司一家小小分公司的办公室里，在头脑非常脱线的区域经理迈克尔领导下，一群办公室职员的生活每天充满古怪趣味。吉姆是个诙谐、脑子灵活的恶作剧狂人，整天想出不同点子折腾坐对面的学究型同事杜维特，后者每每气恼不已，也在工作上暗自对吉姆使坏，还视他做升职最大竞争对手；吉姆的恶作剧搭档是前台女孩潘，两人制造出无止境的欢笑，但潘已经有了未婚夫，吉姆对她动心也只能发乎情止乎礼。办公司里还有脾气古怪的大龄剩女安吉拉、深受迈克尔歧视的同性恋会计奥斯卡、拼命想融入大家都实习生瑞恩，无论大家性格合拍与否，彼此的共识都是，经理迈克尔是整间屋最大的极品……",
        homepage: "",
        tagline: "",
      },
    },
    {
      iso_3166_1: "TW",
      iso_639_1: "zh",
      name: "普通话",
      english_name: "Mandarin",
      data: {
        name: "我們的辦公室",
        overview:
          "一個記錄片的拍攝團隊，選定了在美國賓夕法尼亞州斯克蘭頓一間紙業分公司（Dunder Mifflin）拍攝他們在辦公室裡上班的日常；除了記錄辦公室職員間的互動之外，有時拍攝團隊也會針對一些突發事件做個別的採訪紀錄，有時甚至會跟拍到公司職員的家裡去。\n\n劇情中一大部份的內容在講述區經理麥克·史考特如何用他非常人的方式來管理他的辦公室員工；他們時常在會議室裡開著讓人匪夷所思的會議；辦公室同事間的關係也相當的複雜，充滿了言詞、行為的不當、辦公室霸凌和性騷擾；隨著劇情的發展，故事也會慢慢揭露出各個員工驚人的私生活。",
        homepage: "",
        tagline: "",
      },
    },
    {
      iso_3166_1: "HK",
      iso_639_1: "zh",
      name: "普通话",
      english_name: "Mandarin",
      data: {
        name: "",
        overview: "",
        homepage: "",
        tagline: "",
      },
    },
  ],
}
