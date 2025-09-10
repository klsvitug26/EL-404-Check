const { access } = require("fs");

// locators/siteLocators.js
const siteLocators = {
  homePage: {
    url: 'https://www.essilorluxottica.com/en/',
    groupMenu: 'a[href="/en/group/"]'
  },
  // Group Page EN
  groupPage: {
    whoWeAre: {
      url: 'https://www.essilorluxottica.com/en/group/',
      selector: 'a[href="/en/group/"]'
    },
    mission: {
      url: 'https://www.essilorluxottica.com/en/group/mission/',
      selector: 'a[href="/en/group/mission/"]'
    },
    innovation: {
      url: 'https://www.essilorluxottica.com/en/group/innovation/',
      selector: 'a[href="/en/group/innovation/"]'
    },
    strategy: {
      url: 'https://www.essilorluxottica.com/en/group/strategy/',
      selector: 'a[href="/en/group/strategy/"]'
    },
    footprint: {
      url: 'https://www.essilorluxottica.com/en/group/global-footprint/',
      selector: 'a[href="/en/group/global-footprint/"]'
    },
    history: {
      url: 'https://www.essilorluxottica.com/en/group/history/',
      selector: 'a[href="/en/group/history/"]'
    }
  },
  // Brands Page EN
  brandsPage: {
    overview: {
      url: 'https://www.essilorluxottica.com/en/brands/',
      selector: 'a[href="/en/overview/"]'
    },
    eyecare: {
      url: 'https://www.essilorluxottica.com/en/brands/eyecare/',
      selector: 'a[href="/en/brands/eyecare/"]'
    },
    eyewear: {
      url: 'https://www.essilorluxottica.com/en/brands/eyewear/',
      selector: 'a[href="/en/brands/eyewear/"]'
    },
    d2c: {
      url: 'https://www.essilorluxottica.com/en/brands/direct-to-consumer/',
      selector: 'a[href="/en/brands/direct-to-consumer/"]'
    },
    smartEyewear: {
      url: 'https://www.essilorluxottica.com/en/brands/smart-eyewear-solutions/',
      selector: 'a[href="/en/brands/smart-eyewear-solutions/"]'
    },
    apparel: {
      url: 'https://www.essilorluxottica.com/en/brands/apparel-footwear-accessories/',
      selector: 'a[href="/en/brands/apparel-footwear-accessories/"]'
    }
  },
  // Governance Page EN
  governancePage: {
    overview: {
      url: 'https://www.essilorluxottica.com/en/governance/',
      selector: 'a[href="/en/governance/"]'
    },
    boardOfDirectors: {
      url: 'https://www.essilorluxottica.com/en/governance/board-directors/',
      selector: 'a[href="/en/governance/board-directors/"]'
    },
    boardCommitteess: {
      url: 'https://www.essilorluxottica.com/en/governance/committees/',
      selector: 'a[href="/en/governance/committees/"]'
    },
    simplifiedChart: {
      url: 'https://www.essilorluxottica.com/en/governance/simplified-corporate-chart/',
      selector: 'a[href="/en/governance/simplified-corporate-chart/"]'
    },
    compliance: {
      url: 'https://www.essilorluxottica.com/en/governance/ethics/',
      selector: 'a[href="/en/governance/ethics/"]'
    },
    dataPrivacy: {
      url: 'https://www.essilorluxottica.com/en/governance/data-privacy/',
      selector: 'a[href="/en/governance/data-privacy/"]'
    },
    informationSecurity: {
      url: 'https://www.essilorluxottica.com/en/governance/information-security/',
      selector: 'a[href="/en/governance/information-security/'
    },
    environmentHealth: {
      url: 'https://www.essilorluxottica.com/en/governance/environmental-health-safety/',
      selector: 'a[href="/en/governance/environmental-health-safety/"]'
    },
    quality: {
      url: 'https://www.essilorluxottica.com/en/governance/quality/',
      selector: 'a[href="/en/governance/quality/"]'
    },
    employeeShareholding: {
      url: 'https://www.essilorluxottica.com/en/governance/employee-shareholding/',
      selector: 'a[href="/en/governance/employee-shareholding/"]'
    },
    publications: {
      url: 'https://www.essilorluxottica.com/en/governance/publications/',
      selector: 'a[href="/en/governance/publications/"]'
    }
  },

  // Sustainability Page EN
  sustainabilityPage: {
    overview: {
      url: 'https://www.essilorluxottica.com/en/sustainability/',
      selector: 'a[href="/en/sustainability/"]'
    },
    eyesCarbon: {
      url: 'https://www.essilorluxottica.com/en/sustainability/eyes-on-carbon/',
      selector: 'a[href="/en/sustainability/eyes-on-carbon/"]'
    },
    eyesCircularity: {
      url: 'https://www.essilorluxottica.com/en/sustainability/eyes-on-circularity/',
      selector: 'a[href="/en/sustainability/eyes-on-circularity/"]'
    },
    eyesInclusion: {
      url: 'https://www.essilorluxottica.com/en/sustainability/eyes-on-inclusion/',
      selector: 'a[href="/en/sustainability/eyes-on-inclusion/"]'
    },
    eyesWorldSight: {
      url: 'https://www.essilorluxottica.com/en/sustainability/eyes-on-world-sight/',
      selector: 'a[href="/en/sustainability/eyes-on-world-sight/"]'
    },
    eyesEthics: {
      url: 'https://www.essilorluxottica.com/en/sustainability/eyes-on-ethics/',
      selector: 'a[href="/en/sustainability/eyes-on-ethics/"]'
    },
    publications: {
      url: 'https://www.essilorluxottica.com/en/sustainability/sustainability-publications/',
      selector: 'a[href="/en/sustainability/sustainability-publications/"]'
    }
  },

  //Investors Page EN
  investorsPage: {
    overview: {
      url: 'https://www.essilorluxottica.com/en/investors/',
      selector: 'a[href="/en/investors/"]'
    },
    financialPublications: {
      url: 'https://www.essilorluxottica.com/en/investors/financial-publications/',
      selector: 'a[href="/en/investors/financial-publications/"]'
    },
    regulatoryInfo: {
      url: 'https://www.essilorluxottica.com/en/investors/regulatory-information/',
      selector: 'a[href="/en/investors/regulatory-information/"]'
    },
    stocksKeyInformation: {
      url: 'https://www.essilorluxottica.com/en/investors/stock-and-shareholder-information/#key-information',
      selector: 'a[href="/en/investors/stock-and-shareholder-information/#key-information"]'
    },
    realTimeQuota: {
      url: 'https://www.essilorluxottica.com/en/investors/stock-and-shareholder-information/#real-time-quota',
      selector: 'a[href="/en/investors/stock-and-shareholder-information/#real-time-quota"]'
    },
    shareholdingStructure: {
      url: 'https://www.essilorluxottica.com/en/investors/stock-and-shareholder-information/#shareholding-structure',
      selector: 'a[href="/en/investors/stock-and-shareholder-information/#shareholding-structure"]'
    },
    beingShareholder: {
      url: 'https://www.essilorluxottica.com/en/investors/stock-and-shareholder-information/#being-a-shareholder',
      selector: 'a[href="/en/investors/stock-and-shareholder-information/#being-a-shareholder"]'
    },
    debtKeyInformation: {
      url: 'https://www.essilorluxottica.com/en/investors/debt-financing/#key-information',
      selector: 'a[href="/en/investors/debt-financing/#key-information"]'
    },
    diversifiedDebt: {
      url: 'https://www.essilorluxottica.com/en/investors/debt-financing/#a-diversified-debt',
      selector: 'a[href="/en/investors/debt-financing/#a-diversified-debt"]'
    },
    liquidity: {
      url: 'https://www.essilorluxottica.com/en/investors/debt-financing/#liquidity',
      selector: 'a[href="/en/investors/debt-financing/#liquidity"]'
    },
    financingSources: {
      url: 'https://www.essilorluxottica.com/en/investors/debt-financing/#financing-sources',
      selector: 'a[href="/en/investors/debt-financing/#financing-sources"]'
    },
    financialCalendar: {
      url: 'https://www.essilorluxottica.com/en/investors/financial-calendar/',
      selector: 'a[href="/en/investors/financial-calendar/"]'
    },
    contactAlerts: {
      url: 'https://www.essilorluxottica.com/en/investors/investors-contacts-and-alerts/',
      selector: 'a[href="/en/investors/investors-contacts-and-alerts/"]'
    }
  },

  careersPage: {
    overview: {
      url: 'https://www.essilorluxottica.com/en/careers/',
      selector: 'a[href="/en/careers/"]'
    },
    operationsTalentProgram: {
      url: 'https://www.essilorluxottica.com/en/careers/operations-talent-program/',
      selector: 'a[href="/en/careers/operations-talent-program/"]'
    },
    smartEyewearLab: {
      url: 'https://www.essilorluxottica.com/en/careers/smart-eyewear-lab/',
      selector: 'a[href="/en/careers/smart-eyewear-lab/"]'
    },
  },

  newsroomPage: {
    overview: {
      url: 'https://www.essilorluxottica.com/en/newsroom/',
      selector: 'a[href="/en/newsroom/"]'
    },
    pressReleases: {
      url: 'https://www.essilorluxottica.com/en/newsroom/press-releases/',
      selector: 'a[href="/en/newsroom/press-releases/"]'
    },
    stories: {
      url: 'https://www.essilorluxottica.com/en/newsroom/stories/',
      selector: 'a[href="/en/newsroom/stories/"]'
    },
    gallery: {
      url: 'https://www.essilorluxottica.com/en/newsroom/gallery/',
      selector: 'a[href="/en/newsroom/gallery/"]'
    },
    mediaContacts: {
      url: 'https://www.essilorluxottica.com/en/newsroom/media-contacts/',
      selector: 'a[href="/en/newsroom/media-contacts/"]'
    }
  },

  footerPage: {
    contactUs: {
      url: 'https://www.essilorluxottica.com/en/contacts/',
      selector: 'a[href="/en/contacts/"]'
    },
    legalNotice: {
      url: 'https://www.essilorluxottica.com/en/legal-notice/',
      selector: 'a[href="/en/legal-notice/"]'
    },
    privacyNotice: {
      url: 'https://www.essilorluxottica.com/en/privacy-notice/',
      selector: 'a[href="/en/privacy-notice/"]'
    },
    cookiePolicy: {
      url: 'https://www.essilorluxottica.com/en/cookie-policy/',
      selector: 'a[href="/en/cookie-policy/"]'
    },
    accessibility: {
      url: 'https://www.essilorluxottica.com/en/accessibility/',
      selector: 'a[href="/en/accessibility/"]'
    },
    sitemap: {
      url: 'https://www.essilorluxottica.com/en/sitemap/',
      selector: 'a[href="/en/sitemap/"]'
    },
  }
};

module.exports = { siteLocators };
