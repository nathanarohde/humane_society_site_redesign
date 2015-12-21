var petAdoption = angular.module("petAdoption",["ui.router"]);

	petAdoption.config(function($stateProvider,$urlRouterProvider){

		$urlRouterProvider.otherwise("/adopt");

		$stateProvider

			.state("adopt",{
				url:"/adopt",
				templateUrl: "partials/adopt.html",
				// controller: ""
			})

			.state("report-cruelty",{
				url:"/report-cruelty",
				templateUrl:"partials/report-cruelty.html"
			})

			.state("visit-us",{
				url:"/visit-us",
				templateUrl:"partials/visit-us.html"
			});

		// $stateProvider.state("?",{
		// 	url:"",
		// 	templateUrl: "",
		// 	controller: ""
		// });
	});