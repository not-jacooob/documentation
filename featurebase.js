// Load Featurebase SDK
(function(e,t){
  var a="featurebase-sdk";

  function n(){
    if(!t.getElementById(a)){
      var s=t.createElement("script");
      s.id=a;
      s.src="https://do.featurebase.app/js/sdk.js";
      t.getElementsByTagName("script")[0]
       .parentNode
       .insertBefore(s,t.getElementsByTagName("script")[0]);

      s.onload=function(){
        window.Featurebase("boot", {
          appId: "6a43dcaa5ee2bdfca2e26beb",
          theme: "light",
          language: "en"
        });
      }
    }
  }

  if(typeof e.Featurebase!=="function"){
    e.Featurebase=function(){
      (e.Featurebase.q=e.Featurebase.q||[]).push(arguments)
    }
  }

  if(
    t.readyState==="complete" ||
    t.readyState==="interactive"
  ){
    n();
  } else {
    t.addEventListener("DOMContentLoaded", n);
  }

})(window, document);