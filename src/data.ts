// export type TCrew = {
//   id: number
//   name: string
//   role: string
//   photo: string
//   country: string
//   bio: string
//   videos: Array<string>
//   photos: Array<string>
//   birth: string
//   height: number
//   movies: Array<TFilmFake>
// }

// export type TFilmFake = {
//   name: string
//   role: string
//   year: number
//   image: string
// }

// export type TUser = {
//   userPhoto: string
//   userName: string
// }

// export type TComment = {
//   date: string
//   user: TUser
//   rating: number
//   text: string
//   title: string
// }

// export type TFilmSmall = {
//   rating: number
//   title: string
//   image: string
// }

// export type TFilms = {
//   id: number
//   name: string
//   rating: number
//   tags: Array<string>
//   duration: string
//   director: Array<TCrew>
//   stars: Array<TCrew>
//   desc: string
//   date: string
//   mmpa: string
//   img: string
//   link: string
//   photos: Array<string>
//   writer: Array<TCrew>
//   country: string
//   filmCrew: Array<TCrew>
//   comments: Array<TComment>
//   similarFilms: Array<TFilmSmall>
// }

// export type TNews = {
//   id: number
//   title: string
//   desc: string
//   tags: Array<string>
//   date: string
//   image: string
//   comments: Array<TComment>
// }

// // release date, duration, mmpa, desc check

// import Interstellar from './i/slider1.jpg'
// import IntoTheWild from './i/slider2.jpg'
// import BladeRunner from './i/slider3.jpg'
// import MulhollandPride from './i/slider4.jpg'
// import SkyFall from './i/slider5.jpg'

// import photo1 from './i/image11.jpg'
// import photo2 from './i/image21.jpg'
// import photo3 from './i/image31.jpg'
// import photo4 from './i/image41.jpg'
// import photo5 from './i/image51.jpg'
// import photo6 from './i/image61.jpg'
// import photo7 from './i/image71.jpg'
// import photo8 from './i/image81.jpg'

// import cast1 from './i/cast1.jpg'

// import userAva from './i/userava1.jpg'
// // news img
// import news1 from './i/news1.webp'

// export const films: TFilms[] = [
//   {
//     id: 1,
//     name: 'Interstellar',
//     rating: 8.1,
//     tags: ['Sci-Fi'],
//     duration: '2:21',
//     director: [
//       {
//         id: 1,
//         name: 'Joss Whedon',
//         role: 'Director',
//         photo: cast1,
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       }
//     ],
//     stars: [
//       {
//         id: 2,
//         name: 'Robert Downey Jr.',
//         role: 'Robert Downey Jr.',
//         photo: cast1,
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       },
//       {
//         id: 3,
//         name: 'Chris Evans',
//         role: 'Steve Rogers/ Captain America',
//         photo: cast1,
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       },
//       {
//         id: 4,
//         name: 'Chris Hemsworth',
//         role: 'Thor',
//         photo: cast1,
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       }
//     ],
//     desc: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...",
//     date: '1 May 2012',
//     mmpa: 'PG-13',
//     img: Interstellar,
//     link: '',
//     photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//     writer: [
//       {
//         id: 5,
//         name: 'Writer',
//         photo: cast1,
//         role: 'writer',
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       }
//     ],
//     country: 'USA',
//     filmCrew: [
//       {
//         id: 6,
//         name: 'Victoria Alonso',
//         photo: cast1,
//         role: 'executive producer',
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       },
//       {
//         id: 7,
//         name: 'Mitchel Bell',
//         photo: cast1,
//         role: 'co-producer',
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       },
//       {
//         id: 8,
//         name: 'Jamie Christopher',
//         photo: cast1,
//         role: 'associate producer',
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       }
//     ],
//     comments: [
//       {
//         title: 'Best Marvel movie in my opinion',
//         rating: 9,
//         date: '17 December 2016',
//         user: {
//           userName: 'hawaiipierson',
//           userPhoto: userAva
//         },

//         text: 'This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.'
//       }
//     ],
//     similarFilms: [
//       { rating: 7.0, title: 'Skyfall: Evil of boss', image: SkyFall },
//       { rating: 7.2, title: 'Mulholland pride', image: MulhollandPride },
//       { rating: 7.3, title: 'Blade runner', image: BladeRunner },
//       { rating: 7.0, title: 'Skyfall: Evil of boss', image: SkyFall },
//       { rating: 7.2, title: 'Mulholland pride', image: MulhollandPride },
//       { rating: 7.3, title: 'Blade runner', image: BladeRunner },
//       { rating: 7.0, title: 'Skyfall: Evil of boss', image: SkyFall },
//       { rating: 7.2, title: 'Mulholland pride', image: MulhollandPride },
//       { rating: 7.3, title: 'Blade runner', image: BladeRunner }
//     ]
//   },

