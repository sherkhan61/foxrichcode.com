import './src/styles/Preloader.scss'


export const onPreRouteUpdate = () => {
  setTimeout(() => {
    document.getElementById("loader-wrapper").style.display = "none"
  }, 400)
}