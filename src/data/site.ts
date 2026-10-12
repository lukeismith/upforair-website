/**
 * Every string on the site. The copy follows the app's own voice and vocabulary
 * (design/up-for-air/1-almanac/DESIGN.md §8 in the app repo), and every fact and number
 * follows design/up-for-air/reference/marketing/facts.md there:
 * - activity first, minutes second, and minutes are always earned, never made;
 * - endings are clock times ("Back up at 3:40"), never "in 15 minutes";
 * - rabbit holes are locked, never blocked or gated, and the word "streak" never appears;
 * - no shame words; exclamation marks only where the bunny is truly glad (praise and
 *   celebration, as in its own lines), never in headlines, instructions or prices;
 * - American English, the serial comma, curly quotes and apostrophes.
 * The site sells the whole app (Luke, 2026-10-11): describe every feature as something
 * Up For Air does, and write to what a customer wants (time and attention back without a
 * fight with willpower, minutes that feel good to earn, a kind bunny, privacy). The
 * differences between Free and Premium appear only in the pricing cards; nowhere else says
 * "on Premium", "Free has" or "one way at a time". The screenshots show Up For Air Premium,
 * and `footer.screenshotNote` says so. The device is "iPhone and iPad", with iOS 18 or
 * iPadOS 18 or later. Some screenshots predate the "earned" wording, so take numbers and
 * words from facts.md, not from the pictures.
 */

/**
 * Flip to 'live' once the app is on the App Store. Pre-launch, every primary button
 * points at the newsletter form instead of the store.
 */
export const launch = {
  state: 'prelaunch' as 'prelaunch' | 'live',
  appStoreUrl: 'https://apps.apple.com/app/up-for-air/id0000000000',
};

const live = launch.state === 'live';
const storeHref = live ? launch.appStoreUrl : '/#newsletter';
const storeLabel = live ? 'Get the app' : 'Get notified';

/**
 * Prices and the trial, from the app's local StoreKit file (Config/Sidequest.storekit).
 * Check them against App Store Connect before launch. Every sentence that names a price or
 * the trial length reads it from here, so a change is one edit.
 */
const prices = { yearly: '$44.99', monthly: '$6.99', yearlyPerMonth: '$3.75' };
const trialDays = 21;

/** Up For Air runs on iPhone and iPad (Luke, 2026-10-11). */
const devices = 'iPhone and iPad';
const requirements = 'iOS 18 or iPadOS 18 or later';

export const brand = {
  name: 'Up For Air',
  company: 'Temperanda LLC',
  title: 'Up For Air – Earn your scroll',
  description: `Everyone has a rabbit hole or two. Up For Air locks yours, counts the minutes you earn up top, and brings you back up at a time you choose. ${
    live ? `Free on the App Store for ${devices}.` : `Coming soon to the App Store for ${devices}.`
  }`,
  tagline: 'Earn your scroll.',
  /** The accessible name of the wordmark links in the header and the footer. */
  homeLabel: 'Up For Air home',
  /** Replace with the real support address before launch. */
  contactEmail: 'hello@temperanda.com',
  /**
   * "for iPhone and iPad · iOS 18 or iPadOS 18 or later", after a word such as "Free". The
   * requirements keep no-break spaces, so a narrow screen breaks the line at the dot.
   */
  platformNote: `for ${devices} · ${requirements.replace(/ /g, '\u00a0')}`,
  primaryCta: { label: storeLabel, href: storeHref, apple: live },
  /** The social image in public/og.png (1200 × 630), from the app repo's marketing kit. */
  ogImage: {
    path: '/og.png',
    width: 1200,
    height: 630,
    alt: 'Up For Air: “Everyone has a rabbit hole or two.” Up For Air locks yours and counts the minutes you earn up top. Beside the text, the app’s Home screen rises from a dark hillside and shows 47 min to spare.',
  },
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
  /** Accessible names for the header's two navigation landmarks and the menu button. */
  primaryLabel: 'Primary',
  mobileLabel: 'Mobile',
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
  /** The pill navigation that appears on scroll on the home page. */
  sectionNavLabel: 'Section navigation',
};

export type TitleSegment = { text: string; serif?: boolean } | { br: true };

