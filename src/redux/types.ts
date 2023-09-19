export type TStarsFilter = {
  starName: string
  starYear: number
  starCountry: string
}

export type TFilmsFilter = {
  filmName: string
  filmGenre: string
  filmYear: number
  starCountry: string
}

export type TNewsSearch = {
  newsTitle: string
}

export type TProfileEdit = {
  userName: string
  email: string
  firstName: string
  lastName: string
  country: string
  oldPassword: string
  newPassword: string
  confirmNewPassword: string
}

export type TSignUp = {
  userName: string
  userEmail: string
  userPassword: string
  userConfirmPassword: string
}

export type TSignIn = {
  userEmail: string
  userPassword: string
}
