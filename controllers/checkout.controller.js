const CheckOut = require("../models/CheckOut");
const PriceList = require("../models/PriceList");

async function returnPrice(req,res,next){
	const { first_name,address, last_name, email, phone_number, state, city, additional_phone_number,directions } = req.body;

	if(!first_name || !address || !directions || !last_name || !email || !phone_number || !state || !city || !additional_phone_number){
		return res.status(422).send({ message: "All fields are required!" });
	}

	CheckOut.create({ address,directions,first_name, last_name, email, phone_number, state, city, additional_phone_number,directions,products })
      .then(() => {
      	PriceList.findOne({ city })
      	  .then((data) => {
      	  	const { estimatePrice,...others } = data._doc;
      	  	res.status(200).send({ estimatePrice });
      	  })
      	  .catch(() => res.status(422).send({ message: "An error occured please try again later!" }))
      })
      .catch(() => res.status(400).send({ message: "An unknown error occured..." }))
}

async function returnCheck(req,res,next){
	const { id } = req.params;
	const checkouts = await CheckOut.find({ customer_id: id });
	const others= checkouts.map((p) => { address,directions,first_name, last_name, email, phone_number, state, city, additional_phone_number,directions });
	return res.status(200).send(others);
}

module.exports = { returnPrice,returnCheck }