export const hero = {
  tag: live ? 'Free on the App Store' : 'Coming soon to the App Store',
  /** Rendered word-by-word so the intro animation can stagger each word. */
  title: [
    { text: 'Everyone has a' },
    { br: true },
    { text: 'rabbit hole', serif: true },
    { text: 'or two.' },
  ] satisfies TitleSegment[],
  subtitle:
    'There’s nothing wrong with that. Up For Air locks yours, so willpower doesn’t have to. Earn minutes with a walk or a workout, then dip in and come back up at a time you choose.',
  cta: brand.primaryCta,
  note: `Free ${brand.platformNote}`,
  /**
   * The phone shows src/assets/screens/home-day-light.png, a simulator capture of Home.
   * It was taken before minutes were "earned", so it still reads "Made today". The alt
   * text describes the list without quoting that old heading.
   */
  screenAlt:
    'Up For Air’s Home screen at 1:41 on Sunday, October 11. Under the greeting “Good afternoon!”, a white bunny stands beside its hole on green hills with the sun overhead. Below are a Checkpoints row listing Desk and Kitchen, 47 min to spare with a Dip in button, and today’s list totaling 49 min: your walk, 6,240 steps, 15 min; a workout of 24 minutes, 24 min; mindful minutes, 10 min; two sessions, 8:12 to 8:27 for −15 min and 12:05 to 12:41 for −36 min; and 49 min carried over from Saturday.',
};

/** The strip under the hero: ledger lines, activity first, minutes second (default rates). */
export const ticker = {
  label: 'Activity first, minutes second.',
  ariaLabel: 'Examples of minutes earned',
  items: [
    { icon: 'steps', text: 'Your walk earned 6 min.' },
    { icon: 'workout', text: 'Your workout earned 10 min.' },
    { icon: 'focus', text: '25 minutes, phone down, earned 15.' },
    { icon: 'zone', text: 'You’re at the library. 5 min earned.' },
    { icon: 'mindful', text: 'Five mindful minutes earned 10.' },
    { icon: 'moon', text: 'Your nap earned nothing. Still a good nap.' },
    { icon: 'sun', text: 'Back up at 3:40.' },
  ],
};

export const howItWorks = {
  tag: 'How it works',
  title: 'Lock. Earn. <em>Dip in.</em>',
  subtitle: 'The whole app, in three sentences.',
  steps: [
    {
      title: 'Choose your rabbit holes.',
      body: 'Lock the apps, whole categories, and websites that swallow you. Screen Time keeps them locked until you choose to open them.',
      art: 'scene-in-hole',
    },
    {
      title: 'Earn minutes up top.',
      body: 'The things you do in the real world earn minutes: a walk, a workout, mindful minutes, a focus block, the places you go.',
      art: 'scene-walk',
    },
    {
      title: 'Spend them when you like.',
      body: 'Open a rabbit hole and we’ll ask how long. You choose, and we bring you back up at a time you can see on the clock.',
      art: 'scene-climb-out',
    },
  ] as const,
};

/**
 * One Guilt trip line, verbatim from the app's Pauses catalog (guilt.line.<n>.say,
 * .continue and .cancel). `{bunny}`, `{minutes}`, `{total}` and `{totalWords}` are the
 * catalog's placeholders. `hours` limits a line to a time of day, as the app does: from
 * inclusive, to exclusive, in the visitor's local time, and 22 to 5 wraps past midnight.
 */
type GuiltLine = { say: string; go: string; stay: string; hours?: readonly [number, number] };

/** The values the demo puts in the placeholders. An unnamed bunny is "Bun" in the app. */
const guiltSample = { bunny: 'Bun', minutes: '12', total: '60', totalWords: 'Sixty' };
const fill = (text: string) =>
  text.replace(/\{(bunny|minutes|total|totalWords)\}/g, (_, key: keyof typeof guiltSample) => guiltSample[key]);

