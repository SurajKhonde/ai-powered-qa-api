import Doc from "../models/doc.model.js";

export const getAllDocs = async (req, res, next) => {
  try {
    const docs = await Doc.find();

    res.status(200).json({
      success: true,
      count: docs.length,
      data: docs,
    });
  } catch (error) {
    next(error);
  }
};