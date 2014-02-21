var submissionModel = require('../models/submissionModel.js');

module.exports = {

	submit: function(req,res){
		res.render('submit.jade',{})
	},

	getInfo: function(req,res){
		console.log(req.body);
		submissionArray=[];
		submissionArray.push(req.body);
		res.render('submissions.jade' , {
			submissions:submissionArray
		})
	}
}