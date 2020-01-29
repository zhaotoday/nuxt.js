import consts from '~/utils/consts'
import helpers from 'jt-helpers'

export default ({ app }, inject) => {
  inject('consts', consts)
  inject('helpers', helpers)
}
