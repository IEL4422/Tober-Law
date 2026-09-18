// Mock content for Tober Law — all data lives here for easy backend swap later.
import {
  Car, Truck, DoorOpen, HardHat, Factory, ShieldAlert, Landmark, Lock,
  Package, Dog, Stethoscope,
} from 'lucide-react';

export const firm = {
  name: 'Tober Law',
  attorney: 'Cameron J. Tober',
  tagline: 'You focus on healing. We handle the rest.',
  email: 'firm@tober-law.com',
  address: '125 S. Wacker Dr., Ste. 300, Chicago, IL 60606',
  phone: '312-214-3175',
  phoneHref: 'tel:+13122143175',
  fax: '312-426-2131',
  phoneNote: 'Text or call anytime',
  blurb:
    'Illinois & Missouri personal injury and civil rights litigation, handled personally by Cameron J. Tober.',
};

export const badges = [
  { title: 'Trial-Tested', sub: 'Real courtroom experience' },
  { title: 'Direct Access', sub: "The attorney's personal cell" },
  { title: '$0 Upfront', sub: 'Contingency fee' },
  { title: 'IL & MO', sub: 'Serving Illinois & Missouri' },
];

export const practiceAreas = [
  {
    slug: 'car-accidents', name: 'Car Accidents', icon: Car,
    desc: 'Serious collisions, drunk-driving crashes, and wrongful death claims across Chicagoland.',
  },
  {
    slug: 'trucking-accidents', name: 'Trucking Accidents', icon: Truck,
    desc: 'Commercial truck and semi crashes involving catastrophic, life-changing injuries.',
  },
  {
    slug: 'premises-liability', name: 'Premises Liability', icon: DoorOpen,
    desc: 'Slip-and-fall, unsafe property, and dangerous condition claims.',
  },
  {
    slug: 'construction-injuries', name: 'Construction Injuries', icon: HardHat,
    desc: 'Job-site falls, equipment failures, and serious worker injuries.',
  },
  {
    slug: 'manufacturing-injuries', name: 'Manufacturing Injuries', icon: Factory,
    desc: 'Industrial and factory accidents caused by negligence or unsafe conditions.',
  },
  {
    slug: 'police-misconduct', name: 'Police Misconduct', icon: ShieldAlert,
    desc: 'Excessive force, false arrest, and civil rights violation claims.',
  },
  {
    slug: 'ice-misconduct', name: 'ICE Misconduct', icon: Landmark,
    desc: 'Unlawful detention and civil rights enforcement matters.',
  },
  {
    slug: 'negligent-security', name: 'Negligent Security', icon: Lock,
    desc: 'Assaults and harm enabled by inadequate property security.',
  },
  {
    slug: 'products-liability', name: 'Products Liability', icon: Package,
    desc: 'Injuries caused by defective, dangerous, or improperly designed products.',
  },
  {
    slug: 'dog-bites', name: 'Dog Bites', icon: Dog,
    desc: 'Serious dog-bite and animal-attack injuries caused by negligent owners.',
  },
  {
    slug: 'medical-malpractice', name: 'Medical Malpractice & Nursing Home', icon: Stethoscope,
    desc: 'Negligent medical care and nursing-home neglect that harms patients and residents.',
  },
];

