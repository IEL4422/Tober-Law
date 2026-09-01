// Original, human-written, SEO-optimized long-form blog content for Tober Law.
// Block types:
//  { type: 'callout', title, items: [] }        -> key-takeaways box
//  { type: 'p', text }                          -> paragraph
//  { type: 'p', parts: [ '...', {link,text} ] } -> paragraph with inline internal links
//  { type: 'h2', text } / { type: 'h3', text }   -> headings
//  { type: 'ul', items: [] }                     -> bullet list
//  { type: 'faq', items: [ {q, a} ] }            -> FAQ (also powers FAQ schema)
//  { type: 'related', items: [ {label, to} ] }   -> related reading links

export const blogPosts = [
  {
    slug: 'what-to-do-after-a-car-accident-in-chicago',
    title: 'What to Do After a Car Accident in Chicago: A Step-by-Step Guide',
    metaTitle: 'What to Do After a Car Accident in Chicago (2026 Guide) | Tober Law',
    metaDescription:
      'Injured in a Chicago car accident? Follow this step-by-step guide covering the scene, medical care, insurance calls, evidence, and Illinois deadlines that protect your claim.',
    excerpt:
      'The minutes and days after a crash shape everything that follows. Here is exactly what to do — and what to avoid — to protect your health and your claim.',
    category: 'Car Accidents',
    readTime: '9 min read',
    date: '2026-01-14',
    keywords: ['Chicago car accident lawyer', 'what to do after a car accident in Illinois', 'Illinois car crash claim', 'car accident steps Chicago'],
    image:
      'https://images.unsplash.com/photo-1673187139181-795761a40ca1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzJ8MHwxfHNlYXJjaHw0fHxjYXIlMjBhY2NpZGVudHxlbnwwfHx8fDE3ODgyNzUxNjJ8MA&ixlib=rb-4.1.0&q=85',
    content: [
      { type: 'callout', title: 'Key takeaways', items: [
        'Call 911 and get a police report, even for a “minor” crash.',
        'See a doctor promptly — injuries like whiplash and concussions surface later.',
        'Do not give the other driver’s insurer a recorded statement before speaking with a lawyer.',
        'In Illinois you generally have two years to file, but acting early makes your case stronger.',
      ] },
      { type: 'p', parts: ['A car accident can turn an ordinary commute on the Kennedy or a quiet drive through Pilsen into one of the most disorienting moments of your life. In the chaos it is hard to think clearly — yet the choices you make in the first hour and the first week often decide how your injury claim turns out. This guide walks through what to do, in order. If you have already been hurt and want to talk it through with an attorney, you can ', {link:'/contact', text:'reach Tober Law for a free consultation'}, ' at any time.'] },
      { type: 'h2', text: 'At the scene: your first five moves' },
      { type: 'h3', text: '1. Get to safety and call 911' },
      { type: 'p', text: 'Your health comes first. If you can move without pain, get yourself and your vehicle out of live traffic. Call 911 even if the crash seems minor. A police report creates an official, timestamped record of what happened — and in Illinois, adrenaline routinely masks serious injuries that only surface hours later.' },
      { type: 'h3', text: '2. Document everything you safely can' },
      { type: 'p', text: 'Your phone is your most valuable tool at the scene. If you are physically able, capture:' },
      { type: 'ul', items: [
        'Photos of every vehicle, from multiple angles, showing damage and license plates',
        'The overall scene — skid marks, debris, traffic signals, weather, and road conditions',
        'Names, phone numbers, insurance details, and license plates for every driver involved',
        'Contact information for any witnesses who saw the crash happen',
      ] },
      { type: 'p', text: 'The scene disappears within minutes. A photo taken today can settle a dispute over who ran the light months from now.' },
      { type: 'h3', text: '3. Exchange information — but say little' },
      { type: 'p', text: 'Trade insurance and contact details, but never apologize or admit fault, even out of politeness. A simple “I’m sorry” can later be twisted into an admission. Stick to the facts when you speak with police.' },
      { type: 'h2', text: 'The first 72 hours: protect your health and your record' },
      { type: 'h3', text: '4. See a doctor — even if you feel “fine”' },
      { type: 'p', text: 'Whiplash, concussions, and soft-tissue injuries frequently show up a day or two after impact. Getting checked out promptly protects your health and links your injuries to the crash in your medical records. A gap in treatment is one of the first things an insurance adjuster will use to argue you were not really hurt. Follow your provider’s instructions and keep every appointment.' },
      { type: 'h3', text: '5. Be careful with the insurance company' },
      { type: 'p', text: 'The other driver’s insurer may call within days, sounding friendly and eager to help. Their job is to close your claim for as little as possible. You are not required to give a recorded statement, and you should not accept a quick settlement before you understand the full extent of your injuries. When in doubt, talk to a lawyer first.' },
      { type: 'h2', text: 'Know the Illinois deadline' },
      { type: 'p', parts: ['In most Illinois personal-injury cases you generally have two years from the date of the crash to file a lawsuit. That sounds like a long time, but evidence fades and witnesses move. There are also important exceptions — claims against a government body, for example, can carry much shorter deadlines. We break this down in our guide on the ', {link:'/blog/illinois-personal-injury-statute-of-limitations', text:'Illinois personal injury statute of limitations'}, '.'] },
      { type: 'h2', text: 'Common mistakes that hurt car-accident claims' },
      { type: 'ul', items: [
        'Waiting weeks to see a doctor, creating a “gap” in treatment',
        'Posting about the crash or your activities on social media',
        'Accepting the first settlement offer before injuries fully develop',
        'Giving a recorded statement without legal advice',
        'Assuming a “minor” crash isn’t worth a phone call to an attorney',
      ] },
      { type: 'h2', text: 'How Tober Law can help' },
      { type: 'p', parts: ['At Tober Law, every ', {link:'/practice-areas/car-accidents', text:'Chicago car accident case'}, ' is handled personally by attorney Cameron J. Tober — not passed down to a junior associate. We deal with the insurers, preserve the evidence, and fight for the full value of your claim so you can focus on healing. You can also ', {link:'/results', text:'see the results we’ve secured'}, ' for injured people across Illinois. If you’ve been hurt in a Chicagoland crash, ', {link:'/contact', text:'reach out for a free, confidential consultation'}, '.'] },
      { type: 'faq', items: [
        { q: 'Do I need a lawyer for a minor car accident in Chicago?', a: 'Not every fender-bender requires a lawyer, but injuries are often more serious than they first appear and insurers are motivated to underpay. A free consultation costs nothing and helps you understand whether your claim is worth pursuing before you accept any offer.' },
        { q: 'How long do I have to file a car accident claim in Illinois?', a: 'Most Illinois personal-injury lawsuits must be filed within two years of the crash. Shorter deadlines and special notice rules can apply — especially for claims involving a government vehicle or entity — so it is best to confirm your specific deadline with an attorney early.' },
        { q: 'What if the other driver was uninsured?', a: 'You may still have options through your own uninsured or underinsured motorist coverage. An attorney can review your policy and identify every source of recovery available to you.' },
        { q: 'How much does it cost to hire a car accident lawyer?', a: 'Reputable injury firms, including Tober Law, work on a contingency fee — you pay nothing upfront and no attorney fee unless there is a recovery.' },
      ] },
      { type: 'related', items: [
        { label: 'How long do you have to file a claim in Illinois?', to: '/blog/illinois-personal-injury-statute-of-limitations' },
        { label: 'What “$0 upfront” and contingency fees really mean', to: '/blog/contingency-fees-what-zero-upfront-means' },
        { label: 'Why truck accidents are different from car crashes', to: '/blog/truck-accidents-why-they-are-different-illinois' },
      ] },
    ],
  },
  {
    slug: 'illinois-personal-injury-statute-of-limitations',
    title: 'How Long Do You Have to File a Personal Injury Claim in Illinois?',
    metaTitle: 'Illinois Personal Injury Statute of Limitations (2026) | Tober Law',
    metaDescription:
      'How long do you have to sue after an injury in Illinois? Learn the two-year statute of limitations, the government-claim and minor exceptions, the discovery rule, and why waiting is risky.',
    excerpt:
      'Illinois gives injury victims a limited window to act. Miss it and your claim may be gone forever — here is how the deadline really works.',
    category: 'Legal Guides',
    readTime: '8 min read',
    date: '2026-02-03',
    keywords: ['Illinois statute of limitations personal injury', 'how long to file injury claim Illinois', 'Illinois injury deadline', 'discovery rule Illinois'],
    image:
      'https://images.unsplash.com/photo-1667849921481-9e13c239ee3d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxjb3VydGhvdXNlfGVufDB8fHx8MTc4ODI3NTE2Mnww&ixlib=rb-4.1.0&q=85',
    content: [
      { type: 'callout', title: 'Key takeaways', items: [
        'Most Illinois personal-injury claims have a two-year filing deadline.',
        'Claims against a city, county, or state can carry a much shorter one-year deadline plus notice rules.',
        'The deadline for a minor often does not start until they turn 18.',
        'The “discovery rule” can delay the start date for injuries you couldn’t reasonably have known about.',
      ] },
      { type: 'p', parts: ['One of the first questions injured people ask is simple: how long do I have to do something about this? In Illinois, the answer is governed by a rule called the statute of limitations — a strict legal deadline for filing a lawsuit. Miss it and even a strong case can be dismissed. If you’re unsure where your deadline falls, the safest move is to ', {link:'/contact', text:'ask an attorney directly'}, '.'] },
      { type: 'h2', text: 'The general rule: two years' },
      { type: 'p', text: 'For most personal-injury claims in Illinois — car crashes, slip-and-falls, and similar negligence cases — you generally have two years from the date of the injury to file suit. If you do not file within that window, the court will almost always dismiss your case no matter how compelling the facts are. This is why the calendar, not just the evidence, can decide a case.' },
      { type: 'h2', text: 'Important exceptions that change the clock' },
      { type: 'p', text: 'The two-year rule is the starting point, not the whole story. Several situations shorten or extend it:' },
      { type: 'h3', text: 'Claims against the government' },
      { type: 'p', text: 'When your claim is against a government body — a city, transit authority, park district, or the State of Illinois — special rules apply. These claims often carry a shorter filing period and, in some cases, strict notice requirements. Missing a government deadline is one of the most common ways a valid claim is lost.' },
      { type: 'h3', text: 'Injuries to minors' },
      { type: 'p', text: 'When the injured person is a child, the clock is often paused until they turn 18, giving them time to bring a claim as an adult. The specifics depend on the type of case, so parents should still speak with a lawyer promptly rather than assume there is unlimited time.' },
      { type: 'h3', text: 'The discovery rule' },
      { type: 'p', text: 'Some injuries are not obvious right away. The discovery rule can delay the start of the clock until the date you knew, or reasonably should have known, that you were injured and that it may have been caused by someone’s wrongdoing. This frequently matters in medical and exposure cases.' },
      { type: 'h3', text: 'Wrongful death and medical malpractice' },
      { type: 'p', text: 'These claims follow their own separate timelines and repose periods. If you have lost a loved one or suspect a medical error, do not rely on the general two-year rule — get specific advice.' },
      { type: 'h2', text: 'Why waiting is risky — even inside the deadline' },
      { type: 'p', text: 'Having two years does not mean you should use all of it. Surveillance footage is overwritten within weeks, vehicles are repaired, physical evidence is cleaned up, and witnesses forget details or move away. Insurance companies know this, and delay often works in their favor. The strongest cases are almost always the ones investigated early.' },
      { type: 'h2', text: 'Talk to a lawyer before assuming your case is too old' },
      { type: 'p', parts: ['Because the exceptions are so fact-specific, the only reliable way to know your real deadline is to have an attorney review the details. Not sure which category your situation fits? Start with our ', {link:'/practice-areas', text:'overview of practice areas'}, ', then ', {link:'/contact', text:'contact Tober Law'}, ' for a free, no-obligation conversation about exactly how much time you have.'] },
      { type: 'faq', items: [
        { q: 'What is the statute of limitations for a car accident in Illinois?', a: 'Generally two years from the date of the crash for personal-injury claims. Shorter deadlines can apply if a government vehicle or entity is involved.' },
        { q: 'What happens if I miss the deadline?', a: 'If you file after the statute of limitations expires, the defendant can ask the court to dismiss your case, and it usually will — regardless of how strong your evidence is.' },
        { q: 'Does the deadline ever get extended?', a: 'Yes. Exceptions like the discovery rule, injuries to minors, and certain other circumstances can extend or pause the clock. These are fact-specific, so confirm with an attorney.' },
        { q: 'How soon should I contact a lawyer after an injury?', a: 'As soon as reasonably possible. Early investigation preserves evidence and protects your options — and an initial consultation is free.' },
      ] },
      { type: 'related', items: [
        { label: 'What to do after a car accident in Chicago', to: '/blog/what-to-do-after-a-car-accident-in-chicago' },
        { label: 'Contingency fees: what “$0 upfront” really means', to: '/blog/contingency-fees-what-zero-upfront-means' },
        { label: 'Slip-and-fall claims and premises liability', to: '/blog/slip-and-fall-premises-liability-chicago' },
      ] },
    ],
  },
  {
    slug: 'contingency-fees-what-zero-upfront-means',
    title: "Understanding Contingency Fees: What '$0 Upfront' Really Means",
    metaTitle: 'Contingency Fees Explained: No Win, No Fee Injury Lawyers | Tober Law',
    metaDescription:
      'Worried you cannot afford an injury lawyer? Learn how contingency fees work, what percentage lawyers take, how case costs differ from fees, and why $0 upfront protects you.',
    excerpt:
      'You should never have to choose between paying rent and hiring a lawyer. Here is how the contingency-fee model puts a trial attorney in your corner at no upfront cost.',
    category: 'Legal Guides',
    readTime: '7 min read',
    date: '2026-02-20',
    keywords: ['contingency fee lawyer', 'no win no fee injury attorney', 'how do injury lawyers get paid', 'personal injury lawyer cost Illinois'],
    image:
      'https://images.pexels.com/photos/8815849/pexels-photo-8815849.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    content: [
      { type: 'callout', title: 'Key takeaways', items: [
        'A contingency fee means your lawyer is paid only if they recover money for you.',
        '“$0 upfront” means no retainer and nothing out of pocket while your case is pending.',
        'Case costs (records, experts, filing fees) are separate from the attorney fee and are usually advanced by the firm.',
        'The model lets ordinary people take on large insurers on a level playing field.',
      ] },
      { type: 'p', parts: ['When you are already facing medical bills and missed paychecks, the idea of paying a lawyer by the hour can feel impossible. The good news is that reputable personal-injury attorneys do not work that way. They work on a contingency fee — a model built so that anyone, regardless of their bank balance, can afford strong representation. If you want to know how this would work for your specific situation, you can ', {link:'/contact', text:'ask us during a free consultation'}, '.'] },
      { type: 'h2', text: 'What a contingency fee is' },
      { type: 'p', text: 'A contingency fee means your attorney only gets paid if they recover money for you. Instead of billing by the hour, the firm takes an agreed-upon percentage of the final settlement or verdict. If there is no recovery, you owe no attorney fee. That is the meaning behind “$0 upfront”: you pay nothing to get started and nothing out of pocket while your case is pending.' },
      { type: 'h2', text: 'Why this model protects you' },
      { type: 'p', text: 'Contingency fees line up your lawyer’s interests with yours. Because the firm is paid from the result, it is motivated to maximize your recovery, not to run up hours. It also lets an ordinary person take on a large insurance company or corporation on a level playing field — something that would be out of reach if you had to fund the fight yourself.' },
      { type: 'h2', text: 'Fees vs. costs: an important difference' },
      { type: 'p', text: 'People often confuse the attorney fee with case costs. They are not the same:' },
      { type: 'ul', items: [
        'The fee is the percentage the firm earns for its work, paid only on a recovery.',
        'Costs are out-of-pocket expenses a case requires — court filing fees, medical records, deposition transcripts, and expert witnesses.',
        'Many firms, including ours, advance those costs and are reimbursed from the recovery at the end.',
      ] },
      { type: 'p', text: 'A good lawyer will walk you through the written fee agreement in plain language before you sign, so there are no surprises about how fees and costs are handled.' },
      { type: 'h2', text: 'Does a bigger firm mean a bigger fee?' },
      { type: 'p', parts: ['Not necessarily. What matters more is who actually handles your case. At Tober Law, your case is worked personally by the attorney rather than handed to a rotating cast of associates — you can read more ', {link:'/about', text:'about Cameron J. Tober'}, ' and ', {link:'/results', text:'the results the firm has obtained'}, '.'] },
      { type: 'h2', text: 'The bottom line' },
      { type: 'p', parts: ['You should never have to choose between paying rent and hiring a lawyer. At Tober Law, consultations are free and our fee is contingent on winning your case. If we do not recover for you, you do not pay an attorney fee. ', {link:'/contact', text:'Reach out anytime'}, ' to talk through your situation — there is no cost and no obligation.'] },
      { type: 'faq', items: [
        { q: 'How much do injury lawyers take from a settlement?', a: 'Contingency percentages vary by case and complexity. Your written fee agreement will state the exact percentage before you commit, and we will explain it in plain language.' },
        { q: 'Do I owe anything if I lose?', a: 'Under a contingency arrangement you do not owe an attorney fee if there is no recovery. How advanced case costs are handled in that situation is spelled out in your agreement.' },
        { q: 'Who pays for experts and court costs?', a: 'The firm typically advances these case costs and is reimbursed out of the recovery, so you are not writing checks while your case is pending.' },
        { q: 'Is the first consultation really free?', a: 'Yes. Talking with Tober Law about your potential case costs nothing and carries no obligation.' },
      ] },
      { type: 'related', items: [
        { label: 'How long do you have to file a claim in Illinois?', to: '/blog/illinois-personal-injury-statute-of-limitations' },
        { label: 'Construction injuries: rights beyond workers’ comp', to: '/blog/construction-injury-rights-illinois-beyond-workers-comp' },
        { label: 'What to do after a car accident in Chicago', to: '/blog/what-to-do-after-a-car-accident-in-chicago' },
      ] },
    ],
  },
  {
    slug: 'construction-injury-rights-illinois-beyond-workers-comp',
    title: 'Injured on an Illinois Construction Site? Your Rights Beyond Workers’ Comp',
    metaTitle: 'Illinois Construction Injury Claims Beyond Workers’ Comp | Tober Law',
    metaDescription:
      'Hurt on a Chicago construction site? Workers’ comp is not your only option. Learn how third-party negligence claims work, what they recover, and why acting fast matters.',
    excerpt:
      'Workers’ comp rarely covers what a catastrophic job-site injury truly costs. A third-party claim can — here is how it works.',
    category: 'Construction Injuries',
    readTime: '9 min read',
    date: '2026-03-08',
    keywords: ['Chicago construction accident lawyer', 'third party injury claim Illinois', 'construction injury rights', 'workers comp vs lawsuit Illinois'],
    image:
      'https://images.unsplash.com/photo-1662309376159-b95fb193d96b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzYWZldHl8ZW58MHx8fHwxNzg4Mjc1MTYyfDA&ixlib=rb-4.1.0&q=85',
    content: [
      { type: 'callout', title: 'Key takeaways', items: [
        'Workers’ comp pays limited benefits and nothing for pain and suffering.',
        'A third-party claim against a negligent contractor, owner, or manufacturer can recover far more.',
        'You can often pursue workers’ comp and a third-party case at the same time.',
        'Evidence on a job site disappears fast — early investigation is critical.',
      ] },
      { type: 'p', parts: ['Construction is one of the most dangerous industries in Illinois. A fall from a scaffold, a failed piece of equipment, or an unguarded hazard can end a career in an instant. If you have been hurt on a job site, you may assume workers’ compensation is your only path — but that is often not true, and the difference can be enormous. Our ', {link:'/practice-areas/construction-injuries', text:'construction injury practice'}, ' focuses on exactly these cases.'] },
      { type: 'h2', text: 'What workers’ comp does and does not cover' },
      { type: 'p', text: 'Workers’ compensation is a no-fault system: you can receive benefits without proving anyone was to blame. But those benefits are limited. Comp typically pays a portion of your lost wages and your medical bills — and nothing for the pain, the loss of your future, or the impact on your family. For a serious, life-changing injury, that gap can be huge.' },
      { type: 'h2', text: 'The third-party claim' },
      { type: 'p', text: 'A busy construction site involves many companies beyond your direct employer — general contractors, subcontractors, property owners, and equipment manufacturers. If one of those other parties caused your injury through their negligence, you may be able to bring a separate third-party lawsuit against them. Unlike workers’ comp, a third-party claim can recover:' },
      { type: 'ul', items: [
        'Full lost wages, both past and future',
        'Compensation for pain and suffering',
        'Loss of your earning capacity and quality of life',
        'Damages that reflect the true, long-term cost of a catastrophic injury',
      ] },
      { type: 'h3', text: 'Who might be a third party?' },
      { type: 'p', text: 'Depending on how your injury happened, a responsible third party could be a general contractor that ignored safety rules, a subcontractor whose crew created a hazard, a property owner who failed to maintain the site, or the maker of a defective tool or machine. Identifying every potentially liable party is one of the most valuable things an experienced lawyer does.' },
      { type: 'h2', text: 'How the two claims work together' },
      { type: 'p', parts: ['You can often pursue workers’ comp and a third-party case at the same time. They are governed by different rules and different deadlines, and how they interact — including reimbursement of comp benefits out of a third-party recovery — is genuinely complicated. This is exactly the kind of case where experienced trial counsel makes a measurable difference. Similar issues arise in ', {link:'/practice-areas/manufacturing-injuries', text:'manufacturing and factory injury cases'}, ' involving dangerous equipment.'] },
      { type: 'h2', text: 'Act quickly to preserve evidence' },
      { type: 'p', parts: ['Job sites change fast. Equipment gets repaired or replaced, conditions are cleaned up, and crews rotate off the project. The sooner a lawyer can investigate, the better your chances of proving what really happened. Tober Law has recovered substantial sums for injured tradespeople — roofers, laborers, and installers — and you can ', {link:'/results', text:'see representative results here'}, '. Every case is handled personally.'] },
      { type: 'faq', items: [
        { q: 'Can I sue if I’m already getting workers’ comp?', a: 'Often, yes. Workers’ comp generally bars suing your direct employer, but it does not prevent a third-party lawsuit against other negligent companies on the site. The two claims can proceed together.' },
        { q: 'What is a third-party construction claim?', a: 'It is a personal-injury lawsuit against someone other than your employer — such as a general contractor, subcontractor, property owner, or equipment manufacturer — whose negligence contributed to your injury.' },
        { q: 'How long do I have to file?', a: 'Illinois personal-injury deadlines generally run two years, but workers’ comp has its own separate timeline and there can be shorter deadlines for some parties. Confirm your deadlines with an attorney early.' },
        { q: 'Will a third-party recovery affect my comp benefits?', a: 'It can. The workers’ comp insurer may be entitled to reimbursement out of a third-party recovery. An experienced lawyer structures the case to maximize what actually ends up in your pocket.' },
      ] },
      { type: 'related', items: [
        { label: 'Contingency fees: what “$0 upfront” really means', to: '/blog/contingency-fees-what-zero-upfront-means' },
        { label: 'Why truck accidents are different from car crashes', to: '/blog/truck-accidents-why-they-are-different-illinois' },
        { label: 'How long do you have to file a claim in Illinois?', to: '/blog/illinois-personal-injury-statute-of-limitations' },
      ] },
    ],
  },
  {
    slug: 'truck-accidents-why-they-are-different-illinois',
    title: 'Truck Accidents in Illinois: Why They’re Different From Car Crashes',
    metaTitle: 'Illinois Truck Accident Claims: Why They’re Different | Tober Law',
    metaDescription:
      'Semi-truck crashes are not just bigger car accidents. Learn why Illinois trucking cases involve federal rules, multiple defendants, and electronic evidence that vanishes fast.',
    excerpt:
      'An 80,000-pound semi does not just cause bigger injuries — it triggers a very different kind of legal case. Here is what makes trucking claims unique.',
    category: 'Trucking Accidents',
    readTime: '8 min read',
    date: '2026-03-25',
    keywords: ['Illinois truck accident lawyer', 'semi truck crash claim', 'Chicago trucking accident attorney', 'truck accident evidence'],
    image:
      'https://images.unsplash.com/photo-1616432043562-3671ea2e5242?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwyfHxzZW1pJTIwdHJ1Y2t8ZW58MHx8fHwxNzg4Mjc1MTYyfDA&ixlib=rb-4.1.0&q=85',
    content: [
      { type: 'callout', title: 'Key takeaways', items: [
        'Truck cases can involve many defendants — driver, carrier, trailer owner, and cargo loader.',
        'Federal safety regulations govern driver hours, maintenance, and records.',
        'Electronic logs and engine data can be lawfully overwritten within weeks.',
        'Carriers investigate within hours — you deserve someone doing the same for you.',
      ] },
      { type: 'p', parts: ['A fully loaded semi can weigh 20 to 30 times more than a passenger car. When one is involved in a crash on I-90, I-55, or a Chicago surface street, the results are often catastrophic. But the size of the vehicle is only part of the story — ', {link:'/practice-areas/trucking-accidents', text:'trucking cases'}, ' are legally different from ordinary ', {link:'/practice-areas/car-accidents', text:'car accidents'}, ' in ways that dramatically affect your claim.'] },
      { type: 'h2', text: 'More parties can be responsible' },
      { type: 'p', text: 'In a car crash, fault usually falls on one of the two drivers. A truck wreck can involve many potential defendants: the driver, the trucking company that employed them, the company that owned the trailer, a maintenance contractor, and even the business that loaded the cargo. Identifying every responsible party is essential to fully recovering for your injuries — and to reaching every available insurance policy.' },
      { type: 'h2', text: 'Federal regulations come into play' },
      { type: 'p', text: 'Commercial trucking is governed by federal safety rules covering driver hours of service, rest breaks, vehicle maintenance, and record-keeping. When a carrier cuts corners — pushing a driver past legal limits or skipping inspections — those violations can become powerful evidence of negligence. Knowing which records to demand, and how to read them, takes experience most general practitioners simply don’t have.' },
      { type: 'h2', text: 'Critical evidence disappears quickly' },
      { type: 'p', text: 'Modern trucks record a wealth of data — electronic logging devices, engine control modules, braking data, and dispatch records. Some of that information can be lawfully overwritten or discarded within weeks. Acting fast, and sending a formal evidence-preservation (spoliation) letter, can mean the difference between having the proof and losing it forever.' },
      { type: 'h3', text: 'What to preserve after a truck crash' },
      { type: 'ul', items: [
        'The truck’s electronic logging and engine data',
        'The carrier’s maintenance and inspection records',
        'The driver’s hours-of-service logs and qualification file',
        'Dashcam, traffic-camera, and nearby business surveillance footage',
      ] },
      { type: 'h2', text: 'Why experienced counsel matters' },
      { type: 'p', parts: ['Trucking companies and their insurers often have investigators at the scene within hours, working to limit their exposure. You deserve someone doing the same for you. Tober Law investigates trucking crashes aggressively and handles every case personally — you can ', {link:'/results', text:'review results the firm has secured'}, ' in serious motor-vehicle and trucking cases. If you or a loved one was hurt by a commercial truck in Illinois, ', {link:'/contact', text:'contact us for a free, confidential consultation'}, '.'] },
      { type: 'faq', items: [
        { q: 'Is a truck accident claim handled like a car accident claim?', a: 'No. Trucking cases usually involve more defendants, federal regulations, and specialized electronic evidence, which makes them more complex and time-sensitive than a typical car-crash claim.' },
        { q: 'Who can be held responsible in a truck crash?', a: 'Potentially the driver, the trucking company, the trailer owner, a maintenance provider, and the cargo loader — depending on how the crash happened.' },
        { q: 'How fast should I act after a truck accident?', a: 'As quickly as possible. Key electronic data can be overwritten within weeks, so early legal action to preserve evidence is crucial.' },
        { q: 'What if a family member was killed in a truck crash?', a: 'You may have a wrongful-death claim. These cases have their own rules and deadlines, and a consultation can help you understand your options.' },
      ] },
      { type: 'related', items: [
        { label: 'What to do after a car accident in Chicago', to: '/blog/what-to-do-after-a-car-accident-in-chicago' },
        { label: 'How long do you have to file a claim in Illinois?', to: '/blog/illinois-personal-injury-statute-of-limitations' },
        { label: 'Construction injuries: rights beyond workers’ comp', to: '/blog/construction-injury-rights-illinois-beyond-workers-comp' },
      ] },
    ],
  },
  {
    slug: 'slip-and-fall-premises-liability-chicago',
    title: 'Slip-and-Fall Claims in Chicago: Proving Premises Liability',
    metaTitle: 'Chicago Slip-and-Fall & Premises Liability Claims | Tober Law',
    metaDescription:
      'Injured in a slip-and-fall in Chicago? Learn what premises liability requires, how to prove a property owner had notice, comparative fault rules, and the steps that protect your claim.',
    excerpt:
      'Not every fall is someone else’s fault — but many are. Here is what it actually takes to prove a Chicago premises-liability case.',
    category: 'Premises Liability',
    readTime: '8 min read',
    date: '2026-04-11',
    keywords: ['Chicago slip and fall lawyer', 'premises liability Illinois', 'how to prove a slip and fall', 'comparative fault Illinois'],
    image:
      'https://images.unsplash.com/photo-1554280955-b112f2babdc0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwxfHx3ZXQlMjBmbG9vcnxlbnwwfHx8fDE3ODgyNzUxNjJ8MA&ixlib=rb-4.1.0&q=85',
    content: [
      { type: 'callout', title: 'Key takeaways', items: [
        'You must show the owner knew, or should have known, about the hazard.',
        'Evidence like video and maintenance logs often decides the case.',
        'Illinois uses modified comparative fault — being over 50% at fault can bar recovery.',
        'Report the fall, photograph the hazard, and see a doctor right away.',
      ] },
      { type: 'p', parts: ['A slip-and-fall might sound minor, but a broken hip, a torn shoulder, or a head injury can change your life. These cases fall under an area of law called ', {link:'/practice-areas/premises-liability', text:'premises liability'}, ' — and winning one takes more than simply showing that you fell and got hurt.'] },
      { type: 'h2', text: 'What premises liability requires' },
      { type: 'p', text: 'Property owners and businesses in Illinois have a duty to keep their premises reasonably safe for lawful visitors. To hold an owner responsible, you generally need to show that a dangerous condition existed, that the owner knew or should have known about it, that they failed to fix it or warn about it, and that this failure caused your injury.' },
      { type: 'h2', text: 'The key question: notice' },
      { type: 'p', text: 'The heart of most slip-and-fall cases is whether the owner had notice of the hazard. A puddle that a store created, or one that sat long enough that employees should have spotted it, points toward liability. A spill that happened seconds before you walked by may not. Evidence like surveillance video, cleaning schedules, maintenance logs, and inspection records often decides the issue — which is why preserving it quickly matters.' },
      { type: 'h2', text: 'What to do after a fall' },
      { type: 'ul', items: [
        'Report the fall to the property owner or manager and ask for a written incident report',
        'Photograph the hazard immediately, before it is cleaned up',
        'Get the names of any employees and witnesses',
        'Keep the shoes and clothing you were wearing',
        'See a doctor promptly and follow through with treatment',
      ] },
      { type: 'h2', text: 'Comparative fault in Illinois' },
      { type: 'p', text: 'Illinois uses a modified comparative-fault rule. If you are found partly responsible for your fall, your recovery is reduced by your share of the blame — and if you are more than 50% at fault, you may recover nothing. Insurance companies lean on this rule hard, arguing you weren’t watching where you were going, which is why how your case is presented matters so much.' },
      { type: 'h2', text: 'When poor security is the real problem' },
      { type: 'p', parts: ['Not every premises case is a slip-and-fall. When an assault or attack happens because a property owner ignored obvious dangers — broken locks, no lighting, no security — that can be a ', {link:'/practice-areas/negligent-security', text:'negligent security claim'}, '. The legal duty is related, but the facts and proof are different.'] },
      { type: 'h2', text: 'How Tober Law helps' },
      { type: 'p', parts: ['We have recovered substantial settlements for people hurt by unsafe property — from collapsed ceilings to hazardous walkways — and you can ', {link:'/results', text:'see examples of those results'}, '. Every case is handled personally by the attorney, and consultations are always free. If you were injured on someone else’s property in Chicagoland, ', {link:'/contact', text:'reach out to learn where you stand'}, '.'] },
      { type: 'faq', items: [
        { q: 'Do I have a case if I slipped and fell in a store?', a: 'Possibly. The key is whether the store knew or should have known about the hazard and failed to address it. A free consultation can help evaluate the facts and available evidence.' },
        { q: 'What if I was partly at fault?', a: 'Under Illinois’ modified comparative-fault rule you can still recover if you are 50% or less at fault, though your award is reduced by your share. Being more than 50% at fault generally bars recovery.' },
        { q: 'How important is surveillance video?', a: 'Often decisive. It can establish how long a hazard existed and whether the owner had notice. Because footage is frequently overwritten, acting quickly to preserve it is critical.' },
        { q: 'How long do I have to file a premises liability claim?', a: 'Generally two years in Illinois, with shorter deadlines if a government property or entity is involved. Confirm your specific deadline with an attorney.' },
      ] },
      { type: 'related', items: [
        { label: 'How long do you have to file a claim in Illinois?', to: '/blog/illinois-personal-injury-statute-of-limitations' },
        { label: 'Contingency fees: what “$0 upfront” really means', to: '/blog/contingency-fees-what-zero-upfront-means' },
        { label: 'What to do after a car accident in Chicago', to: '/blog/what-to-do-after-a-car-accident-in-chicago' },
      ] },
    ],
  },
];

export const getPost = (slug) => blogPosts.find((p) => p.slug === slug);
