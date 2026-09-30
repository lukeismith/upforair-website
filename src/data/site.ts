/**
 * Every string on the site. The copy follows the app's own voice and vocabulary
 * (design/up-for-air/1-almanac/DESIGN.md §8 in the app repo): activity first, minutes
 * second; endings as clock times; "rabbit holes" are locked, never blocked or gated;
 * no shame words, no exclamation marks.
 */

/**
 * Flip to 'live' once the app is on the App Store. Pre-launch, every primary button
 * points at the newsletter form instead of the store.
 */
export const launch = {
  state: 'prelaunch' as 'prelaunch' | 'live',
  appStoreUrl: 'https://apps.apple.com/app/up-for-air/id0000000000',
};

const storeHref = launch.state === 'live' ? launch.appStoreUrl : '/#newsletter';
const storeLabel = launch.state === 'live' ? 'Get the app' : 'Get notified';

export const brand = {
  name: 'Up For Air',
  company: 'Temperanda LLC',
  title: 'Up For Air – Earn your scroll',
  description:
    'Everyone has a rabbit hole or two. Up For Air locks yours, counts the minutes you make up top, and brings you back up at a time you choose. Free on the App Store for iPhone.',
  tagline: 'Earn your scroll.',
  /** Replace with the real support address before launch. */
  contactEmail: 'hello@temperanda.com',
  platformNote: 'iPhone · iOS 18 or later',
  primaryCta: { label: storeLabel, href: storeHref, apple: launch.state === 'live' },
};

/** In-page sections used by the sticky pill nav and the footer. */
export const sections = [
  { id: 'how-it-works', label: 'How it works' },
  { id: 'features', label: 'Features' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'faq', label: 'FAQ' },
] as const;

export const nav = {
  help: { label: 'Help', href: '/help' },
  cta: brand.primaryCta,
};

export type TitleSegment = { text: string; serif?: boolean } | { br: true };

export const hero = {
  tag: launch.state === 'live' ? 'Free on the App Store' : 'Coming soon to the App Store',
  /** Rendered word-by-word so the intro animation can stagger each word. */
  title: [
    { text: 'Everyone has a' },
    { br: true },
    { text: 'rabbit hole', serif: true },
    { text: 'or two.' },
  ] satisfies TitleSegment[],
  subtitle:
    'There’s nothing wrong with that. Up For Air locks yours and counts the minutes you make up top. Then it brings you back up at a time you choose.',
  cta: brand.primaryCta,
  note: `Free, with Premium for more ways up top. ${brand.platformNote}.`,
  /** The Home screen drawn inside the phone. Numbers match the app's own gallery. */
  screen: {
    time: '3:25',
    date: 'Wednesday, September 24',
    greeting: 'Good afternoon. A fine day up top.',
    balance: 47,
    balanceLabel: 'to spare',
    dipIn: 'Dip in',
    ledgerTitle: 'Made today',
    ledgerTotal: '60 min',
    ledger: [
      { icon: 'steps', title: 'Your walk', detail: '2,612 steps', minutes: 26 },
      { icon: 'workout', title: 'Workout', detail: '10 minutes', minutes: 10 },
      { icon: 'mindful', title: 'Mindful minutes', detail: '5 minutes', minutes: 10 },
      { icon: 'zone', title: 'Blink Fitness', detail: 'Arrived, stayed 40 min', minutes: 14 },
      { icon: 'hole', title: 'Instagram', detail: '8:12 to 8:27', minutes: -15 },
    ],
    tabs: [
      { icon: 'home', label: 'Home' },
      { icon: 'earn', label: 'Earn' },
      { icon: 'pause', label: 'Pauses' },
      { icon: 'settings', label: 'Settings' },
    ],
  },
};