const guiltLines: GuiltLine[] = [
  {
    say: 'Do I have to go down in the rabbit hole? The clover just came up and I haven’t had a nibble!',
    go: 'Sorry, {bunny}, down we go.',
    stay: 'You’re right. Go eat some clover!',
  },
  {
    say: 'I was about to do a big jump. A really big one. You’d have loved it.',
    go: 'Save it for later, I want to doomscroll!',
    stay: 'Really? Let me see it!',
  },
  {
    say: 'It’s dark down there, and the signal’s terrible. I’m just saying.',
    go: 'Whatever, you’ll manage. ¯\\_(ツ)_/¯',
    stay: 'Fair point, {bunny}. Let’s go get some fresh air.',
  },
  {
    say: 'There’s a carrot up here with my name on it. I checked. It says “{bunny}.”',
    go: 'The carrot isn’t going anywhere. Down we go!',
    stay: 'You’re right. Go get it.',
  },
  {
    say: 'Last time we went down, you said “five minutes.” It was actually {minutes} minutes!!',
    go: 'This time I mean it.',
    stay: 'Okay, okay. Never mind.',
  },
  {
    say: 'The sun’s doing that thing where it’s nice and warm outside. It won’t do it forever.',
    go: 'There’s always tomorrow. Down into the rabbit hole we go!',
    stay: 'Good point. Let’s stay up top!',
    hours: [10, 17],
  },
  {
    say: 'I’d rather frolic. Frolicking is my whole thing.',
    go: 'Frolic later. Rabbit hole time.',
    stay: 'You’re right, {bunny}. Go frolic!',
  },
  {
    say: 'Every minute down there is a minute I’m not eating carrots. I did the math.',
    go: 'Sorry, {bunny}, I’ll just be a few minutes.',
    stay: 'I’m sorry, I’ll stay Up For Air with you. It’s carrot time!',
  },
  {
    say: 'I get covered in dirt down there, can we not?',
    go: 'Tough luck, {bunny}.',
    stay: 'Fine, we will stay Up For Air.',
  },
  {
    say: 'I’m not saying don’t. I’m saying there’s a whole meadow up here.',
    go: 'The meadow isn’t going anywhere. Down we go.',
    stay: 'You’re right, spending time in the meadow sounds great!',
  },
  {
    say: 'It’s prime hopping hours. Just noting that for the record.',
    go: 'Womp womp. Rabbit hole time.',
    stay: 'You make a convincing argument, hop away {bunny}!',
    hours: [10, 17],
  },
  {
    say: 'Do you know what’s at the bottom of a rabbit hole? Nothing. I’ve checked. Twice.',
    go: 'Third time’s the charm?',
    stay: 'You’ve convinced me, {bunny}. Never mind.',
  },
  {
    say: 'You earned {total} minutes today. {totalWords}. Why don’t we save those for later?',
    go: 'And I’m spending some. Back soon.',
    stay: 'You’re right. Let’s keep them.',
  },
  {
    say: 'I’m getting hungry and there’s no food down there. Are you really going to make me starve?',
    go: 'I’ll be quick, promise.',
    stay: 'I wouldn’t do that to you, {bunny}, go have a snack!',
  },
  {
    say: 'It’s morning. The dew’s still on everything. You’re really starting the day down a rabbit hole?',
    go: 'Just a quick one. Down we go.',
    stay: 'You’re right. There are better ways to spend my time.',
    hours: [5, 10],
  },
  {
    say: 'The sun’s going down. If we go down too, how will we be able to watch the sunset?',
    go: 'Very clever, {bunny}. See ya later.',
    stay: 'Fine. Let’s watch it.',
    hours: [17, 22],
  },
  {
    say: 'It’s late. Why don’t you go to bed instead?',
    go: 'Down, down, down we go, into the abyss and away from reality!',
    stay: 'You’re right, time for bed.',
    hours: [22, 5],
  },
];

/** The Guilt trip: the bunny gets a word in before you dip in. */
export const guiltTrip = {
  tag: 'Pauses',
  title: 'The app that <em>asks nicely.</em>',
  body: 'Turn on a pause and you get a small moment before you dip in: a quick sum, a deep breath, a short poem, or a word from the bunny. Turning back never counts as an unlock, so it never makes the next one harder.',
  bubbleEyebrow: 'The bunny',
  reshuffle: 'Another line',
  /** The app's own hint under the replies. A reply is chosen by holding it, as in the app. */
  replyHint: 'Hold your answer to choose it.',
  holdSeconds: 3,
  /** The app types at 30 characters a second, spaces and punctuation included. */
  charactersPerSecond: 30,
  /** All seventeen lines the app ships, with the sample values filled in. */
  lines: guiltLines.map((line) => ({ ...line, say: fill(line.say), go: fill(line.go), stay: fill(line.stay) })),
  /** What the app shows after the reply that turns back (Pauses catalog unlock.landing.*). */
  landing: {
    eyebrow: 'Never mind',
    lines: ['Ears up. Thank you.', 'Good call. The clover’s this way.', 'See? That wasn’t so hard.'],
    title: 'Nothing started.',
    body: 'You still have 47 min to spare. Turning back doesn’t count as an unlock, so it never makes the next one harder.',
  },
  /**
   * After the reply that carries on, the app asks how long. The site says so instead, and
   * names 3:40 only as an example, because nothing has been chosen yet.
   */
  carryOn: {
    line: 'How long, then?',
    body: 'In the app, you choose next. The screen shows when you’ll be back up, like “Back up at 3:40,” and you only spend the minutes you use.',
  },
};

