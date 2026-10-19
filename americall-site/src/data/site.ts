export const site = {
	name: 'Americall, Inc.',
	url: 'https://americall.io',
	domain: 'americall.io',
	email: 'info@americall.io',
	// Mailing/registered address only: no staffed office customers can visit.
	mailingAddress: '101-43 105th St, Ozone Park, NY 11416',
	// Owner decision pending (UI Redesign build-plan Q6). The previous site already showed it.
	showMailingAddress: true,
	phone: '',
	facebook: 'https://www.facebook.com/profile.php?id=61583101135869',
	description:
		'Americall provides trained calling teams, appointment-setting support, campaign management, and call operations for U.S. service businesses.',
};

export const navItems = [
	{ label: 'Services', href: '/services/' },
	{ label: 'Packages', href: '/#packages' },
	{ label: 'FAQ', href: '/faq/' },
	{ label: 'Contact', href: '/contact/' },
];

export const footerPages = [
	{ label: 'Home', href: '/' },
	{ label: 'Services', href: '/services/' },
	{ label: 'Packages', href: '/#packages' },
	{ label: 'FAQ', href: '/faq/' },
	{ label: 'Contact', href: '/contact/' },
];

/* Home "What we run" statement fields (UI Redesign/page-blueprints.md, Home §2). */
export const statements = [
	{
		phrase: 'Trained for your offer',
		text: 'We recruit for communication skills and resilience, then train every agent on your industry, your product and your audience before the first dial.',
		ground: 'white',
	},
	{
		phrase: 'Your dialer, handled',
		text: 'We set up and maintain your dialer and CRM, working with VICI Dialer, Calltools, ReadyMode, GoHighLevel, Salesforce, HubSpot and Zoho CRM.',
		ground: 'navy',
	},
	{
		phrase: 'Campaigns watched live',
		text: 'Managers monitor calls as they happen, coach agents one to one and adjust scripts and strategy as results come in.',
		ground: 'soft',
	},
	{
		phrase: 'One account manager',
		text: "Every client gets a dedicated account manager, access to the campaign's dialer and the Appointment Master Spreadsheet, so you can see every appointment.",
		ground: 'navy',
	},
] as const;

/* Home "How it runs" stages (sources listed in page-blueprints.md, Home §3). */
export const processStages = [
	{
		name: 'Discovery',
		text: 'We learn your services, your target audience and your appointment qualification criteria, plus any scripts or talking points you want agents to follow.',
	},
	{
		name: 'Setup',
		text: 'We write the call scripts, set up the dialer and connect your CRM or scheduling tool.',
	},
	{
		name: 'Calling',
		text: 'Trained agents work your campaign while managers monitor calls live and coach agents as they go.',
	},
	{
		name: 'Confirming',
		text: 'Quality assurance checks each booked appointment, and it is confirmed with the prospect.',
	},
	{
		name: 'Hand-off',
		text: 'Appointments reach your CRM, scheduling system or shared Google Sheet with qualification notes and call recordings.',
	},
];

/* Industries. Healthcare is left out until the owner confirms it (build-plan Q3). */
export const industries = [
	{ name: 'Solar', slug: 'solar', phrase: 'solar' },
	{ name: 'Roofing', slug: 'roofing', phrase: 'roofing' },
	{ name: 'HVAC', slug: 'hvac', phrase: 'HVAC' },
	{ name: 'Real estate', slug: 'real-estate', phrase: 'real estate' },
	{ name: 'Home improvement', slug: 'home-improvement', phrase: 'home improvement' },
];

