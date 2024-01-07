const CropsDB = require("../database/crops");
module.exports = {
  createCrop: async (req, res, next) => {
    try {
     
      var name = req.body.name;
      var price = req.body.price;
      var detail = req.body.detail;
      var id = req.body.id;
      data = {
        id:id,
        name:name,
        price:price,
        detail:detail,
      };
      console.log(data);
      const result = await new CropsDB(data).save();
      if (result.status == 500) {
        return res.status(200).send({ result });
      } else {
        return res.status(200).send({ status: 200, result });
      }
    } catch (error) {
      return res.status(200).send({ status: 500, error });
    }
  },
  getAllCrops: async (req, res) => {
    try {
      items = await CropsDB.find();
      console.log(items);
      return res.status(200).send({ status: 200, items });
    } catch (error) {
      return res.status(200).send({ status: 500, error });
    }
  },
  updateCrop: async (req, res) => {
    try {
      console.log(req.body)
      var id = req.body.id;
      var name = req.body.name;
      var price = req.body.price;
      var detail = req.body.detail;
      var data = {
        id:id,
        name:name, 
        price:price,
        detail:detail
      }
      const item = await CropsDB.findOneAndUpdate(
        {id:id},
        data
      );
      console.log(data)
      return res.status(200).send({ status: 200, item });
    } catch (error) {
      return res.status(200).send({ status: 500, error });
    }
  },
  deleteCrop: async (req, res) =>{
    try {
      console.log(req.body)
      var id = req.body.id;
      result = await CropsDB.findOneAndDelete({id:id})
      return res.status(200).send({ status: 200, result });
    } catch (error) {
      return res.status(200).send({ status: 500, error });
    }
  }
};
