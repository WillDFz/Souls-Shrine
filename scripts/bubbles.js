var select = function (s) {
    return document.querySelector(s);
  },
  // Variaveis HP
  liquidFrontHP = select(".liquidFrontHP"),
  liquidMaskGroupHP = select(".liquidMaskGroupHP"),
  liquidBackHP = select(".liquidBackHP");

// Variaveis MP
(liquidFrontMP = select(".liquidFrontMP")),
  (liquidMaskGroupMP = select(".liquidMaskGroupMP")),
  (liquidBackMP = select(".liquidBackMP"));
// Globais
var xLink = "http://www.w3.org/1999/xlink";
var isDevice = /android|webos|iphone|ipad|ipod|blackberry/i.test(
  navigator.userAgent.toLowerCase()
);

////// ONLOAD //////
var mySVGHP = document.getElementById("hp");
var mySVGMP = document.getElementById("mana");

function iniciarAnimacoes() {
  if (screen.availWidth <= 768) {
    mySVGHP.setAttribute("viewBox", "0 0 125 450");
    mySVGMP.setAttribute("viewBox", "0 0 125 450");
  } else if (screen.availWidth >= 768) {
    mySVGHP.setAttribute("viewBox", "0 0 600 450");
    mySVGMP.setAttribute("viewBox", "0 0 600 450");
  }
}

var mainTimeline = new TimelineMax();

/// Movimento HP
var frontLiquidTimelineHP = new TimelineMax({ repeat: -1 });
frontLiquidTimelineHP.to(liquidFrontHP, 2.7, {
  x: -600,
  ease: Linear.easeNone,
});

var backLiquidTimelineHP = new TimelineMax({ repeat: -1 });
backLiquidTimelineHP.from(liquidBackHP, 2, {
  x: -600,
  ease: Linear.easeNone,
});

/// Movimento MP

var frontLiquidTimelineMP = new TimelineMax({ repeat: -1 });
frontLiquidTimelineMP.to(liquidFrontMP, 2.3, {
  x: -600,
  ease: Linear.easeNone,
});

var backLiquidTimelineMP = new TimelineMax({ repeat: -1 });
backLiquidTimelineMP.from(liquidBackMP, 2, {
  x: -600,
  ease: Linear.easeNone,
});

TweenMax.set("svg", {
  transformOrigin: "100% 100% 0px",
  //:180,
  scale: 1,
});
