/* //The data model
{
  "sender": "John Smith",
  "message": "Great session on React components! I found the examples very helpful.",
  "rating": 5
} */

let feedbackArr =[];
let nextId =1;

const getAll = () => feedbackArr;

const addOne = (sender, message, rating) => {

    if (!sender||!message||!rating) 
        {return false;
    }

    const newFeedback = {
        id: nextId++,
        sender,
        message,
        rating
    }
    feedbackArr.push(newFeedback);
    return newFeedback;
}

const findById = (id) => {
    const feedback = feedbackArr.find((item)=> item.id == id);
    return feedback || false;
}

const updateOneById = (id, updatedData) => {
    const feedback = findById(id);
    if (feedback){
        if (updatedData.sender){
            feedback.sender = updatedData.sender;
        }
        if (updatedData.message){
            feedback.message = updatedData.message;
        }
        if (updatedData.rating){
            feedback.rating = updatedData.rating;
        }
    return feedback;
    }
    return false;
}

const deleteOneById = (id) => {
    const feedback = findById(id);
    if(feedback){
        const initialLen = feedbackArr.length;
        feedbackArr = feedbackArr.filter((feedback) => feedback.id != id);
        return feedbackArr.length < initialLen;
    } return false;
}

Feedback = {
    getAll,
    findById,
    addOne,
    updateOneById,
    deleteOneById
}

module.exports = Feedback;