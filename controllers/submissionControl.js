var submissionModel = require('../Models/submissionModel.js');



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
			res.render('submissions.jade',{
				submissions:submissionModel.submissions,
		})
	},

	updateVote: function(req,res){
		var voteID = req.params.id;
		submissionModel.submissions[voteID].votes += 1;
		res.redirect('/submissions');
	},

	results: function(req,res){
		console.log(submissionModel.submissions)
			res.render('results.jade',{
				submissions:submissionModel.submissions,
		});
	}

}