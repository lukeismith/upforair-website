/**
 * All page copy lives here so the landing page can be re-worded without
 * touching component markup. The strings below are the Framer "Simplicity"
 * template copy, kept as placeholders until the Up For Air messaging is ready.
 */
import sarah from '../assets/avatars/sarah-johnson.jpg';
import viri from '../assets/avatars/viri-ramirez.jpg';
import anna from '../assets/avatars/anna-paige.jpg';
import david from '../assets/avatars/david-rye.jpg';
import pablo from '../assets/avatars/pablo-yuri.jpg';
import james from '../assets/avatars/james-preslee.jpg';
import hamza from '../assets/avatars/hamza-ehsan.jpg';

import theo from '../assets/logos/theo.svg?raw';
import amsterdam from '../assets/logos/amsterdam.svg?raw';
import savannah from '../assets/logos/savannah.svg?raw';
import milano from '../assets/logos/milano.svg?raw';
import luminous from '../assets/logos/luminous.svg?raw';

export const brand = {
  /** Product name. Change this once and it flows through titles and buttons. */
  name: 'Simplicity',
  title: 'Simplicity - Framer Website Template for Founders',
  description:
    'Simple, modern, and sleek. The Simplicity template is perfect for app creators, founders, and SaaS businesses who want a clean, eye-catching website that will convert visitors into customers.',
  /** Where every "Download" / "Try for free" button points. */
  downloadUrl: 'https://www.framer.com/downloads/',
  contactEmail: 'youremail@email.com',
  /** Set to an empty string to hide the "Created by" credit in the footer. */
  credit: {
    label: 'Created by',
    name: 'Hamza Ehsan',
    url: 'https://hxmzaehsan.com',
    avatar: hamza,
  },
};

/** In-page sections used by the header menu, the sticky pill nav and the footer. */
export const sections = [
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'features', label: 'Features' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'pricing', label: 'Pricing' },
] as const;

export const nav = {
  docs: { label: 'Documentation', href: '/docs' },
  download: { label: 'Download', href: brand.downloadUrl },
};

export type TitleSegment = { text: string; serif?: boolean } | { br: true };

export const hero = {
  tag: 'macOS Sequoia now supported',
  /** Rendered word-by-word so the intro animation can stagger each word. */
  title: [
    { text: 'Simplify your day,' },
    { br: true },
    { text: 'one task', serif: true },
    { text: 'at a time.' },
  ] satisfies TitleSegment[],
  subtitle: 'Get more done with less effort, in a way that works for you.',
  cta: { label: `Try ${brand.name} for Free`, href: brand.downloadUrl },
  note: 'macOS Sequoia 15.0+ is recommended',
  phone: {
    appTitle: 'Taskflow',
    tasks: [
      'Refine onboarding flow',
      'Finalize release notes',
      'Review analytics anomalies',
      'Design sprint follow-up',
    ],
    /** Index of the row that is highlighted as "in progress". */
    activeIndex: 2,
    /** How many rows are ticked off. */
    doneCount: 2,
    progress: 74,
  },
};

export const logos = {
  label: 'Helping people stay organised from',
  items: [
    { name: 'theo', svg: theo },
    { name: 'Amsterdam', svg: amsterdam },
    { name: 'Savannah', svg: savannah },
    { name: 'Milano', svg: milano },
    { name: 'Luminous', svg: luminous },
  ],
};

export const howItWorks = {
  tag: 'How it works',
  title: 'Getting started is <em>simple.</em>',
  subtitle: 'A simple, three step process to getting your life organised.',
  steps: [
    {
      title: `Install ${brand.name}`,
      body: 'Get up and running in minutes—download and install the app to start simplifying your workflow immediately.',
      art: 'logo',
    },
    {
      title: 'Add Your Tasks',
      body: 'Quickly add and organize your to-dos. Stay focused on what matters most, without the clutter.',
      art: 'add-tasks',
    },
    {
      title: 'Track and Complete',
      body: 'See your progress at a glance as you tick off tasks. Stay productive and in control, one step at a time.',
      art: 'track-complete',
    },
  ] as const,
};

