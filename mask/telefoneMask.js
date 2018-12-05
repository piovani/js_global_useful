export default {
  methods: {
    telephoneMask() {
      const { telephone } = this.user

      if (telephone.length > 10) {
        return '(##) # ####-####'
      }

      return '(##) ####-#####'
    }
  }
};