/** The strip under the hero: ledger lines, activity first, minutes second. */
export const ticker = {
  label: 'Activity first, minutes second.',
  items: [
    { icon: 'steps', text: 'Your walk made 26 min.' },
    { icon: 'workout', text: 'Your workout made 10.' },
    { icon: 'focus', text: '25 minutes, phone down, made 15.' },
    { icon: 'zone', text: 'You’re at the library. 5 min made.' },
    { icon: 'mindful', text: 'Five mindful minutes made 10.' },
    { icon: 'moon', text: 'Your nap made nothing. Still a good nap.' },
    { icon: 'sun', text: 'Back up at 3:40.' },
  ],
};

export const howItWorks = {
  tag: 'How it works',
  title: 'Lock. Make. <em>Dip in.</em>',
  subtitle: 'The whole app, in three sentences.',
  steps: [
    {
      title: 'Choose your rabbit holes.',
      body: 'Lock the apps, categories, and websites that swallow you. Screen Time keeps them locked until you choose to open them.',
      art: 'scene-in-hole',
    },
    {
      title: 'Make minutes up top.',
      body: 'The things you do in the real world make minutes: a walk, a workout, mindful minutes, a focus block, the places you go.',
      art: 'scene-walk',
    },
    {
      title: 'Spend them when you like.',
      body: 'Open a rabbit hole and we’ll ask how long. You choose, and we bring you back up at a time you can see on the clock.',
      art: 'scene-climb-out',
    },
  ] as const,
};

/** The Guilt trip: the bunny gets a word in before you dip in. */
export const guiltTrip = {
  tag: 'Pauses',
  title: 'The app that <em>asks nicely.</em>',
  body: 'Turn on a pause and the bunny gets a word in before you dip in: a quick sum, a deep breath, or a Guilt trip. Turning back never counts as an unlock, so it never makes the next one harder.',
  bubbleEyebrow: 'The bunny',
  reshuffle: 'Another line',
  /** A few of the seventeen lines the app ships. Each: what the bunny says, the reply that carries on, the reply that turns back. */
  lines: [
    {
      say: 'Last time we went down, you said “five minutes.” I’m just saying.',
      go: 'This time I mean it. See ya.',
      stay: 'Okay, okay. Never mind.',
    },
    {
      say: 'Do I have to go down? The clover just came up and I haven’t had a nibble.',
      go: 'Sorry, bun. Down we go.',
      stay: 'You’re right. Go eat the clover.',
    },
    {
      say: 'I’d rather frolic. Frolicking is my whole thing.',
      go: 'Frolic later. Rabbit hole time.',
      stay: 'You’re right. Go frolic.',
    },
    {
      say: 'It’s dark down there, and the signal’s terrible. I’m just saying.',
      go: 'I’ll manage. See ya later.',
      stay: 'Fair point. Let’s stay up.',
    },
    {
      say: 'Do you know what’s at the bottom of a rabbit hole? Nothing. I’ve checked. Twice.',
      go: 'Third time’s the charm. See ya.',
      stay: 'You’ve convinced me. Never mind.',
    },
    {
      say: 'Every minute down there is a minute I’m not eating carrots. I did the math.',
      go: 'Math checks out. Sorry, bun.',
      stay: 'You’re right. Carrots it is.',
    },
    {
      say: 'I get hole-hair down there. Look at my ears. Look at them.',
      go: 'Your ears will recover. See ya later.',
      stay: 'Fine. Ears up.',
    },
    {
      say: 'It’s late. Even the hole is asleep.',
      go: 'Shh. Down we go.',
      stay: 'You’re right. Bed.',
    },
  ],
  landing: ['Ears up. Thank you.', 'Good call. The clover’s this way.', 'See? That wasn’t so hard.'],
};

