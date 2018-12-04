export default {
  methods: {
    cpfCpnjMask(cpfCnpj) {
      if (!cpfCnpj) return "";
      if (cpfCnpj.length > 11) {
        return `${cpfCnpj.substring(0, 2)}.${cpfCnpj.substring(
          2,
          5
        )}.${cpfCnpj.substring(5, 8)}/${cpfCnpj.substring(
          8,
          12
        )}-${cpfCnpj.substring(12, 14)}`;
      }
      return `${cpfCnpj.substring(0, 3)}.${cpfCnpj.substring(
        3,
        6
      )}.${cpfCnpj.substring(6, 9)}-${cpfCnpj.substring(9, 12)}`;
    }
  }
};