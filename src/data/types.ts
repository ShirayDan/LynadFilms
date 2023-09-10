export type TCrew = {
  id: number
  name: string
  role: Array<string>
  photo: string
  country: string
  bio: string
  videos: Array<string>
  photos: Array<string>
  birth: string
  height: number
  movies: Array<TFilmUser>
}

export type TFilmUser = {
  id: number
  name: string
  role: string
  year: number
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
  id: number
  name: string
  rating: number
  tags: Array<string>
  duration: string
  director: Array<TCrew>
  stars: Array<TCrew>
  desc: string
  date: string
  mmpa: string
  photo: string
  link: string
  photos: Array<string>
  writer: Array<TCrew>
  country: string
  filmCrew: Array<TCrew>
  comments: Array<TComment>
  similarFilms: Array<TFilmSmall>
}

export type TNews = {
  id: number
  title: string
  desc: string
  tags: Array<string>
  date: string
  image: string
  comments: Array<TComment>
}
