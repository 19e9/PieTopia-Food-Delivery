import userModel from "../models/userModel.js"

// add items to user cart
// Kullanıcı sepetine ürün ekleme
const addToCart = async (req,res) => {
    try {
          // Kullanıcı verilerini çek
        let userData = await userModel.findOne({_id:req.body.userId});
        // Sepet verilerini al
        let cartData = await userData.cartData;
        // Ürün sepet verilerinde yoksa ekle, varsa miktarını arttır
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        }
        else{
            cartData[req.body.itemId] += 1;
        }
         // Güncellenmiş sepet verilerini kaydet
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        // Başarı mesajı gönder
        res.json({success:true,message:"Sepete eklendi"});
    } catch (error) {
         // Hata mesajı gönder ve hatayı konsola yazdır
        console.log(error)
        res.json({success:false,message:"Hata oluştu !"})
    }
}

// reomve items from user cart
const removeFromCart = async (req,res) => {

}


// fetch user cart data
const getCart = async (req,res) => {

}

export { addToCart, removeFromCart, getCart }