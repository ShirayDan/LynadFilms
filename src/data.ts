export type TActor = {
	name: string
	role: string
	photo: string
}

export type TFilms = {
	name: string
	rating: number
	tags: Array<string>
	duration: string
	director: Array<string>
	stars: Array<TActor>
	desc: string
	date: string
	mmpa: string
	img: string
	link: string
	photos: Array<string>
	writer: Array<string>
	country: string
}

// release date, duration, mmpa, desc check

import Interstellar from './i/slider1.jpg'
import IntoTheWild from './i/slider2.jpg'
import BladeRunner from './i/slider3.jpg'
import MulhollandPride from './i/slider4.jpg'
import SkyFall from './i/slider5.jpg'

import photo1 from './i/image11.jpg'
import photo2 from './i/image21.jpg'
import photo3 from './i/image31.jpg'

import cast1 from './i/cast1.jpg'

export const films: TFilms[] = [
	{
		name: 'Interstellar',
		rating: 8.1,
		tags: ['Sci-Fi'],
		duration: '2:21',
		director: ['Joss Whedon'],
		stars: [
			{ name: 'Robert Downey Jr.', role: 'Robert Downey Jr.', photo: cast1 },
			{
				name: 'Chris Evans',
				role: 'Steve Rogers/ Captain America',
				photo: cast1,
			},
			{ name: 'Chris Hemsworth', role: 'Thor', photo: cast1 },
		],
		desc: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...",
		date: '1 May 2012',
		mmpa: 'PG-13',
		img: Interstellar,
		link: '',
		photos: [photo1, photo2, photo3],
		writer: ['writer'],
		country: 'USA',
	},

	{
		name: 'Into the wild',
		rating: 7.8,
		tags: [],
		desc: 'As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat...',
		duration: '2:21',
		director: ['Anthony Russo', 'Joe Russo'],
		stars: [
			{ name: 'Robert Downey Jr.', role: 'Robert Downey Jr.', photo: cast1 },
			{
				name: 'Chris Evans',
				role: 'Steve Rogers/ Captain America',
				photo: cast1,
			},
			{ name: 'Chris Hemsworth', role: 'Thor', photo: cast1 },
		],
		date: '1 May 2014',
		mmpa: 'PG-13',
		img: IntoTheWild,
		link: '',
		photos: [photo1, photo2, photo3],
		writer: ['writer'],
		country: 'USA',
	},
	{
		name: 'Blade runner',
		rating: 7.3,
		tags: [],
		desc: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help...',
		duration: '2:21',
		director: ['Peyton Reed'],
		stars: [
			{ name: 'Robert Downey Jr.', role: 'Robert Downey Jr.', photo: cast1 },
			{
				name: 'Chris Evans',
				role: 'Steve Rogers/ Captain America',
				photo: cast1,
			},
			{ name: 'Chris Hemsworth', role: 'Thor', photo: cast1 },
		],
		date: '1 May 2015',
		mmpa: 'PG-13',
		img: BladeRunner,
		link: '',
		photos: [photo1, photo2, photo3],
		writer: ['writer'],
		country: 'USA',
	},
	{
		name: 'Mulholland pride',
		rating: 7.2,
		tags: [],
		desc: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
		duration: '2:21',
		director: ['Shane Black'],
		stars: [
			{ name: 'Robert Downey Jr.', role: 'Robert Downey Jr.', photo: cast1 },
			{
				name: 'Chris Evans',
				role: 'Steve Rogers/ Captain America',
				photo: cast1,
			},
			{ name: 'Chris Hemsworth', role: 'Thor', photo: cast1 },
		],
		date: '1 May 2013',
		mmpa: 'PG-13',
		img: MulhollandPride,
		link: '',
		photos: [photo1, photo2, photo3],
		writer: ['writer'],
		country: 'USA',
	},
	{
		name: 'Skyfall: Evil of boss',
		rating: 7.0,
		tags: [],
		desc: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
		duration: '2:21',
		director: ['Alan Taylor'],
		stars: [
			{ name: 'Robert Downey Jr.', role: 'Robert Downey Jr.', photo: cast1 },
			{
				name: 'Chris Evans',
				role: 'Steve Rogers/ Captain America',
				photo: cast1,
			},
			{ name: 'Chris Hemsworth', role: 'Thor', photo: cast1 },
		],
		date: '1 May 2013',
		mmpa: 'PG-13',
		img: SkyFall,
		link: '',
		photos: [photo1, photo2, photo3],
		writer: ['writer'],
		country: 'USA',
	},

	// {
	// 	name: 'The Revenant',
	// 	rating: 7.4,
	// 	tags: ['Action'],
	// },
	// {
	// 	name: 'The Walk',
	// 	rating: 7.4,
	// 	tags: ['Sci-fi', 'Advanture'],
	// },
	// {
	// 	name: 'Die Hard',
	// 	rating: 7.4,
	// 	tags: ['Comedy'],
	// },
]
