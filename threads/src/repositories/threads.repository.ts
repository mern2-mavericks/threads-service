import {Threads} from "../models/threads.schema";
import {IThreads} from "../types/threads.entity";

export const threadsRepository = {
  getAll: async () => {
    try {
      const getAll = await Threads.find();
      return getAll;
    } catch (error) {
      console.log(error);
    }
  },
  create: async (threads: IThreads) => {
    try {
      const newThreads = await Threads.create(threads);
      return newThreads;
    } catch (error) {
      console.log(error);
    }
  },

  getById: async (id:string) => {
    try {
      const getSingle = await Threads.findById(id);
      return getSingle;
    } catch (error) {
      console.log(error)
    }
  },
  
  update: async (id: string, content: string) => {
    try {
      const updateThreads = await Threads.findByIdAndUpdate(
        id,
        {content},
        {new: true}
      );
      return updateThreads;
    } catch (error) {
      console.log(error);
    }
  },

  delete: async (id: string) => {
    try {
      const deleteThreads = await Threads.findOneAndDelete({
        _id: id,
      })
     return deleteThreads 
    } catch (error) {
      console.log(error)
    }
  }
};
