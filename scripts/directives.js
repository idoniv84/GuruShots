myApp.directive("homePage", function() {
  return {
    restrict: "E",
    templateUrl: "/templates/homepage.html",
    link: function(scope, element, attrs) {
      const gurushotsAppear = function() {
        $(".gurushots1")
          .delay(1600)
          .animate(
            {
              opacity: 1
            },
            200
          );
        $(".gurushots2")
          .delay(1800)
          .animate(
            {
              opacity: 1
            },
            200
          );
        $(".gurushots3")
          .delay(2000)
          .animate(
            {
              opacity: 1
            },
            200
          );
      };

      const imagesAppear = function() {
        $(".item1, .item2, .item4")
          .delay(200)
          .animate(
            {
              opacity: 1
            },
            200
          );
        $(".item3, .item5, .item7")
          .delay(300)
          .animate(
            {
              opacity: 1
            },
            200
          );
        $(".item6, .item8, .item9")
          .delay(400)
          .animate(
            {
              opacity: 1
            },
            200
          );
      };
      var once = false;

      const textContainerAppear = function() {
        $(".img3")
          .delay(600)
          .animate({
            opacity: "1.0",
            marginTop: "-=20px",
            marginLeft: "-=20px",            
          });
        $(".textContainer3")
          .delay(600)
          .animate(
            {
              opacity: 1,
              marginTop: "-=30px"
            },
            600
          );
        once = true;
      };

      element.ready(function() {
        $(window).scroll(function() {
          if ($(window).scrollTop() > 800) {
            imagesAppear();
            gurushotsAppear();
          }
          if ($(window).scrollTop() > 1400 && once === false) {
            textContainerAppear();
          }
        });
      });

      scope.$on("$destroy", function() {
        $(window).removeEventListener("scroll", function() {});
      });
      console.log("destroy");
    }
  };
});

myApp.directive("pageText", function() {
  return {
    restrict: "E",
    templateUrl: "/templates/pageText.html",
    scope: {
      title: "=",
      subTitle: "=",
      joinNow: "="
    }
  };
});

myApp.directive("bar", function() {
  return {
    restrict: "E",
    templateUrl: "/templates/bar.html"
  };
});
