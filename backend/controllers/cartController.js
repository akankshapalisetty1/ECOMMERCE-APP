import jwt from 'jsonwebtoken'
import userModel from "../models/userModel.js"

// add products to user cart
const addToCart = async (req,res) => {
    try {

        const { userId,itemId, size } = req.body

        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;
        
        if (cartData[itemId]) {
            if(cartData[itemId][size]) {
                cartData[itemId][size] += 1
            }
            else {
                cartData[itemId][size] = 1
            }

        } else {
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }

            await userModel.findByIdAndUpdate(userId, {cartData})

            res.json({ success: true, message: "Added To Cart"})

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message})
    }

}

/*const updateCart = async (req, res) => {
    try {
        const { userId, itemId, size, quantity } = req.body;

        console.log("Updating cart for:", userId, itemId, size, quantity);


        const userData = await userModel.findById(userId);
        let cartData = { ...userData.cartData };

        if (!cartData[itemId]) {
            return res.json({ success: false, message: "Item not in cart" });
        }

        if (quantity === 0) {
            // Delete the size
            delete cartData[itemId][size];

            // If that item has no sizes left, delete the item
            if (Object.keys(cartData[itemId]).length === 0) {
                delete cartData[itemId];
            }
        } else {
            // Update the quantity
            cartData[itemId][size] = quantity;
        }

        await userModel.findByIdAndUpdate(userId, { cartData });

        res.json({ success: true, message: "Cart updated" });

    } catch (error) {
        console.log("Error in updateCart:", error);
        res.json({ success: false, message: error.message });
    }
};*/


// update user cart
const updateCart = async (req,res) => {

    try {

        const {  userId,itemId, size, quantity } = req.body

        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        cartData[itemId][size] = quantity

        await userModel.findByIdAndUpdate(userId, {cartData})

        res.json({ success: true, message: "Cart Updated"})
        
        
    } catch (error) {
         console.log(error)
        res.json({ success: false, message: error.message})    
    }

}


// get user cart data
/*const getUserCart = async (req,res) => {

    try {

        const { userId } = req.body

        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        res.json({ success: true, cartData })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
  

};*/

const getUserCart = async (req, res) => {
    try {
        const token = req.headers.token;
        if (!token) return res.json({ success: false, message: "No token" });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;

        const userData = await userModel.findById(userId);
        let cartData = userData.cartData || {};

        res.json({ success: true, cartData });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};


export { addToCart, updateCart, getUserCart }