export const services = [
	{
		slug: 'dialer-crm',
		title: 'Dialer and CRM Solutions',
		description:
			'The right dialer, the right CRM, and the right numbers make all the difference. Our team manages DID selection and maintenance to protect call quality and maximize answer rates — while seamlessly integrating with the platforms you already use, including VICI Dialer, Calltools, ReadyMode, GoHighLevel, Salesforce, HubSpot, and Zoho CRM. We handle the setup, the upkeep, and the strategy so you can focus on closing.',
	},
	{
		slug: 'agent-training',
		title: 'Skilled Agent Recruitment and Training',
		description:
			'Building a high-performing call team starts long before the first dial. At Americall, our recruitment process is designed to identify candidates with the right communication skills, resilience, and aptitude for sales — before any training even begins.\n\nFrom there, agents go through a structured onboarding and training program tailored to your industry, your product, and your target audience. The result is a team that understands your business, represents your brand professionally, and knows how to turn a conversation into a confirmed appointment.',
	},
	{
		slug: 'campaign-management',
		title: 'Strategic Campaign Management',
		description:
			"We don't set campaigns and leave them running. Our team actively manages every aspect of your campaign — from call strategy and script refinement to performance tracking and real-time adjustments. Our managers conduct live monitoring of calls as they happen, stepping in with one-on-one agent coaching during active operations to ensure quality never slips.\n\nThe goal is simple: keep what's working, fix what isn't, and never stop improving.",
	},
	{
		slug: 'admin-support',
		title: 'Dedicated Administrative Support',
		description:
			"Every Americall client is assigned a dedicated account manager who serves as their primary point of contact throughout the campaign. From onboarding to ongoing operations, your account manager handles the administrative side of your campaign — coordinating between teams, managing reporting, tracking performance, and ensuring nothing falls through the cracks.\n\nYou'll be given direct access to agent, manager, and admin communication channels, your campaign's dialer, and the Appointment Master Spreadsheet — giving you full visibility into every moving part of your campaign at every stage. You focus on your business. We handle the rest.",
	},
];

export const servicePackages = [
	{
		title: 'LAUNCH PACKAGE',
		description:
			"Perfect for businesses looking to test the waters. The Launch Package gives you a dedicated two-agent team to start generating qualified appointments, with the full support of Americall's infrastructure behind every call.",
		highlight: false,
		features: [
			{ text: '2 Trained Agents', included: true },
			{ text: '8+ Qualified Appointments Weekly (32-35 Appts / mo.)', included: true },
			{ text: 'Appointment Quality Control and Agent Management', included: false },
			{ text: 'Dedicated Campaign Manager - Operations and KPI Tracking.', included: false },
			{ text: 'Dedicated Client Success Manager', included: false },
		],
	},
	{
		title: 'MOMENTUM PACKAGE',
		description:
			"Built for businesses ready to scale. With a five-agent team working your campaign, the Momentum Package delivers a consistent, higher volume of qualified appointments while maintaining the attention to detail Americall is known for.",
		highlight: true,
		features: [
			{ text: '5 Trained Agents (Fully Managed)', included: true },
			{ text: '20+ Qualified Appointments Weekly (80-100 Appt / mo.)', included: true },
			{ text: 'Appointment Quality Control and Agent KPI Management', included: true },
			{ text: 'Dedicated Campaign Manager - Operations and KPI Tracking.', included: true },
			{ text: 'Dedicated Client Success Manager', included: false },
		],
	},
	{
		title: 'ACCELERATION PACKAGE',
		description:
			'Ready to dominate your market. The Acceleration Package puts 10 dedicated agents on your campaign, generating up to 40 qualified appointments every week — giving your sales team a full, consistent pipeline to close and convert without lifting a finger on outreach.',
		highlight: false,
		features: [
			{ text: '10 Trained Agents (Fully Managed)', included: true },
			{ text: '40+ Qualified Appointments Weekly (160-180 Appt / mo.)', included: true },
			{ text: 'Dedicated Quality Control and Agent KPI Management', included: true },
			{ text: 'Dedicated Campaign Manager - Operations and KPI Tracking.', included: true },
			{ text: 'Dedicated Client Success Manager', included: true },
		],
	},
	{
		title: 'ENTERPRISE PACKAGE',
		description:
			'The full force of Americall behind your business. The Enterprise Package deploys 20 dedicated agents to deliver up to 80 qualified appointments per week — the kind of volume that fuels serious revenue growth, fills your calendar end to end, and positions your business to scale without limits.',
		highlight: false,
		features: [
			{ text: '20 Trained Agents (Fully Managed)', included: true },
			{ text: '80+ Qualified Appointments Weekly (320-350 Appt / mo.)', included: true },
			{ text: 'Dedicated Appointment Quality Control & Training Manager - 1. Appointment Quality 2. Agent KPI Management', included: true },
			{ text: 'Dedicated Campaign and Lead Manager - a. Operations and Strategy b. Cold and Opt in Lead Management c. Appointment Tracking and Confirmations.', included: true },
			{ text: 'Dedicated Client Success Manager', included: true },
		],
	},
];

