import hover from './hover'

const install = function (Vue) {
  Vue.directive('fy-hover', hover)
}

if (window.Vue) {
  window['fy-hover'] = hover
  Vue.use(install); // eslint-disable-line
}

hover.install = install
export default hover
