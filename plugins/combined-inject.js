import consts from '~/utils/consts'

export default ({ app }, inject) => {
  inject('consts', consts)
}
