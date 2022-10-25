"use strict";
(() => {
var exports = {};
exports.id = 515;
exports.ids = [515];
exports.modules = {

/***/ 139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@sanity/client"
const client_namespaceObject = require("@sanity/client");
var client_default = /*#__PURE__*/__webpack_require__.n(client_namespaceObject);
;// CONCATENATED MODULE: ./client.js

/* harmony default export */ const client = (client_default()({
    projectId: "yscqxtjv",
    dataset: "production",
    useCdn: true
}));

;// CONCATENATED MODULE: ./pages/post/[slug].js


const Post = ({ post  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("article", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
            children: post?.slug?.current
        })
    });
};
async function getStaticPaths() {
    const paths = await client.fetch(`*[_type == "post" && defined(slug.current)][].slug.current`);
    return {
        paths: paths.map((slug)=>({
                params: {
                    slug
                }
            })),
        fallback: true
    };
}
async function getStaticProps(context) {
    const { slug =""  } = context.params;
    const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]`, {
        slug
    });
    return {
        props: {
            post
        }
    };
}
/* harmony default export */ const _slug_ = (Post);


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(139));
module.exports = __webpack_exports__;

})();