export const whyAmericallCards = [
	{
		title: 'Trained Teams',
		description:
			'Every agent goes through a rigorous multi-stage recruitment and training process before handling a single call — ensuring only the most prepared, brand-aligned representatives reach your prospects.',
	},
	{
		title: 'Quality First',
		description:
			'Every call is monitored against your exact requirements. Our QA process captures performance data, surfaces coaching opportunities, and feeds directly back to agents — so standards tighten over time, not drift.',
	},
	{
		title: 'Smart Campaign Management',
		description:
			'From scrubbed lead lists and connection-optimized DIDs to real-time agent oversight — we manage every layer of your campaign so your pipeline stays full and your team stays focused on closing.',
	},
	{
		title: 'Industry Expertise',
		description:
			"Deep specialization across solar, roofing, HVAC, real estate, and home improvement means your agents already understand your buyer's language before the first call is made.",
	},
];

export const stats = [
	{
		value: '100+',
		label: 'Satisfied Clients Served',
		description:
			'Trusted by clients across the U.S., including solar, roofing, HVAC, and a wide range of home improvement businesses.',
	},
	{
		value: '500+',
		label: 'Agents Recruited And Trained',
		description:
			'An in-house team of trained agents supports inbound and outbound calling with sales approaches shaped around each client industry.',
	},
	{
		value: '10,000+',
		label: 'Hours Logged',
		description:
			'Hours across agents, client managers, operations, quality control, and confirmations teams, all invested in better campaign outcomes.',
	},
	{
		value: '30,000+',
		label: 'Qualified Appointments Sent',
		description:
			'Qualified appointments generated for U.S. businesses through trained agents and industry-specific call strategies.',
	},
	{
		value: '12,000+',
		label: 'Confirmed Customer Sit Ins',
		description:
			'Confirmed sit-ins with prospects who showed up, listened, and were ready to engage.',
	},
	{
		value: '3,000+',
		label: 'Sold Deals And Installs',
		description:
			'Appointments moved through to sold deals and installs, connecting calling operations to measurable business outcomes.',
	},
];

export const testimonials = [
	{
		quote:
			'What stood out was the attention behind every appointment. Americall took time to understand our business, and it showed in the quality of prospects we sat with.',
		name: 'Marquis P.',
		role: 'Owner, Jusi Power LLC',
	},
	{
		quote:
			'They have been a reliable extension of our team. The appointments are with homeowners who are actually interested, and every lead comes with context.',
		name: 'Samuel L.',
		role: 'Owner, Your Home Improved LLC',
	},
];

export const faqs = [
	{
		question: 'What pricing plans does Americall offer?',
		answer:
			'Americall offers two flexible pricing structures: fixed monthly plans for predictable, ongoing call handling and outbound campaigns, and pay-per-appointment bulk packages for businesses that prefer to pay based on results. Book a demo for a custom quote tailored to your industry and call volume.',
	},
	{
		question: 'Is there a minimum commitment or contract length?',
		answer:
			'Contract terms vary by plan. Monthly plans offer flexible terms, while bulk appointment packages can be purchased as needed. Our team can help you choose the arrangement that works best for your business.',
	},
	{
		question: 'What information do I need to provide to get started?',
		answer:
			'You will work with a dedicated account manager who guides you through the process. Typically, we need details about your services, target audience, appointment qualification criteria, and any scripts or talking points you want agents to follow.',
	},
	{
		question: 'Will I have a dedicated point of contact?',
		answer:
			'Yes. Every Americall client is assigned a dedicated account manager who oversees the campaign, monitors performance, and is available to answer questions or make adjustments as your needs evolve.',
	},
	{
		question: 'What services does Americall provide?',
		answer:
			'Americall specializes in two core service areas: outbound calling for proactive telemarketing and appointment setting targeting both B2B and B2C prospects, and inbound call handling with professional agents answering and managing incoming calls on behalf of your business.',
	},
	{
		question: 'How quickly can my business get up and running?',
		answer:
			'Most clients are fully onboarded and live in under two weeks. Our team works with you to understand your business, build call scripts, and configure the setup so agents are ready to represent your brand from day one.',
	},
	{
		question: 'How do I receive the appointments your agents book?',
		answer:
			'Booked appointments are pushed directly into your connected scheduling system or CRM in real time. Americall can also maintain Google Sheets using your company Google email for tracking. You will have visibility into appointment details, qualification notes, and call recordings once appointments are confirmed by quality assurance.',
	},
	{
		question: 'Does Americall integrate with my existing tools?',
		answer:
			'Yes. Americall integrates with popular CRM platforms such as Salesforce, HubSpot, and GoHighLevel, as well as scheduling software, so appointments and lead data can flow into your existing workflow.',
	},
	{
		question: 'What industries does Americall work with?',
		answer:
			'Americall has deep experience serving solar, roofing, HVAC, and other home improvement companies, as well as healthcare providers and small businesses. Whether you need qualified B2C leads or B2B appointments, agents are trained to represent your industry effectively.',
	},
	{
		question: 'Can I track campaign performance?',
		answer:
			'Absolutely. Your dedicated account manager provides regular performance updates and reporting. You can be given access to the campaign channel on Discord and your VoIP dialer admin dashboard, giving you visibility into call volumes, appointment rates, and campaign outcomes.',
	},
	{
		question: 'What languages do your agents support?',
		answer:
			'Americall agents currently provide support in English and Spanish. If you have specific language requirements, speak with your account manager to discuss available options.',
	},
];

