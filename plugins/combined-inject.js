import helpers from 'jt-helpers'
import consts from '~/utils/consts'

export default ({ app }, inject) => {
  inject('consts', consts)
  inject('helpers', helpers)
}
