!function(){"use strict";var e,t={653:function(){var e=window.wp.blocks,t=window.wp.element,r=window.wp.blockEditor;function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}(0,e.registerBlockType)("create-block/dammy-contact-form",{example:{attributes:{message:"Dammy Contact Form"}},edit:function(){const e=(0,r.useBlockProps)({className:"dcf-editor__text--name"});return(0,t.createElement)("div",e,(0,t.createElement)("p",null,"ここにダミーのコンタクトフォームを表示します"))},save:function(){const e=r.useBlockProps.save();return(0,t.createElement)("div",n({},e,{id:"dcf",className:"dcf"}),(0,t.createElement)("div",{className:"dcf__row"},(0,t.createElement)("label",{htmlFor:"dcf__text--name"},"名前"),(0,t.createElement)("input",{type:"text",id:"dcf__text--name",className:"dcf__text--name"})),(0,t.createElement)("div",{className:"dcf__row"},(0,t.createElement)("label",{htmlFor:"dcf__textarea"},"メールアドレス"),(0,t.createElement)("input",{type:"text",id:"dcf__text--email",className:"dcf__text--email"})),(0,t.createElement)("div",{className:"dcf__row"},(0,t.createElement)("label",{htmlFor:"dcf__textarea"},"本文"),(0,t.createElement)("textarea",{id:"dcf__textarea",className:"dcf__textarea"})),(0,t.createElement)("div",{className:"dcf__row txt-algn--center"},(0,t.createElement)("input",{type:"button",className:"dcf__button",value:"送信"})))}})}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var c=r[e]={exports:{}};return t[e](c,c.exports,n),c.exports}n.m=t,e=[],n.O=function(t,r,a,c){if(!r){var o=1/0;for(m=0;m<e.length;m++){r=e[m][0],a=e[m][1],c=e[m][2];for(var l=!0,i=0;i<r.length;i++)(!1&c||o>=c)&&Object.keys(n.O).every((function(e){return n.O[e](r[i])}))?r.splice(i--,1):(l=!1,c<o&&(o=c));if(l){e.splice(m--,1);var s=a();void 0!==s&&(t=s)}}return t}c=c||0;for(var m=e.length;m>0&&e[m-1][2]>c;m--)e[m]=e[m-1];e[m]=[r,a,c]},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,c,o=r[0],l=r[1],i=r[2],s=0;if(o.some((function(t){return 0!==e[t]}))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(i)var m=i(n)}for(t&&t(r);s<o.length;s++)c=o[s],n.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return n.O(m)},r=self.webpackChunkdammy_contact_form=self.webpackChunkdammy_contact_form||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var a=n.O(void 0,[431],(function(){return n(653)}));a=n.O(a)}();