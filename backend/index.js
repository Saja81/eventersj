"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import mongoose from 'mongoose';
// import {
//   MongooseConnect,
//   User,
//   Work,
//   About,
//   Contact,
//   Blog,
// } from './interfaces';
// import { addWork, addAbout, addBlog } from './data';
// import path from 'path';
const cors_1 = __importDefault(require("cors"));
// import moment from 'moment';
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    response.status(200).send("Välkommen till vårt backend!");
}));
app.listen(8080, () => {
    console.log("Redo på http://localhost:8080/");
});