export const largeTestimonial = {
  quote: `${brand.name} completely <em>transformed</em> the way I manage my day to day.`,
  author: 'Alex Greenford',
};

export const features = {
  items: [
    {
      title: 'Create in Seconds',
      body: 'Build new lists and add tasks instantly with a simple, streamlined interface.',
    },
    {
      title: 'Organize with Ease',
      body: 'Drag, drop, and rearrange items effortlessly to keep everything in perfect order.',
    },
    {
      title: 'Sync Across All Devices',
      body: 'Access your lists anywhere, anytime—always up-to-date, no matter what device you’re using.',
    },
  ],
  illustration: {
    searchPlaceholder: 'Search…',
    lists: [
      { icon: 'browser', label: "Today's list", count: 5 },
      { icon: 'desktop', label: 'Work', count: 15 },
      { icon: 'check-circle', label: 'Completed', count: 20 },
    ],
    newTask: 'Complete landing page design',
    typingPlaceholder: 'Type here…',
    pickerIcons: [
      'smiley',
      'text-cursor',
      'house',
      'archive',
      'bank',
      'bookmark',
      'calendar-check',
      'envelope',
      'file',
      'archive-box',
    ],
    pickerColors: [
      '#F8F8F8',
      '#FF7474',
      '#FFA502',
      '#FFFA65',
      '#2ECC71',
      '#DEB4F6',
      '#B4AAFF',
      '#5490FF',
      '#B3EFB8',
      'rgba(255,255,255,0.18)',
    ],
  },
};

export const testimonials = {
  tag: 'Testimonials',
  title: 'What <em>others</em> are saying.',
  subtitle: 'Trusted by founders and creatives who value simplicity and results.',
  items: [
    {
      quote: `"${brand.name} keeps my workday organized without the hassle. It’s the easiest task manager I’ve used."`,
      name: 'Sarah Johnson',
      role: 'Co-founder of Monday',
      avatar: sarah,
    },
    {
      quote: '"I love how intuitive and fast this app is. I can get everything done without distractions. It\'s a must-have!"',
      name: 'Viri Ramirez',
      role: 'Founder of Tuesday',
      avatar: viri,
    },
    {
      quote: `“${brand.name} is exactly what I needed to stay organized. It’s fast, easy, and incredibly effective.”`,
      name: 'Anna Paige',
      role: 'Founder of Friday',
      avatar: anna,
    },
    {
      quote: '“This app helps me prioritize my tasks without the clutter. It’s a game-changer for my workflow.”',
      name: 'David Rye',
      role: 'Co-founder of Saturday',
      avatar: david,
    },
    {
      quote: `“${brand.name} made managing my to-dos effortless. My productivity has never been higher.”`,
      name: 'Pablo Yuri',
      role: 'Co-founder of Wednesday',
      avatar: pablo,
    },
    {
      quote: '“The cross-device sync is seamless. I can access my lists anywhere, and they’re always up to date.”',
      name: 'James Preslee',
      role: 'CEO of Thursday',
      avatar: james,
    },
  ],
};

export const pricing = {
  tag: 'Pricing',
  title: 'Simple pricing, no <em>surprises.</em>',
  subtitle: 'Choose a plan that fits your needs, with everything you need to stay organized and productive.',
  toggle: { monthly: 'Monthly', annual: 'Annual', badge: 'Save 30%' },
  annualNote: 'Billed in one annual payment.',
  plans: [
    {
      name: 'Standard',
      monthly: 15,
      annual: 8,
      description: 'All the essentials you need to stay on top of your tasks, with simplicity and ease.',
      cta: { label: `Try ${brand.name} for Free`, href: brand.downloadUrl },
      featuresLabel: 'Including:',
      features: [
        'Unlimited Task Creation',
        'Cross-Device Sync',
        'Drag-and-Drop Organization',
        'Basic Priority Settings',
        'Email Support',
      ],
    },
    {
      name: 'Mastermind',
      monthly: 29,
      annual: 19,
      description: 'Take your productivity to the next level with advanced tools and personalized support.',
      cta: { label: `Try ${brand.name} for Free`, href: brand.downloadUrl },
      featuresLabel: 'Standard plus:',
      features: [
        'Custom Task Categories',
        'Advanced Priority Settings',
        'Integration with Calendar',
        'Unlimited Filters',
        'Priority Support',
      ],
    },
  ],
};

