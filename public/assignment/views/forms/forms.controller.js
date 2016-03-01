(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("FormsController", FormsController);

    function FormsController($scope, $rootScope, FormService, $location) {
        $scope.$location = $location;
        $scope.forms = FormService.findAllForms($rootScope.currentUser._id);

        $scope.addForm = addForm;
        $scope.updateForm = updateForm;
        $scope.deleteForm = deleteForm;
        $scope.selectForm = selectForm;

        function addForm(form) {
            FormService.createFormForUser($rootScope.currentUser, form);
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