// figure: display amount, or null for appellate wins (uses gavel icon)
export const results = [
  { figure: '$12M', category: 'Wrongful Death', desc: 'Worked on the team that secured a $12M settlement for the family of a deceased mother killed in a tragic highway collision.' },
  { figure: '$5.22M', category: 'Manufacturing Injury', desc: 'Secured $5.22M for a laborer whose foot and ankle were severely injured by a defective industrial product at his workplace.' },
  { figure: null, category: 'Appellate Win', desc: 'Handled a victorious appeal to the Illinois Supreme Court resulting in a unanimous opinion that effectively curtailed a state police immunity statute invoked by defendant officers in a police-chase case.' },
  { figure: '$5M', category: 'Construction Injury', desc: '2nd-chaired the trial team that obtained a $5M settlement on the third day of trial for a union roofer who fell 6–7 feet on a jobsite.' },
  { figure: '$3.4M', category: 'Construction Injury', desc: 'Worked to obtain a $3.4M settlement on behalf of an HVAC installer electrocuted on the job.' },
  { figure: '$2.71M', category: 'Premises Liability', desc: 'Worked on the trial team that secured a $2.71M settlement for a laborer who tripped and fell on a jobsite.' },
  { figure: '$2.35M', category: 'Premises Liability', desc: 'Worked to secure a $2.35M settlement for a retail shopper who slipped and fell while grocery shopping.' },
  { figure: '$2.3M', category: 'Trucking Accident', desc: 'As first chair, negotiated and secured a $2.3M settlement for a freight delivery driver who fell backwards out of his truck at the delivery destination.' },
  { figure: '$2.25M', category: 'Motor Vehicle Collision', desc: 'First-chaired the trial team that secured a $2.25M settlement on the fifth day of trial on behalf of an Uber driver rear-ended on the highway.' },
  { figure: '$2M', category: 'Manufacturing Injury', desc: 'Worked to secure a policy-limits $2M settlement on behalf of a manufacturing laborer whose hand was caught in a punch-press machine.' },
  { figure: '$1.36M', category: 'Wrongful Death', desc: 'Part of the trial team that secured a record $1.36M verdict on behalf of the family of a deceased mother who was prescribed the incorrect dosage of her medication.' },
  { figure: null, category: 'Appellate Win', desc: 'Argued a victorious appeal at the Appellate Court of Illinois, 3rd District, reinstating negligence claims erroneously dismissed under the Illinois Tort Immunity Act.' },
  { figure: '$1.25M', category: 'Medical Malpractice', desc: 'Part of the trial team that secured a $1.25M settlement in a medical malpractice case against a major Chicagoland teaching hospital.' },
  { figure: '$1.03M', category: 'Premises Liability', desc: 'Secured as first chair a $1.03M settlement for a postal worker who tripped and fell while delivering mail.' },
  { figure: '$975K', category: 'Premises Liability', desc: 'Negotiated as first chair a $975K settlement on behalf of a renter whose ceiling collapsed in her unit, striking her in the head.' },
  { figure: '$930K', category: 'Nursing Home Neglect', desc: 'Secured as first chair a $930K settlement on behalf of a nursing home resident dropped during a transfer from her wheelchair.' },
  { figure: '$900K', category: 'Construction Injury', desc: 'Worked to secure a $900K settlement on behalf of a laborer who fell from a liquid shipping tanker while working.' },
  { figure: '$825K', category: 'Negligent Security', desc: 'Worked to secure an $825K settlement on behalf of an injured mother attacked by a pit bull.' },
  { figure: '$750K', category: 'Premises Liability', desc: 'Worked on the team that secured a $750K settlement on behalf of a worker who tripped on loose carpet in her office building.' },
  { figure: '$650K', category: 'Trucking Accident', desc: 'Secured as first chair a $650K settlement on behalf of a CDL semi-truck driver rear-ended by another semi on the highway.' },
  { figure: '$625K', category: 'Premises Liability', desc: 'As first chair, obtained a $625K settlement on behalf of a floral designer who fell from a ladder while decorating for a Chicagoland festival.' },
  { figure: '$600K', category: 'Nursing Home Neglect', desc: 'Negotiated a $600K settlement on behalf of a nursing home resident who suffered deterioration of pressure injuries while admitted to the facility.' },
  { figure: '$460K', category: 'Construction Injury', desc: 'Negotiated a $460K settlement on behalf of an architect who fell through an old staircase on a jobsite.' },
  { figure: '$450K', category: 'Car Accident', desc: 'Secured the combined policy limits of multiple at-fault drivers in a car accident.' },
];

export const aboutBio = [
  'Cam is a dedicated, results-driven trial lawyer with extensive experience representing victims in high-stakes catastrophic injury cases. As an attorney at one of the nation\u2019s most respected plaintiff\u2019s firms, he honed his skills in complex litigation.',
  'He founded Tober Law to offer a more personalized, hands-on approach \u2014 ensuring every case receives the detailed attention it deserves. His commitment to his clients sets him apart, delivering meaningful impact for those who need it most.',
];

