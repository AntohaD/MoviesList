(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},18:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),i=a.n(r),l=a(10),s=a(2),o=a.n(s),m=a(5),u=a(1),v=function(e){var t=e.movie,a=e.removeMovie,r=e.addMovieWillWatch,i=e.removeMovieWillWatch,l=Object(n.useState)(!1),s=Object(u.a)(l,2),o=s[0],m=s[1];return c.a.createElement("div",{className:"card"},c.a.createElement("img",{className:"card-img-top",src:"https://image.tmdb.org/t/p/w500".concat(t.backdrop_path||t.poster_path),alt:""}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h6",{className:"card-title"},t.title),c.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},c.a.createElement("p",{className:"mb-0"},"Rating: ",t.vote_average),o?c.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){m(!1),i(t)}},"Remove will Watch"):c.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){m(!0),r(t)}},"Add will Watch")),c.a.createElement("button",{onClick:function(){return a(t.id)}},"Delete movie")))},d=a(9),p=a.n(d),f=a(6),b=a.n(f),E=p.a.bind(b.a),N=function(e){var t=e.sort_by,a=e.updateSortBy,n=function(e){return function(){a(e)}},r=function(e){return E({"nav-link":!0,active:t===e})};return c.a.createElement("ul",{className:"tabs nav nav-pills"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("div",{className:r("popularity.desc"),onClick:n("popularity.desc")},"Popularity desc")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("div",{className:r("revenue.desc"),onClick:n("revenue.desc")},"Revenue desc")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("div",{className:r("vote_average.desc"),onClick:n("vote_average.desc")},"Vote average desc")))},h=function(){var e=Object(m.a)(o.a.mark((function e(t,a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.themoviedb.org/3","/discover/movie?api_key=").concat("8c59846350a7a184c026cebf615c0c00","&sort_by=").concat(t,"&page=").concat(a)).then((function(e){return e.json()})).then((function(e){n=e.results}));case 2:return e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();var g=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)([]),s=Object(u.a)(i,2),d=s[0],p=s[1],f=Object(n.useState)("popularity.desc"),b=Object(u.a)(f,2),E=b[0],g=b[1],y=Object(n.useState)(1),k=Object(u.a)(y,2),j=k[0],w=k[1],O=function(){var e=Object(m.a)(o.a.mark((function e(t,a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t,a);case 2:n=e.sent,r(n);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){O(E,j)}),[E,j]);var W=function(e){var t=a.filter((function(t){return t.id!==e}));r(t)},x=function(e){var t=[].concat(Object(l.a)(d),[e]);return p(t),d},_=function(e){var t=d.filter((function(t){return t.id!==e.id}));return p(t),d};return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row mt-4"},c.a.createElement("div",{className:"col-10"},c.a.createElement("div",{className:"row mb-4"},c.a.createElement("div",{className:"tabs-container col-12"},c.a.createElement(N,{sort_by:E,updateSortBy:function(e){g(e)}})),a.map((function(e){return c.a.createElement("div",{className:"col-md-6 col-sm-12 mb-4",key:e.id},c.a.createElement(v,{movie:e,removeMovie:W,addMovieWillWatch:x,removeMovieWillWatch:_}))}))),c.a.createElement("nav",{"aria-label":"Page navigation example"},c.a.createElement("ul",{className:"pagination justify-content-center"},c.a.createElement("li",{className:"page-item ".concat(j<2&&"disabled"),onClick:function(){j>1&&w(j-=1)}},c.a.createElement("a",{className:"page-link",href:"#",tabIndex:"-1","aria-disabled":"true"},"Previous")),c.a.createElement("li",{className:"page-item"},c.a.createElement("a",{className:"page-link",href:"#"},j)),c.a.createElement("li",{className:"page-item",onClick:function(){w(j+=1)}},c.a.createElement("a",{className:"page-link",href:"#"},"Next"))))),c.a.createElement("div",{className:"willWatch col-2"},"Will watch: ",d.length)))};a(17);i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root"))},6:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.46572550.chunk.js.map