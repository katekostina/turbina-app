(this.webpackJsonpturbina=this.webpackJsonpturbina||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),r=n(8),i=n.n(r),l=(n(15),n(2)),o=[{link:"https://music.yandex.ru/",name:"\u042f\u043d\u0434\u0435\u043a\u0441.\u041c\u0443\u0437\u044b\u043a\u0430",id:0},{link:"https://www.spotify.com/ru-ru/",name:"Spotify",id:1},{link:"https://www.apple.com/ru/apple-music/",name:"Apple Music",id:2},{link:"https://vk.com/vkmusic",name:"VK Music",id:3}],u=function(){return Object(a.jsxs)("svg",{width:"19",height:"19",viewBox:"0 0 19 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(a.jsx)("line",{x1:"4.9034",y1:"4.90373",x2:"14.0958",y2:"14.0961",stroke:"white",strokeWidth:"2"}),Object(a.jsx)("line",{x1:"4.90422",y1:"14.0961",x2:"14.0966",y2:"4.90373",stroke:"white",strokeWidth:"2"})]})};var j=function(){var e=n(6),t=Object(c.useState)(!0),s=Object(l.a)(t,2),r=s[0],i=s[1],j=Object(c.useState)(!1),m=Object(l.a)(j,2),d=m[0],h=m[1];return Object(a.jsxs)("div",{className:"streamings",children:[Object(a.jsx)("button",{className:e("streamings__open-btn",{"streamings__open-btn_is-clicked":d}),onClick:function(){i(!r),h(!d)},children:d?Object(a.jsx)(u,{}):"\u0421\u0442\u0440\u0438\u043c\u0438\u043d\u0433\u0438"}),Object(a.jsx)("ul",{className:e("streamings__list",{streamings__list_type_mobile:!r}),children:o.map((function(e){return Object(a.jsx)("li",{className:"streamings__list-item",children:Object(a.jsxs)("a",{className:"streamings__link",rel:"noreferrer",href:e.link,target:"_blank",children:[e.name," \u2197"]})},e.id)}))})]})},m=n(7),d=n.n(m);n(17);var h=function(e){var t=e.title,n=e.musician,c=e.poet,s=(e.songTime,e.onClick),r=e.curTime,i=e.duration;return Object(a.jsxs)("div",{className:"song",children:[Object(a.jsxs)("div",{className:"song__container",children:[Object(a.jsxs)("span",{className:"song__titles",children:[Object(a.jsxs)("span",{className:"song__title",children:[t," \u2014 "]}),Object(a.jsx)("span",{className:"song__title",children:n}),Object(a.jsx)("span",{className:"song__title",children:" feat. "}),Object(a.jsx)("span",{className:"song__title",children:c})]}),Object(a.jsx)("span",{className:"song__timer",curTime:r,duration:i,children:function(e){return d.a.duration(e,"seconds").format("mm:ss",{trim:!1})}(i-r)})]}),Object(a.jsx)("div",{className:"song__progress-bar",onClick:function(e){var t=e.target.getBoundingClientRect(),n=(e.clientX-t.left)/t.width*100;s(i/100*n)},children:Object(a.jsx)("div",{className:"song__progress-knob",style:{width:"".concat(r/i*100,"%")}})})]})},b=function(){return Object(a.jsx)("svg",{width:"100%",height:"100%",viewBox:"0 0 14 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1 0C0.447266 0 0 0.447266 0 1V17C0 17.5527 0.447266 18 1 18H3C3.55273 18 4 17.5527 4 17V1C4 0.447266 3.55273 0 3 0H1ZM11 0C10.4473 0 10 0.447266 10 1V17C10 17.5527 10.4473 18 11 18H13C13.5527 18 14 17.5527 14 17V1C14 0.447266 13.5527 0 13 0H11Z",fill:"white"})})},p=function(){return Object(a.jsx)("svg",{width:"100%",height:"100%",viewBox:"0 0 20 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(a.jsx)("path",{d:"M18.47 11.3307C19.668 12.1211 19.668 13.8789 18.47 14.6693L3.10149 24.81C1.77177 25.6873 6.9507e-07 24.7337 7.64706e-07 23.1406L1.65123e-06 2.85939C1.72086e-06 1.2663 1.77177 0.312659 3.10149 1.19004L18.47 11.3307Z",fill:"white"})})},x=n(6),O=function(e){var t=e.isPlaying,n=e.handleClick;return Object(a.jsxs)("button",{className:x("play-button",{"play-button__pause":t,"play-button__play":!t}),onClick:n,children:[" ",t?Object(a.jsx)(b,{}):Object(a.jsx)(p,{})]})};var f=function(e){var t=e.songs,n=e.changeCurSong;return Object(a.jsx)("ul",{className:"playlist",children:t.map((function(e){return Object(a.jsxs)("li",{className:"playlist__row",onClick:function(){return n(e)},children:[e.title&&Object(a.jsxs)("span",{className:"playlist__title",children:[e.title," \u2014 "]}),e.musician&&Object(a.jsx)("span",{className:"playlist__title",children:e.musician}),Object(a.jsx)("span",{className:"playlist__feat",children:" feat. "}),e.poet&&Object(a.jsx)("span",{className:"playlist__title",children:e.poet})]},e.id)}))})};var _=function(e){var t=e.lyricsShown,n=e.onClick;return Object(a.jsx)("button",{className:"switch-button",onClick:n,children:t?"\u0420\u0435\u043b\u0438\u0437\u044b":"\u0422\u0435\u043a\u0441\u0442 \u043f\u0435\u0441\u043d\u0438"})},g=function(){return Object(a.jsx)("svg",{width:"100%",height:"100%",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM10.5867 12L7.05116 8.46447L8.46537 7.05025L12.0009 10.5858L15.5364 7.05025L16.9507 8.46447L13.4151 12L16.9507 15.5355L15.5364 16.9497L12.0009 13.4142L8.46537 16.9497L7.05116 15.5355L10.5867 12Z",fill:"white"})})},v=function(){return Object(a.jsx)("svg",{width:"100%",height:"100%",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12.6402 8.23178L12 7.69829L11.3598 8.23178L5.35982 13.2318L6.64018 14.7682L12 10.3017L17.3598 14.7682L18.6402 13.2318L12.6402 8.23178Z",fill:"white"})})},N=function(e){var t=e.onClick,n=e.isExpanded;return Object(a.jsx)("button",{className:"expander-button",onClick:t,children:n?Object(a.jsx)(g,{}):Object(a.jsx)(v,{})})},w=[{id:"0",title:"\u041d\u0430 \u0437\u0430\u0440\u0435",musician:"\u041c\u043e\u043d\u0435\u0442\u043e\u0447\u043a\u0430",poet:"\u0410\u043b\u044c\u044f\u043d\u0441",audio:n.p+"static/media/nazare.58888316.mp3",cover:"../images/cover.png",videoUrl:"https://youtu.be/BvJle-E_4JI",lyrics:"\u0420\u043e\u0432\u043d\u044b\u0439 \u0431\u0435\u0433 \u043c\u043e\u0435\u0439 \u0441\u0443\u0434\u044c\u0431\u044b\n    \u041d\u043e\u0447\u044c, \u043f\u0435\u0447\u0430\u043b\u044c \u0438 \u0431\u043b\u0435\u0441\u043a \u0434\u0443\u0448\u0438\n    \u041b\u0443\u043d\u043d\u044b\u0439 \u0441\u0432\u0435\u0442 \u0438 \u043c\u0430\u0439\u0441\u043a\u0438\u0439 \u0434\u043e\u0436\u0434\u044c\n    \u0412 \u043d\u0435\u0431\u0435\u0441\u0430\u0445\n    \u0414\u043e\u043b\u0433\u0438\u0439 \u0432\u0435\u043a \u043c\u043e\u0435\u0439 \u0437\u0432\u0435\u0437\u0434\u044b\n    \u0421\u043e\u043d\u043d\u044b\u0439 \u0431\u043b\u0435\u0441\u043a \u0437\u0435\u043c\u043d\u043e\u0439 \u0440\u043e\u0441\u044b\n    \u0413\u0440\u043e\u043c\u043a\u0438\u0439 \u0441\u043c\u0435\u0445 \u0438 \u0440\u0430\u0439\u0441\u043a\u0438\u0439 \u043c\u0435\u0434\n    \u0412 \u043d\u0435\u0431\u0435\u0441\u0430\u0445"},{id:"1",title:"\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u043e",musician:"\u0413\u0440\u0430\u0436\u0434\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043e\u0440\u043e\u043d\u0430",poet:"\u0415\u0433\u043e\u0440 \u041b\u0435\u0442\u043e\u0432",audio:n.p+"static/media/gosudarstvo.ecf55fdf.mp3",cover:"../images/cover.png",videoUrl:"",lyrics:"\u0420\u0436\u0430\u0432\u044b\u0439 \u0431\u0443\u043d\u043a\u0435\u0440 - \u043c\u043e\u044f \u0441\u0432\u043e\u0431\u043e\u0434\u0430\n    \u0421\u043b\u0430\u0434\u043a\u0438\u0439 \u043f\u0440\u044f\u043d\u0438\u043a \u0437\u0430\u0441\u043e\u0445 \u0434\u0430\u0432\u043d\u043e\n    \u0421\u0430\u043f\u043e\u0433\u043e\u043c \u043c\u043e\u0435\u0433\u043e \u043d\u0430\u0440\u043e\u0434\u0430\n    \u0421\u0442\u0430\u0440\u0448\u0438\u043d\u0430 \u0442\u043e\u0440\u043c\u043e\u0437\u0438\u0442 \u0433\u043e\u0432\u043d\u043e.\n\n    \u0417\u0430\u043f\u0440\u044f\u0442\u0430\u043d\u043d\u044b\u0439 \u0437\u0430 \u0443\u0433\u043b\u043e\u043c\n    \u0423\u0431\u0438\u0442\u044b\u0439 \u043f\u043e\u043c\u043e\u0439\u043d\u044b\u043c \u0432\u0435\u0434\u0440\u043e\u043c\n    \u0414\u043e\u0431\u0440\u043e\u0432\u043e\u043b\u044c\u043d\u043e \u0443\u0448\u0435\u0434\u0448\u0438\u0439 \u0432 \u043f\u043e\u0434\u0432\u0430\u043b\n    \u0417\u0430\u0440\u0430\u043d\u0435\u0435 \u043e\u0431\u0440\u0435\u0447\u0435\u043d\u043d\u044b\u0439 \u043d\u0430 \u043f\u043e\u043b\u043d\u0435\u0439\u0448\u0438\u0439 \u043f\u0440\u043e\u0432\u0430\u043b"}];var k=function(){var e=n(6),t=Object(c.useRef)(null),s=Object(c.useState)(!1),r=Object(l.a)(s,2),i=r[0],o=r[1],u=Object(c.useState)(w.length<2),j=Object(l.a)(u,2),m=j[0],d=j[1],b=Object(c.useState)(),p=Object(l.a)(b,2),x=p[0],g=p[1],v=Object(c.useState)(),k=Object(l.a)(v,2),y=k[0],L=k[1],C=Object(c.useState)(!1),q=Object(l.a)(C,2),S=q[0],B=q[1],E=Object(c.useState)(w[0]),M=Object(l.a)(E,2),T=M[0],H=M[1];return Object(c.useEffect)((function(){var e=document.getElementById("audio"),t=function(){g(e.duration),L(e.currentTime)},n=function(){return L(e.currentTime)};return e.addEventListener("loadeddata",t),e.addEventListener("timeupdate",n),function(){e.removeEventListener("loadeddata",t),e.removeEventListener("timeupdate",n)}}),[]),Object(c.useEffect)((function(){var e=document.getElementById("audio");S?e.play():e.pause()})),Object(a.jsxs)("div",{className:e("audioplayer",{audioplayer_expanded:i,audioplayer_collapsed:!i}),children:[Object(a.jsxs)("audio",{id:"audio",ref:t,src:T.audio,type:"audio/mp3",children:["Your browser does not support the ",Object(a.jsx)("code",{children:"audio"})," element."]}),Object(a.jsx)(O,{handleClick:function(){return B(!S)},isPlaying:S}),Object(a.jsx)(h,{title:T.title,musician:T.musician,poet:T.poet,duration:x,curTime:y,onClick:function(e){t.current.currentTime=e}}),i&&Object(a.jsx)(_,{lyricsShown:m,onClick:function(){d(!m)}}),Object(a.jsx)(N,{onClick:function(){o(!i)},isExpanded:i}),i&&Object(a.jsxs)("div",{className:"expanded-box",children:[Object(a.jsx)("h3",{className:"expanded-box__heading",children:m?"\u0422\u0435\u043a\u0441\u0442 \u043f\u0435\u0441\u043d\u0438:":"\u0420\u0435\u043b\u0438\u0437\u044b:"}),m&&Object(a.jsx)("p",{className:"expanded-box__text",children:T.lyrics}),!m&&Object(a.jsx)(f,{songs:w,changeCurSong:function(e){H(e)}})]})]})},y=function(){return Object(a.jsx)("svg",{width:"100%",height:"100%",viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(a.jsx)("path",{d:"M0 1.98864V26.1364V50H50L48.2249 0H42.3077L40.8284 17.0455H29.2899L28.4024 1.98864L20.1183 1.42045L21.3018 17.0455H8.87574L6.80473 1.42045L0 1.98864Z",fill:"white"})})};var L=function(){return Object(a.jsxs)("div",{className:"main",children:[Object(a.jsxs)("div",{className:"main__header",children:[Object(a.jsx)("a",{className:"main__logo-link",rel:"noreferrer",href:"https://marshakbooks.ru/",target:"_blank",children:Object(a.jsx)("div",{className:"main__logo",children:Object(a.jsx)(y,{})})}),Object(a.jsx)(j,{})]}),Object(a.jsx)("div",{className:"main__name"}),Object(a.jsx)(k,{})]})},C=[{id:"article-project",heading:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435",paragraphs:[{id:"paragraph-project-children",text:"\u041c\u044b \u0437\u043d\u0430\u0435\u043c, \u0447\u0442\u043e \u043d\u0430\u0448\u0438 \u0434\u0435\u0442\u0438 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442 \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 \u043d\u0435\u043f\u0440\u0435\u043a\u0440\u0430\u0449\u0430\u044e\u0449\u0435\u0433\u043e\u0441\u044f \u0442\u0432\u043e\u0440\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430. \u041c\u044b \u0432\u0438\u0434\u0438\u043c \u044d\u0442\u043e, \u043a\u043e\u0433\u0434\u0430 \u0440\u0435\u0431\u0451\u043d\u043e\u043a \u0447\u0442\u043e-\u0442\u043e \u043d\u0430\u043f\u0435\u0432\u0430\u0435\u0442, \u043a\u043e\u0433\u0434\u0430 \u043e\u043d \u0431\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u043e \u0440\u0438\u0441\u0443\u0435\u0442, \u043a\u043e\u0433\u0434\u0430 \u043f\u0440\u0438\u0434\u0443\u043c\u044b\u0432\u0430\u0435\u0442 \u0438\u0441\u0442\u043e\u0440\u0438\u0438, \u043a\u043e\u0433\u0434\u0430 \u0440\u0430\u0437\u0433\u043e\u0432\u0430\u0440\u0438\u0432\u0430\u0435\u0442 \u0441 \u0435\u0434\u043e\u0439 \u0438 \u0438\u0433\u0440\u0443\u0448\u043a\u0430\u043c\u0438 \u2014 \u0434\u0435\u0442\u0438 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u044b \u0438 \u0447\u0442\u043e-\u0442\u043e \u0438\u0437\u043e\u0431\u0440\u0435\u0442\u0430\u044e\u0442. \u0420\u043e\u0434\u0438\u0442\u0435\u043b\u0438 \u0447\u0430\u0441\u0442\u043e \u043d\u0435\u0434\u043e\u043e\u0446\u0435\u043d\u0438\u0432\u0430\u044e\u0442 \u044d\u0442\u043e \u0441\u043f\u043e\u043d\u0442\u0430\u043d\u043d\u043e\u0435 \u0442\u0432\u043e\u0440\u0447\u0435\u0441\u0442\u0432\u043e \u0440\u0435\u0431\u0451\u043d\u043a\u0430. \u042d\u0442\u043e \u043d\u0435 \u043f\u043b\u043e\u0445\u043e, \u043f\u0440\u043e\u0441\u0442\u043e \u043c\u044b \u043f\u0440\u0438\u0432\u044b\u043a\u0430\u0435\u043c \u043a \u044d\u0442\u043e\u043c\u0443. \u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0435\u043c \u0432\u043d\u0438\u043c\u0430\u0442\u0435\u043b\u044c\u043d\u0435\u0435 \u043f\u0440\u0438\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c\u0441\u044f \u043a \u043d\u0430\u0448\u0438\u043c \u0434\u0435\u0442\u044f\u043c."},{id:"paragraph-project-turbina",text:"\u041c\u044b \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442 \xab\u0422\u0423\u0420\u0411\u0418\u041d\u0410\xbb, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0443 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0433\u043e \u043c\u0443\u0437\u044b\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043b\u0435\u0439\u0431\u043b\u0430 \u043d\u0430 \u0431\u0430\u0437\u0435 \xab\u041c\u0430\u0440\u0448\u0430\u043a\u0430\xbb. \u0412 \u0440\u0430\u043c\u043a\u0430\u0445 \xab\u0422\u0423\u0420\u0411\u0418\u041d\u042b\xbb \u043b\u0443\u0447\u0448\u0438\u0435 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0438\u043d\u0434\u0438-\u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u044b \u043f\u0438\u0448\u0443\u0442 \u0441\u0432\u043e\u0438 \u043f\u0435\u0441\u043d\u0438 \u043d\u0430 \u0441\u0442\u0438\u0445\u0438, \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0435 \u0434\u0435\u0442\u044c\u043c\u0438. \u0417\u0434\u0435\u0441\u044c \u0432\u0430\u0436\u043d\u043e \u2014 \u043c\u044b \u043d\u0435 \u0437\u0430\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c \u043d\u0430\u0448\u0438\u0445 \u0434\u0435\u0442\u0435\u0439 \u0441\u0430\u0434\u0438\u0442\u044c\u0441\u044f \u0438 \u043f\u0438\u0441\u0430\u0442\u044c \u043f\u043e\u044d\u0437\u0438\u044e, \u043c\u044b \u0433\u043e\u0432\u043e\u0440\u0438\u043c \u043e \u0442\u043e\u043c, \u0447\u0442\u043e \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f\u043c \u0441\u0442\u043e\u0438\u0442 \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u0432\u043d\u0438\u043c\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c\u0438 \u0438 \u0447\u0443\u0442\u043a\u0438\u043c\u0438 \u043a \u0441\u0432\u043e\u0438\u043c \u0434\u0435\u0442\u044f\u043c. \u0418\u043c\u0435\u043d\u043d\u043e \u0442\u0430\u043a \u043c\u044b \u0441\u043c\u043e\u0436\u0435\u043c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0442\u0435\u043a\u0441\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0435\u0440\u0435\u0441\u0442\u0430\u043d\u0443\u0442 \u0431\u044b\u0442\u044c \u0434\u0435\u0442\u0441\u043a\u0438\u043c\u0438, \u043d\u0435 \u0431\u0443\u0434\u0443\u0442 \u043e\u0441\u043c\u044b\u0441\u043b\u0435\u043d\u044b \u043a\u0430\u043a \u0432\u0437\u0440\u043e\u0441\u043b\u044b\u0435 \u2014 \u043f\u043e\u044d\u0437\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0441\u043e\u043a\u0440\u0430\u0449\u0430\u0435\u0442 \u0434\u0438\u0441\u0442\u0430\u043d\u0446\u0438\u044e \u043c\u0435\u0436\u0434\u0443 \u0432\u0437\u0440\u043e\u0441\u043b\u043e\u0441\u0442\u044c\u044e \u0438 \u0434\u0435\u0442\u0441\u0442\u0432\u043e\u043c, \u0433\u0434\u0435 \u0441\u043f\u043e\u043d\u0442\u0430\u043d\u043d\u043e\u0435 \u0434\u0435\u0442\u0441\u043a\u043e\u0435 \u0442\u0432\u043e\u0440\u0447\u0435\u0441\u0442\u0432\u043e \u0438 \u0431\u0435\u0441\u0441\u043e\u0437\u043d\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435, \u0437\u0430\u043c\u0435\u0447\u0435\u043d\u043d\u043e\u0435 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u0435\u043c, \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u043d\u044b\u043c \u0434\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435\u043c."}]},{id:"article-concept",heading:"\u041a\u0430\u043a \u044d\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442?",paragraphs:[{id:"paragraph-concept-process",text:"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0438\u0441\u043b\u0430\u0442\u044c \u043d\u0430\u043c \u0442\u0435\u043a\u0441\u0442\u044b, \u0440\u043e\u0434\u0438\u0432\u0448\u0438\u0435\u0441\u044f \u0443 \u0432\u0430\u0448\u0438\u0445 \u0434\u0435\u0442\u0435\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u044b \u0437\u0430\u043f\u0438\u0441\u0430\u043b\u0438 \u0438 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0435, \u0447\u0442\u043e \u044d\u0442\u043e \u0441\u0438\u043b\u044c\u043d\u043e\u0435 \u0432\u044b\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u043d\u0438\u0435. \u041c\u044b \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u043c \u043f\u0443\u043b \u0442\u0430\u043a\u0438\u0445 \u0442\u0435\u043a\u0441\u0442\u043e\u0432 \u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0451\u043c \u0438\u0445 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u0430\u043c. \u0410\u0440\u0442\u0438\u0441\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442 \u043c\u0443\u0437\u044b\u043a\u0443 \u043d\u0430 \u044d\u0442\u0438 \u0441\u0442\u0438\u0445\u0438. \u041c\u044b \u043f\u0440\u043e\u0434\u044e\u0441\u0438\u0440\u0443\u0435\u043c \u0432\u044b\u043f\u0443\u0441\u043a \u0442\u0440\u0435\u043a\u0430, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0441\u044a\u0451\u043c\u043a\u0438 \u043a\u043b\u0438\u043f\u0430 \u0438 \u0442\u0430\u043a \u0434\u0430\u043b\u0435\u0435. \u041c\u044b \u0432\u0441\u0435\u0433\u0434\u0430 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c \u0430\u0432\u0442\u043e\u0440\u0430 \u0441\u0442\u0438\u0445\u043e\u0442\u0432\u043e\u0440\u0435\u043d\u0438\u0439 \u0432\u043d\u0443\u0442\u0440\u0438 \u0440\u0435\u043b\u0438\u0437\u0430: \u0425\u0430\u0434\u043d \u0414\u0430\u0434\u043d feat. \u0412\u0430\u0440\u044f \u041a\u0430\u0440\u043f\u043e\u0432\u0430 \u0438 \u0424\u0435\u0434\u044f \u0411\u044b\u0441\u0442\u0440\u043e\u0432 \u2014 \u041a\u043e\u043d\u0442\u0443\u0440."}]},{id:"article-theses",heading:"\u0422\u0435\u0437\u0438\u0441\u044b",list:[{id:"thesis-creativity",text:"\u0414\u0435\u0442\u0438 \u043d\u0438\u043a\u043e\u0433\u0434\u0430 \u043d\u0435 \u043f\u0440\u0435\u043a\u0440\u0430\u0449\u0430\u044e\u0442 \u0442\u0432\u043e\u0440\u0438\u0442\u044c \u0438 \u043a\u0440\u0443\u0442\u043e \u0441\u0442\u0430\u0440\u0430\u0442\u044c\u0441\u044f \u0431\u044b\u0442\u044c \u043d\u0430 \u043d\u0438\u0445 \u043f\u043e\u0445\u043e\u0436\u0438\u043c\u0438 \u0432 \u044d\u0442\u043e\u043c."},{id:"thesis-unconscious",text:"\u0414\u0435\u0442\u0441\u043a\u043e\u0435 \u0431\u0435\u0441\u0441\u043e\u0437\u043d\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f\u043c \u043f\u043e\u043d\u044f\u0442\u044c, \u0447\u0442\u043e \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0432\u043d\u0443\u0442\u0440\u0438 \u0441\u0435\u043c\u044c\u0438."},{id:"thesis-poetry",text:"\u041d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u0435\u0442\u0441\u043a\u043e\u0439 \u0438 \u0432\u0437\u0440\u043e\u0441\u043b\u043e\u0439 \u043f\u043e\u044d\u0437\u0438\u0438. \u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043c\u044b\u0441\u043b\u044c \u0438 \u0447\u0443\u0432\u0441\u0442\u0432\u043e, \u0437\u0430\u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u0432 \u043d\u0435\u0439."},{id:"thesis-pleasure",text:"\u0414\u0435\u0442\u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u044e\u0442 \u043d\u0435\u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0435 \u0443\u0434\u043e\u0432\u043e\u043b\u044c\u0441\u0442\u0432\u0438\u0435 \u0438 \u043c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044e \u043e\u0442 \u0442\u043e\u0433\u043e, \u0447\u0442\u043e \u0438\u0445 \u0442\u0432\u043e\u0440\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u043e\u0441\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u043e \u0441\u0432\u0435\u0440\u0441\u0442\u043d\u0438\u043a\u0430\u043c\u0438 \u0438 \u0432\u0437\u0440\u043e\u0441\u043b\u044b\u043c\u0438."}]}];var q=function(){return Object(a.jsx)(a.Fragment,{children:C&&Object(a.jsx)("div",{className:"articles",children:C.map((function(e){return Object(a.jsxs)("article",{className:"articles__article",children:[e.heading&&Object(a.jsx)("h2",{className:"articles__heading",children:e.heading}),e.paragraphs&&Object(a.jsx)(a.Fragment,{children:e.paragraphs.map((function(e){return Object(a.jsx)("p",{className:"articles__paragraph",children:e.text},e.id)}))}),e.list&&Object(a.jsx)("ul",{className:"articles__list",children:e.list.map((function(e){return Object(a.jsx)("li",{className:"articles__list-item",children:e.text},e.id)}))})]},e.id)}))})})},S=n(3),B=n(4),E=n(9);var M=function(){var e={authorName:{required:function(e){return""===e},minLength:function(e){return e&&e.length<3}},telephone:{required:function(e){return""===e},minLength:function(e){return e<11},containNumbers:function(e){return!/^\d[\d\(\)\ -]{4,14}\d$/.test(e)}},email:{required:function(e){return""===e},minLength:function(e){return e.length<3}},poem:{required:function(e){return""===e},minLength:function(e){return e.length<5}}},t=Object(c.useState)({authorName:{required:!0,minLength:!0},telephone:{required:!0,minLength:!0,containNumbers:!0},email:{required:!0,minLength:!0},poem:{required:!0,minLength:!0}}),n=Object(l.a)(t,2),r=n[0],i=n[1],o=s.a.useState({authorName:"",telephone:"",email:"",poem:""}),u=Object(l.a)(o,2),j=u[0],m=u[1];Object(c.useEffect)((function(){var t=j.authorName,n=j.telephone,a=j.email,c=j.poem,s=Object.keys(e.authorName).map((function(n){var a=e.authorName[n](t);return Object(B.a)({},n,a)})).reduce((function(e,t){return Object(S.a)(Object(S.a)({},e),t)}),{});console.log(s);var r=Object.keys(e.telephone).map((function(t){var a=e.telephone[t](n);return Object(B.a)({},t,a)})).reduce((function(e,t){return Object(S.a)(Object(S.a)({},e),t)}),{});console.log(r);var l=Object.keys(e.email).map((function(t){var n=e.email[t](a);return Object(B.a)({},t,n)})).reduce((function(e,t){return Object(S.a)(Object(S.a)({},e),t)}),{}),o=Object.keys(e.poem).map((function(t){var n=e.poem[t](c);return Object(B.a)({},t,n)})).reduce((function(e,t){return Object(S.a)(Object(S.a)({},e),t)}),{});i({authorName:s,telephone:r,email:l,poem:o})}),[j,i]);var d=Object(c.useCallback)((function(e){var t=e.target,n=t.name,a=t.value;m((function(e){return Object(S.a)(Object(S.a)({},e),{},Object(B.a)({},n,a))}))}),[m]),h=j.authorName,b=j.telephone,p=j.email,x=j.poem,O=Object.values(r.authorName).some(Boolean),f=Object.values(r.telephone).some(Boolean),_=Object.values(r.email).some(Boolean),g=Object.values(r.poem).some(Boolean),v=O||g||_||f;return Object(a.jsxs)("form",{className:"form",name:"poem-form",children:[Object(a.jsx)("h2",{className:"form__heading",children:"\u0424\u043e\u0440\u043c\u0430"}),Object(a.jsx)("p",{className:"form__caption",children:"\u0417\u0430\u043f\u043e\u043b\u043d\u044f\u044f \u044d\u0442\u0443 \u0444\u043e\u0440\u043c\u0443, \u0432\u044b \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435\u0441\u044c \u0447\u0430\u0441\u0442\u044c\u044e \u043f\u0440\u043e\u0435\u043a\u0442\u0430."}),Object(a.jsx)("input",{className:"form__input",onChange:d,value:h,type:"text",name:"authorName",required:!0,placeholder:"\u0418\u043c\u044f \u0438 \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u0430\u0432\u0442\u043e\u0440\u0430"}),r.authorName.required&&Object(a.jsx)("span",{className:"form__error-text",children:"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043a \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044e"}),r.authorName.minLength&&Object(a.jsx)("span",{className:"form__error-text",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"}),Object(a.jsx)("input",{className:"form__input",onChange:d,value:b,name:"telephone",type:"tel",placeholder:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",required:!0}),r.telephone.required&&Object(a.jsx)("span",{className:"form__error-text",children:"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043a \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044e"}),r.telephone.minLength&&Object(a.jsx)("span",{className:"form__error-text",children:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11 \u0446\u0438\u0444\u0440"}),r.telephone.containNumbers&&Object(a.jsx)("span",{className:"form__error-text",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"}),Object(a.jsx)("input",{className:"form__input",onChange:d,value:p,type:"email",name:"email",placeholder:"\u041f\u043e\u0447\u0442\u0430",required:!0}),r.email.required&&Object(a.jsx)("span",{className:"form__error-text",children:"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043a \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044e"}),r.email.minLength&&Object(a.jsx)("span",{className:"form__error-text",children:"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 - 3 \u0441\u0438\u043c\u0432\u043e\u043b\u0430"}),Object(a.jsx)("span",{className:"form__error-text"}),Object(a.jsx)(E.a,{className:"form__textarea",value:x,onChange:d,name:"poem",placeholder:"\u0421\u0442\u0438\u0445\u0438",minLength:"2",required:!0}),r.poem.required&&Object(a.jsx)("span",{className:"form__error-text",children:"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043a \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044e"}),r.poem.minLength&&Object(a.jsx)("span",{className:"form__error-text",children:"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u043a\u043e\u0440\u043e\u0442\u043a\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"}),Object(a.jsxs)("div",{className:"form__checkbox-container",children:[Object(a.jsx)("input",{className:"form__checkbox",type:"checkbox",name:"checkbox",id:"checkbox",required:!0}),Object(a.jsxs)("label",{className:"form__label",htmlFor:"checkbox",children:["\u0421\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u0441"," ",Object(a.jsx)("a",{className:"form__link",href:"#",target:"_blank",children:"\u043e\u0444\u0435\u0440\u0442\u043e\u0439"})]})]}),Object(a.jsx)("button",{onClick:function(e){e.preventDefault()},disabled:v,className:"form__submit",type:"submit",name:"",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0443"}),Object(a.jsx)("span",{className:"form__error-text"})]})},T=function(){return Object(a.jsxs)("section",{className:"content-box",children:[Object(a.jsx)(q,{}),Object(a.jsx)(M,{})]})},H=function(){return Object(a.jsxs)("footer",{className:"footer",children:[Object(a.jsx)("p",{className:"footer__copyrights",children:"\xa9 \u041c\u0430\u0440\u0448\u0430\u043a, 2020."}),Object(a.jsxs)("p",{className:"footer__made-by",children:["\u0421\u0434\u0435\u043b\u0430\u043d\u043e \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430\u043c\u0438\xa0",Object(a.jsx)("a",{className:"footer__link",href:"https://praktikum.yandex.ru/",rel:"noreferrer",target:"_blank",children:"\u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c"})]})]})};var R=function(){return Object(a.jsxs)("div",{className:"page",children:[Object(a.jsx)(L,{}),Object(a.jsx)(T,{}),Object(a.jsx)(H,{})]})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(R,{})}),document.getElementById("root")),Z()}},[[18,1,2]]]);
//# sourceMappingURL=main.e7094951.chunk.js.map