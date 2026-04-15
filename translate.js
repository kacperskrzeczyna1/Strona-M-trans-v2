document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    pl: {
      nav_home: "Start",
      nav_about: "O firmie",
      nav_offer: "Oferta",
      nav_fleet: "Flota",
      nav_docs: "Dokumenty",
      nav_contact: "Kontakt",
      hero_title: "Logistyka",
      hero_title_span: "Bez Granic",
      hero_desc: "M-TRANS Mariusz Dybowski – Twój zaufany partner w transporcie międzynarodowym.",
      btn_offer: "Nasza Oferta",
      btn_quote: "Zapytaj o wycenę",
      stat_years: "Lat doświadczenia",
      stat_vehicles: "Nowoczesnych pojazdów",
      stat_orders: "Zrealizowanych zleceń",
      stat_km: "Przejechanych kilometrów",
      about_small: "Poznaj nas",
      about_title: "O Firmie M-TRANS",
      about_p1: "Od 2010 roku skutecznie zarządzamy procesami logistycznymi w transporcie drogowym, obsługując szerokie grono klientów w całej Europie.",
      about_p2: "Dzięki wieloletniemu doświadczeniu i doskonałej znajomości branży TSL budujemy trwałe relacje biznesowe.",
      terminowosc: "Terminowości",
      offer_title: "Nasza Oferta",
      offer_desc: "Zapewniamy kompleksową obsługę transportową dostosowaną do specyfiki ładunku: Transport całopojazdowy (FTL), transport chłodniczy, transport częściowy (LTL), transport ekspresowy.",
      extra1: "Kompleksową organizację procesów logistycznych – od planowania po dostawę",
        extra2: "Profesjonalne doradztwo spedycyjne w doborze optymalnych środków transportu",
        extra3: "Ubezpieczenie OCP do kwoty 300 000 €",
        extra4: "Zasięg obejmujący Polskę oraz całą Unię Europejską",
      naszaflota: "Nasza flota ciężarówek",
      fleet_title: "Flota",
      fleet_desc: "Nasza nowoczesna i zróżnicowana flota pozwala na realizację nawet najbardziej wymagających zleceń:",
      chlodnie: "Chłodnia – Do przewozu towarów wymagających stałej temperatury.",
      doppelstockiem:"Chłodnia Doppelstock – Zwiększona ładowność (66 palet) przy zachowaniu pełnego bezpieczeństwa towaru",
      firanki:"Naczepy plandekowe (firanki) – Uniwersalne rozwiązanie do ładunków neutralnych (13,6 LDM)",
      izotermy:"Izotermy – Chronią towar przed wpływem warunków atmosferycznych",
      contact_title: "Kontakt",
      contact_address1: "Rogówko, ul. Lubicka 2",
      contact_address2: "87-162 Lubicz, Polska",
      contact_phone: "Telefon",
      contact_email: "E-mail",
      contact_hours: "Godziny pracy",
      contact_days: "Poniedziałek – Piątek",
      contact_time: "08:00 – 16:00",
      footer: "© 2026 M-TRANS MARIUSZ DYBOWSKI. WSZELKIE PRAWA ZASTRZEŻONE.",
        ftl_title: "Transport całopojazdowy (FTL)",
        ftl_li1: "Naczepy standardowe (13,6 LDM) mieszczące do 33 palet euro",
        ftl_li2: "Transport chłodniczy w temperaturze kontrolowanej",
        ftl_li3: "Chłodnie standardowe (33 palety) oraz Doppelstock do 66 palet",
        ltl_title: "Transport częściowy i doładunki (LTL)",
        ltl_li1: "Elastyczne rozwiązania dla mniejszych partii towaru – od 1 palety",
        ltl_li2: "Transport ekspresowy z podwójną obsadą kierowców",
        uslugi: "Dodatkowe usługi"
    },
    en: {
      nav_home: "Home",
      nav_about: "About",
      nav_offer: "Offer",
      nav_fleet: "Fleet",
      nav_docs: "Documents",
      nav_contact: "Contact",
      hero_title: "Logistics",
      hero_title_span: "Without Borders",
      hero_desc: "M-TRANS Mariusz Dybowski – your trusted partner in international transport.",
      btn_offer: "Our Offer",
      btn_quote: "Request a quote",
      stat_years: "Years of experience",
      stat_vehicles: "Modern vehicles",
      stat_orders: "Completed orders",
      stat_km: "Kilometers driven",
      about_small: "Get to know us",
      about_title: "About M-TRANS",
      about_p1: "Since 2010 we have been managing logistics processes across Europe.",
      about_p2: "With extensive experience we build long-term business relationships.",
      terminowosc: "Punctuality",
      offer_title: "Our Offer",
      offer_desc: "We provide comprehensive transport services: FTL, refrigerated, LTL and express transport.",
      extra1: "End-to-end logistics organization – from planning to timely delivery",
      extra2: "Expert freight forwarding consultancy to select the best transport solutions",
      extra3: "Cargo insurance (CMR) up to 300,000 €",
      extra4: "Coverage across Poland and the entire European Union",
      naszaflota: "Our fleet of trucks",
      fleet_title: "Fleet",
      fleet_desc: "Our modern and diverse fleet allows us to carry out even the most demanding orders:",
      chlodnie: "Refrigerated Trailer – For goods requiring controlled temperatures",
    doppelstockiem: "Double-deck Reefer – Increased capacity (66 pallets) ensuring cargo safety",
    firanki: "Curtainsider – Universal solution for neutral cargo (13.6 LDM).",
    izotermy: "Insulated Trailer – Rigid box protecting goods from weather conditions",
      contact_title: "Contact",
      contact_address1: "Rogówko, Lubicka 2",
      contact_address2: "87-162 Lubicz, Poland",
      contact_phone: "Phone",
      contact_email: "E-mail",
      contact_hours: "Working hours",
      contact_days: "Monday – Friday",
      contact_time: "08:00 – 16:00",
      footer: "© 2026 M-TRANS. All rights reserved.",
        ftl_title: "Full Truck Load (FTL)",
        ftl_li1: "Standard trailers (13.6 LDM) with a capacity of up to 33 euro pallets",
        ftl_li2: "Refrigerated Transport: Temperature-controlled haulage",
        ftl_li3: "Standard reefers (33 pallets) or Double-deck trailers (Doppelstock), up to 66 pallets",
        ltl_title: "Less Than Truck Load (LTL)",
        ltl_li1: "Flexible solutions for partial loads – starting from 1 pallet",
        ltl_li2: "Express Services with double-manned crews",
        uslugi: "Additional services"
    },
    de: {
      nav_home: "Start",
      nav_about: "Über uns",
      nav_offer: "Angebot",
      nav_fleet: "Flotte",
      nav_docs: "Dokumente",
      nav_contact: "Kontakt",
      hero_title: "Logistik",
      hero_title_span: "ohne Grenzen",
      hero_desc: "M-TRANS Mariusz Dybowski – Ihr zuverlässiger Partner im internationalen Transport.",
      btn_offer: "Unser Angebot",
      btn_quote: "Angebot anfragen",
      stat_years: "Jahre Erfahrung",
      stat_vehicles: "Moderne Fahrzeuge",
      stat_orders: "Abgeschlossene Aufträge",
      stat_km: "Gefahrene Kilometer",
      about_small: "Lernen Sie uns kennen",
      about_title: "Über M-TRANS",
      about_p1: "Seit 2010 verwalten wir Logistikprozesse in ganz Europa.",
      about_p2: "Mit langjähriger Erfahrung bauen wir stabile Geschäftsbeziehungen auf.",
      terminowosc: "Pünktlichkeit",
      offer_title: "Unser Angebot",
      offer_desc: "Wir bieten umfassende Transportdienstleistungen: Komplettladungen (FTL), Kühltransporte, Teilladungen (LTL) und Expresslieferungen.",
      extra1: "Komplette Organisation der Logistikprozesse – von der Planung bis zur termingerechten Zustellung",
      extra2: "Professionelle Speditionsberatung zur Wahl der optimalen Transportmittel",
      extra3: "Frachtführerhaftpflichtversicherung bis zu 300.000 €",
      extra4: "Transportdienstleistungen in Polen und ganz Europa",
      naszaflota: "Unsere Lkw-Flotte",
      fleet_title: "Fuhrpark",
      fleet_desc: "Unsere moderne Flotte ermöglicht anspruchsvolle Transporte:",
      chlodnie: "Kühlauflieger – Für Waren, die eine kontrollierte Temperatur erfordern",
    doppelstockiem: "Kühlauflieger mit Doppelstock – Erhöhte Ladekapazität (66 Paletten) bei voller Ladungssicherheit",
    firanki: "Planenauflieger – Universelle Lösung für neutrale Fracht (13,6 LDM)",
    izotermy: "Kofferaufbau – Fester Aufbau zum Schutz der Ware vor Witterungseinflüssen",
      contact_title: "Kontakt",
      contact_address1: "Rogówko, Lubicka 2",
      contact_address2: "87-162 Lubicz, Polen",
      contact_phone: "Telefon",
      contact_email: "E-Mail",
      contact_hours: "Arbeitszeiten",
      contact_days: "Montag – Freitag",
      contact_time: "08:00 – 16:00",
      footer: "© 2026 M-TRANS. Alle Rechte vorbehalten.",
        ftl_title: "Komplettladungen (FTL)",
        ftl_li1: "Standardauflieger (13,6 LDM) mit Platz für bis zu 33 Euro-Paletten",
        ftl_li2: "Kühltransporte: Temperaturgeführte Transporte",
        ftl_li3: "Standard-Kühlauflieger (33 Paletten) oder Doppelstock-Auflieger bis 66 Paletten",
        ltl_title: "Teilladungen (LTL)",
        ltl_li1: "Flexible Lösungen für kleinere Frachtmengen – ab 1 Palette",
        ltl_li2: "Express-Service mit doppelter Fahrerbesatzung",
        uslugi: "Zusätzliche Dienstleistungen"
    }
  };

  function setLang(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    localStorage.setItem("lang", lang);

    // Aktualizacja napisu na przycisku (bez usuwania ikony)
    const btn = document.querySelector(".lang-btn");
    if (btn) {
        // Zakładamy, że ikona jest pierwszym elementem w buttonie
        const img = btn.querySelector("img");
        btn.innerHTML = ''; // czyścimy
        if(img) btn.appendChild(img); // przywracamy ikonę
        btn.append("Language"); // dodajemy tekst
    }
  }

  // Obsługa kliknięć w dropdown
  document.querySelectorAll("[data-lang]").forEach(el => {
    el.addEventListener("click", function(e) {
      e.preventDefault();
      setLang(this.dataset.lang);
    });
  });

  // START - Inicjalizacja języka
  let saved = "pl";
  try {
    saved = localStorage.getItem("lang") || "pl";
  } catch (e) {
    saved = "pl";
  }
  
  setLang(saved); // TO BYŁO KLUCZOWE - wywołanie funkcji na starcie!
}); // Zamknięcie DOMContentLoaded