export const features = {
  tag: 'Features',
  title: 'Up top, down there, <em>and back.</em>',
  items: [
    {
      title: 'Rabbit holes, locked.',
      body: 'Two apps, two categories, and two websites for free, or as many as you like on Premium. Screen Time keeps them locked, in every browser too.',
    },
    {
      title: 'Five ways up top.',
      body: 'Walking, workouts, and mindful minutes come from Apple Health. A focus block needs nothing at all. Zones make minutes when you arrive somewhere you chose.',
    },
    {
      title: 'Back up at 3:40.',
      body: 'Say how long. The end is a clock time, a Live Activity counts you back up, and you only spend the minutes you use.',
    },
  ],
  /** The three panels of the illustration, one per feature. */
  panels: {
    holes: {
      title: 'Rabbit holes',
      edit: 'Edit',
      tiles: [
        { initials: 'IG', name: 'Instagram', status: '1 unlock today', color: 'linear-gradient(135deg, #f9a03f, #e1306c 55%, #7b3fe4)' },
        { initials: 'TT', name: 'TikTok', status: 'Quiet today', color: '#111111' },
        { initials: 'R', name: 'Reddit', status: 'Quiet today', color: '#ff4500' },
      ],
      rows: [
        { kind: 'Categories', name: 'Games', count: '1 of 2 free' },
        { kind: 'Websites', name: 'youtube.com', count: '1 of 2 free' },
      ],
      note: 'Free locks two of each kind. Premium has no limit.',
    },
    earn: {
      eyebrow: 'Wednesday · made today',
      total: '60',
      rows: [
        { icon: 'steps', title: 'Walking', rate: '100 steps make 1 min', minutes: 26 },
        { icon: 'workout', title: 'Workouts', rate: '1 minute makes 1 min', minutes: 10 },
        { icon: 'mindful', title: 'Mindful minutes', rate: '1 minute makes 2 min', minutes: 10 },
        { icon: 'focus', title: 'Focus blocks', rate: '25 minutes make 15', minutes: 15 },
        { icon: 'zone', title: 'Zones', rate: 'Arriving makes 5, then 1 for every 5 you stay', minutes: 14 },
      ],
    },
    limit: {
      neverMind: 'Never mind',
      eyebrow: 'Instagram · 47 min to spare',
      minutes: 15,
      ends: 'Back up at 3:40',
      chips: [5, 10, 15, 30],
      commit: 'Dip in for 15 · back up at 3:40',
      footer: 'You only spend the minutes you use.',
    },
  },
};

export const more = {
  tag: 'More up top',
  title: 'Small things that make <em>the loop hold.</em>',
  subtitle: 'Nothing here is a game, a coach, or a lecture.',
  items: [
    {
      icon: 'checkpoint',
      title: 'Checkpoints',
      body: 'Tap your tag to start. Tap it again to stop. A cheap NFC sticker or a printed card, kept where the habit lives, holds your rabbit holes locked until you tap it again.',
    },
    {
      icon: 'zone',
      title: 'Zones',
      body: 'Arriving at the gym makes 5 min, and every 5 minutes you stay makes one more. It works with the app closed, and your location never leaves your phone.',
      badge: 'Premium',
    },
    {
      icon: 'sun',
      title: 'Your week up top',
      body: 'Seven suns sized by the minutes you made, and a small dot for a rest day. It replaces the streak: there’s no chain and nothing to break.',
    },
    {
      icon: 'bell',
      title: 'Back up at 3:40, everywhere',
      body: 'A Live Activity and the Dynamic Island count you back up. Widgets show what’s to spare, and Control Center starts a focus block in one tap.',
    },
    {
      icon: 'x',
      title: 'Never mind',
      body: 'One tap out, top-left on every screen of the unlock flow. Turning back is a win, and it never makes the next unlock harder.',
    },
    {
      icon: 'health',
      title: 'Your data stays on your phone',
      body: 'Steps, workouts, and mindful minutes are read from Apple Health and never changed. We never see what you do in the apps you lock.',
    },
  ],
};

