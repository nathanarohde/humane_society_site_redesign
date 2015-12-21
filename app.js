var petAdoption = angular.module("petAdoption",["ui.router"]);

	petAdoption.config(function($stateProvider,$urlRouterProvider){

		$urlRouterProvider.otherwise("/home");

		$stateProvider

			.state("home",{
				url:"/home",
				templateUrl: "partials/home.html",
				// controller: ""
			});

		// $stateProvider.state("?",{
		// 	url:"",
		// 	templateUrl: "",
		// 	controller: ""
		// });
	});