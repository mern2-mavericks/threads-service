import {threadsRepository} from "../repositories/threads.repository";
import { IThreads } from "../types/threads.entity";

export const threadsService = {
  getAll: async () => {
    try {
      const getAll = await threadsRepository.getAll();
      return getAll;
    } catch (error) {
      console.log(error)
    }
  },

  getById: async(id: string) => {
    try {
      const getSingle = await threadsRepository.getById(id);
      return getSingle;
    } catch (error) {
      console.log(error)
    }
  },
  
  create: async (threads: IThreads) => {
    try {
      const {title, content} = threads
      const newThreads = await threadsRepository.create(threads);
      if(!title || !content) {
        throw new Error("title atau content perlu diisi")
      }
      
      return newThreads;
    } catch (error) {
      console.log(error);
    }
  },
  
  update: async (id: string, content: string) => {
    try {
      const updateThreads = await threadsRepository.update(id, content);
      return updateThreads;
    } catch (error) {
      console.log(error)
    }
  },
  
  delete: async(id: string) => {
    try {
      const deleteThreads = await threadsRepository.delete(id);
      return deleteThreads;
    } catch (error) {
      console.log(error)
    }
  }
};