export const pricing = {
  tag: 'Pricing',
  title: 'Free is a <em>real choice.</em>',
  subtitle: 'Free keeps the whole loop: lock a rabbit hole, make minutes, dip in. Premium adds more ways up top.',
  toggle: { monthly: 'Monthly', yearly: 'Yearly', badge: 'Save 46%' },
  free: {
    name: 'Free',
    price: '$0',
    period: '',
    description: 'Everything you need to lock a rabbit hole and make the minutes that open it.',
    cta: { label: 'Continue with Free', href: brand.primaryCta.href },
    featuresLabel: 'Including:',
    features: [
      'Make and spend minutes',
      'Two apps, two categories, two websites',
      'One way to make minutes at a time',
      'One checkpoint',
      'Pauses, widgets, and Shortcuts',
    ],
  },
  premium: {
    name: 'Premium',
    monthly: { price: '$6.99', period: 'a month', note: 'Cancel anytime.' },
    yearly: {
      price: '$44.99',
      period: 'a year',
      perMonth: '$3.75 a month',
      trialDays: 21,
      note: 'Free for 21 days, then $44.99 a year. We’ll remind you two days before it ends. Cancel anytime.',
    },
    description: 'Every way to make minutes, unlimited rabbit holes, zones, and checkpoints.',
    cta: { monthly: 'Subscribe monthly', yearly: 'Start 21 days free', href: brand.primaryCta.href },
    featuresLabel: 'Free, plus:',
    features: [
      'All five ways to make minutes, at once',
      'Unlimited rabbit holes',
      'Zones: places that make minutes',
      'As many checkpoints as you like',
      'Priority on new ways up top',
    ],
  },
};

export const faq = {
  tag: 'Questions',
  title: 'Everything you <em>need</em> to know.',
  subtitle: 'Short answers, in the app’s own words.',
  items: [
    {
      q: 'Does it really lock apps?',
      a: 'Yes. Screen Time keeps your rabbit holes locked until you choose to dip in. Apple asks you first, and we never see what you do in those apps.',
    },
    {
      q: 'What if I have nothing to spare?',
      a: 'Nothing to spare is a status, not a failure. The quickest way up is a focus block: 25 minutes with your phone down makes 15. A walk around the block makes about 10.',
    },
    {
      q: 'Do I have to pay?',
      a: 'No. Free locks two apps, two categories, and two websites, and keeps one way to make minutes on. Premium adds every way at once, unlimited rabbit holes, zones, and more checkpoints.',
    },
    {
      q: 'What does Up For Air read from Apple Health?',
      a: 'Steps, workouts, and mindful minutes, read only, on your phone. It never changes your Health data. Zones use your location only to notice that you arrived, and it never leaves your phone.',
    },
    {
      q: 'Is there a streak?',
      a: 'No. Your week up top shows seven suns sized by the minutes you made, with a dot for a rest day. There’s no chain and nothing to break.',
    },
    {
      q: 'What’s a checkpoint?',
      a: 'A tag or a card you keep somewhere real, like your desk. Tap it to start: your rabbit holes stay locked, and minutes can’t open them. Tap it again to stop. Any writable NFC tag works, and NTAG215 stickers are cheap.',
    },
    {
      q: 'Which iPhones does it work on?',
      a: 'Any iPhone running iOS 18 or later that can use Screen Time. There’s no iPad or Android version.',
    },
  ],
};

export const cta = {
  title: 'Ready to come <em>up for air?</em>',
  subtitle: 'Lock a rabbit hole, make some minutes up top, and see what 3:40 feels like.',
  button: brand.primaryCta,
  note: `${launch.state === 'live' ? 'Free on the App Store' : 'Free at launch'} · ${brand.platformNote}`,
};

