export type TCrew = {
	name: string
	role: string
	photo: string
}

export type TUser = {
	userPhoto: string
	userName: string
}

export type TComment = {
	date: string
	user: TUser
	rating: number
	text: string
	title: string
}

export type TFilmSmall = {
	rating: number
	title: string
	image: string
}

export type TFilms = {
	name: string
	rating: number
	tags: Array<string>
	duration: string
	director: Array<TCrew>
	stars: Array<TCrew>
	desc: string
	date: string
	mmpa: string
	img: string
	link: string
	photos: Array<string>
	writer: Array<TCrew>
	country: string
	filmCrew: Array<TCrew>
	comments: Array<TComment>
	similarFilms: Array<TFilmSmall>
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

import userAva from './i/userava1.jpg'

export const films: TFilms[] = [
	{
		name: 'Interstellar',
		rating: 8.1,
		tags: ['Sci-Fi'],
		duration: '2:21',
		director: [{ name: 'Joss Whedon', role: 'Director', photo: cast1 }],
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
		writer: [{ name: 'Writer', photo: cast1, role: 'writer' }],
		country: 'USA',
		filmCrew: [
			{ name: 'Victoria Alonso', photo: cast1, role: 'executive producer' },
			{ name: 'Mitchel Bell', photo: cast1, role: 'co-producer' },
			{ name: 'Jamie Christopher', photo: cast1, role: 'associate producer' },
		],
		comments: [
			{
				title: 'Best Marvel movie in my opinion',
				rating: 9,
				date: '17 December 2016',
				user: {
					userName: 'hawaiipierson',
					userPhoto: userAva,
				},

				text: 'This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.',
			},
		],
		similarFilms: [
			{ rating: 7.0, title: 'Skyfall: Evil of boss', image: SkyFall },
			{ rating: 7.2, title: 'Mulholland pride', image: MulhollandPride },
			{ rating: 7.3, title: 'Blade runner', image: BladeRunner },
		],
	},

	{
		name: 'Into the wild',
		rating: 7.8,
		tags: [],
		desc: 'As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat...',
		duration: '2:21',
		director: [
			{ name: 'Joe Russo', role: 'Director', photo: cast1 },
			{ name: 'Anthony Russo', role: 'Director', photo: cast1 },
		],
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
		writer: [{ name: 'Writer', photo: cast1, role: 'writer' }],
		country: 'USA',
		filmCrew: [
			{ name: 'Victoria Alonso', photo: cast1, role: 'executive producer' },
			{ name: 'Mitchel Bell', photo: cast1, role: 'co-producer' },
			{ name: 'Jamie Christopher', photo: cast1, role: 'associate producer' },
		],
		comments: [
			{
				title: 'Best Marvel movie in my opinion',
				rating: 9,
				date: '17 December 2016',
				user: {
					userName: 'hawaiipierson',
					userPhoto: userAva,
				},
				text: 'This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.',
			},
		],
		similarFilms: [
			{ rating: 7.0, title: 'Skyfall: Evil of boss', image: SkyFall },
			{ rating: 7.2, title: 'Mulholland pride', image: MulhollandPride },
			{ rating: 7.3, title: 'Blade runner', image: BladeRunner },
		],
	},
	{
		name: 'Blade runner',
		rating: 7.3,
		tags: [],
		desc: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help...',
		duration: '2:21',
		director: [{ name: 'Peyton Reed', role: 'Director', photo: cast1 }],
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
		writer: [{ name: 'Writer', photo: cast1, role: 'writer' }],
		country: 'USA',
		filmCrew: [
			{ name: 'Victoria Alonso', photo: cast1, role: 'executive producer' },
			{ name: 'Mitchel Bell', photo: cast1, role: 'co-producer' },
			{ name: 'Jamie Christopher', photo: cast1, role: 'associate producer' },
		],
		comments: [
			{
				title: 'Best Marvel movie in my opinion',
				rating: 9,
				date: '17 December 2016',
				user: {
					userName: 'hawaiipierson',
					userPhoto: userAva,
				},
				text: 'This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.',
			},
		],
		similarFilms: [
			{ rating: 7.0, title: 'Skyfall: Evil of boss', image: SkyFall },
			{ rating: 7.2, title: 'Mulholland pride', image: MulhollandPride },
			{ rating: 7.3, title: 'Blade runner', image: BladeRunner },
		],
	},
	{
		name: 'Mulholland pride',
		rating: 7.2,
		tags: [],
		desc: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
		duration: '2:21',
		director: [{ name: 'Shane Black', role: 'Director', photo: cast1 }],
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
		writer: [{ name: 'Writer', photo: cast1, role: 'writer' }],
		country: 'USA',
		filmCrew: [
			{ name: 'Victoria Alonso', photo: cast1, role: 'executive producer' },
			{ name: 'Mitchel Bell', photo: cast1, role: 'co-producer' },
			{ name: 'Jamie Christopher', photo: cast1, role: 'associate producer' },
		],
		comments: [
			{
				title: 'Best Marvel movie in my opinion',
				rating: 9,
				date: '17 December 2016',
				user: {
					userName: 'hawaiipierson',
					userPhoto: userAva,
				},
				text: 'This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.',
			},
		],
		similarFilms: [
			{ rating: 7.0, title: 'Skyfall: Evil of boss', image: SkyFall },
			{ rating: 7.2, title: 'Mulholland pride', image: MulhollandPride },
			{ rating: 7.3, title: 'Blade runner', image: BladeRunner },
		],
	},
	{
		name: 'Skyfall: Evil of boss',
		rating: 7.0,
		tags: [],
		desc: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
		duration: '2:21',
		director: [{ name: 'Alan Taylor', role: 'Director', photo: cast1 }],
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
		writer: [{ name: 'Writer', photo: cast1, role: 'writer' }],
		country: 'USA',
		filmCrew: [
			{ name: 'Victoria Alonso', photo: cast1, role: 'executive producer' },
			{ name: 'Mitchel Bell', photo: cast1, role: 'co-producer' },
			{ name: 'Jamie Christopher', photo: cast1, role: 'associate producer' },
		],
		comments: [
			{
				title: 'Best Marvel movie in my opinion',
				rating: 9,
				date: '17 December 2016',
				user: {
					userName: 'hawaiipierson',
					userPhoto: userAva,
				},
				text: 'This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.',
			},
		],
		similarFilms: [
			{ rating: 7.0, title: 'Skyfall: Evil of boss', image: SkyFall },
			{ rating: 7.2, title: 'Mulholland pride', image: MulhollandPride },
			{ rating: 7.3, title: 'Blade runner', image: BladeRunner },
		],
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
