angular
.module("formApp").directive("footer", function() {
  return {
    restrict: 'A',
    templateUrl: 'footer/footer.html',
    scope: true,
    transclude : false,
    controller: 'FooterController'
  };
});