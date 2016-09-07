'use strict';

/**
 * @ngdoc function
 * @name yoResume.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoResume
 */
angular.module('yoResume')
  .controller('MainCtrl', function ($scope) {
  	/*contact*/
    $scope.showContact = true;
    $scope.contactIcon = 'glyphicon-plus'; 
    $scope.setContact = function() {
    	$scope.showContact = !$scope.showContact;
    	$scope.contactIcon = $scope.contactIcon == 'glyphicon-plus' ? 'glyphicon-minus' : 'glyphicon-plus';
    }
    /*education*/
    $scope.showEducation = true;
    $scope.educationIcon = 'glyphicon-plus';
    $scope.edus = [];
    $scope.addEdu = function() {
    	$scope.edus.push($scope.edu);
    	$scope.edu = '';
    }
    $scope.removeEdu = function(index) {
    	$scope.edus.splice(index, 1);
    }
    $scope.setEducation = function() {
    	$scope.showEducation = !$scope.showEducation;
    	$scope.educationIcon = $scope.educationIcon == 'glyphicon-plus' ? 'glyphicon-minus' : 'glyphicon-plus';
    }
    /*skill*/
    $scope.showSkill = true;
    $scope.skillIcon = 'glyphicon-plus'; 
    $scope.skills = [];
    $scope.addSkill = function() {
    	$scope.skills.push($scope.skill);
    	$scope.skill = '';
    }
    $scope.removeSkill = function(index) {
    	$scope.skills.splice(index, 1);
    }
    $scope.setSkill = function() {
    	$scope.showSkill = !$scope.showSkill;
    	$scope.skillIcon = $scope.skillIcon == 'glyphicon-plus' ? 'glyphicon-minus' : 'glyphicon-plus';
    }
  });
