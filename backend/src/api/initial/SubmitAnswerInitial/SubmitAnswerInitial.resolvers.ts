import initialData from '../../../dataManager/InitalManager';
import { SubmitAnswerInitialQueryArgs, SubmitAnswerInitialResponse } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
  Query: {
    SubmitAnswerInitial: (_, args: SubmitAnswerInitialQueryArgs): SubmitAnswerInitialResponse => {
      const { id, answer } = args;
      try {
        const result = initialData.checkAnswer(id, answer);
        return {
          ok: true,
          error: null,
          result
        }
      } catch (error) {
        return {
          ok: false,
          error,
          result: null
        }
      }
    }
  }
}

export default resolvers;