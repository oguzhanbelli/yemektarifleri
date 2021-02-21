angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope,$stateParams) {
  $scope.yemekler = [
    { adi: 'Lezzet Garantili: Patates Oturtma',kategori:'Yemek',malzemeler:'4 Adet büyük boy patates 3 Yemek kaşığı zeytinyağı 1 yemek kaşığı tereyağı 500 gram orta yağlı kıyma  1 adet büyük boy kuru soğan1 diş sarımsak 4 adet sivri biber 1,5 su bardağı domates konservesi(küp küp kesilmiş) (veya 2 adet domates)1 yemek kaşığı domates salçası 1 çay kaşığı tuz 1/2 çay kaşığı karabiber 1 çay kaşığı kimyon 1 çay kaşığı pul biber',yapilis:'Patatesleri soyup ince yuvarlaklar halinde doğrayın. Fırın tepsisine yayıp 2 yemek kaşığı zeytinyağıyla yağlayıp hafifçe tuzlayın ve önceden ısıtılmış 180 derece fırında 15 dakika pişirip kenara alın.',tel:'4440444',logo :'https://cdn.yemek.com/mncrop/313/280/uploads/2015/03/patates-oturtma-guncelleme-sunum-3.jpg', id:0 },
    { adi: 'Kakaolu Islak Kek',kategori:'Kek',malzemeler:'3 adet yumurta 1 su bardağı toz şeker 1 su bardağı süt 1 su bardağı ayçiçek yağı 1 paket vanilya 2 yemek kaşığı kakao 1 paket kabartma tozu 1 su bardağı un +2 yemek kaşığı un',yapilis:'1.Derin bir kasede yumurta ve şekeri aktarın,  Şeker eriyip, karışım krema kıvamına gelene kadar çırpın.',tel:'4440444',logo :'https://cdn.yemek.com/mncrop/940/625/uploads/2015/07/islak-kek-ytk-site.jpg', id:1 },
    { adi: 'Sodalı Rulo Börek',kategori:'Unlu Mamüller',malzemeler:'3 adet yufka 1 çay bardağı sıvı yağ 100 gram tereyağı 1 adet maden suyu',yapilis:'Yufkaları önce ortadan ikiye, sonra tekrar ikiye bölerek 4 parçaya ayırın. Ardından her bir parçayı tekrar ikiye bölün ve bir yufkadan 8 adet parça elde edin.Erittiğiniz tereyağına bir çay bardağı sıvı yağı karıştırın ve yufka parçalarının üstüne sürün.',kategori:'Unlu Mamüller',tel:'4440444',logo :'https://cdn.yemek.com/mncrop/940/625/uploads/2020/11/sodali-rulo-borek-one-cikan.jpg', id: 2 },
    { adi: 'Herkes Şaşkın: Milföyden Poğaça',kategori:'Kahvaltılık',tel:'4440444',logo :'https://cdn.yemek.com/mncrop/940/625/uploads/2020/12/milfoyden-pogaca-sunum-2.jpg', id: 3 },
    { adi: 'Çok Pratik: Mayasız Pofuduk Pişi',kategori:'Kahvaltılık',tel:'4440444',logo:'https://cdn.yemek.com/mncrop/940/625/uploads/2020/12/mayasiz-pofuduk-pisi-yemekcom.jpg', id: 4 },
    { adi: 'Ağızda Dağılan Kıvamıyla: Elmalı Kurabiye',kategori:'Kurabiye',tel:'4440444',logo:'https://cdn.yemek.com/mncrop/940/625/uploads/2014/06/elmali-kurabiye-ytk-site.jpg', id: 5 },
    { adi: 'Balkanlardan Gelen Lezzet Dalgası: Trileçe',kategori:'Tatlı',tel:'4440444',logo:'https://cdn.yemek.com/mncrop/940/625/uploads/2014/11/trilece-ytk-site.jpg', id: 6 },
    { adi: 'Bir Dilim Daha: Borcamda Kesme Muhallebi',kategori:'Tatlı',tel:'4440444',logo:'https://cdn.yemek.com/mncrop/940/625/uploads/2020/11/borcamda-kesme-muhallebi-sunum-3.jpg', id: 7 }
  ];
  console.log("ID:"+$stateParams.yemekId);
  if($stateParams.yemekId){
    $scope.bilgi=$scope.yemekler[$stateParams.yemekId];
  }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
