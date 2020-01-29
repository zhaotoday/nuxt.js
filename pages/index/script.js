import CHeader from '~/components/header'
import CFooter from '~/components/footer'

export default {
  components: {
    CHeader,
    CFooter
  },
  head () {
    return {
      title: '标题',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '描述'
        }
      ]
    }
  }
}
