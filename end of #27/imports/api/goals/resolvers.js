import Goals from "./goals";

export default {
  Mutation: {
    createGoal(obj, { name, resolutionId }, { userId }) {
      if (userId) {
        const goalId = Goals.insert({
          name,
          resolutionId,
          completed: false
        });
        return Goals.findOne(goalId);
      }
      throw new Error("Unauthortized");
    },
    toggleGoal(obj, { _id }) {
      const goal = Goals.findOne(_id);
      Goals.update(_id, {
        $set: {
          completed: !goal.completed
        }
      });
      return Goals.findOne(_id);
    }
  }
};
