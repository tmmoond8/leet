import initialData from '../../../dataManager/InitalManager';
import { GetBasicInitialQueryArgs, GetQuizInitialResponse } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
  Query: {
    GetBasicInitial: (_, args: GetBasicInitialQueryArgs): GetQuizInitialResponse => {
      const { level } = args;
      try {
        const quiz = initialData.getBasicQuiz(level);
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