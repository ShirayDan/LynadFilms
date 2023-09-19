export const changeOverflow = (val: boolean) => {
  const html = document.querySelector('html') as HTMLElement

  val === false ? (html.style.overflowY = 'hidden') : (html.style.overflowY = 'scroll')
}
