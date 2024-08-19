// const express=require('express');
import express from 'express';
const router=express.Router();
// const controller=require('./src/controller/controller')
import {homepage,addTask}from '../controller/controller'

router.get('/',homepage)
router.post('/add',addTask)

export default router;