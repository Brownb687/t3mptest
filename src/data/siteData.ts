/**
 * Site data and content for Temp3st portfolio.
 * Editable in one place without altering layout logic.
 */

export interface SkillItem {
  id: string;
  name: string;
  iconName: 'Handshake' | 'Megaphone' | 'Users' | 'Flag' | 'PenLine';
}

export interface ProjectProof {
  id: string;
  name: string;
  status: string;
  role: string;
  date: string;
  description: string;
  proofLinkText: string;
  proofLinkTarget: string;
}

export interface PostSample {
  id: string;
  title: string;
  label: string;
  url: string;
}

export interface ReachCard {
  id: string;
  title: string;
  chip: string;
  stats: {
    label: string;
    value: string;
  }[];
  screenshotUrl: string;
  screenshotAlt: string;
}

export interface DealroomItem {
  id: string;
  image: string;
  title: string;
  amount: string;
  caption: string;
  alt: string;
}

export const siteData = {
  profile: {
    name: 'Temp3st',
    handle: '@0xTemp3st',
    tagline: 'Web3 creator, community manager and KOL marketer.',
    subtagline: 'Making complex things simple and bringing good projects to the right audience.',
    pfpUrl: '/pfp.jpg',
    availability: 'Open to work',
    badgeText: 'WEB3 CREATOR • COMMUNITY LEAD •',
    year: '2026',
  },
  links: {
    x: 'https://x.com/0xTemp3st',
    telegram: 'https://t.me/Ox_Temp3st',
    email: 'moh.oluwaseyi@gmail.com',
  },
  navItems: [
    { label: 'HOME', href: '#home' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'WORK', href: '#work' },
    { label: 'DEALROOM', href: '#dealroom' },
    { label: 'CONTACT', href: '#contact' },
  ],
  skills: [
    {
      id: 'kol-ambassador',
      name: 'KOL & Ambassador Partnerships',
      iconName: 'Handshake',
    },
    {
      id: 'kol-marketing',
      name: 'KOL Marketing',
      iconName: 'Megaphone',
    },
    {
      id: 'community-management',
      name: 'Community Management',
      iconName: 'Users',
    },
    {
      id: 'community-lead',
      name: 'Community Lead',
      iconName: 'Flag',
    },
    {
      id: 'content-creation',
      name: 'Web3 Content Creation',
      iconName: 'PenLine',
    },
  ] as SkillItem[],
  projects: [
    {
      id: 'cardradar',
      name: 'CardRadar',
      status: 'Paid campaign',
      role: 'Paid KOL partnership',
      date: 'September 2026',
      description: 'Paid KOL campaign for CardRadar, a gift card rate checker app.',
      proofLinkText: 'View proof',
      proofLinkTarget: '#dealroom',
    },
  ] as ProjectProof[],
  postSamples: [
    {
      id: 'post-1',
      title: 'Sample post 1',
      label: 'Read it on X',
      url: 'https://x.com/0xtemp3st/status/2111383897170718784',
    },
    {
      id: 'post-2',
      title: 'Sample post 2',
      label: 'Read it on X',
      url: 'https://x.com/0xtemp3st/status/2098410141926174901',
    },
    {
      id: 'post-3',
      title: 'Sample post 3',
      label: 'Read it on X',
      url: 'https://x.com/0xtemp3st/status/2085035045010411768',
    },
    {
      id: 'post-4',
      title: 'Sample post 4',
      label: 'Read it on X',
      url: 'https://x.com/0xtemp3st/status/2089003680338972921',
    },
    {
      id: 'post-5',
      title: 'Sample post 5',
      label: 'Read it on X',
      url: 'https://x.com/0xtemp3st/status/2050533256806719554',
    },
    {
      id: 'post-6',
      title: 'Sample post 6',
      label: 'Read it on X',
      url: 'https://x.com/0xtemp3st/status/2060736478011936799',
    },
  ] as PostSample[],
  accountReach: [
    {
      id: 'reach-3m',
      title: 'Last 3 months',
      chip: 'Jul 26 to Oct 23',
      stats: [
        { label: 'Impressions', value: '323K' },
        { label: 'Engagement rate', value: '2.4%' },
      ],
      screenshotUrl: '/analytics-3m.jpg',
      screenshotAlt: 'X Analytics for 3 months showing 323K impressions and 2.4% engagement rate',
    },
    {
      id: 'reach-28d',
      title: 'Last 28 days',
      chip: 'Sep 26 to Oct 23',
      stats: [
        { label: 'Impressions', value: '117.1K' },
        { label: 'Engagement rate', value: '2.3%' },
      ],
      screenshotUrl: '/analytics-28d.jpg',
      screenshotAlt: 'X Analytics for 28 days showing 117.1K impressions and 2.3% engagement rate',
    },
  ] as ReachCard[],
  dealroom: [
    {
      id: 'deal-upfront',
      image: '/dealroom-upfront.jpg',
      title: 'Paid upfront',
      amount: '$100',
      caption: 'Paid partnership. $100 USDT (BEP20) sent upfront and confirmed. Second $100 due at the end of the month.',
      alt: 'Telegram chat confirmation of $100 USDT BEP20 sent upfront for paid partnership',
    },
    {
      id: 'deal-rate-150',
      image: '/dealroom-rate-150.jpg',
      title: 'Rate agreed',
      amount: '$150',
      caption: 'Paid partnership. Offer of $150 sent to the founder and accepted.',
      alt: 'Chat confirmation agreeing on $150 campaign rate with project founder',
    },
    {
      id: 'deal-cardradar',
      image: '/dealroom-cardradar.jpg',
      title: 'CardRadar',
      amount: '$50',
      caption: 'Campaign rate agreed at $50. Brief sent after.',
      alt: 'CardRadar campaign rate agreed at $50 and brief delivery confirmed',
    },
  ] as DealroomItem[],
  needOptions: [
    'KOL campaign',
    'Ambassador partnership',
    'Community management',
    'Community lead',
    'Content',
  ],
};
