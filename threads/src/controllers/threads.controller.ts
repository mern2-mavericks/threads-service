import {Request, Response} from "express";
import {threadsService} from "../services/threads.services";


export const threadsController = {
  handleGetAll: async (req: Request, res: Response) => {
    try {
      const getAll = await threadsService.getAll();
      return res.status(200).json({message: "berhasil ambil data thread", data: getAll});
    } catch (error) {
      console.log(error);
    }
  },

  handleGetById: async (req: Request, res: Response) => {
    try {
      const threadsId = req.params.id;
      const getSingle = await threadsService.getById(threadsId);
      return res.status(200).json({message: "berhasil ambil single threads", data: getSingle});
    } catch (error) {
      console.log(error);
    }
  },

  handleCreate: async (req: Request, res: Response) => {
    try {
      const {userId, title, content} = req.body;
      const newThreads = await threadsService.create({userId, title, content});
      return res.status(201).json({message: "berhasil masukin data theads", data: newThreads});
    } catch (error) {
      console.log(error);
    }
  },

  handleUpdate: async (req: Request, res: Response) => {
    try {
      const threadsId = req.params.id;
      const {content} = req.body;
      const updateThreads = await threadsService.update(threadsId, content);
      return res.status(200).json({message: "berhasil update threads", data: updateThreads});
    } catch (error) {
      console.log(error);
    }
  },

  handleDelete: async (req: Request, res: Response) => {
    try {
      const threadsId = req.params.id;
      const deleteThreads = await threadsService.delete(threadsId);
      return res.status(200).json({message: "berhasil hapus threads", data: deleteThreads});
    } catch (error) {
      console.log(error);
    }
  },
};
