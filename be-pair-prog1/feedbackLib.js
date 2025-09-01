let feedbackArray = [];
let nextId = 1;

function getAll() {
  return feedbackArray;
}

function addOne(name, message, rating) {
  if (!name || !message || !rating) {
    return false;
  }

  const newFeedback = {
    id: nextId++,
    name,
    message,
    rating,
  };

  feedbackArray.push(newFeedback);
  return newFeedback;
}

function findById(id) {
  const feedback = feedbackArray.find((item) => item.id == id);
  return feedback || false;
}

function updateOneById(id, updatedData) {
  const feedback = findById(id);
  if (feedback) {
    if (updatedData.name) feedback.name = updatedData.name;
    if (updatedData.message) feedback.message = updatedData.message;
    if (updatedData.rating) feedback.rating = updatedData.rating;
    return feedback;
  }
  return false;
}

function deleteOneById(id) {
  const feedback = findById(id);
  if (feedback) {
    const initialLength = feedbackArray.length;
    feedbackArray = feedbackArray.filter((item) => item.id != id);
    return feedbackArray.length < initialLength;
  }
  return false;
}
if (require.main === module) {
    let result = addOne("John Smith", "message","Great session on React components! I found the examples very helpful.", 4);
    console.log(result);
    console.log("getAll called:", getAll());
    console.log("findById called:", findById(1));
    // rest of the tests here
   }

const Feedback = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById,
  };
  
module.exports = Feedback;