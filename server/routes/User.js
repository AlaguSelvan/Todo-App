import express from 'express'
import { Login, Register } from '../controllers/user'

const router = express.Router()

// @route POST api/v1/user/login
// @desc Login User
// @access Public
router.post('/login', Login);

// @route POST api/v1/user/register
// @desc register User
// @access Public
router.post('/register', Register);

export default router;