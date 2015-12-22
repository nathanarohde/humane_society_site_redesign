var petAdoption = angular.module("petAdoption",["ui.router"]);

	petAdoption.config(function($stateProvider,$urlRouterProvider){

		$urlRouterProvider.otherwise("/adopt");

		$stateProvider

			.state("adopt",{
				url:"/adopt",
				templateUrl: "partials/adopt.html"
			})

			.state("get-involved",{
				url:"/get-involved",
				templateUrl:"partials/get-involved"
			})

			.state("report-cruelty",{
				url:"/report-cruelty",
				templateUrl:"partials/report-cruelty.html"
			})

			.state("training",{
				url:"/training",
				templateUrl:"partials/training.html"
			})

			.state("services",{
				url:"/services",
				templateUrl:"partials/services.html"
			})

			.state("visit-us",{
				url:"/visit-us",
				templateUrl:"partials/visit-us.html"
			})

			.state("donate",{
				url:"/donate",
				templateUrl:"partials/donate.html"
			});
	});