export const galleryImages = [
  'https://images.unsplash.com/photo-1597933534024-debb6104af15?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwyfHxDaGljYWdvJTIwc2t5bGluZXxlbnwwfHx8Ymx1ZXwxNzg4MjE1ODA1fDA&ixlib=rb-4.1.0&q=85',
  'https://images.unsplash.com/photo-1563718944-758794a56b34?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwzfHxDaGljYWdvJTIwc2t5bGluZXxlbnwwfHx8Ymx1ZXwxNzg4MjE1ODA1fDA&ixlib=rb-4.1.0&q=85',
  'https://images.unsplash.com/photo-1602276119677-a0230a8f504f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHw0fHxDaGljYWdvJTIwc2t5bGluZXxlbnwwfHx8Ymx1ZXwxNzg4MjE1ODA1fDA&ixlib=rb-4.1.0&q=85',
  'https://images.unsplash.com/photo-1705691026265-2f5d78a5e629?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwyfHxDaGljYWdvJTIwYXJjaGl0ZWN0dXJlfGVufDB8fHxibHVlfDE3ODgyMTU4MDV8MA&ixlib=rb-4.1.0&q=85',
  'https://images.unsplash.com/photo-1607704364702-2b504eba4b09?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwzfHxDaGljYWdvJTIwZG93bnRvd258ZW58MHx8fGJsdWV8MTc4ODIxNTgwNXww&ixlib=rb-4.1.0&q=85',
  'https://images.unsplash.com/photo-1618199560866-0efa5266f52c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwyfHxDaGljYWdvJTIwZG93bnRvd258ZW58MHx8fGJsdWV8MTc4ODIxNTgwNXww&ixlib=rb-4.1.0&q=85',
];

export const attorneyHeadshot = 'https://images.unsplash.com/photo-1644268756918-16348d1bc619?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjd8MHwxfHNlYXJjaHwzfHxhdHRvcm5leSUyMGhlYWRzaG90fGVufDB8fHx8MTc4ODIxNTgzOXww&ixlib=rb-4.1.0&q=85';

export const referralBlocks = [
  {
    title: 'Co-Counsel & Trial Counsel Arrangements',
    body: 'We seek creative solutions to meet the needs of our clients. This includes partnering with additional counsel to share in costs and fees, split trial work, handle local counsel responsibilities, and more. We are happy to pair with counsel in any capacity, on our cases or one of yours.',
    image: 'https://images.pexels.com/photos/8815849/pexels-photo-8815849.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    title: 'Consulting & Litigation Solutions',
    body: 'Tober Law offers litigation consulting to help other attorneys assess their cases. This includes participating in mock trials, focus groups, client preparation and mock examinations, issue spotting, case value consultation, jury observation, and trial observation.',
    image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxsYXclMjBvZmZpY2V8ZW58MHx8fHwxNzg4MjE1ODM5fDA&ixlib=rb-4.1.0&q=85',
  },
  {
    title: 'Referring Attorneys',
    body: "Tober Law has extensive experience working with referral partners from across the legal industry. We value any referral and will specifically tailor our approach to meet any referring attorney's specific circumstance.",
    image: null,
  },
];

export const hours = [
  ['Monday', '9:00 AM – 5:00 PM'],
  ['Tuesday', '9:00 AM – 5:00 PM'],
  ['Wednesday', '9:00 AM – 5:00 PM'],
  ['Thursday', '9:00 AM – 5:00 PM'],
  ['Friday', '9:00 AM – 5:00 PM'],
  ['Saturday', 'Closed'],
  ['Sunday', 'Closed'],
];