export const faq = {
  tag: 'Frequently Asked Questions',
  title: 'Everything you <em>need</em> to know.',
  subtitle: 'Got questions? We’ve got answers. Here’s everything you need to know before getting started.',
  items: [
    {
      q: `Is ${brand.name} available for all devices?`,
      a: `${brand.name} is designed for Mac and syncs across all your devices, so you can access your tasks anywhere.`,
    },
    {
      q: 'How easy is it to get started?',
      a: 'Very easy! Install the app, add your first tasks, and start organizing within minutes.',
    },
    {
      q: `Can I try ${brand.name} before committing to a plan?`,
      a: 'Yes, we offer a free trial so you can explore all the features before deciding.',
    },
    {
      q: 'What’s the difference between Standard and Mastermind plans?',
      a: 'The Mastermind plan offers advanced features like custom categories, integrations, and priority support.',
    },
    {
      q: 'Can I cancel my plan anytime?',
      a: 'Absolutely. You can cancel or change your plan whenever you need—no questions asked.',
    },
    {
      q: 'Is customer support available?',
      a: 'Yes, all plans come with 24/7 email support, and the Mastermind plan includes priority support.',
    },
  ],
};

export const cta = {
  title: 'Ready to <em>simplify</em> your workflow?',
  subtitle: 'Start your free trial today and experience how effortless task management can be.',
  button: { label: `Try ${brand.name} for Free`, href: brand.downloadUrl },
  note: 'macOS Sequoia 15.0+ is recommended',
};

export const footer = {
  newsletter: {
    title: 'Join our newsletter',
    body: "Sign up to our mailing list below and be the first to know about new updates. Don't worry, we hate spam too.",
    placeholder: 'Your Email Address',
    button: 'Get Notified',
    /** Point this at your form provider (Buttondown, Formspree, ConvertKit…). */
    action: '',
  },
  columns: [
    {
      title: 'Sections',
      links: sections.map((s) => ({ label: s.label, href: `/#${s.id}` })),
    },
    {
      title: 'Information',
      links: [
        { label: 'FAQ', href: '/#faq' },
        { label: 'Contact', href: `mailto:${brand.contactEmail}` },
        { label: '404', href: '/404' },
      ],
    },
  ],
};

export const docs = {
  eyebrow: 'Documentation',
  title: 'App documentation',
  subtitle: 'A structured home for product guides, feature explanations, workflows, and common questions.',
  tocTitle: 'On this page',
  sections: [
    { id: 'overview', title: 'Overview', kind: 'single', placeholders: ['Overview content area'] },
    { id: 'feature-guides', title: 'Feature guides', kind: 'grid', placeholders: ['Feature guide', 'Feature guide'] },
    { id: 'workflows', title: 'Workflows', kind: 'rows', placeholders: ['Workflow outline', 'Workflow outline'] },
    {
      id: 'faq',
      title: 'Frequently asked questions',
      tocLabel: 'FAQ',
      kind: 'rows',
      placeholders: ['Question placeholder', 'Question placeholder', 'Question placeholder'],
    },
  ] as const,
};

export const notFound = {
  tag: 'Page Not Found',
  title: 'Looks like you took a wrong turn.',
  subtitle: 'We couldn’t find that page, but don’t worry—let’s get you back on track.',
  button: { label: 'Go Home', href: '/' },
};
