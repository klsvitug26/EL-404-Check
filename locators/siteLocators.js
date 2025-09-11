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
      apparel: {
        url: buildUrl(t.lang, `/${t.brands}/${t.apparel}/`),
        selector: buildSelector(t.lang, `/${t.brands}/${t.apparel}/`)
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

    // Investors Page
    investorsPage: {
      overview: {
        url: buildUrl(t.lang, `/${t.investors}/`),
        selector: buildSelector(t.lang, `/${t.investors}/`)
      },
      financialPublications: {
        url: buildUrl(t.lang, `/${t.investors}/${t.financialPublications}/`),
        selector: buildSelector(t.lang, `/${t.investors}/${t.financialPublications}/`)
      },
      regulatoryInfo: {
        url: buildUrl(t.lang, `/${t.investors}/${t.regulatoryInfo}/`),
        selector: buildSelector(t.lang, `/${t.investors}/${t.regulatoryInfo}/`)
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

    // Newsroom Page
    newsroomPage: {
      overview: {
        url: buildUrl(t.lang, `/${t.newsroom}/`),
        selector: buildSelector(t.lang, `/${t.newsroom}/`)
      },
      pressReleases: {
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
      }
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
    }
  };
};

module.exports = { siteLocators };
