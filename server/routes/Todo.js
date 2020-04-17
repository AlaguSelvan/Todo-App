import express from 'express';
import {
  createTodo,
  updateTodo,
  deleteTodo,
  getAllTodo,
  getTodoById,
} from '../controllers/todo';
import passport from 'passport'

const router = express.Router();

const jwtAuth = passport.authenticate('jwt', {
  session: false,
});

// @route Get api/v1/post
// @desc Get All Posts
// @access Public
router.get('/', jwtAuth, getAllTodo);

// @route POST api/v1/post
// @desc create post
// @access Private
router.post('/', jwtAuth, createTodo);

// @route get api/v1/post/:id
// @desc get post By Id
// @access Private
router.get('/:id', jwtAuth, getTodoById);

// @route Put api/v1/post/:id
// @desc Update post By Id
// @access Private
router.put('/:id', jwtAuth, updateTodo);

// @route DELETE api/v1/post/:id
// @desc Delete post
// @access Private
router.delete('/:id', jwtAuth, deleteTodo);

// router.delete('/:id', getById);

export default router