//   {
//     id: 2,
//     name: 'Into the wild',
//     rating: 7.8,
//     tags: [],
//     desc: 'As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat...',
//     duration: '2:21',
//     director: [
//       {
//         id: 10,
//         name: 'Joe Russo',
//         role: 'Director',
//         photo: cast1,
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       },
//       {
//         id: 11,
//         name: 'Anthony Russo',
//         role: 'Director',
//         photo: cast1,
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       }
//     ],
//     stars: [
//       {
//         id: 12,
//         name: 'Robert Downey Jr.',
//         role: 'Robert Downey Jr.',
//         photo: cast1,
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       },
//       {
//         id: 13,
//         name: 'Chris Evans',
//         role: 'Steve Rogers/ Captain America',
//         photo: cast1,
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       },
//       {
//         id: 14,
//         name: 'Chris Hemsworth',
//         role: 'Thor',
//         photo: cast1,
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       }
//     ],
//     date: '1 May 2014',
//     mmpa: 'PG-13',
//     img: IntoTheWild,
//     link: '',
//     photos: [photo1, photo2, photo3],
//     writer: [
//       {
//         id: 15,
//         name: 'Writer',
//         photo: cast1,
//         role: 'writer',
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       }
//     ],
//     country: 'USA',
//     filmCrew: [
//       {
//         id: 16,
//         name: 'Victoria Alonso',
//         photo: cast1,
//         role: 'executive producer',
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       },
//       {
//         id: 17,
//         name: 'Mitchel Bell',
//         photo: cast1,
//         role: 'co-producer',
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       },
//       {
//         id: 18,
//         name: 'Jamie Christopher',
//         photo: cast1,
//         role: 'associate producer',
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       }
//     ],
//     comments: [
//       {
//         title: 'Best Marvel movie in my opinion',
//         rating: 9,
//         date: '17 December 2016',
//         user: {
//           userName: 'hawaiipierson',
//           userPhoto: userAva
//         },
//         text: 'This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.'
//       }
//     ],
//     similarFilms: [
//       { rating: 7.0, title: 'Skyfall: Evil of boss', image: SkyFall },
//       { rating: 7.2, title: 'Mulholland pride', image: MulhollandPride },
//       { rating: 7.3, title: 'Blade runner', image: BladeRunner }
//     ]
//   },
//   {
//     id: 3,
//     name: 'Blade runner',
//     rating: 7.3,
//     tags: [],
//     desc: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help...',
//     duration: '2:21',
//     director: [
//       {
//         id: 19,
//         name: 'Peyton Reed',
//         role: 'Director',
//         photo: cast1,
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       }
//     ],
//     stars: [
//       {
//         id: 20,
//         name: 'Robert Downey Jr.',
//         role: 'Robert Downey Jr.',
//         photo: cast1,
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       },
//       {
//         id: 21,
//         name: 'Chris Evans',
//         role: 'Steve Rogers/ Captain America',
//         photo: cast1,
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       },
//       {
//         id: 22,
//         name: 'Chris Hemsworth',
//         role: 'Thor',
//         photo: cast1,
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       }
//     ],
//     date: '1 May 2015',
//     mmpa: 'PG-13',
//     img: BladeRunner,
//     link: '',
//     photos: [photo1, photo2, photo3],
//     writer: [
//       {
//         id: 23,
//         name: 'Writer',
//         photo: cast1,
//         role: 'writer',
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       }
//     ],
//     country: 'USA',
//     filmCrew: [
//       {
//         id: 24,
//         name: 'Victoria Alonso',
//         photo: cast1,
//         role: 'executive producer',
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       },
//       {
//         id: 25,
//         name: 'Mitchel Bell',
//         photo: cast1,
//         role: 'co-producer',
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       },
//       {
//         id: 26,
//         name: 'Jamie Christopher',
//         photo: cast1,
//         role: 'associate producer',
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       }
//     ],
//     comments: [
//       {
//         title: 'Best Marvel movie in my opinion',
//         rating: 9,
//         date: '17 December 2016',
//         user: {
//           userName: 'hawaiipierson',
//           userPhoto: userAva
//         },
//         text: 'This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.'
//       }
//     ],
//     similarFilms: [
//       { rating: 7.0, title: 'Skyfall: Evil of boss', image: SkyFall },
//       { rating: 7.2, title: 'Mulholland pride', image: MulhollandPride },
//       { rating: 7.3, title: 'Blade runner', image: BladeRunner }
//     ]
//   },
//   {
//     id: 4,
//     name: 'Mulholland pride',
//     rating: 7.2,
//     tags: [],
//     desc: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
//     duration: '2:21',
//     director: [
//       {
//         id: 27,
//         name: 'Shane Black',
//         role: 'Director',
//         photo: cast1,
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       }
//     ],
//     stars: [
//       {
//         id: 28,
//         name: 'Robert Downey Jr.',
//         role: 'Robert Downey Jr.',
//         photo: cast1,
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       },
//       {
//         id: 29,
//         name: 'Chris Evans',
//         role: 'Steve Rogers/ Captain America',
//         photo: cast1,
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       },
//       {
//         id: 30,
//         name: 'Chris Hemsworth',
//         role: 'Thor',
//         photo: cast1,
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       }
//     ],
//     date: '1 May 2013',
//     mmpa: 'PG-13',
//     img: MulhollandPride,
//     link: '',
//     photos: [photo1, photo2, photo3],
//     writer: [
//       {
//         id: 31,
//         name: 'Writer',
//         photo: cast1,
//         role: 'writer',
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       }
//     ],
//     country: 'USA',
//     filmCrew: [
//       {
//         id: 32,
//         name: 'Victoria Alonso',
//         photo: cast1,
//         role: 'executive producer',
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       },
//       {
//         id: 33,
//         name: 'Mitchel Bell',
//         photo: cast1,
//         role: 'co-producer',
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       },
//       {
//         id: 34,
//         name: 'Jamie Christopher',
//         photo: cast1,
//         role: 'associate producer',
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       }
//     ],
//     comments: [
//       {
//         title: 'Best Marvel movie in my opinion',
//         rating: 9,
//         date: '17 December 2016',
//         user: {
//           userName: 'hawaiipierson',
//           userPhoto: userAva
//         },
//         text: 'This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.'
//       }
//     ],
//     similarFilms: [
//       { rating: 7.0, title: 'Skyfall: Evil of boss', image: SkyFall },
//       { rating: 7.2, title: 'Mulholland pride', image: MulhollandPride },
//       { rating: 7.3, title: 'Blade runner', image: BladeRunner }
//     ]
//   },
//   {
//     id: 5,
//     name: 'Skyfall: Evil of boss',
//     rating: 7.0,
//     tags: [],
//     desc: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
//     duration: '2:21',
//     director: [
//       {
//         id: 36,
//         name: 'Alan Taylor',
//         role: 'Director',
//         photo: cast1,
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       }
//     ],
//     stars: [
//       {
//         id: 37,
//         name: 'Robert Downey Jr.',
//         role: 'Robert Downey Jr.',
//         photo: cast1,
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       },
//       {
//         id: 38,
//         name: 'Chris Evans',
//         role: 'Steve Rogers/ Captain America',
//         photo: cast1,
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       },
//       {
//         id: 39,
//         name: 'Chris Hemsworth',
//         role: 'Thor',
//         photo: cast1,
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       }
//     ],
//     date: '1 May 2013',
//     mmpa: 'PG-13',
//     img: SkyFall,
//     link: '',
//     photos: [photo1, photo2, photo3],
//     writer: [
//       {
//         id: 40,
//         name: 'Writer',
//         photo: cast1,
//         role: 'writer',
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       }
//     ],
//     country: 'USA',
//     filmCrew: [
//       {
//         id: 41,
//         name: 'Victoria Alonso',
//         photo: cast1,
//         role: 'executive producer',
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       },
//       {
//         id: 42,
//         name: 'Mitchel Bell',
//         photo: cast1,
//         role: 'co-producer',
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       },
//       {
//         id: 43,
//         name: 'Jamie Christopher',
//         photo: cast1,
//         role: 'associate producer',
//         country: 'USA',
//         bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//         photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//         birth: 'June 24, 1982',
//         height: 186,
//         movies: [
//           {
//             name: 'X-Men: Apocalypse',
//             role: 'Logan',
//             year: 2016,
//             image: Interstellar
//           }
//         ]
//       }
//     ],
//     comments: [
//       {
//         title: 'Best Marvel movie in my opinion',
//         rating: 9,
//         date: '17 December 2016',
//         user: {
//           userName: 'hawaiipierson',
//           userPhoto: userAva
//         },
//         text: 'This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.'
//       }
//     ],
//     similarFilms: [
//       { rating: 7.0, title: 'Skyfall: Evil of boss', image: SkyFall },
//       { rating: 7.2, title: 'Mulholland pride', image: MulhollandPride },
//       { rating: 7.3, title: 'Blade runner', image: BladeRunner }
//     ]
//   }

