const Feedback = require("./feedbackLib");

const getAllFeedbacks = (req, res) => {
    const feedbacks = Feedback.getAll();
    res.json(feedbacks);
};

const createFeedback = (req, res) => {
    const { sender, message, rating} = req.body;
    const newFeedback = Feedback.addOne(sender, message, rating);
    newFeedback? res.json(newFeedback) :  res.status(500).json({message : " Failed to cread new feedback."})};

const getFeedbackById = (req, res) => {
    const feedbackId = req.params.feedbackId;
    const feedback = Feedback.findById(feedbackId);
    feedback? res.json(feedback) : res.status(404).json({message: " Feedback not found!"});
};

const updateFeedback = (req, res) => {
    const feedbackId= req.params.feedbackId;
    //console.log(feedbackId);
    //const { sender, message, rating } = req.body;
    
    const updatedFeedback = Feedback.updateOneById(feedbackId, {sender, message, rating});
    console.log(updatedFeedback);
    
    updatedFeedback? res.json(updatedFeedback) :  res.status(404).json({message : "Feedback not found!!"});
};

const deleteFeedback = (req, res) => {
    const feedbackId= req.params.feedbackId;
    const isDeleted = Feedback.deleteOneById(feedbackId);
    isDeleted? res.json({message: "Feedback deleted successfully."}) : res.status(404).json({message: "Feedback not found..."});
};

module.exports = {
  getAllFeedbacks,
  getFeedbackById,
  createFeedback,
  updateFeedback,
  deleteFeedback,
};