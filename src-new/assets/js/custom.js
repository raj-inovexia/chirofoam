(function() {
  function asyncLoad() {
    var script_tag = document.createElement('script');
    script_tag.type = 'text/javascript';
    script_tag.text = "var Shopify = Shopify || {};";
    script_tag.text += 'Shopify.shop = "chirofoam.myshopify.com";';
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(script_tag, x);
    var urls = ["https:\/\/reviews.hulkapps.com\/js\/reviews-by-hulkapps.js?shop=chirofoam.myshopify.com"];
    for (var i = 0; i < urls.length; i++) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = urls[i];
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    }
  };
  if(window.attachEvent) {
    window.attachEvent('onload', asyncLoad);
  } else {
    window.addEventListener('load', asyncLoad, false);
  }
})();