export const agents = [
	{
		name: 'Bryan Tucker',
		role: 'Appointment Setter',
		quote: 'Every strong appointment starts with listening carefully.',
		initials: 'BT',
		audio: '',
	},
	{
		name: 'Alex Mercer',
		role: 'Confirmation Specialist',
		quote: 'Clear confirmation helps every sales team protect its time.',
		initials: 'AM',
		audio: '',
	},
	{
		name: 'Raiyan Dio Sarwar',
		role: 'Campaign Support',
		quote: 'The details behind each call are what turn activity into outcomes.',
		initials: 'RDS',
		audio: '',
	},
	{
		name: 'Omar',
		role: 'Appointment Setter',
		quote: 'Every strong appointment starts with listening carefully.',
		initials: 'O',
		audio: '',
	},
	{
		name: 'Rezwan Chowdhury',
		role: 'Confirmation Specialist',
		quote: 'Clear confirmation helps every sales team protect its time.',
		initials: 'RC',
		audio: '',
	},
];

/*
 * Package comparison rows for the redesign (from servicePackages above).
 * Weekly numbers are shown as "targets" pending owner approval (build-plan Q2).
 * Client success manager vs account manager wording pending (build-plan Q5).
 */
export const packagePlans = [
	{ slug: 'launch', name: 'Launch', agents: 2, summary: 'For testing the waters with a two-agent team.' },
	{ slug: 'momentum', name: 'Momentum', agents: 5, summary: 'For businesses ready to scale with a five-agent team.' },
	{ slug: 'acceleration', name: 'Acceleration', agents: 10, summary: 'For a full, consistent pipeline from ten dedicated agents.' },
	{ slug: 'enterprise', name: 'Enterprise', agents: 20, summary: 'For serious volume from twenty dedicated agents.' },
] as const;

export const defaultPlan = 'momentum';

export const packageRows: { label: string; values: [string, string, string, string] }[] = [
	{ label: 'Trained agents', values: ['2', '5, fully managed', '10, fully managed', '20, fully managed'] },
	{ label: 'Weekly appointment target', values: ['8 or more', '20 or more', '40 or more', '80 or more'] },
	{
		label: 'Appointment quality control',
		values: ['Not included', 'Included, with agent KPI management', 'Dedicated, with agent KPI management', 'Dedicated manager for quality and agent KPIs'],
	},
	{ label: 'Campaign manager', values: ['Not included', 'Dedicated', 'Dedicated', 'Dedicated campaign and lead manager'] },
	{ label: 'Client success manager', values: ['Not included', 'Not included', 'Dedicated', 'Dedicated'] },
	{ label: 'Price', values: ['Custom quote', 'Custom quote', 'Custom quote', 'Custom quote'] },
];

/*
 * FAQ order by importance to a first-time buyer (indexes into faqs):
 * services, pricing, industries, how appointments arrive, point of contact,
 * commitment, time to launch, integrations, what to provide, tracking, languages.
 */
export const faqOrder = [4, 0, 8, 6, 3, 1, 5, 7, 2, 9, 10];

/* The five shown on the Home page, first one open. */
export const homeFaqIndexes = [4, 0, 6, 3, 1];

export const slugify = (text: string) =>
	text
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '');
