import * as React from 'react';
import {uid} from 'react-uid';
{/*Uid  gives us unique keys for react */}





export default class Cards extends React.Component{
   constructor(props) {
    super(props);
   }

render(){
    return (

<div>
<div className="html not-front not-logged-in one-sidebar sidebar-second page-product-search page-product-search-dirtworking views-based-search dealer-search eu-cookie-compliance-processed">
<header id="header" className="container-max-widths">
<div className="region region-header">
<div id="block-lp_custom_blocks-header" className="block block-lp-custom-blocks header-ribbons block-odd">
<div className="block-inner">
<div className="content">
<div id="primary-nav-ribbon">
</div>
<div id="secondary-nav-ribbon" style={{display: "block"}}>
</div>
</div>
</div>
</div>  
</div>
</header>
<div id="highlight" className="container-max-widths">
<div className="region region-highlight">
<div id="block-lp_custom_blocks-hero_banners_block" className="block block-lp-custom-blocks carousel slide hero-banners-block block-even" data-ride="carousel" data-interval="8000">
<div className="block-inner">
<div className="content">
<div className="carousel-inner contextual-edit-region open">
<div className="carousel-item active" style={{}}>
</div>
</div>
</div>
</div>
</div><div id="block-lp_custom_blocks-product_search_header" className="block block-lp-custom-blocks product-landing-intro block-odd">
<div className="block-inner">
<div className="content">
<div className="product-landing-content container contextual-edit-region">
<h1 className="product-landing-header">dirtworking_grapples</h1>
</div>
</div>
</div>
</div>  
</div>
</div>
<div id="page" className="container">
<div className="h-100 row">
<div className="col-12 col-lg-8 main-content">
<div id="content-middle" className="content">
<header id="content-header" className="content-header"> 
<h1 className="title" id="page-title"> Dirtworking </h1>
<div className="tabs"></div>
</header>


<div id="content-area" className="content-area">
<div className="region region-content">
<div id="block-views-f9efbc2227ed9aaff60fc9d87da279be" className="block block-views block-even">
<div className="block-inner">
<div className="content">
<div className="view view-headers-text-for-misc-view-pages view-id-headers_text_for_misc_view_pages view-display-id-block_4 view-dom-id-fc2f3863f20c1d9919fcb68915585e9e">
<div className="view-content">
<div className="views-row views-row-1 views-row-odd views-row-first views-row-last">
</div>
</div>
  

</div><div id="block-system-main" className="block block-system block-odd">
<div className="block-inner">
<div className="content">
<div className="view view-product-search-faceted view-id-product_search_faceted view-display-id-page_2 view-dom-id-5951e17f0e7d25b6455b4d897b5ced34">
 <div className="view-content">



 {/*Map over data in state return data and key */}
{this.props.Data.map((data, key) => {
return (
 <div className="views-row-odd views-row-first product-list-display contextual-edit-region" key={uid(key)} >
{/* We use UID in the key so React has a unique key to be used for rendering arrays */}

<h2 className="product-series-name"><a href={ data.product_url }>{data.product_name }</a> </h2>
<div className="list-thumbnail"> <a href={ data.product_url }> <img typeOf="foaf:Image" width="375" height="375" src={ data.product_image } alt={data.product_name } /> </a></div>


<div className="item-wrapper"> <div className="horsepower-teaser"> { data.model_numbers}</div>
<div className="product-summary">
{ data.description }
</div>

<a className="btn btn-primary btn-large" href= { data.product_url } >  Read More </a>
</div></div>
);
})}

   

      
  
  
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
 
  
          
    
  
  

  );
};
}

