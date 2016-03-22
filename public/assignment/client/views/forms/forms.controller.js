(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("FormsController", FormsController);

    function FormsController($scope, $rootScope, FormService, $location) {
        $scope.$location = $location;
        $scope.forms = FormService.findAllForms($rootScope.currentUser._id);
        console.log('this is $scope.forms');
        console.log($scope.forms);

        $scope.addForm = addForm;
        $scope.updateForm = updateForm;
        $scope.deleteForm = deleteForm;
        $scope.selectForm = selectForm;

        function addForm(form) {
            FormService.createFormForUser($rootScope.currentUser._id, form)
                .then(function(res){
                    $scope.forms.push(res);
                })
        }

        function updateForm(form) {
            FormService.updateFormById(form._id, form);
        }

        function deleteForm(form) {
            FormService.deleteFormById(form._id);
        }

        function selectForm(index) {
            $scope.selectedFormIndex = index;
            $scope.form = {
                title: $scope.forms[index].title
            }
        }
    }
})();