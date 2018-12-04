import moment from 'moment'

export default {
  methods: {
    formatDate (date) {
      if (!date) {
        return null
      }

      return moment(date, ['YYYY-MM-DD']).format('DD/MM/YYYY')
    },
    parseDate (date) {
      if (!date) {
        return null
      }

      let data = moment(date, ['DD/MM/YYYY']).format('YYYY-MM-DD')

      return data
    }
  }
}