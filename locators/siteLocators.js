// locators/siteLocators.js
const translations = require('./translations.json');

function buildUrl(lang, path = '') {
  return `https://www.essilorluxottica.com/${lang}${path}`;
}

function buildSelector(lang, path = '') {
  return `a[href="/${lang}${path}"]`;
}

const siteLocators = (lang = "en") => {
  const t = translations.languages[lang];

  return {
    homePage: {
      url: buildUrl(t.lang, '/'),
      groupMenu: buildSelector(t.lang, `/${t.group}/`)
    },

    // Group Page
    groupPage: {
      whoWeAre: {
        url: buildUrl(t.lang, `/${t.group}/`),
        selector: buildSelector(t.lang, `/${t.group}/`)
      },
      mission: {
        url: buildUrl(t.lang, `/${t.group}/${t.mission}/`),
        selector: buildSelector(t.lang, `/${t.group}/${t.mission}/`)
      },
      innovation: {
        url: buildUrl(t.lang, `/${t.group}/${t.innovation}/`),
        selector: buildSelector(t.lang, `/${t.group}/${t.innovation}/`)
      },
      strategy: {
        url: buildUrl(t.lang, `/${t.group}/${t.strategy}/`),
        selector: buildSelector(t.lang, `/${t.group}/${t.strategy}/`)
      },
      footprint: {
        url: buildUrl(t.lang, `/${t.group}/${t.globalfootprint}/`),
        selector: buildSelector(t.lang, `/${t.group}/${t.globalfootprint}/`)
      },
      history: {
        url: buildUrl(t.lang, `/${t.group}/${t.history}/`),
        selector: buildSelector(t.lang, `/${t.group}/${t.history}/`)
      }
    },

    // Brands Page
    brandsPage: {
      overview: {
        url: buildUrl(t.lang, `/${t.brands}/`),
        selector: buildSelector(t.lang, `/${t.brands}/`)
      },
      eyecare: {
        url: buildUrl(t.lang, `/${t.brands}/${t.eyecare}/`),
        selector: buildSelector(t.lang, `/${t.brands}/${t.eyecare}/`)
      },
      eyewear: {
        url: buildUrl(t.lang, `/${t.brands}/${t.eyewear}/`),
        selector: buildSelector(t.lang, `/${t.brands}/${t.eyewear}/`)
      },
      d2c: {
        url: buildUrl(t.lang, `/${t.brands}/${t.d2c}/`),
        selector: buildSelector(t.lang, `/${t.brands}/${t.d2c}/`)
      },
      smartEyewear: {
        url: buildUrl(t.lang, `/${t.brands}/${t.smartEyewear}/`),
        selector: buildSelector(t.lang, `/${t.brands}/${t.smartEyewear}/`)
      },
      eyeHealth: {
        url: buildUrl(t.lang, `/${t.brands}/${t.eyeHealth}/`),
        selector: buildSelector(t.lang, `/${t.brands}/${t.eyeHealth}/`)
      },
      apparel: {
        url: buildUrl(t.lang, `/${t.brands}/${t.apparel}/`),
        selector: buildSelector(t.lang, `/${t.brands}/${t.apparel}/`)
      },
      conformity: {
        url: buildUrl(t.lang, `/${t.brands}/${t.conformity}/`),
        selector: buildSelector(t.lang, `/${t.brands}/${t.apparel}/`)
      },
      customerCare: {
        url: buildUrl(t.lang, `/${t.brands}/${t.customercare}/`),
        selector: buildSelector(t.lang, `/${t.brands}/${t.customercare}/`)
      }
    },

    // Governance Page
    governancePage: {
      overview: {
        url: buildUrl(t.lang, `/${t.governance}/`),
        selector: buildSelector(t.lang, `/${t.governance}/`)
      },
      boardOfDirectors: {
        url: buildUrl(t.lang, `/${t.governance}/${t.boardOfDirectors}/`),
        selector: buildSelector(t.lang, `/${t.governance}/${t.boardOfDirectors}/`)
      },
      milleri: {
        url: buildUrl(t.lang, `/${t.governance}/${t.boardOfDirectors}/${t.milleri}/`),
        selector: buildSelector(t.lang, `/${t.governance}/${t.boardOfDirectors}/${t.milleri}/`)
      },
      saillant: {
        url: buildUrl(t.lang, `/${t.governance}/${t.boardOfDirectors}/${t.saillant}/`),
        selector: buildSelector(t.lang, `/${t.governance}/${t.boardOfDirectors}/${t.saillant}/`)
      },
      bard: {
        url: buildUrl(t.lang, `/${t.governance}/${t.boardOfDirectors}/${t.bard}/`),
        selector: buildSelector(t.lang, `/${t.governance}/${t.boardOfDirectors}/${t.bard}/`)
      },
      bardin: {
        url: buildUrl(t.lang, `/${t.governance}/${t.boardOfDirectors}/${t.bardin}/`),
        selector: buildSelector(t.lang, `/${t.governance}/${t.boardOfDirectors}/${t.bardin}/`)
      },
      biamonti: {
        url: buildUrl(t.lang, `/${t.governance}/${t.boardOfDirectors}/${t.biamonti}/`),
        selector: buildSelector(t.lang, `/${t.governance}/${t.boardOfDirectors}/${t.biamonti}/`)
      },
      brown: {
        url: buildUrl(t.lang, `/${t.governance}/${t.boardOfDirectors}/${t.brown}/`),
        selector: buildSelector(t.lang, `/${t.governance}/${t.boardOfDirectors}/${t.brown}/`)
      },
      roquette: {
        url: buildUrl(t.lang, `/${t.governance}/${t.boardOfDirectors}/${t.roquette}/`),
        selector: buildSelector(t.lang, `/${t.governance}/${t.boardOfDirectors}/${t.roquette}/`)
      },
      gonzalo: {
        url: buildUrl(t.lang, `/${t.governance}/${t.boardOfDirectors}/${t.gonzalo}/`),
        selector: buildSelector(t.lang, `/${t.governance}/${t.boardOfDirectors}/${t.gonzalo}/`)
      },
      notari: {
        url: buildUrl(t.lang, `/${t.governance}/${t.boardOfDirectors}/${t.notari}/`),
        selector: buildSelector(t.lang, `/${t.governance}/${t.boardOfDirectors}/${t.notari}/`)
      },
      piramal: {
        url: buildUrl(t.lang, `/${t.governance}/${t.boardOfDirectors}/${t.piramal}/`),
        selector: buildSelector(t.lang, `/${t.governance}/${t.boardOfDirectors}/${t.piramal}/`)
      },
      pitre: {
        url: buildUrl(t.lang, `/${t.governance}/${t.boardOfDirectors}/${t.pitre}/`),
        selector: buildSelector(t.lang, `/${t.governance}/${t.boardOfDirectors}/${t.pitre}/`)
      },
      scocchia: {
        url: buildUrl(t.lang, `/${t.governance}/${t.boardOfDirectors}/${t.scocchia}/`),
        selector: buildSelector(t.lang, `/${t.governance}/${t.boardOfDirectors}/${t.scocchia}/`)
      },
      siemens: {
        url: buildUrl(t.lang, `/${t.governance}/${t.boardOfDirectors}/${t.siemens}/`),
        selector: buildSelector(t.lang, `/${t.governance}/${t.boardOfDirectors}/${t.siemens}/`)
      },
      zappia: {
        url: buildUrl(t.lang, `/${t.governance}/${t.boardOfDirectors}/${t.zappia}/`),
        selector: buildSelector(t.lang, `/${t.governance}/${t.boardOfDirectors}/${t.zappia}/`)
      },
      boardCommittees: {
        url: buildUrl(t.lang, `/${t.governance}/${t.committees}/`),
        selector: buildSelector(t.lang, `/${t.governance}/${t.committees}/`)
      },
      simplifiedChart: {
        url: buildUrl(t.lang, `/${t.governance}/${t.simplifiedShareholder}/`),
        selector: buildSelector(t.lang, `/${t.governance}/${t.simplifiedShareholder}/`)
      },
      compliance: {
        url: buildUrl(t.lang, `/${t.governance}/${t.ethics}/`),
        selector: buildSelector(t.lang, `/${t.governance}/${t.ethics}/`)
      },
      dataPrivacy: {
        url: buildUrl(t.lang, `/${t.governance}/${t.dataPrivacy}/`),
        selector: buildSelector(t.lang, `/${t.governance}/${t.dataPrivacy}/`)
      },
      informationSecurity: {
        url: buildUrl(t.lang, `/${t.governance}/${t.informationSecurity}/`),
        selector: buildSelector(t.lang, `/${t.governance}/${t.informationSecurity}/`)
      },
      environmentHealth: {
        url: buildUrl(t.lang, `/${t.governance}/${t.environmentalHealthSafety}/`),
        selector: buildSelector(t.lang, `/${t.governance}/${t.environmentalHealthSafety}/`)
      },
      quality: {
        url: buildUrl(t.lang, `/${t.governance}/${t.govquality}/`),
        selector: buildSelector(t.lang, `/${t.governance}/${t.govquality}/`)
      },
      employeeShareholding: {
        url: buildUrl(t.lang, `/${t.governance}/${t.employeeShareholding}/`),
        selector: buildSelector(t.lang, `/${t.governance}/${t.employeeShareholding}/`)
      },
      publications: {
        url: buildUrl(t.lang, `/${t.governance}/${t.publications}/`),
        selector: buildSelector(t.lang, `/${t.governance}/${t.publications}/`)
      }
    },

    // Sustainability Page
    sustainabilityPage: {
      overview: {
        url: buildUrl(t.lang, `/${t.sustainability}/`),
        selector: buildSelector(t.lang, `/${t.sustainability}/`)
      },
      eyesCarbon: {
        url: buildUrl(t.lang, `/${t.sustainability}/${t.eyesCarbon}/`),
        selector: buildSelector(t.lang, `/${t.sustainability}/${t.eyesCarbon}/`)
      },
      eyesCircularity: {
        url: buildUrl(t.lang, `/${t.sustainability}/${t.eyesCircularity}/`),
        selector: buildSelector(t.lang, `/${t.sustainability}/${t.eyesCircularity}/`)
      },
      eyesInclusion: {
        url: buildUrl(t.lang, `/${t.sustainability}/${t.eyesInclusion}/`),
        selector: buildSelector(t.lang, `/${t.sustainability}/${t.eyesInclusion}/`)
      },
      eyesWorldSight: {
        url: buildUrl(t.lang, `/${t.sustainability}/${t.eyesWorldSight}/`),
        selector: buildSelector(t.lang, `/${t.sustainability}/${t.eyesWorldSight}/`)
      },
      eyesEthics: {
        url: buildUrl(t.lang, `/${t.sustainability}/${t.eyesEthics}/`),
        selector: buildSelector(t.lang, `/${t.sustainability}/${t.eyesEthics}/`)
      },
      publications: {
        url: buildUrl(t.lang, `/${t.sustainability}/${t.suspublications}/`),
        selector: buildSelector(t.lang, `/${t.sustainability}/${t.suspublications}/`)
      }
    },

    // Investors Page, for ES, JP and PT, this pages redirects to EN
    investorsPage: {
      overview: {
        url: buildUrl(t.lang, `/${t.investors}/`),
        selector: buildSelector(t.lang, `/${t.investors}/`)
      },
      financialPublications: {
        url: buildUrl(t.lang, `/${t.investors}/${t.financialPublications}/`),
        selector: buildSelector(t.lang, `/${t.investors}/${t.financialPublications}/`)
      },
      essilorArchive: {
        url: buildUrl(t.lang, `/${t.investors}/${t.financialPublications}/${t.essilorArchive}/`),
        selector: buildSelector(t.lang, `/${t.investors}/${t.financialPublications}/${t.essilorArchive}/`)
      },
      luxotticaArchive: {
        url: buildUrl(t.lang, `/${t.investors}/${t.financialPublications}/${t.luxotticaArchive}/`),
        selector: buildSelector(t.lang, `/${t.investors}/${t.financialPublications}/${t.luxotticaArchive}/`)
      },
      grandvisionArchive: {
        url: buildUrl(t.lang, `/${t.investors}/${t.financialPublications}/${t.grandvisionArchive}/`),
        selector: buildSelector(t.lang, `/${t.investors}/${t.financialPublications}/${t.grandvisionArchive}/`)
      },
      regulatoryInfo: {
        url: buildUrl(t.lang, `/${t.investors}/${t.regulatoryInfo}/`),
        selector: buildSelector(t.lang, `/${t.investors}/${t.regulatoryInfo}/`)
      },
      annualShareholders: {
        url: buildUrl(t.lang, `/${t.investors}/${t.annualShareholders}/`),
        selector: buildSelector(t.lang, `/${t.investors}/${t.annualShareholders}/`)
      },
      agm2025 :{
        url: buildUrl(t.lang, `/${t.investors}/${t.annualShareholders}/${t.agm2025}/`),
        selector: buildSelector(t.lang, `/${t.investors}/${t.annualShareholders}/${t.agm2025}/`)
      },
      agm2024 :{
        url: buildUrl(t.lang, `/${t.investors}/${t.annualShareholders}/${t.agm2024}/`),
        selector: buildSelector(t.lang, `/${t.investors}/${t.annualShareholders}/${t.agm2024}/`)
      },
      stocksKeyInformation: {
        url: buildUrl(t.lang, `/${t.investors}/${t.stocksKeyInformation}`),
        selector: buildSelector(t.lang, `/${t.investors}/${t.stocksKeyInformation}`)
      },
      realTimeQuota: {
        url: buildUrl(t.lang, `/${t.investors}/${t.realTimeQuota}`),
        selector: buildSelector(t.lang, `/${t.investors}/${t.realTimeQuota}`)
      },
      shareholdingStructure: {
        url: buildUrl(t.lang, `/${t.investors}/${t.shareholdingStructure}`),
        selector: buildSelector(t.lang, `/${t.investors}/${t.shareholdingStructure}`)
      },
      beingShareholder: {
        url: buildUrl(t.lang, `/${t.investors}/${t.beingShareholder}`),
        selector: buildSelector(t.lang, `/${t.investors}/${t.beingShareholder}`)
      },
      debtKeyInformation: {
        url: buildUrl(t.lang, `/${t.investors}/${t.debtKeyInformation}`),
        selector: buildSelector(t.lang, `/${t.investors}/${t.debtKeyInformation}`)
      },
      diversifiedDebt: {
        url: buildUrl(t.lang, `/${t.investors}/${t.diversifiedDebt}`),
        selector: buildSelector(t.lang, `/${t.investors}/${t.diversifiedDebt}`)
      },
      liquidity: {
        url: buildUrl(t.lang, `/${t.investors}/${t.liquidity}`),
        selector: buildSelector(t.lang, `/${t.investors}/${t.liquidity}`)
      },
      financingSources: {
        url: buildUrl(t.lang, `/${t.investors}/${t.financingSources}`),
        selector: buildSelector(t.lang, `/${t.investors}/${t.financingSources}`)
      },
      financialCalendar: {
        url: buildUrl(t.lang, `/${t.investors}/${t.financialCalendar}/`),
        selector: buildSelector(t.lang, `/${t.investors}/${t.financialCalendar}/`)
      },
      contactAlerts: {
        url: buildUrl(t.lang, `/${t.investors}/${t.contactAlerts}/`),
        selector: buildSelector(t.lang, `/${t.investors}/${t.contactAlerts}/`)
      }
    },

    // Careers Page
    careersPage: {
      overview: {
        url: buildUrl(t.lang, `/${t.careers}/`),
        selector: buildSelector(t.lang, `/${t.careers}/`)
      },
      operationsTalentProgram: {
        url: buildUrl(t.lang, `/${t.careers}/${t.operationsTalent}/`),
        selector: buildSelector(t.lang, `/${t.careers}/${t.operationsTalent}/`)
      },
      smartEyewearLab: {
        url: buildUrl(t.lang, `/${t.careers}/${t.smartEyewearLab}/`),
        selector: buildSelector(t.lang, `/${t.careers}/${t.smartEyewearLab}/`)
      }
    },

    // Newsroom Page, for ES, JP and PT, press releases redirects to EN
    newsroomPage: {
      overview: {
        url: buildUrl(t.lang, `/${t.newsroom}/`),
        selector: buildSelector(t.lang, `/${t.newsroom}/`)
      },
      overview: {
        url: buildUrl(t.lang, `/${t.newsroom}/`),
        selector: buildSelector(t.lang, `/${t.newsroom}/`)
      },
      pressRelease: {
        url: buildUrl(t.lang, `/${t.newsroom}/${t.pressReleases}/`),
        selector: buildSelector(t.lang, `/${t.newsroom}/${t.pressReleases}/`)
      },
      stories: {
        url: buildUrl(t.lang, `/${t.newsroom}/${t.stories}/`),
        selector: buildSelector(t.lang, `/${t.newsroom}/${t.stories}/`)
      },
      gallery: {
        url: buildUrl(t.lang, `/${t.newsroom}/${t.gallery}/`),
        selector: buildSelector(t.lang, `/${t.newsroom}/${t.gallery}/`)
      },
      mediaContacts: {
        url: buildUrl(t.lang, `/${t.newsroom}/${t.mediaContacts}/`),
        selector: buildSelector(t.lang, `/${t.newsroom}/${t.mediaContacts}/`)
      },
      _2023hightlights: {
        url: buildUrl(t.lang, `/${t["2023highlights"]}/`),
        selector: buildSelector(t.lang, `/${t["2023highlights"]}/`)
      },
      _2023hightlight1: {
        url: buildUrl(t.lang, `/${t["2023highlights"]}/${t["2023highlight1"]}/`),
        selector: buildSelector(t.lang, `/${t["2023highlights"]}/${t["2023highlight1"]}/`),
      },
      _2023hightlight2: {
        url: buildUrl(t.lang, `/${t["2023highlights"]}/${t["2023highlight2"]}/`),
        selector: buildSelector(t.lang, `/${t["2023highlights"]}/${t["2023highlight2"]}/`),
      },
      _2023hightlight3: {
        url: buildUrl(t.lang, `/${t["2023highlights"]}/${t["2023highlight3"]}/`),
        selector: buildSelector(t.lang, `/${t["2023highlights"]}/${t["2023highlight3"]}/`),
      },
      _2023hightlight4: {
        url: buildUrl(t.lang, `/${t["2023highlights"]}/${t["2023highlight4"]}/`),
        selector: buildSelector(t.lang, `/${t["2023highlights"]}/${t["2023highlight4"]}/`),
      },
      _2023hightlight5: {
        url: buildUrl(t.lang, `/${t["2023highlights"]}/${t["2023highlight5"]}/`),
        selector: buildSelector(t.lang, `/${t["2023highlights"]}/${t["2023highlight5"]}/`),
      },
      _2023hightlight6: {
        url: buildUrl(t.lang, `/${t["2023highlights"]}/${t["2023highlight6"]}/`),
        selector: buildSelector(t.lang, `/${t["2023highlights"]}/${t["2023highlight6"]}/`),
      },
      _2023hightlight7: {
        url: buildUrl(t.lang, `/${t["2023highlights"]}/${t["2023highlight7"]}/`),
        selector: buildSelector(t.lang, `/${t["2023highlights"]}/${t["2023highlight7"]}/`),
      },
      _2023hightlight8: {
        url: buildUrl(t.lang, `/${t["2023highlights"]}/${t["2023highlight8"]}/`),
        selector: buildSelector(t.lang, `/${t["2023highlights"]}/${t["2023highlight8"]}/`),
      },
      _2023hightlight9: {
        url: buildUrl(t.lang, `/${t["2023highlights"]}/${t["2023highlight9"]}/`),
        selector: buildSelector(t.lang, `/${t["2023highlights"]}/${t["2023highlight9"]}/`),
      },
      _2023hightlight10: {
        url: buildUrl(t.lang, `/${t["2023highlights"]}/${t["2023highlight10"]}/`),
        selector: buildSelector(t.lang, `/${t["2023highlights"]}/${t["2023highlight10"]}/`),
      },
      _2023hightlight11: {
        url: buildUrl(t.lang, `/${t["2023highlights"]}/${t["2023highlight11"]}/`),
        selector: buildSelector(t.lang, `/${t["2023highlights"]}/${t["2023highlight11"]}/`),
      },
      _2023hightlight12: {
        url: buildUrl(t.lang, `/${t["2023highlights"]}/${t["2023highlight12"]}/`),
        selector: buildSelector(t.lang, `/${t["2023highlights"]}/${t["2023highlight12"]}/`),
      },
       _2024hightlights: {
        url: buildUrl(t.lang, `/${t["2024highlights"]}/`),
        selector: buildSelector(t.lang, `/${t["2024highlights"]}/`)
      },
      _2024hightlight1: {
        url: buildUrl(t.lang, `/${t["2024highlights"]}/${t["2024highlight1"]}/`),
        selector: buildSelector(t.lang, `/${t["2024highlights"]}/${t["2024highlight1"]}/`),
      },
       _2024hightlight2: {
        url: buildUrl(t.lang, `/${t["2024highlights"]}/${t["2024highlight2"]}/`),
        selector: buildSelector(t.lang, `/${t["2024highlights"]}/${t["2024highlight2"]}/`),
      },
       _2024hightlight3: {
        url: buildUrl(t.lang, `/${t["2024highlights"]}/${t["2024highlight3"]}/`),
        selector: buildSelector(t.lang, `/${t["2024highlights"]}/${t["2024highlight3"]}/`),
      },
       _2024hightlight4: {
        url: buildUrl(t.lang, `/${t["2024highlights"]}/${t["2024highlight4"]}/`),
        selector: buildSelector(t.lang, `/${t["2024highlights"]}/${t["2024highlight4"]}/`),
      },
       _2024hightlight5: {
        url: buildUrl(t.lang, `/${t["2024highlights"]}/${t["2024highlight5"]}/`),
        selector: buildSelector(t.lang, `/${t["2024highlights"]}/${t["2024highlight5"]}/`),
      },
       _2024hightlight6: {
        url: buildUrl(t.lang, `/${t["2024highlights"]}/${t["2024highlight6"]}/`),
        selector: buildSelector(t.lang, `/${t["2024highlights"]}/${t["2024highlight6"]}/`),
      },
       _2024hightlight7: {
        url: buildUrl(t.lang, `/${t["2024highlights"]}/${t["2024highlight7"]}/`),
        selector: buildSelector(t.lang, `/${t["2024highlights"]}/${t["2024highlight7"]}/`),
      },
       _2024hightlight8: {
        url: buildUrl(t.lang, `/${t["2024highlights"]}/${t["2024highlight8"]}/`),
        selector: buildSelector(t.lang, `/${t["2024highlights"]}/${t["2024highlight8"]}/`),
      },
       _2024hightlight9: {
        url: buildUrl(t.lang, `/${t["2024highlights"]}/${t["2024highlight9"]}/`),
        selector: buildSelector(t.lang, `/${t["2024highlights"]}/${t["2024highlight9"]}/`),
      },
       _2024hightlight10: {
        url: buildUrl(t.lang, `/${t["2024highlights"]}/${t["2024highlight10"]}/`),
        selector: buildSelector(t.lang, `/${t["2024highlights"]}/${t["2024highlight10"]}/`),
      },
       _2024hightlight11: {
        url: buildUrl(t.lang, `/${t["2024highlights"]}/${t["2024highlight11"]}/`),
        selector: buildSelector(t.lang, `/${t["2024highlights"]}/${t["2024highlight11"]}/`),
      },
       _2024hightlight12: {
        url: buildUrl(t.lang, `/${t["2024highlights"]}/${t["2024highlight12"]}/`),
        selector: buildSelector(t.lang, `/${t["2024highlights"]}/${t["2024highlight12"]}/`),
      },
       _2025hightlights: {
        url: buildUrl(t.lang, `/${t["2025highlights"]}/`),
        selector: buildSelector(t.lang, `/${t["2025highlights"]}/`)
      },
      _2025hightlight1: {
        url: buildUrl(t.lang, `/${t["2025highlights"]}/${t["2025highlight1"]}/`),
        selector: buildSelector(t.lang, `/${t["2025highlights"]}/${t["2025highlight1"]}/`),
      },
      _2025hightlight2: {
        url: buildUrl(t.lang, `/${t["2025highlights"]}/${t["2025highlight2"]}/`),
        selector: buildSelector(t.lang, `/${t["2025highlights"]}/${t["2025highlight2"]}/`),
      },
      _2025hightlight3: {
        url: buildUrl(t.lang, `/${t["2025highlights"]}/${t["2025highlight3"]}/`),
        selector: buildSelector(t.lang, `/${t["2025highlights"]}/${t["2025highlight3"]}/`),
      },
      _2025hightlight4: {
        url: buildUrl(t.lang, `/${t["2025highlights"]}/${t["2025highlight4"]}/`),
        selector: buildSelector(t.lang, `/${t["2025highlights"]}/${t["2025highlight4"]}/`),
      },
      _2025hightlight5: {
        url: buildUrl(t.lang, `/${t["2025highlights"]}/${t["2025highlight5"]}/`),
        selector: buildSelector(t.lang, `/${t["2025highlights"]}/${t["2025highlight5"]}/`),
      },
      _2025hightlight6: {
        url: buildUrl(t.lang, `/${t["2025highlights"]}/${t["2025highlight6"]}/`),
        selector: buildSelector(t.lang, `/${t["2025highlights"]}/${t["2025highlight6"]}/`),
      },
      _2025hightlight7: {
        url: buildUrl(t.lang, `/${t["2025highlights"]}/${t["2025highlight7"]}/`),
        selector: buildSelector(t.lang, `/${t["2025highlights"]}/${t["2025highlight7"]}/`),
      },
      _2025hightlight8: {
        url: buildUrl(t.lang, `/${t["2025highlights"]}/${t["2025highlight8"]}/`),
        selector: buildSelector(t.lang, `/${t["2025highlights"]}/${t["2025highlight8"]}/`),
      },

    },

    // Footer Page
    footerPage: {
      contactUs: {
        url: buildUrl(t.lang, `/${t.contacts}/`),
        selector: buildSelector(t.lang, `/${t.contacts}/`)
      },
      legalNotice: {
        url: buildUrl(t.lang, `/${t.legalNotice}/`),
        selector: buildSelector(t.lang, `/${t.legalNotice}/`)
      },
      privacyNotice: {
        url: buildUrl(t.lang, `/${t.privacyNotice}/`),
        selector: buildSelector(t.lang, `/${t.privacyNotice}/`)
      },
      cookiePolicy: {
        url: buildUrl(t.lang, `/${t.cookiePolicy}/`),
        selector: buildSelector(t.lang, `/${t.cookiePolicy}/`)
      },
      accessibility: {
        url: buildUrl(t.lang, `/${t.accessibility}/`),
        selector: buildSelector(t.lang, `/${t.accessibility}/`)
      },
      sitemap: {
        url: buildUrl(t.lang, `/${t.sitemap}/`),
        selector: buildSelector(t.lang, `/${t.sitemap}/`)
      }
    },
    annualReportPage: {
      annualReport: {
        url: buildUrl(t.lang, `/${t.annualReport}/`),
        selector: buildSelector(t.lang, `/${t.annualReport}/`)
      },
      ceoMessage: {
        url: buildUrl(t.lang,`/${t.annualReport}/${t.ceoMessage}/`),
        selector: buildSelector(t.lang,`/${t.annualReport}/${t.ceoMessage}/`)
      },
      medTech: {
        url: buildUrl(t.lang,`/${t.annualReport}/${t.medtech}/`),
        selector: buildSelector(t.lang,`/${t.annualReport}/${t.medtech}/`)
      },
      wearables: {
        url: buildUrl(t.lang,`/${t.annualReport}/${t.wearables}/`),
        selector: buildSelector(t.lang,`/${t.annualReport}/${t.wearables}/`)
      },
      myopia: {
        url: buildUrl(t.lang,`/${t.annualReport}/${t.myopia}/`),
        selector: buildSelector(t.lang,`/${t.annualReport}/${t.myopia}/`)
      },
      iconicBrands: {
        url: buildUrl(t.lang,`/${t.annualReport}/${t.iconicBrands}/`),
        selector: buildSelector(t.lang,`/${t.annualReport}/${t.iconicBrands}/`)
      },
      sustainabilityMission: {
        url: buildUrl(t.lang,`/${t.annualReport}/${t.sustainabilityMission}/`),
        selector: buildSelector(t.lang,`/${t.annualReport}/${t.sustainabilityMission}/`)
      },
      headquarters: {
        url: buildUrl(t.lang,`/${t.annualReport}/${t.headquarters}/`),
        selector: buildSelector(t.lang,`/${t.annualReport}/${t.headquarters}/`)
      }
    },
    standalonePage: {
      oasi: {
        url: buildUrl(t.lang, `/${t.oasi}/`),
        selector: buildSelector(t.lang, `/${t.oasi}/`)
      },
      opthy: {
        url: buildUrl(t.lang, `/${t.opthy}/`),
        selector: buildSelector(t.lang, `/${t.opthy}/`)
      }
    },
  };
};

module.exports = { siteLocators };
