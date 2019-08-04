import initialData from '../../../dataManager/InitalManager';
import { GetQuizInitialResponse } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
  Query: {
    GetBasicInitial: (_, __): GetQuizInitialResponse => {
      try {
        const quiz = initialData.getBasicQuiz();
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