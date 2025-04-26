import Product from "../Models/products.model.js";
import express from "express";
import upload from "../cloudinary/upload.js";

export const createProduct = async(req,res)=>{

    try {
        const {name,description,price,quantity,category} = req.body

        const imageURL = req.file.path;
        console.log("Image Path:", imageURL);
        const product = await Product.create({
            name,
            description,
            price,
            quantity,
            category,
            image:imageURL
        })

        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
        console.log("Error in Create Product",error)
    }
}

export const getAllProduct = async(req,res)=>{
    try {
        const product = await Product.find({})
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
        console.log("Error in Get All Product",error)
    }
}

export const getSingleProduct = async(req,res)=>{
    try {
        const {id} = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
        console.log("Error in Get Single Product",error)
    }
}

export const updateProduct = async(req,res)=>{
    try {
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id,req.body)
        if(!product){
            return res.status(401).json({message:"Product dose not exist"})
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).json({message:error.message})
        console.log("Error in Updating Product",error)
    }
}

export const deleteProduct = async(req,res)=>{
    try {
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id,req.body)
        if(!product){
            return res.status(401).json({message:"Product dose not exist"})
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json({updatedProduct,message:"product deleted succeesfully"})
    } catch (error) {
        res.status(500).json({message:error.message})
        console.log("Error in Updating Product",error)
    }
}