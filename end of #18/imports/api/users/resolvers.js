export default {
  Query: {
    user(obj, args, { user }) {
      return user || {};
    }
  }
};