//   // {
//   // 	name: 'The Revenant',
//   // 	rating: 7.4,
//   // 	tags: ['Action'],
//   // },
//   // {
//   // 	name: 'The Walk',
//   // 	rating: 7.4,
//   // 	tags: ['Sci-fi', 'Advanture'],
//   // },
//   // {
//   // 	name: 'Die Hard',
//   // 	rating: 7.4,
//   // 	tags: ['Comedy'],
//   // },
// ]

// export const actors: TCrew[] = [
//   {
//     id: 1,
//     name: 'Jamie Christopher',
//     photo: cast1,
//     role: 'associate producer',
//     country: 'USA',
//     bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//     photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//     videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//     birth: 'June 24, 1982',
//     height: 186,
//     movies: [
//       {
//         name: 'X-Men: Apocalypse',
//         role: 'Logan',
//         year: 2016,
//         image: Interstellar
//       }
//     ]
//   },
//   {
//     id: 2,
//     name: 'Jamie Christopher',
//     photo: cast1,
//     role: 'associate producer',
//     country: 'USA',
//     bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//     photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//     videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//     birth: 'June 24, 1982',
//     height: 186,
//     movies: [
//       {
//         name: 'X-Men: Apocalypse',
//         role: 'Logan',
//         year: 2016,
//         image: Interstellar
//       }
//     ]
//   },
//   {
//     id: 3,
//     name: 'Jamie Christopher',
//     photo: cast1,
//     role: 'associate producer',
//     country: 'USA',
//     bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//     photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//     videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//     birth: 'June 24, 1982',
//     height: 186,
//     movies: [
//       {
//         name: 'X-Men: Apocalypse',
//         role: 'Logan',
//         year: 2016,
//         image: Interstellar
//       }
//     ]
//   },
//   {
//     id: 4,
//     name: 'Jamie Christopher',
//     photo: cast1,
//     role: 'associate producer',
//     country: 'USA',
//     bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//     photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//     videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//     birth: 'June 24, 1982',
//     height: 186,
//     movies: [
//       {
//         name: 'X-Men: Apocalypse',
//         role: 'Logan',
//         year: 2016,
//         image: Interstellar
//       }
//     ]
//   },
//   {
//     id: 5,
//     name: 'Jamie Christopher',
//     photo: cast1,
//     role: 'associate producer',
//     country: 'USA',
//     bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//     photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//     videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//     birth: 'June 24, 1982',
//     height: 186,
//     movies: [
//       {
//         name: 'X-Men: Apocalypse',
//         role: 'Logan',
//         year: 2016,
//         image: Interstellar
//       }
//     ]
//   },
//   {
//     id: 6,
//     name: 'Jamie Christopher',
//     photo: cast1,
//     role: 'associate producer',
//     country: 'USA',
//     bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//     photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//     videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//     birth: 'June 24, 1982',
//     height: 186,
//     movies: [
//       {
//         name: 'X-Men: Apocalypse',
//         role: 'Logan',
//         year: 2016,
//         image: Interstellar
//       }
//     ]
//   },
//   {
//     id: 7,
//     name: 'Jamie Christopher',
//     photo: cast1,
//     role: 'associate producer',
//     country: 'USA',
//     bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//     photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//     videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//     birth: 'June 24, 1982',
//     height: 186,
//     movies: [
//       {
//         name: 'X-Men: Apocalypse',
//         role: 'Logan',
//         year: 2016,
//         image: Interstellar
//       }
//     ]
//   },
//   {
//     id: 8,
//     name: 'Jamie Christopher',
//     photo: cast1,
//     role: 'associate producer',
//     country: 'USA',
//     bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde eius dolor natus dignissimos aut blanditiis exercitationem? Magnam ipsum praesentium, fugiat laborum, fugit ex in perferendis repellat saepe quae, mollitia tempora nobis corporis. Soluta, nisi repudiandae voluptas odio, quas unde, enim quos ad pariatur veritatis animi ex assumenda corporis fugiat non praesentium totam delectus nesciunt ratione in sunt alias fuga quasi consequuntur? Dolores quam laborum, delectus cum vitae, corrupti magnam aliquam earum saepe, ipsum nostrum odit voluptatem praesentium doloremque distinctio atque magni quis enim autem maiores consequatur illo repellendus? Nisi doloribus illum dolorem? Animi a quam numquam, quo sapiente sed odit similique incidunt ea non quisquam vel est velit veritatis ducimus aliquid esse voluptas neque maiores. Explicabo beatae aperiam non cum dolorum quis? In perspiciatis quo eligendi vero neque, dignissimos deleniti magni maxime soluta iusto! Voluptates quis praesentium id repudiandae aut, ea, illo molestias expedita assumenda odit recusandae saepe ullam sed quisquam minus commodi. Corrupti tempore, provident eligendi ipsum accusantium explicabo officiis in quibusdam aperiam unde iusto eius nulla, quo fugiat ea temporibus eum! Neque quod reprehenderit error nisi perspiciatis architecto, sunt facilis eligendi natus tenetur non ea eius a ad modi illo laudantium quisquam atque nihil obcaecati. Fugiat laudantium, a sit laboriosam quaerat eligendi assumenda iste voluptatum, reiciendis dignissimos nobis impedit quasi accusantium magnam ipsam laborum asperiores non mollitia et, voluptatem voluptates obcaecati enim. Rerum totam atque impedit vel cum repellendus commodi. Earum corporis error nemo, veniam assumenda alias dicta, eligendi eos ab doloremque qui officiis rem velit facere?',
//     photos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//     videos: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
//     birth: 'June 24, 1982',
//     height: 186,
//     movies: [
//       {
//         name: 'X-Men: Apocalypse',
//         role: 'Logan',
//         year: 2016,
//         image: Interstellar
//       }
//     ]
//   }
// ]

