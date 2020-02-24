var Shopify = Shopify || {};
Shopify.shop = "chirofoam.myshopify.com";
Shopify.currency = {"active":"CAD","rate":"1.0"};
Shopify.theme = {"name":"Venture","id":80657383479,"theme_store_id":775,"role":"main"};
Shopify.theme.handle = "null";
Shopify.theme.style = {"id":null,"handle":null};
(function() {
  function asyncLoad() {
    var script_tag = document.createElement('script');
    script_tag.type = 'text/javascript';
    script_tag.text = 'var Shopify = Shopify || {};\n
    Shopify.shop = "chirofoam.myshopify.com";\n
    Shopify.currency = {"active":"CAD","rate":"1.0"};\n
    Shopify.theme = {"name":"Venture","id":80657383479,"theme_store_id":775,"role":"main"};\n
    Shopify.theme.handle = "null";\n
    Shopify.theme.style = {"id":null,"handle":null};';
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
console.log('hello')
