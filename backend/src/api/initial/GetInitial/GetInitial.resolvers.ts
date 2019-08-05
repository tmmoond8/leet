import initialData from '../../../dataManager/InitalManager';
import { GetInitialResponse } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
  Query: {
    GetInitial: (_, __): GetInitialResponse => {
      try {
        const quiz = initialData.getInitial();
        return {
          ok: true,
          data: quiz,
          error: null,
        }
      } catch (error) {
        return {
          data: null,
          error,
          ok: false,
        }
      }
    }
  }
}

export default resolvers;