// export const news: TNews[] = [
//   {
//     id: 1,
//     title: 'The Equalizer 3’ Shoots Past ‘Barbie’ Atop U.K., Ireland Box Office',
//     desc: 'Sony’s “The Equalizer 3” has finally toppled the six-week reign of “Barbie” atop the U.K. and Ireland box office. Antoine Fuqua’s action thriller, headlined by Denzel Washington and Dakota Fanning, debuted with £2.7 million ($3.4 million), per numbers from Comscore. In its seventh weekend, Warner Bros.’ “Barbie” slid down to second place with £1.6 million for a mighty total of £92.5 million. It is the highest grossing film of 2023 and occupies seventh position on the all-time charts for the territory behind “Spectre,” which has £95.2 million. Also in its seventh weekend, Universal’s “Oppenheimer” slid down a spot to third with £960,504. With £55.4 million, it is the second highest grossing film of 2023 and is level with “Bohemian Rhapsody” at No. 34 on the all-time chart. Angel’s “Sound of Freedom,” a massive success Stateside, debuted in fourth place with £760,060. Rounding off the top five was Paramount’s “Teenage Mutant Ninja Turtles: Mutant Mayhem,” which earned £618,912 in its fifth weekend for a total of £9.1 million. The only other debut in the top 10 was Lionsgate’s “Cobweb,” which debuted in 10th position with £325,904. The week ahead sees two releases on the Thursday. CinemaLive is bowing opera “Madama Butterfly On The Lake.” Yash Raj Films is opening Bollywood superstar Shah Rukh Khan’s “Jawan.” The star’s “Pathaan” is the highest grossing Indian film of 2023. On the Friday, the two wide releases are both sequels. Warner Bros. is opening “The Nun II” and Universal “My Big Fat Greek Wedding 3” across more than 300 locations each. Trinity CineAsia is opening Chinese blockbuster “No More Bets,” while Studiocanal is bowing the acclaimed “Past Lives.” Munro is releasing 1MDB saga documentary “Man on the Run,” while Bulldog is bowing another documentary, “A Life on the Farm,” about a filmmaking farmer and the inspiring legacy of his long-lost home movies. Meanwhile, the future of beloved London cinema Curzon Mayfair is under threat. The venue’s lease will expire in March 2024 and the landlord has threatened its residency at the site. To showcase the cinema this September and October it is hosting a program of films that previously played to great success there, from Fellini’s “La Dolce Vita” to Tarkovsky’s “Solaris.” Kicking off the efforts to save the cinema is a 4K restoration of Max Ophuls’ “La Ronde,” which played a 76-week unbroken run at Curzon Mayfair from April 1951 to October 1952.',
//     tags: ['Sony', 'The Equalizer 3'],
//     date: '27 Mar 2017',
//     image: news1,
//     comments: [
//       {
//         title: 'Best Marvel movie in my opinion',
//         rating: 9,
//         date: '17 December 2016',
//         user: {
//           userName: 'hawaiipierson',
//           userPhoto: userAva
//         },

//         text: 'This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.'
//       },
//       {
//         title: 'Best Marvel movie in my opinion',
//         rating: 9,
//         date: '17 December 2016',
//         user: {
//           userName: 'hawaiipierson',
//           userPhoto: userAva
//         },

