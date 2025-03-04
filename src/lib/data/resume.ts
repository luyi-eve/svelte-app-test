import { Newspaper, Code, CodeIcon, Github, Globe, HomeIcon, NotebookIcon } from 'lucide-svelte';
// Navbar Icons
import GithubSvg from '$lib/imgs/github.svg';
import GithubDarkSvg from '$lib/imgs/github-dark.svg';

import GmailSvg from '$lib/imgs/gmail.svg';
import GmailDarkSvg from '$lib/imgs/gmail-dark.svg';

import LinkedinSvg from '$lib/imgs/linkedin.svg';
import LinkedinDarkSvg from '$lib/imgs/linkedin-dark.svg';

import TwitterSvg from '$lib/imgs/x.svg';
import TwitterDarkSvg from '$lib/imgs/x-dark.svg';

// Your resume data
export let DATA = {
	name: 'Eve Lu',
	initials: 'EL',
	url: 'https://github.com/SikandarJODD',
	img: 'https://i.pinimg.com/736x/9e/dc/a6/9edca66eba199828bda2dbaf35642154.jpg',
	location: 'Stanford, California',
	locationLink: '',
	description:'',
	summary:'',
	// navbar: [
	// 	{ href: '/', icon: HomeIcon, label: 'Home' },
	// 	{ href: '/blog', icon: NotebookIcon, label: 'Blog' },
	// 	{ href: '', icon: CodeIcon, label: 'Projects' }
	// ],
	contact: {
		email: 'eseve@live.com',
		social: {
			email: {
				name: 'eseve@live.com',
				url: '',
				icon: GmailSvg,
				navbar: true,
				dark_icon: GmailDarkSvg
			},
			GitHub: {
				name: 'GitHub',
				url: 'https://github.com/luyi-eve',
				// // icon: Icons.github,
				icon: GithubSvg,
				navbar: true,
				dark_icon: GithubDarkSvg
			},
			LinkedIn: {
				name: 'LinkedIn',
				url: 'www.linkedin.com/in/luyi-eve',
				// // icon: Icons.linkedin,
				icon: LinkedinSvg,
				navbar: true,
				dark_icon: LinkedinDarkSvg
			},
			X: {
				name: 'X',
				url: 'https://x.com/luyi_2021',
				// // icon: Icons.x,
				icon: TwitterSvg,
				navbar: true,
				dark_icon: TwitterDarkSvg
			},
		}
	},
	datavizs: [
		{
			title: 'Who Favors Tampa Bay the Most ?',
			href: 'https://www.tampabay.com/life-culture/music/2024/09/23/tampa-bay-st-petersburg-concerts-most/',
			dates: 'Sept 2024',
			publisher:'Tampa Bay Times',
			active: true,
			description:'A data story involved sifting through over 68,000 Florida concert records using setlist.fm and Spotify APIs, which has pinpointed major artists who performed in Tampa Bay in the past decade.',
			technologies: [
				'Python',
				'Datawrapper',
				'API',
			],
			links: [
				{
					type: 'Methodology',
					href: 'https://github.com/luyi-eve/florida-local-concert-records',
					icon: Globe
				}
			],
			image: '/src/lib/data/images/tampabay-most-common-artists-3.png',
			video: ''
		},
		{
			title: 'Beryl Feasted on Record-Hot Ocean',
			href: 'https://www.tampabay.com/hurricane/2024/07/06/beryl-feasted-record-hot-water-heres-why-that-matters-florida/',
			dates: 'July 2024',
			publisher:'Tampa Bay Times',
			active: true,
			description: 'A data story explored how record-high North Atlantic water temperatures rapidly intensify hurricanes, like Beryl, and pose risks to the Tampa Bay area.',
			technologies: [
				'GDAL',
				'Datawrapper',
			],
			links: [],
			image: '/src/lib/data/images/sst-anomaly-2024.gif',
			video: ''
		},
		{
			title: 'How Much It Takes to Get an Abortion in the \'PURPLE\' State of Florida?',
			href: 'https://luyi-eve.github.io/fl-abortion-costs/',
			dates: 'October 2022',
			publisher:'University of Miami',
			active: true,
			description:'This is my capstone project at the University of Miami highlighting Florida’s non-medical abortion costs after Roe’s fall based on self-collected statewide abortion facility datasets, combined with interactive infographics features.',
			technologies: [
				'Python',
				'Javascript',
				'Adobe Illustrator',
				'Datawrapper',
				'Mapbox',
				'Swiper.js',
			],
			links: [
				{
					type: 'Methodology',
					href: 'https://luyi-eve.github.io/fl-abortion-costs/#methodology',
					icon: Globe
					// icon: <Icons.globe className="size-3" />,
				},
				{
					type: 'Source',
					href: 'https://luyi-eve.github.io/fl-abortion-costs/about-and-sources#datasets-and-sources',
					icon: Code
					// icon: <Icons.github className="size-3" />,
				},
				{
					type: 'Making-of Article',
					href: 'https://luyi-eve.github.io/fl-abortion-costs/making-of-article',
					icon: Newspaper
					// icon: <Icons.github className="size-3" />,
				}
			],
			image: '/src/lib/data/images/fl-abortion-costs-small.gif',
			video: ''
		},
		{
			title: 'Where is Gaza\'s\ Aid?',
			href: 'https://storymaps.arcgis.com/stories/25b4fa88e1a0421286c31d7e03a43086',
			dates: 'May 2024',
			publisher:'Stanford University',
			active: true,
			description:'A mapping project visualizes the aid routes in use since the Gaza war began.',
			technologies: [
				'QGIS',
				'Adobe Illustrator',
				'Excel',
			],
			links: [
				// {
				// 	type: 'Website',
				// 	href: 'https://automatic.chat',
				// 	icon: Globe
				// 	// icon: <Icons.globe className="size-3" />,
				// }
			],
			image: '/src/lib/data/images/gaza-aid-route.jpg',
			video: ''
		},
		{
			title: 'Singapore Political Gender Imbalance',
			href: 'https://luyi-eve.github.io/image/singapore-political-gender-imbalance.pdf',
			dates: 'April 2024',
			publisher:'Personal',
			active: true,
			description:'A visualization that looks into Singapore\'s\ gender imbalance in political landscape.',
			technologies: [
				'Adobe Illustrator',
				'Excel',
			],
			links: [
				// {
				// 	type: 'Website',
				// 	href: 'https://automatic.chat',
				// 	icon: Globe
				// 	// icon: <Icons.globe className="size-3" />,
				// }
			],
			image: '/src/lib/data/images/singapore-political-gender-imbalance.png',
			video: ''
		},
		{
			title: 'Gaza Killed Journalist Database',
			href: 'https://gaza-reporters.github.io/database/',
			dates: 'Feb 2024',
			publisher:'Stanford University',
			active: true,
			description:'A News App that tracks all the journalists who have been killed in Gaza during the most recent war.',
			technologies: [
				'Javascript',
				'Python',
			],
			links: [
				{
					type: 'Methodology',
					href: 'https://github.com/gaza-reporters/gaza-reporters.github.io',
					icon: Globe
					// icon: <Icons.globe className="size-3" />,
				},
			],
			image: '/src/lib/data/images/gaza-killed-journalist-database.png',
			video: ''
		},
		{
			title: 'U.S. Prison Phone Rate',
			href: 'https://luyi-eve.github.io/image/prison-phone-rates.pdf',
			dates: 'March 2023',
			publisher:'Personal',
			active: true,
			description:'A visualization shows data on in-state phone rates for 15-minute increments in U.S. 50 states prisons from 2008 to 2021.',
			technologies: [
				'Adobe Illustrator',
				'Excel',
			],
			links: [
				// {
				// 	type: 'Website',
				// 	href: 'https://automatic.chat',
				// 	icon: Globe
				// 	// icon: <Icons.globe className="size-3" />,
				// }
			],
			image: '/src/lib/data/images/prison-phone-rates.png',
			video: ''
		},
		{
			title: 'Why I watched that movie at that time?',
			href: 'https://luyi-eve.github.io/movies-self-analysis/',
			publisher:'Lede Program ･ Columbia University',
			dates: 'July 2022',
			active: true,
			description:'A self-analysis visualizes all the movies and tv shows I‘ve watched from August 2021 to July 2022.',
			technologies: [
				'Scraping',
				'Datawrapper',
				'Adobe Illustrator',
				'Scrollama.js',
			],
			links: [
				// {
				// 	type: 'Website',
				// 	href: 'https://automatic.chat',
				// 	icon: Globe
				// 	// icon: <Icons.globe className="size-3" />,
				// }
			],
			image: '/src/lib/data/images/movies-self-analysis.png',
			video: ''
		},
		{
			title: 'Who is being hunted where?',
			href: 'https://luyi-eve.github.io/image/asian-hate.pdf',
			dates: 'July 2022',
			publisher:'University of Miami',
			active: true,
			description:'A visualization shows how anti-Asian violence was distributed during the COVID-19.',
			technologies: [
				'Datawrapper',
				'Adobe Illustrator',
			],
			links: [
				// {
				// 	type: 'Website',
				// 	href: 'https://automatic.chat',
				// 	icon: Globe
				// 	// icon: <Icons.globe className="size-3" />,
				// }
			],
			image: '/src/lib/data/images/asian-hate.png',
			video: ''
		},
		{
			title: 'The Biggest Weapon',
			href: '',
			dates: 'April 2022',
			publisher:'University of Miami',
			active: true,
			description:
				'Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.',
			technologies: [
				'Datawrapper',
				'Adobe Illustrator',

			],
			links: [
				{
					type: 'Making-of Article',
					href: 'https://luyi-eve.github.io/the-biggest-weapon/',
					icon: Newspaper
					// icon: <Icons.github className="size-3" />,
				}
			],
			image: '/src/lib/data/images/the-biggest-weapon4.png',
			video: ''
			
		}
	],
	reportings: [
		{
			title: 'Widespread Backlash Against APEC in S.F.,but Why?',
			url:'https://a-luyieve.vev.site/widespread-backlash-against-apec-in-sf-but-why/',
			dates: 'December 2023',
			location: 'San Francisco, California',
			description:'',
			image: '/src/lib/data/images/anti-apec.JPG',
			// mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
			links: [
				{
					title: 'Breaking News',
					// icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: ''
				},
			]
		},
		{
			title: 'Under One Dark Sky',
			url:'https://peninsulapress.com/?s=under+one+dark+sky',
			dates: 'January 9, 2024',
			location: 'Point Reyes, California',
			description:'',
			image: '/src/lib/data/images/dark-sky-written.JPG',
			// mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
			links: [
				{
					title: 'News Reporting',
					// icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
				},
				{
					title: 'Data-driven',
					// icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
				},
				{
					title: 'Documentary',
					// icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
				},
				{
					title: 'Multimedia',
					// icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
				},

			]
		},
		{
			title: 'San Mateo County Sheriff Urges Legislators to Reevaluate Lower Penalties for Theft, Laments ‘Lawlessness’',
			url:'https://peninsulapress.com/2023/10/26/san-mateo-county-sheriff-urges-legislators-to-reevaluate-lower-penalties-for-theft-laments-lawlessness/',
			dates: 'October, 2023',
			location: 'San Mateo, California',
			description:'',
			// icon: "public",
			image: '/src/lib/data/images/san-mateo-sheriff.png',
			links: [
				{
					title: 'Multimedia',
					// icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
				},
			]
		},
		{
			title: 'California’s Parental Notification Policy Ignites Controversy Over Trans Youth Rights',
			url:'https://peninsulapress.com/2023/11/09/californias-parental-notification-policy-ignites-controversy-over-trans-youth-rights/',
			dates: 'November 9, 2023',
			location: 'Sacramento, California',
			description:'',
			image: '/src/lib/data/images/merideth-cooper.jpg',
			// mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg',
			links: [
				{
					title: 'Podcast',
					// icon: Globe,
					// icon: <Icons.globe className="h-4 w-4" />,
					// href: 'https://devpost.com/software/my6footprint'
				},
			]
		},
		{
			title: 'Back on Screen',
			url:'https://issuu.com/abbyleeg/docs/winter21-issuu_compressed_/26',
			dates: 'Jan 7, 2022',
			location: 'Miami, Florida',
			description:'',
			image: '/src/lib/data/images/back-on-screen.png',
			links: [
				// {
				// 	title: 'News Reporting',
				// 	// icon: Github,
				// 	// icon: <Icons.github className="h-4 w-4" />,
				// },
				
			]
		},
		{
			title: 'Three months later in Surfside: Some mourning, some moving on',
			url:'https://themiamihurricane.com/2021/09/24/three-months-later-in-surfside-some-mourning-some-moving-on/',
			dates: 'September 2021',
			location: 'Surfside, Florida',
			description:'',
			image: '/src/lib/data/images/three-month-surfside.png',
			// mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
			links: [
				// {
				// 	title: 'News Reporting',
				// 	// icon: Github,
				// 	// icon: <Icons.github className="h-4 w-4" />,
				// },
			]
		},
		{
			title: 'China\'s\ Landmark #MeToo Case',
			url:'https://drive.google.com/file/d/196Dy6xxaXoDZaPb1gPz88ELrog0WpPbn/view',
			dates: 'September 2021',
			location: 'Beijing, China',
			description:'',
			image: '/src/lib/data/images/china-metoo.jpg',
			// mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
			links: [
				{
					title: 'Podcast',
					// icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: ''
				},
			]
		},
	],
	archives: [
		{
			title: 'Words by Maugham',
			href: 'https://luyi-eve.github.io/words-by-maugham/',
			dates: 'August 2022',
			publisher:'Lede Program ･ Columbia University',
			active: true,
			description:
				'A text analysis story that sorts through Somerset Maugham\'s\ 25 books, short stories and plays.',
			technologies: [
				'Text Analysis',
				'Python',
				'Flourish',
			],
			// links: [
			// 	{
			// 		type: 'Website',
			// 		href: 'https://www.tampabay.com/life-culture/music/2024/09/23/tampa-bay-st-petersburg-concerts-most/',
			// 		// icon: <Icons.globe className="size-3" />,
			// 		icon: Globe
			// 	}
			// ],
			image: '/src/lib/data/images/words-by-maugham.png',
			video: ''
		},
		{
			title: 'Chicago\'s\ Dead Zones',
			href: 'https://luyi-eve.github.io/chicago-dead-zones/',
			dates: 'August 2022',
			publisher:'Lede Program ･ Columbia University',
			active: true,
			description:'A personal investigation of Chicago\'s\ cell service through a mix of maps.',
			technologies: [
				'QGIS',
				'Mapbox',
				'Scrollama.js',
			],
			links: [
				// {
				// 	type: 'Website',
				// 	href: 'https://magicui.design',
				// 	// icon: <Icons.globe className="size-3" />,
				// 	icon: Globe
				// },
				// {
				// 	type: 'Source',
				// 	href: 'https://github.com/magicuidesign/magicui',
				// 	icon: Github
				// 	// icon: <Icons.github className="size-3" />,
				// }
			],
			image: '/src/lib/data/images/chicago-dead-zones.png',
			video: ''
		},
		{
			title: 'Cool it?! New Yorkers',
			href: 'https://luyi-eve.github.io/cool-it-newyorkers/',
			dates: 'July 2022',
			publisher:'Lede Program ･ Columbia University',
			active: true,
			description:'A guide towards New York City\'s\ public cooling features during extreme heat emergencies.',
			technologies: [
				'Datawrapper',
			],
			links: [
				// {
				// 	type: 'Methodology',
				// 	href: 'https://luyi-eve.github.io/fl-abortion-costs/#methodology',
				// 	icon: Globe
				// 	// icon: <Icons.globe className="size-3" />,
				// },
				
			],
			image: '/src/lib/data/images/cool-it-nyc.png',
			video: ''
		},
	],
};
