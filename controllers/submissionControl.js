var submissionModel = require('../models/submissionModel.js');



module.exports = {

	formView: function(req,res){
		res.render('submit.jade',{})
	},


	submit: function(req,res){
		req.body.votes=0;
		req.body.id=submissionModel.submissions.length;
		submissionModel.submissions.push(req.body);
		console.log(req.body)
		res.redirect('/')
	},

	viewAll: function(req,res){
		if(submissionModel.length>8){
			res.render('full.jade',{});
		} else {
			res.render('submissions.jade',{
				submissions:submissionModel.submissions,
		})
		}
	},

	updateVote: function(req,res){
		var voteID = req.params.id;
		submissionModel.submissions[voteID].votes += 1;
		res.redirect('/submissions');
	}

}