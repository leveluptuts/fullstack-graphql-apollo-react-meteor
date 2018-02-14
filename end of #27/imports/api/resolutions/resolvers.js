import Resolutions from "./resolutions";
import Goals from "../goals/goals";

export default {
  Query: {
    resolutions(obj, args, { userId }) {
      return Resolutions.find({
        userId
      }).fetch();
    }
  },

  Resolution: {
    goals: resolution =>
      Goals.find({
        resolutionId: resolution._id
      }).fetch(),

    completed: resolution => {
      const goals = Goals.find({
        resolutionId: resolution._id
      }).fetch();
      if (goals.length === 0) return false;
      const completedGoals = goals.filter(goal => goal.completed);
      return goals.length === completedGoals.length;
    }
  },

  Mutation: {
    createResolution(obj, { name }, { userId }) {
      if (userId) {
        const resolutionId = Resolutions.insert({
          name,
          userId
        });
        return Resolutions.findOne(resolutionId);
      }
      throw new Error("Unauthortized");
    }
  }
};
