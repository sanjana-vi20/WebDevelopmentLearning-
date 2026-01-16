import Contact from "../models/contactModel.js";

export const NewContact = async (req, res, next) => {
  try {
    const { fullName, email, mobnumber , message } = req.body;

    if (!fullName || !email || !mobnumber || !message) {
      const error = new Error("All Fields are Required");
      error.statusCode = 400;
      return next(error);
    }

    const userQuery = await Contact.create({
      fullName,
      email,
      mobnumber,
      message,
    });

    console.log(userQuery);
    res
      .status(201)
      .json({
        message:
          "Thanks for Contacting us. We will Get Back to you in 24-48 Hours",
      });
  } catch (error) {
    next(error);
  }
};
