const express = require("express");
const router = express.Router();

// Item Model
const Item = require("../../models/Item");

/**
 * @route GET api/items
 * @desc GET All Items
 * @access Public
 * - sort by recent added items
 * - return items from db in json
 */
// @route GET api/items
// @desc GET All Items
// @access Public
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

/**
 * @route POST api/items
 * @desc Create An Item
 * @access Public
 * - newItem is created from Item model
 * - newItem is saved in db, then turn in json
 */
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });
  newItem.save().then(item => res.json(item));
});

/**
 * @route DELETE api/items/:id
 * @desc Delete A Item
 * @access Public
 * - find Item by id
 * - returns item, then remove, if callback true
 * - else 404 status false
 */
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
