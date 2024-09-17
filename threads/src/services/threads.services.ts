import {threadsRepository} from "../repositories/threads.repository";
import {IThreads} from "../types/threads.entity";
import {z} from "zod";

const threadSchema = z.object({
  title: z.string().min(4, "Title must be at least 4 characters long"),
  content: z.string().min(4, "Content must be at least 4 characters long"),
});

export const threadsService = {
  getAll: async () => {
    try {
      const getAll = await threadsRepository.getAll();
      return getAll;
    } catch (error) {
      console.log(error);
    }
  },

  getById: async (id: string) => {
    try {
      const getSingle = await threadsRepository.getById(id);
      return getSingle;
    } catch (error) {
      console.log(error);
    }
  },

  create: async (threads: IThreads) => {
    try {
      const {title, content} = threads;
      const dataValidation = threadSchema.safeParse({
        title,
        content,
      });

      if (!dataValidation.success) {
        return dataValidation.error.issues;
      }
      const newThreads = await threadsRepository.create(threads);
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
      console.log(error);
    }
  },

  delete: async (id: string) => {
    try {
      const deleteThreads = await threadsRepository.delete(id);
      return deleteThreads;
    } catch (error) {
      console.log(error);
    }
  },
};