export const features = {
  tag: 'Features',
  title: 'Up top, down there, <em>and back.</em>',
  items: [
    {
      title: 'Rabbit holes, locked.',
      body: 'Lock every app, whole category, and website that swallows you. Screen Time keeps them locked, in every browser too, and we never see what you do inside them.',
    },
    {
      title: 'Five ways up top.',
      body: 'Walking, workouts, and mindful minutes come from Apple Health. A focus block needs nothing at all, and zones earn minutes when you arrive somewhere you chose. A Daily cap keeps a big day up top from turning into a long night.',
    },
    {
      title: 'Back up at 3:40.',
      body: 'Choose how long. The end is a clock time, a Live Activity counts you back up, and you only spend the minutes you use.',
    },
  ],
  /** The three panels of the illustration, one per feature. */
  panels: {
    /**
     * An HTML replica of the Rabbit holes page on Premium, like every screenshot on the
     * site. The simulator has no Screen Time, so its capture shows empty groups. The wording
     * here is the app's own (RabbitHoles.xcstrings: holes.group.apps and its siblings,
     * holes.add.*), and the app icons are stand-ins. As in RabbitHolesView, apps and
     * categories show their icon with the padlock badge, and a website shows a plain globe
     * in ink-2 (`glyph`), with no tile and no badge. On Premium every group ends with its
     * add row, and the page has no footer.
     */
    holes: {
      time: '9:41',
      title: 'Rabbit holes',
      edit: 'Edit',
      groups: [
        {
          title: 'Apps · 3',
          rows: [
            { initials: 'IG', name: 'Instagram', detail: 'Matched to Instagram', color: 'linear-gradient(135deg, #f9a03f, #e1306c 55%, #7b3fe4)' },
            { initials: 'TT', name: 'TikTok', detail: 'Matched to TikTok', color: '#111111' },
            { initials: 'YT', name: 'YouTube', detail: 'Matched to YouTube', color: '#e62117' },
          ],
          add: 'Lock another app…',
        },
        {
          title: 'Categories · 1',
          rows: [{ icon: 'play', name: 'Games', color: '#5b8def' }],
          add: 'Lock a whole category…',
          addDetail: 'Social, Games, Entertainment, and so on, as Apple groups them.',
        },
        {
          title: 'Websites · 1',
          rows: [{ glyph: 'globe', name: 'reddit.com' }],
          add: 'Lock a website…',
        },
      ],
    },
    /**
     * src/assets/screens/earn-light-top.png: earn-light.png from the top down to the Daily cap.
     * This capture is still the Free one (Zones reads "Part of Premium"), and the alt text
     * describes it as it is. Rewrite the alt text when the Premium capture replaces it.
     */
    earn: {
      alt: 'The Earn tab at 9:41. The plate shows 49 min earned on Sunday beside the standing bunny. Walking (15 min), Workouts (24 min), and Mindful minutes (10 min) are switched on and labeled Enabled, Focus blocks is on and Enabled, and Zones is switched off, labeled “Part of Premium,” with a dimmed 14 min. A note says steps, workouts, and mindful minutes come from Apple Health, and under Limits the Daily cap is 60 min, “All ways together.”',
    },
    /** src/assets/screens/unlock-limit-15-light-top.png: unlock-limit-15-light.png down to the note. */
    limit: {
      alt: 'The screen that asks how long before you dip in. At the top are Never mind and “Your rabbit holes · 30 min to spare”. A large “15 min” sits over “Back up at 12:16”, then a slider from 1 to 30 and quick picks 5, 10, 15, and 30, with 15 selected, and the note “You only spend the minutes you use. Use all 15 and 15 min stay to spare.”',
    },
  },
};