//         text: 'This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.'
//       }
//     ]
//   },
//   {
//     id: 2,
//     title: 'The Equalizer 3’ Shoots Past ‘Barbie’ Atop U.K., Ireland Box Office',
//     desc: 'Sony’s “The Equalizer 3” has finally toppled the six-week reign of “Barbie” atop the U.K. and Ireland box office. Antoine Fuqua’s action thriller, headlined by Denzel Washington and Dakota Fanning, debuted with £2.7 million ($3.4 million), per numbers from Comscore. In its seventh weekend, Warner Bros.’ “Barbie” slid down to second place with £1.6 million for a mighty total of £92.5 million. It is the highest grossing film of 2023 and occupies seventh position on the all-time charts for the territory behind “Spectre,” which has £95.2 million. Also in its seventh weekend, Universal’s “Oppenheimer” slid down a spot to third with £960,504. With £55.4 million, it is the second highest grossing film of 2023 and is level with “Bohemian Rhapsody” at No. 34 on the all-time chart. Angel’s “Sound of Freedom,” a massive success Stateside, debuted in fourth place with £760,060. Rounding off the top five was Paramount’s “Teenage Mutant Ninja Turtles: Mutant Mayhem,” which earned £618,912 in its fifth weekend for a total of £9.1 million. The only other debut in the top 10 was Lionsgate’s “Cobweb,” which debuted in 10th position with £325,904. The week ahead sees two releases on the Thursday. CinemaLive is bowing opera “Madama Butterfly On The Lake.” Yash Raj Films is opening Bollywood superstar Shah Rukh Khan’s “Jawan.” The star’s “Pathaan” is the highest grossing Indian film of 2023. On the Friday, the two wide releases are both sequels. Warner Bros. is opening “The Nun II” and Universal “My Big Fat Greek Wedding 3” across more than 300 locations each. Trinity CineAsia is opening Chinese blockbuster “No More Bets,” while Studiocanal is bowing the acclaimed “Past Lives.” Munro is releasing 1MDB saga documentary “Man on the Run,” while Bulldog is bowing another documentary, “A Life on the Farm,” about a filmmaking farmer and the inspiring legacy of his long-lost home movies. Meanwhile, the future of beloved London cinema Curzon Mayfair is under threat. The venue’s lease will expire in March 2024 and the landlord has threatened its residency at the site. To showcase the cinema this September and October it is hosting a program of films that previously played to great success there, from Fellini’s “La Dolce Vita” to Tarkovsky’s “Solaris.” Kicking off the efforts to save the cinema is a 4K restoration of Max Ophuls’ “La Ronde,” which played a 76-week unbroken run at Curzon Mayfair from April 1951 to October 1952.',
//     tags: ['Sony', 'The Equalizer 3'],
//     date: '27 Mar 2017',
//     image: news1,
//     comments: [
//       {
//         title: 'Best Marvel movie in my opinion',
//         rating: 9,
//         date: '17 December 2016',
//         user: {
//           userName: 'hawaiipierson',
//           userPhoto: userAva
//         },

//         text: 'This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.'
//       },
//       {
//         title: 'Best Marvel movie in my opinion',
//         rating: 9,
//         date: '17 December 2016',
//         user: {
//           userName: 'hawaiipierson',
//           userPhoto: userAva
//         },

//         text: 'This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.'
//       }
//     ]
//   },
//   {
//     id: 3,
//     title: 'The Equalizer 3’ Shoots Past ‘Barbie’ Atop U.K., Ireland Box Office',
//     desc: 'Sony’s “The Equalizer 3” has finally toppled the six-week reign of “Barbie” atop the U.K. and Ireland box office. Antoine Fuqua’s action thriller, headlined by Denzel Washington and Dakota Fanning, debuted with £2.7 million ($3.4 million), per numbers from Comscore. In its seventh weekend, Warner Bros.’ “Barbie” slid down to second place with £1.6 million for a mighty total of £92.5 million. It is the highest grossing film of 2023 and occupies seventh position on the all-time charts for the territory behind “Spectre,” which has £95.2 million. Also in its seventh weekend, Universal’s “Oppenheimer” slid down a spot to third with £960,504. With £55.4 million, it is the second highest grossing film of 2023 and is level with “Bohemian Rhapsody” at No. 34 on the all-time chart. Angel’s “Sound of Freedom,” a massive success Stateside, debuted in fourth place with £760,060. Rounding off the top five was Paramount’s “Teenage Mutant Ninja Turtles: Mutant Mayhem,” which earned £618,912 in its fifth weekend for a total of £9.1 million. The only other debut in the top 10 was Lionsgate’s “Cobweb,” which debuted in 10th position with £325,904. The week ahead sees two releases on the Thursday. CinemaLive is bowing opera “Madama Butterfly On The Lake.” Yash Raj Films is opening Bollywood superstar Shah Rukh Khan’s “Jawan.” The star’s “Pathaan” is the highest grossing Indian film of 2023. On the Friday, the two wide releases are both sequels. Warner Bros. is opening “The Nun II” and Universal “My Big Fat Greek Wedding 3” across more than 300 locations each. Trinity CineAsia is opening Chinese blockbuster “No More Bets,” while Studiocanal is bowing the acclaimed “Past Lives.” Munro is releasing 1MDB saga documentary “Man on the Run,” while Bulldog is bowing another documentary, “A Life on the Farm,” about a filmmaking farmer and the inspiring legacy of his long-lost home movies. Meanwhile, the future of beloved London cinema Curzon Mayfair is under threat. The venue’s lease will expire in March 2024 and the landlord has threatened its residency at the site. To showcase the cinema this September and October it is hosting a program of films that previously played to great success there, from Fellini’s “La Dolce Vita” to Tarkovsky’s “Solaris.” Kicking off the efforts to save the cinema is a 4K restoration of Max Ophuls’ “La Ronde,” which played a 76-week unbroken run at Curzon Mayfair from April 1951 to October 1952.',
//     tags: ['Sony', 'The Equalizer 3'],
//     date: '27 Mar 2017',
//     image: news1,
//     comments: [
//       {
//         title: 'Best Marvel movie in my opinion',
//         rating: 9,
//         date: '17 December 2016',
//         user: {
//           userName: 'hawaiipierson',
//           userPhoto: userAva
//         },

