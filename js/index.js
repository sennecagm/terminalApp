angular.module("codeList",[]);
angular.module("codeList")
.controller("code.list",function($scope){
  $scope.title = "Code List App";
  $scope.alpha = "code";
  $scope.list=[
    {code:"git init"},
    {code:"git add -A"},
    {code:'git commit -m Initial commit'},
    {code:"cd"}
  ];
})

// 