export const footer = {
  newsletter: {
    id: 'newsletter',
    title: launch.state === 'live' ? 'Hear about new ways up top' : 'Hear about it first',
    body:
      launch.state === 'live'
        ? 'One email when something new lands, and none otherwise.'
        : 'One email when Up For Air is on the App Store, and a rare one after that. No spam, ever.',
    placeholder: 'Your email address',
    button: 'Get notified',
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
        { label: 'Help', href: '/help' },
        { label: 'Contact', href: `mailto:${brand.contactEmail}` },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} ${brand.company}`,
  /** The bunny and the landscapes are placeholder art until the illustrator's work lands. */
  artNote: 'Artwork shown is a placeholder.',
};

export const help = {
  eyebrow: 'Up For Air',
  title: 'Help',
  subtitle: 'Short answers to the questions people ask, in the app’s own words.',
  tocTitle: 'On this page',
  sections: [
    {
      id: 'getting-started',
      title: 'Getting started',
      items: [
        {
          q: 'What do I need?',
          a: 'An iPhone running iOS 18 or later. Up For Air needs Screen Time to keep an app locked until you choose to open it. Apple asks you first, and we never see what you do in those apps.',
        },
        {
          q: 'What happens in setup?',
          a: 'Seven short steps: name your bunny, see how minutes are made, see how they’re spent, allow Screen Time, connect the ways you want to make minutes, choose your rabbit holes, and match your apps so we can open them for you.',
        },
      ],
    },
    {
      id: 'making-minutes',
      title: 'Making minutes',
      items: [
        {
          q: 'What are the rates?',
          a: 'Every 100 steps makes a minute. A minute of workout makes a minute. A mindful minute makes two. A 25-minute focus block makes 15. Arriving at a zone makes 5, then 1 for every 5 minutes you stay. You can change the rates and the daily caps in Settings.',
        },
        {
          q: 'Where do steps, workouts, and mindful minutes come from?',
          a: 'From Apple Health, on your phone only. Up For Air reads them and never writes to Health. Turning a way off keeps what you already made.',
        },
        {
          q: 'What’s a focus block?',
          a: 'Phone down for a length you choose. You make the minutes when the timer ends, not before. Stop early and you make nothing.',
        },
      ],
    },
    {
      id: 'rabbit-holes',
      title: 'Rabbit holes',
      items: [
        {
          q: 'What can I lock?',
          a: 'Apps, whole categories as Apple groups them (Social, Games, Entertainment, and so on), and websites by name in every browser. Free locks two of each kind. Premium has no limit.',
        },
        {
          q: 'What does a session do?',
          a: 'A session opens every rabbit hole at once until the clock time you chose. The minutes drain as you use them, and you only spend what you use. Ending early keeps the rest to spare.',
        },
        {
          q: 'Can I turn back?',
          a: 'Always. Never mind is top-left on every screen of the unlock flow. Turning back isn’t an unlock, so it never makes the next one harder.',
        },
      ],
    },
    {
      id: 'checkpoints',
      title: 'Checkpoints',
      items: [
        {
          q: 'How do checkpoints work?',
          a: 'A checkpoint is a tag or a card you keep somewhere real, like your desk or the kitchen. Tap your tag to start: your rabbit holes stay locked, and minutes can’t open them. Tap the same tag again to stop. A card works the same way, with a scan.',
        },
        {
          q: 'Which NFC tags can I use?',
          a: 'Any NFC tag that can be written to. Up For Air writes one link on it and nothing else. NTAG215 and NTAG213 tags are confirmed to work. A locked tag, a bank card, or a transit card won’t.',
        },
        {
          q: 'What if I lose my tag?',
          a: 'Tap Unlock, then the “Lost …?” link under the reader. It takes a little while, but you’re never stuck.',
        },
      ],
    },
    {
      id: 'premium',
      title: 'Premium',
      items: [
        {
          q: 'What does Premium add?',
          a: 'Every way to make minutes at once, unlimited rabbit holes, zones, and more checkpoints. Free keeps the whole loop and stays free.',
        },
        {
          q: 'How do I cancel?',
          a: 'Premium is an App Store subscription, so you manage or cancel it in your Apple Account settings, anytime. If you’re in a free trial, we remind you two days before it ends.',
        },
      ],
    },
  ],
};

export const notFound = {
  tag: 'Page not found',
  title: 'Nothing down <em>this hole.</em>',
  subtitle: 'We couldn’t find that page. Let’s get you back up top.',
  button: { label: 'Back up top', href: '/' },
};