//         text: 'This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.'
//       },
//       {
//         title: 'Best Marvel movie in my opinion',
//         rating: 9,
//         date: '17 December 2016',
//         user: {
//           userName: 'hawaiipierson',
//           userPhoto: userAva
//         },

//         text: 'This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.'
//       }
//     ]
//   },
//   {
//     id: 4,
//     title: 'The Equalizer 3’ Shoots Past ‘Barbie’ Atop U.K., Ireland Box Office',
//     desc: 'Sony’s “The Equalizer 3” has finally toppled the six-week reign of “Barbie” atop the U.K. and Ireland box office. Antoine Fuqua’s action thriller, headlined by Denzel Washington and Dakota Fanning, debuted with £2.7 million ($3.4 million), per numbers from Comscore. In its seventh weekend, Warner Bros.’ “Barbie” slid down to second place with £1.6 million for a mighty total of £92.5 million. It is the highest grossing film of 2023 and occupies seventh position on the all-time charts for the territory behind “Spectre,” which has £95.2 million. Also in its seventh weekend, Universal’s “Oppenheimer” slid down a spot to third with £960,504. With £55.4 million, it is the second highest grossing film of 2023 and is level with “Bohemian Rhapsody” at No. 34 on the all-time chart. Angel’s “Sound of Freedom,” a massive success Stateside, debuted in fourth place with £760,060. Rounding off the top five was Paramount’s “Teenage Mutant Ninja Turtles: Mutant Mayhem,” which earned £618,912 in its fifth weekend for a total of £9.1 million. The only other debut in the top 10 was Lionsgate’s “Cobweb,” which debuted in 10th position with £325,904. The week ahead sees two releases on the Thursday. CinemaLive is bowing opera “Madama Butterfly On The Lake.” Yash Raj Films is opening Bollywood superstar Shah Rukh Khan’s “Jawan.” The star’s “Pathaan” is the highest grossing Indian film of 2023. On the Friday, the two wide releases are both sequels. Warner Bros. is opening “The Nun II” and Universal “My Big Fat Greek Wedding 3” across more than 300 locations each. Trinity CineAsia is opening Chinese blockbuster “No More Bets,” while Studiocanal is bowing the acclaimed “Past Lives.” Munro is releasing 1MDB saga documentary “Man on the Run,” while Bulldog is bowing another documentary, “A Life on the Farm,” about a filmmaking farmer and the inspiring legacy of his long-lost home movies. Meanwhile, the future of beloved London cinema Curzon Mayfair is under threat. The venue’s lease will expire in March 2024 and the landlord has threatened its residency at the site. To showcase the cinema this September and October it is hosting a program of films that previously played to great success there, from Fellini’s “La Dolce Vita” to Tarkovsky’s “Solaris.” Kicking off the efforts to save the cinema is a 4K restoration of Max Ophuls’ “La Ronde,” which played a 76-week unbroken run at Curzon Mayfair from April 1951 to October 1952.',
//     tags: ['Sony', 'The Equalizer 3'],
//     date: '27 Mar 2017',
//     image: news1,
//     comments: [
//       {
//         title: 'Best Marvel movie in my opinion',
//         rating: 9,
//         date: '17 December 2016',
//         user: {
//           userName: 'hawaiipierson',
//           userPhoto: userAva
//         },

//         text: 'This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.'
//       },
//       {
//         title: 'Best Marvel movie in my opinion',
//         rating: 9,
//         date: '17 December 2016',
//         user: {
//           userName: 'hawaiipierson',
//           userPhoto: userAva
//         },

//         text: 'This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.'
//       }
//     ]
//   },
//   {
//     id: 5,
//     title: 'The Equalizer 3’ Shoots Past ‘Barbie’ Atop U.K., Ireland Box Office',
//     desc: 'Sony’s “The Equalizer 3” has finally toppled the six-week reign of “Barbie” atop the U.K. and Ireland box office. Antoine Fuqua’s action thriller, headlined by Denzel Washington and Dakota Fanning, debuted with £2.7 million ($3.4 million), per numbers from Comscore. In its seventh weekend, Warner Bros.’ “Barbie” slid down to second place with £1.6 million for a mighty total of £92.5 million. It is the highest grossing film of 2023 and occupies seventh position on the all-time charts for the territory behind “Spectre,” which has £95.2 million. Also in its seventh weekend, Universal’s “Oppenheimer” slid down a spot to third with £960,504. With £55.4 million, it is the second highest grossing film of 2023 and is level with “Bohemian Rhapsody” at No. 34 on the all-time chart. Angel’s “Sound of Freedom,” a massive success Stateside, debuted in fourth place with £760,060. Rounding off the top five was Paramount’s “Teenage Mutant Ninja Turtles: Mutant Mayhem,” which earned £618,912 in its fifth weekend for a total of £9.1 million. The only other debut in the top 10 was Lionsgate’s “Cobweb,” which debuted in 10th position with £325,904. The week ahead sees two releases on the Thursday. CinemaLive is bowing opera “Madama Butterfly On The Lake.” Yash Raj Films is opening Bollywood superstar Shah Rukh Khan’s “Jawan.” The star’s “Pathaan” is the highest grossing Indian film of 2023. On the Friday, the two wide releases are both sequels. Warner Bros. is opening “The Nun II” and Universal “My Big Fat Greek Wedding 3” across more than 300 locations each. Trinity CineAsia is opening Chinese blockbuster “No More Bets,” while Studiocanal is bowing the acclaimed “Past Lives.” Munro is releasing 1MDB saga documentary “Man on the Run,” while Bulldog is bowing another documentary, “A Life on the Farm,” about a filmmaking farmer and the inspiring legacy of his long-lost home movies. Meanwhile, the future of beloved London cinema Curzon Mayfair is under threat. The venue’s lease will expire in March 2024 and the landlord has threatened its residency at the site. To showcase the cinema this September and October it is hosting a program of films that previously played to great success there, from Fellini’s “La Dolce Vita” to Tarkovsky’s “Solaris.” Kicking off the efforts to save the cinema is a 4K restoration of Max Ophuls’ “La Ronde,” which played a 76-week unbroken run at Curzon Mayfair from April 1951 to October 1952.',
//     tags: ['Sony', 'The Equalizer 3'],
//     date: '27 Mar 2017',
//     image: news1,
//     comments: [
//       {
//         title: 'Best Marvel movie in my opinion',
//         rating: 9,
//         date: '17 December 2016',
//         user: {
//           userName: 'hawaiipierson',
//           userPhoto: userAva
//         },