// Per-practice-area detail content. resultCategories maps to the `category` field on results.
export const practiceDetails = {
  'car-accidents': {
    overview: "When a careless or impaired driver upends your life, medical bills and lost income stack up fast. We take on the insurance companies directly so you can focus on recovery \u2014 pursuing full compensation for serious collisions, hit-and-runs, and wrongful death across Chicagoland.",
    handles: ['Serious and high-speed collisions', 'Drunk and distracted driving crashes', 'Rideshare (Uber & Lyft) accidents', 'Hit-and-run and uninsured motorist claims', 'Wrongful death from fatal crashes'],
    resultCategories: ['Car Accident', 'Motor Vehicle Collision'],
  },
  'trucking-accidents': {
    overview: "Crashes involving commercial trucks and semis cause some of the most catastrophic injuries on the road \u2014 and they involve trucking companies, insurers, and federal regulations most lawyers rarely handle. We move quickly to preserve evidence and hold every responsible party accountable.",
    handles: ['Semi-truck and tractor-trailer collisions', 'Delivery and freight vehicle crashes', 'Rear-end and highway wrecks', 'Driver fatigue and hours-of-service violations', 'Improper loading and maintenance failures'],
    resultCategories: ['Trucking Accident'],
  },
  'premises-liability': {
    overview: "Property owners have a duty to keep their premises reasonably safe. When they cut corners, people get hurt. We handle slip-and-falls, dangerous conditions, and unsafe-property claims against negligent owners, landlords, and businesses.",
    handles: ['Slip, trip, and fall injuries', 'Unsafe or defective property conditions', 'Ceiling collapses and structural failures', 'Retail and grocery-store incidents', 'Failure to warn of known hazards'],
    resultCategories: ['Premises Liability'],
  },
  'construction-injuries': {
    overview: "Construction sites are among the most dangerous workplaces in Illinois. When falls, equipment failures, or unsafe conditions cause serious injury, we pursue every available claim \u2014 including third-party negligence that goes beyond workers' compensation.",
    handles: ['Falls from heights, roofs, and ladders', 'Scaffolding and equipment failures', 'Electrocution and crush injuries', 'Falling-object and debris injuries', 'Unsafe job-site conditions'],
    resultCategories: ['Construction Injury'],
  },
  'manufacturing-injuries': {
    overview: "Factory and industrial work exposes laborers to heavy machinery and hazardous conditions. When negligence or a defective product causes a life-changing injury, we fight for the full recovery you deserve.",
    handles: ['Punch-press and machine injuries', 'Defective industrial products', 'Amputations and crush injuries', 'Repetitive-trauma and equipment failures', 'Unsafe factory conditions'],
    resultCategories: ['Manufacturing Injury'],
  },
  'police-misconduct': {
    overview: "When those sworn to protect abuse their power, we hold them accountable. We litigate civil rights claims against officers and departments \u2014 from excessive force to false arrest \u2014 and have taken these fights all the way to the Illinois Supreme Court.",
    handles: ['Excessive and unreasonable force', 'False arrest and unlawful detention', 'Civil rights (Section 1983) violations', 'Police-chase and pursuit injuries', 'Challenges to immunity defenses'],
    resultCategories: ['Appellate Win'],
  },
  'ice-misconduct': {
    overview: "Immigration enforcement does not suspend a person's civil rights. We represent individuals harmed by unlawful detention and enforcement overreach, pursuing accountability for constitutional violations.",
    handles: ['Unlawful and prolonged detention', 'Excessive force during enforcement', 'Due-process and civil rights violations', 'Wrongful detainer claims', 'Enforcement-overreach matters'],
    resultCategories: [],
  },
  'negligent-security': {
    overview: "Businesses and property owners must protect visitors from foreseeable harm. When inadequate security enables an assault or attack, we pursue the owners whose negligence made it possible.",
    handles: ['Assaults enabled by poor security', 'Inadequate lighting and broken locks', 'Failure to provide guards or cameras', 'Apartment and parking-lot attacks', 'Animal attacks on unsafe premises'],
    resultCategories: ['Negligent Security'],
  },
  'products-liability': {
    overview: "When a defective or unreasonably dangerous product causes injury, the companies that designed, made, or sold it can be held responsible. We take on manufacturers and distributors to recover for people harmed by products that never should have reached the market.",
    handles: ['Defective and dangerous consumer products', 'Design and manufacturing defects', 'Failure-to-warn and inadequate labeling', 'Defective machinery and equipment', 'Auto and component-part failures'],
    resultCategories: ['Manufacturing Injury'],
  },
  'dog-bites': {
    overview: "A serious dog bite can cause lasting physical and emotional scars, especially for children. Illinois and Missouri law hold owners accountable when their animals attack. We pursue full compensation for medical care, scarring, and trauma.",
    handles: ['Dog-bite and mauling injuries', 'Attacks on children and delivery workers', 'Scarring and reconstructive surgery claims', 'Negligent and reckless owner liability', 'Attacks enabled by unsafe premises'],
    resultCategories: ['Negligent Security'],
  },
  'medical-malpractice': {
    overview: "When trusted medical providers and care facilities fall below the standard of care, the consequences can be devastating. We handle serious medical-malpractice and nursing-home neglect cases against hospitals, providers, and long-term care facilities.",
    handles: ['Surgical and diagnostic errors', 'Medication and dosage mistakes', 'Birth injuries and delayed treatment', 'Nursing-home neglect and pressure injuries', 'Falls and abuse in care facilities'],
    resultCategories: ['Medical Malpractice', 'Nursing Home Neglect'],
  },
};
