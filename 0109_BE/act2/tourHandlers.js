const { json } = require("express");
const Tour = require("./tourLib");

const getAllTours = (req, res) => {
    const tours = Tour.getAll();
    res.json(tours);
};

const createTour = (req, res) => {
    const {name, info, image, price} = req.body;
    const newTour = Tour.addOne(name, info, image, price);
    newTour? res.json(newTour) : res.status(500).json({message : "Failed to create new tour!"})
    
};

const getTourById = (req, res) => {
    const tourId = req.params.tourId;
    const tour = Tour.findById(tourId);
    tour? res.json(tour) : res.status(404).json({message: "Tour not found!"});
};

const updateTour = (req, res) => {
    const tourId = req.params.tourId;
    const {name, info, image, price} = req.body;

    const updatedTour = Tour.updateOneById(tourId, {name, info, image, price});
    
    updatedTour? res.json(updatedTour) : res.status(404).json({message: "Tour not found!!"})
};

const deleteTour = (req, res) => {
    const tourId = req.params.tourId;
    const isDeleted = Tour.deleteOneById(tourId);
    isDeleted? res.json({message: "Tour deleted successfully."}): res.status(404).json({message: "Tour not found."})
};

module.exports = {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
};