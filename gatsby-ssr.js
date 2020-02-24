/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react";
export function onRenderBody(
  { setHeadComponents }
) {
 setHeadComponents([
     <script
        key="abc"
        type="text/javascript"
        async={true}
        src="https://reviews.hulkapps.com/js/reviews-by-hulkapps.js?shop=chirofoam.myshopify.com"
      />,
  ]);
}