export const more = {
  tag: 'More up top',
  title: 'Little things that <em>keep you up top.</em>',
  subtitle: 'Nothing here is a game, a coach, or a lecture.',
  items: [
    {
      icon: 'checkpoint',
      title: 'Checkpoints',
      body: 'Tap your tag or scan your card to start. Do it again to stop. Keep an NFC tag or a printed card wherever the habit lives, like your desk or your bedside. Until you stop, your rabbit holes stay locked. Stay 30 minutes or more and you earn 10 min.',
    },
    {
      icon: 'zone',
      title: 'Zones',
      body: 'Draw a circle around the gym, the library, or the park. Arriving earns 5 min, and every 5 minutes you stay earns 1 more. With location set to Always, it counts even when the app is closed. We never record where you go.',
    },
    {
      icon: 'sun',
      title: 'Your week up top',
      body: 'Seven suns sized by the minutes you earned, and a small dot for a rest day. There’s no chain to keep and nothing to break.',
    },
    {
      icon: 'bell',
      title: 'Back up at 3:40, everywhere',
      body: 'A Live Activity counts you back up on the Lock Screen and in the Dynamic Island. Widgets show what’s to spare, Control Center starts a focus block in one tap, and Siri can tell you how many minutes you have.',
    },
    {
      icon: 'carrot',
      title: 'Your accountability bunny',
      body: 'Give it a name. It waves hello, peeks from its hole while you dip in, and can ask you to stay up top before you go. Never mind is always one tap away, and turning back never makes the next unlock harder.',
    },
    {
      icon: 'health',
      title: 'No account, no server',
      body: 'Everything stays on your device. Steps, workouts, and mindful minutes are read from Apple Health and never changed, and we never see what you do in the apps you lock.',
    },
  ],
};

export const pricing = {
  tag: 'Pricing',
  title: `Try it all, <em>free for ${trialDays} days.</em>`,
  subtitle: `Premium includes everything on this page, and the yearly plan starts with ${trialDays} days free. We’ll remind you before the trial ends.`,
  /** 46% is $44.99 against 12 × $6.99. The app itself prints no percent. */
  toggle: { monthly: 'Monthly', yearly: 'Yearly', badge: 'Save 46%', srLabel: 'Bill yearly' },
  free: {
    name: 'Free',
    price: '$0',
    period: '',
    description: 'Everything you need to lock a rabbit hole and earn the minutes that open it.',
    cta: { label: 'Continue with Free', href: brand.primaryCta.href },
    note: 'Free stays free.',
    featuresLabel: 'Including:',
    features: [
      'Earn and spend minutes',
      'Two apps, two categories, two websites',
      'One way to earn minutes at a time',
      'One checkpoint',
      'Pauses, widgets, and Shortcuts',
    ],
  },
  premium: {
    name: 'Premium',
    bestValue: 'Best value',
    monthly: { price: prices.monthly, period: 'a month', note: 'Cancel anytime.' },
    yearly: {
      price: prices.yearly,
      period: 'a year',
      perMonth: `${prices.yearlyPerMonth} a month`,
      /**
       * The app reminds you before the trial ends (the reminder is being built, and it ships
       * with the paywall). The site names no number of days, because the trial can change.
       */
      note: `Free for ${trialDays} days, then ${prices.yearly} a year. We’ll remind you before it ends. Cancel anytime.`,
    },
    description: 'Every way to earn minutes, unlimited rabbit holes, zones, and checkpoints.',
    cta: { monthly: 'Subscribe monthly', yearly: `Start ${trialDays} days free`, href: brand.primaryCta.href },
    featuresLabel: 'Free, plus:',
    features: [
      'All five ways to earn minutes, at once',
      'Unlimited rabbit holes',
      'Zones: places that earn minutes',
      'As many checkpoints as you like',
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
      a: 'Then the unlock offers a focus block instead. 25 minutes with your phone down earns 15, and a 4,000-step walk earns 10.',
    },
    {
      q: 'How much does it cost?',
      a: `Up For Air is free to download. Premium, with everything on this page, is ${prices.yearly} a year with the first ${trialDays} days free, or ${prices.monthly} a month. We’ll remind you before the trial ends, and you can cancel anytime. The plans above show what each one includes.`,
    },
    {
      q: 'Is there a limit to what I can earn?',
      a: 'Only the one you choose. Your Daily cap starts at 60 min a day, for all ways together, checkpoints included, and you can choose 30, 60, 90, or 120 min, or no cap. It keeps a long walk from turning into a long scroll.',
    },
    {
      q: 'What does Up For Air read from Apple Health?',
      a: 'Steps, workouts, and mindful minutes, read only, on your device. From a workout it reads only how long it lasted, and it never changes your Health data. Zones never record where you go, only that you reached one of your zones.',
    },
    {
      q: 'What if I skip a day?',
      a: 'Nothing happens. Your week up top shows seven suns sized by the minutes you earned, with a small dot for a rest day. There’s no chain to keep and nothing to break.',
    },
    {
      q: 'What’s a checkpoint?',
      a: 'A tag or a card you keep somewhere real, like your desk. Tap your tag or scan your card to start: your rabbit holes stay locked, and minutes can’t open them. Do it again to stop. Stay 30 minutes or more and you earn 10 min. NTAG215 and NTAG213 stickers are confirmed to work.',
    },
    {
      q: 'Which devices does it work on?',
      a: `Any iPhone or iPad running ${requirements} that can use Screen Time. There’s no Android version.`,
    },
  ],
};