//         text: 'This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.'
//       },
//       {
//         title: 'Best Marvel movie in my opinion',
//         rating: 9,
//         date: '17 December 2016',
//         user: {
//           userName: 'hawaiipierson',
//           userPhoto: userAva
//         },

//         text: 'This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.'
//       }
//     ]
//   },
//   {
//     id: 6,
//     title: 'The Equalizer 3’ Shoots Past ‘Barbie’ Atop U.K., Ireland Box Office',
//     desc: 'Sony’s “The Equalizer 3” has finally toppled the six-week reign of “Barbie” atop the U.K. and Ireland box office. Antoine Fuqua’s action thriller, headlined by Denzel Washington and Dakota Fanning, debuted with £2.7 million ($3.4 million), per numbers from Comscore. In its seventh weekend, Warner Bros.’ “Barbie” slid down to second place with £1.6 million for a mighty total of £92.5 million. It is the highest grossing film of 2023 and occupies seventh position on the all-time charts for the territory behind “Spectre,” which has £95.2 million. Also in its seventh weekend, Universal’s “Oppenheimer” slid down a spot to third with £960,504. With £55.4 million, it is the second highest grossing film of 2023 and is level with “Bohemian Rhapsody” at No. 34 on the all-time chart. Angel’s “Sound of Freedom,” a massive success Stateside, debuted in fourth place with £760,060. Rounding off the top five was Paramount’s “Teenage Mutant Ninja Turtles: Mutant Mayhem,” which earned £618,912 in its fifth weekend for a total of £9.1 million. The only other debut in the top 10 was Lionsgate’s “Cobweb,” which debuted in 10th position with £325,904. The week ahead sees two releases on the Thursday. CinemaLive is bowing opera “Madama Butterfly On The Lake.” Yash Raj Films is opening Bollywood superstar Shah Rukh Khan’s “Jawan.” The star’s “Pathaan” is the highest grossing Indian film of 2023. On the Friday, the two wide releases are both sequels. Warner Bros. is opening “The Nun II” and Universal “My Big Fat Greek Wedding 3” across more than 300 locations each. Trinity CineAsia is opening Chinese blockbuster “No More Bets,” while Studiocanal is bowing the acclaimed “Past Lives.” Munro is releasing 1MDB saga documentary “Man on the Run,” while Bulldog is bowing another documentary, “A Life on the Farm,” about a filmmaking farmer and the inspiring legacy of his long-lost home movies. Meanwhile, the future of beloved London cinema Curzon Mayfair is under threat. The venue’s lease will expire in March 2024 and the landlord has threatened its residency at the site. To showcase the cinema this September and October it is hosting a program of films that previously played to great success there, from Fellini’s “La Dolce Vita” to Tarkovsky’s “Solaris.” Kicking off the efforts to save the cinema is a 4K restoration of Max Ophuls’ “La Ronde,” which played a 76-week unbroken run at Curzon Mayfair from April 1951 to October 1952.',
//     tags: ['Sony', 'The Equalizer 3'],
//     date: '27 Mar 2017',
//     image: news1,
//     comments: [
//       {
//         title: 'Best Marvel movie in my opinion',
//         rating: 9,
//         date: '17 December 2016',
//         user: {
//           userName: 'hawaiipierson',
//           userPhoto: userAva
//         },

//         text: 'This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.'
//       },
//       {
//         title: 'Best Marvel movie in my opinion',
//         rating: 9,
//         date: '17 December 2016',
//         user: {
//           userName: 'hawaiipierson',
//           userPhoto: userAva
//         },

