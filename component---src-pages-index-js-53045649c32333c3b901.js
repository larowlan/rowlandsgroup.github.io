(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(147),s=a(160),o=a(146),l=a(161),d=a.n(l),c=function(){return i.a.createElement(o.a,{query:"4145719641",render:function(e){return i.a.createElement(d.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:s})},u=a(150);t.default=function(){return i.a.createElement(n.a,null,i.a.createElement(u.a,{title:"Home"}),i.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},i.a.createElement(c,null)))}},145:function(e,t,a){var r;e.exports=(r=a(149))&&r.default||r},146:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=(a(33),a(145),i.a.createContext({})),l=function(e){return i.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},147:function(e,t,a){"use strict";var r=a(148),i=a(0),n=a.n(i),s=a(4),o=a.n(s),l=a(146),d=(a(152),function(e){var t=e.children;return n.a.createElement(l.a,{query:"755544856",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"2rem 1.0875rem 1.45rem",paddingTop:0}},n.a.createElement("main",null,t),n.a.createElement("footer",null,"© ",(new Date).getFullYear())))},data:r})});d.propTypes={children:o.a.node.isRequired},t.a=d},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Rowlands Group"}}}}},149:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(56),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d},150:function(e,t,a){"use strict";var r=a(151),i=a(0),n=a.n(i),s=a(4),o=a.n(s),l=a(153),d=a.n(l);function c(e){var t=e.description,a=e.lang,i=e.meta,s=e.title,o=r.data.site,l=t||o.siteMetadata.description;return n.a.createElement(d.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:s},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:l}].concat(i)})}c.defaultProps={lang:"en",meta:[],description:""},c.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=c},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Rowlands Group",description:"Rowlands Group is a boutique Drupal, Web and Smart-Phone Development firm based out of Moore Park Beach in sub-tropical Queensland Australia.",author:"@larowlan"}}}}},160:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+0lEQVQI12NwDLNZktqQ+r+ys7rz/5//QleuXlG9ffu2wObNm8XOnj1rf+PGDcW7d++qnzhxQvn06dNenz59kj18+LDAjh07NI4ePSq3YcMGxSNHjnBs3bpVcfv27bIMAZle/yevmP5/+sK531avXB156NChAKCCRKDi1L179+YD2VknT54M27lzZwSQDeKXrlmzJnDJkiXFCxYsCJwzZ04EkO23bNmyvLVr1/owpOWnratsbPycX1jWzQAEQBslt23bpnjw4EGZGTNmCANdqrh48WImoAZxoJzc+vXrRTs7O22BfK+AgACOyZMnSzY2Nor09/fbLVq0SBEAXqmIQs/DvcYAAAAASUVORK5CYII=",aspectRatio:6.3604651162790695,src:"/static/06326f024aa970c01f7f6193a0842c5a/fdbb0/logo.png",srcSet:"/static/06326f024aa970c01f7f6193a0842c5a/e22c9/logo.png 75w,\n/static/06326f024aa970c01f7f6193a0842c5a/d3809/logo.png 150w,\n/static/06326f024aa970c01f7f6193a0842c5a/fdbb0/logo.png 300w,\n/static/06326f024aa970c01f7f6193a0842c5a/b5207/logo.png 450w,\n/static/06326f024aa970c01f7f6193a0842c5a/9d7bc/logo.png 547w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},161:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),s=r(a(35)),o=r(a(75)),l=r(a(76)),d=r(a(0)),c=r(a(4)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,h=m&&window.IntersectionObserver,b=new WeakMap;var y=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},w=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+r+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+o+l+a+i+t+s+n+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},S=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},f,{onLoad:s,onError:c,ref:t,loading:u,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});S.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var v=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=m&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&h&&!t.critical&&!a.seenBefore;var r=t.critical||m&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=y(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,v=e.itemProp,E=e.loading,A=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,l.default)({opacity:A?1:0,transition:L?"opacity "+b+"ms":"none"},o),R="boolean"==typeof h?"lightgray":h,z={transitionDelay:b+"ms"},O=(0,l.default)({opacity:this.state.imgLoaded?0:1},L&&z,o,f),q={title:t,alt:this.state.isVisible?"":a,style:O,className:p};if(g){var C=g;return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(C.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/C.aspectRatio+"%"}}),R&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&z)}),C.base64&&d.default.createElement(S,(0,l.default)({src:C.base64},q)),C.tracedSVG&&d.default.createElement(S,(0,l.default)({src:C.tracedSVG},q)),this.state.isVisible&&d.default.createElement("picture",null,C.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:C.srcSetWebp,sizes:C.sizes}),d.default.createElement(S,{alt:a,title:t,sizes:C.sizes,src:C.src,crossOrigin:this.props.crossOrigin,srcSet:C.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:E})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:w((0,l.default)({alt:a,title:t,loading:E},C))}}))}if(m){var N=m,T=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:N.width,height:N.height},n);return"inherit"===n.display&&delete T.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:T,ref:this.handleRef,key:"fixed-"+JSON.stringify(N.srcSet)},R&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:R,width:N.width,opacity:this.state.imgLoaded?0:1,height:N.height},L&&z)}),N.base64&&d.default.createElement(S,(0,l.default)({src:N.base64},q)),N.tracedSVG&&d.default.createElement(S,(0,l.default)({src:N.tracedSVG},q)),this.state.isVisible&&d.default.createElement("picture",null,N.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:N.srcSetWebp,sizes:N.sizes}),d.default.createElement(S,{alt:a,title:t,width:N.width,height:N.height,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:E})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:w((0,l.default)({alt:a,title:t,loading:E},N))}}))}return null},t}(d.default.Component);v.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var E=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),A=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});v.propTypes={resolutions:E,sizes:A,fixed:E,fluid:A,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"])};var L=v;t.default=L}}]);
//# sourceMappingURL=component---src-pages-index-js-53045649c32333c3b901.js.map