export const cta = {
  title: 'Ready to come <em>up for air?</em>',
  subtitle: 'Lock a rabbit hole, earn some minutes up top, and see what 3:40 feels like.',
  button: brand.primaryCta,
  note: `${live ? 'Free on the App Store' : 'Free at launch'} ${brand.platformNote}`,
};

export const footer = {
  newsletter: {
    id: 'newsletter',
    title: live ? 'Hear about new ways up top' : 'Hear about it first',
    body: live
      ? 'One email when something new lands, and none otherwise.'
      : 'One email when Up For Air is on the App Store, and a rare one after that. No spam, ever.',
    label: 'Email address',
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
  /**
   * Every screenshot on the site is taken on Up For Air Premium, so that it shows the whole
   * app. This quiet line in the footer says so, for anyone who looks.
   */
  screenshotNote: 'Screenshots show Up For Air Premium.',
  /** The bunny and the landscapes are placeholder art until the illustrator's work lands. */
  artNote: 'Artwork shown is a placeholder.',
  /**
   * The bunnies are Vecteezy stock art. The Free licence needs this credit; the Pro
   * licence does not, and the credit does no harm there.
   */
  artCredit: { before: 'Bunny illustrations from ', label: 'Vecteezy.com', href: 'https://www.vecteezy.com' },
};

export const help = {
  pageTitle: `Help – ${brand.name}`,
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
          a: `An iPhone or iPad running ${requirements}. Up For Air needs Screen Time to keep an app locked until you choose to open it, so setup waits until you allow it. Apple asks you first, and we never see what you do in those apps.`,
        },
        {
          q: 'What happens in setup?',
          a: 'Eight short steps: name your bunny, see how minutes are earned, see how they’re spent, allow Screen Time, choose the ways you want to earn minutes, choose your Daily cap, choose your rabbit holes, and match your apps so we can open them for you. Then you choose a plan.',
        },
        {
          q: 'Does the app explain itself?',
          a: 'Yes. The Earn and Pauses tabs each open with a short walkthrough the first time you visit, and the help button at the top right runs it again.',
        },
      ],
    },
    {
      id: 'earning-minutes',
      title: 'Earning minutes',
      items: [
        {
          q: 'What are the rates?',
          a: '400 steps earn a minute, and you can choose anything from 250 to 2,000. A minute of workout earns a minute. A mindful minute earns two. A 25-minute focus block earns 15. Arriving at a zone earns 5, then 1 for every 5 minutes you stay, and a checkpoint held for 30 minutes or more earns 10. You can change the rates for walking, workouts, mindful minutes, and focus blocks on the Earn tab.',
        },
        {
          q: 'Is there a limit?',
          a: 'Yes. The Daily cap is the most you can earn in one day, all ways together, checkpoints included. It starts at 60 min, and you can choose 30, 60, 90, or 120 min, or no cap, on the Earn tab. Lowering it later in the day keeps what you already earned.',
        },
        {
          q: 'What’s Most to spare?',
          a: 'The most minutes you can have to spare at once. It starts at 180 min, and you can change it in Settings. When you reach it, earning stops until you spend some, and nothing is taken away.',
        },
        {
          q: 'Where do steps, workouts, and mindful minutes come from?',
          a: 'From Apple Health, on your device only. Up For Air reads them and never writes to Health. Turning a way off keeps what you already earned.',
        },
        {
          q: 'What’s a focus block?',
          a: 'Phone down for 15, 25, 45, or 60 minutes. You earn the minutes when the timer ends, not before. Stop early and you earn nothing.',
        },
        {
          q: 'How do zones work?',
          a: 'Draw a circle on the map around a place you go, like the gym or the library. Arriving earns 5 min, and every 5 minutes you stay earns 1 more. With location set to Always, arrivals count even when the app is closed. We never record where you go, only that you reached one of your zones.',
        },
      ],
    },
    {
      id: 'rabbit-holes',
      title: 'Rabbit holes',
      items: [
        {
          q: 'What can I lock?',
          a: 'Apps, whole categories as Apple groups them (Social, Games, Entertainment, and so on), and websites by name in every browser. Screen Time itself stops locking above about 50 items, and the app tells you when you get close.',
        },
        {
          q: 'What does a session do?',
          a: 'A session opens every rabbit hole at once until the clock time you chose, then locks them again. You only spend the minutes you use, and ending early keeps the rest to spare.',
        },
        {
          q: 'Can I turn back?',
          a: 'Always. Never mind is top-left on every screen of the unlock flow. Turning back isn’t an unlock, so it never makes the next one harder.',
        },
      ],
    },
    {
      id: 'pauses',
      title: 'Pauses',
      items: [
        {
          q: 'What are pauses?',
          a: 'A pause is a small moment before you choose how long. Quick sum gives you one sum to solve. In the Guilt trip, the bunny asks you to stay, and you hold a reply to choose it. Deep breath guides one slow breath. A short poem types one public-domain poem. None is on until you turn it on, and each unlock shows one, picked at random.',
        },
        {
          q: 'What are extra pauses?',
          a: 'Turn on Extra pauses, and when you unlock more often than usual, you see two or three pauses instead of one. “Usual” means your past seven days, so it needs a few days of history first.',
        },
      ],
    },
    {
      id: 'checkpoints',
      title: 'Checkpoints',
      items: [
        {
          q: 'How do checkpoints work?',
          a: 'A checkpoint is a tag or a card you keep somewhere real, like your desk or the kitchen. Tap your tag or scan your card to start: your rabbit holes stay locked, and minutes can’t open them. Do it again, with the same tag or card, to stop. Stay 30 minutes or more and you earn 10 min, which counts toward your Daily cap.',
        },
        {
          q: 'How many can I have?',
          a: 'As many as you like. Name each one for where it lives, like Desk, Kitchen, or Front door.',
        },
        {
          q: 'Which NFC tags can I use?',
          a: 'Any NFC tag that can be written to and holds more than 128 bytes. Up For Air writes one link on it and nothing else. NTAG215 and NTAG213 tags are confirmed to work. A read-only tag, a bank card, or a transit card won’t. Tags need an iPhone, because iPad can’t read NFC. A printed card works on both.',
        },
        {
          q: 'Where can I get tags?',
          a: 'Search for “NTAG215” stickers from an online store you trust. They often cost less than $1 each. Official Up For Air tags are coming soon.',
        },
        {
          q: 'What if I lose my tag?',
          a: 'Tap Unlock, then “Lost Desk?” under the reader, with your checkpoint’s name in place of Desk. You wait a few minutes, and the bunny waits with you. The wait is free and earns nothing, but you’re never stuck.',
        },
      ],
    },
    {
      id: 'premium',
      title: 'Premium',
      items: [
        {
          q: 'What’s in Premium?',
          a: 'Everything Up For Air can do: all five ways to earn minutes, as many rabbit holes and checkpoints as you like, and zones. The pricing on the home page lists both plans in full.',
        },
        {
          q: 'How much is it?',
          a: `${prices.yearly} a year, with the first ${trialDays} days free, or ${prices.monthly} a month. If you start the free trial, we’ll remind you before it ends.`,
        },
        {
          q: 'How do I cancel?',
          a: 'Premium is an App Store subscription, so you manage or cancel it in your Apple Account settings, anytime. Premium stays until the period ends. After that, the app keeps working, and we never delete the minutes you earned.',
        },
      ],
    },
  ],
};

export const notFound = {
  pageTitle: `Page not found – ${brand.name}`,
  tag: 'Page not found',
  title: 'Nothing down <em>this hole.</em>',
  subtitle: 'We couldn’t find that page. Let’s get you back up top.',
  button: { label: 'Back up top', href: '/' },
};