//         text: 'This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.'
//       }
//     ]
//   },
//   {
//     id: 7,
//     title: 'The Equalizer 3’ Shoots Past ‘Barbie’ Atop U.K., Ireland Box Office',
//     desc: 'Sony’s “The Equalizer 3” has finally toppled the six-week reign of “Barbie” atop the U.K. and Ireland box office. Antoine Fuqua’s action thriller, headlined by Denzel Washington and Dakota Fanning, debuted with £2.7 million ($3.4 million), per numbers from Comscore. In its seventh weekend, Warner Bros.’ “Barbie” slid down to second place with £1.6 million for a mighty total of £92.5 million. It is the highest grossing film of 2023 and occupies seventh position on the all-time charts for the territory behind “Spectre,” which has £95.2 million. Also in its seventh weekend, Universal’s “Oppenheimer” slid down a spot to third with £960,504. With £55.4 million, it is the second highest grossing film of 2023 and is level with “Bohemian Rhapsody” at No. 34 on the all-time chart. Angel’s “Sound of Freedom,” a massive success Stateside, debuted in fourth place with £760,060. Rounding off the top five was Paramount’s “Teenage Mutant Ninja Turtles: Mutant Mayhem,” which earned £618,912 in its fifth weekend for a total of £9.1 million. The only other debut in the top 10 was Lionsgate’s “Cobweb,” which debuted in 10th position with £325,904. The week ahead sees two releases on the Thursday. CinemaLive is bowing opera “Madama Butterfly On The Lake.” Yash Raj Films is opening Bollywood superstar Shah Rukh Khan’s “Jawan.” The star’s “Pathaan” is the highest grossing Indian film of 2023. On the Friday, the two wide releases are both sequels. Warner Bros. is opening “The Nun II” and Universal “My Big Fat Greek Wedding 3” across more than 300 locations each. Trinity CineAsia is opening Chinese blockbuster “No More Bets,” while Studiocanal is bowing the acclaimed “Past Lives.” Munro is releasing 1MDB saga documentary “Man on the Run,” while Bulldog is bowing another documentary, “A Life on the Farm,” about a filmmaking farmer and the inspiring legacy of his long-lost home movies. Meanwhile, the future of beloved London cinema Curzon Mayfair is under threat. The venue’s lease will expire in March 2024 and the landlord has threatened its residency at the site. To showcase the cinema this September and October it is hosting a program of films that previously played to great success there, from Fellini’s “La Dolce Vita” to Tarkovsky’s “Solaris.” Kicking off the efforts to save the cinema is a 4K restoration of Max Ophuls’ “La Ronde,” which played a 76-week unbroken run at Curzon Mayfair from April 1951 to October 1952.',
//     tags: ['Sony', 'The Equalizer 3'],
//     date: '27 Mar 2017',
//     image: news1,
//     comments: [
//       {
//         title: 'Best Marvel movie in my opinion',
//         rating: 9,
//         date: '17 December 2016',
//         user: {
//           userName: 'hawaiipierson',
//           userPhoto: userAva
//         },

//         text: 'This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.'
//       },
//       {
//         title: 'Best Marvel movie in my opinion',
//         rating: 9,
//         date: '17 December 2016',
//         user: {
//           userName: 'hawaiipierson',
//           userPhoto: userAva
//         },

//         text: 'This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.'
//       }
//     ]
//   },
//   {
//     id: 8,
//     title: 'The Equalizer 3’ Shoots Past ‘Barbie’ Atop U.K., Ireland Box Office',
//     desc: 'Sony’s “The Equalizer 3” has finally toppled the six-week reign of “Barbie” atop the U.K. and Ireland box office. Antoine Fuqua’s action thriller, headlined by Denzel Washington and Dakota Fanning, debuted with £2.7 million ($3.4 million), per numbers from Comscore. In its seventh weekend, Warner Bros.’ “Barbie” slid down to second place with £1.6 million for a mighty total of £92.5 million. It is the highest grossing film of 2023 and occupies seventh position on the all-time charts for the territory behind “Spectre,” which has £95.2 million. Also in its seventh weekend, Universal’s “Oppenheimer” slid down a spot to third with £960,504. With £55.4 million, it is the second highest grossing film of 2023 and is level with “Bohemian Rhapsody” at No. 34 on the all-time chart. Angel’s “Sound of Freedom,” a massive success Stateside, debuted in fourth place with £760,060. Rounding off the top five was Paramount’s “Teenage Mutant Ninja Turtles: Mutant Mayhem,” which earned £618,912 in its fifth weekend for a total of £9.1 million. The only other debut in the top 10 was Lionsgate’s “Cobweb,” which debuted in 10th position with £325,904. The week ahead sees two releases on the Thursday. CinemaLive is bowing opera “Madama Butterfly On The Lake.” Yash Raj Films is opening Bollywood superstar Shah Rukh Khan’s “Jawan.” The star’s “Pathaan” is the highest grossing Indian film of 2023. On the Friday, the two wide releases are both sequels. Warner Bros. is opening “The Nun II” and Universal “My Big Fat Greek Wedding 3” across more than 300 locations each. Trinity CineAsia is opening Chinese blockbuster “No More Bets,” while Studiocanal is bowing the acclaimed “Past Lives.” Munro is releasing 1MDB saga documentary “Man on the Run,” while Bulldog is bowing another documentary, “A Life on the Farm,” about a filmmaking farmer and the inspiring legacy of his long-lost home movies. Meanwhile, the future of beloved London cinema Curzon Mayfair is under threat. The venue’s lease will expire in March 2024 and the landlord has threatened its residency at the site. To showcase the cinema this September and October it is hosting a program of films that previously played to great success there, from Fellini’s “La Dolce Vita” to Tarkovsky’s “Solaris.” Kicking off the efforts to save the cinema is a 4K restoration of Max Ophuls’ “La Ronde,” which played a 76-week unbroken run at Curzon Mayfair from April 1951 to October 1952.',
//     tags: ['Sony', 'The Equalizer 3'],
//     date: '27 Mar 2017',
//     image: news1,
//     comments: [
//       {
//         title: 'Best Marvel movie in my opinion',
//         rating: 9,
//         date: '17 December 2016',
//         user: {
//           userName: 'hawaiipierson',
//           userPhoto: userAva
//         },

//         text: 'This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.'
//       },
//       {
//         title: 'Best Marvel movie in my opinion',
//         rating: 9,
//         date: '17 December 2016',
//         user: {
//           userName: 'hawaiipierson',
//           userPhoto: userAva
//         },

//         text: 'This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.'
//       }
//     ]
//   }
// ]
