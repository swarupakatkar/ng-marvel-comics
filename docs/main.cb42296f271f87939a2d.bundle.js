webpackJsonp([7],{"+h1B":function(l,n,t){"use strict";var e=t("/oeL"),r=t("aR8+"),u=t("wQAS"),a=t("q4dy"),i=t("qbdv"),c=t("fc+i"),s=t("BkNc"),o=t("CPp0"),h=t("lmRb"),d=t("vnfH");t.d(n,"a",function(){return f});var f=e.b(r.a,[u.a],function(l){return e.c([e.d(512,e.e,e.f,[[8,[a.a]],[3,e.e],e.g]),e.d(5120,e.h,e.i,[[3,e.h]]),e.d(4608,i.a,i.b,[e.h]),e.d(5120,e.j,e.k,[]),e.d(5120,e.l,e.m,[]),e.d(5120,e.n,e.o,[]),e.d(4608,c.b,c.c,[c.d]),e.d(6144,e.p,null,[c.b]),e.d(4608,c.e,c.f,[]),e.d(5120,c.g,function(l,n,t,e){return[new c.h(l),new c.i(n),new c.j(t,e)]},[c.d,c.d,c.d,c.e]),e.d(4608,c.k,c.k,[c.g,e.q]),e.d(135680,c.l,c.l,[c.d]),e.d(4608,c.m,c.m,[c.k,c.l]),e.d(6144,e.r,null,[c.m]),e.d(6144,c.n,null,[c.l]),e.d(4608,e.s,e.s,[e.q]),e.d(4608,c.o,c.o,[c.d]),e.d(4608,c.p,c.p,[c.d]),e.d(5120,s.a,s.b,[s.c]),e.d(4608,s.d,s.d,[]),e.d(6144,s.e,null,[s.d]),e.d(135680,s.f,s.f,[s.c,e.t,e.u,e.v,s.e]),e.d(4608,s.g,s.g,[]),e.d(5120,s.h,s.i,[s.j]),e.d(5120,e.w,function(l){return[l]},[s.h]),e.d(4608,o.a,o.a,[]),e.d(4608,o.b,o.c,[]),e.d(5120,o.d,o.e,[]),e.d(4608,o.f,o.f,[o.a,o.b,o.d]),e.d(4608,o.g,o.h,[]),e.d(5120,o.i,o.j,[o.f,o.g]),e.d(4608,h.a,h.a,[o.i]),e.d(512,i.c,i.c,[]),e.d(1024,e.x,c.q,[]),e.d(1024,e.y,function(){return[s.k()]},[]),e.d(512,s.j,s.j,[e.v]),e.d(1024,e.z,function(l,n,t){return[c.r(l,n),s.l(t)]},[[2,c.s],[2,e.y],s.j]),e.d(512,e.A,e.A,[[2,e.z]]),e.d(131584,e.B,e.B,[e.q,e.C,e.v,e.x,e.e,e.A]),e.d(2048,e.D,null,[e.B]),e.d(512,e.E,e.E,[e.D]),e.d(512,c.t,c.t,[[3,c.t]]),e.d(1024,s.m,s.n,[[3,s.c]]),e.d(512,s.o,s.p,[]),e.d(512,s.q,s.q,[]),e.d(256,s.r,{},[]),e.d(1024,i.d,s.s,[i.e,[2,i.f],s.r]),e.d(512,i.g,i.g,[i.d]),e.d(512,e.u,e.u,[]),e.d(512,e.t,e.F,[e.u,[2,e.G]]),e.d(1024,s.t,function(){return[[{path:"",redirectTo:"/characters",pathMatch:"full"},{path:"characters",loadChildren:"./characters/characters.module#CharactersModule"},{path:"comics",loadChildren:"./comics/comics.module#ComicsModule"},{path:"creators",loadChildren:"./creators/creators.module#CreatorsModule"},{path:"events",loadChildren:"./events/events.module#EventsModule"},{path:"series",loadChildren:"./series/series.module#SeriesModule"},{path:"stories",loadChildren:"./stories/stories.module#StoriesModule"}]]},[]),e.d(1024,s.c,s.u,[e.D,s.o,s.q,i.g,e.v,e.t,e.u,s.t,s.r,[2,s.v],[2,s.w]]),e.d(512,s.x,s.x,[[2,s.m],[2,s.c]]),e.d(512,d.a,d.a,[]),e.d(512,o.k,o.k,[]),e.d(512,r.a,r.a,[])])})},1:function(l,n,t){l.exports=t("cDNt")},NhKt:function(l,n,t){"use strict";t.d(n,"a",function(){return e});var e=[""]},"aR8+":function(l,n,t){"use strict";t.d(n,"a",function(){return e});var e=function(){function l(){}return l}()},cDNt:function(l,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=t("/oeL"),r=t("p5Ee"),u=t("+h1B"),a=t("fc+i");r.a.production&&t.i(e.a)(),t.i(a.a)().bootstrapModuleFactory(u.a)},lmRb:function(l,n,t){"use strict";var e=t("CPp0"),r=t("bKpL"),u=(t.n(r),t("xpf9")),a=(t.n(u),t("5v8a"));t.n(a);t.d(n,"a",function(){return i});var i=function(){function l(l){this.http=l,this.headers=new Headers({"Content-Type":"application/json"}),this.marvelUrl="https://gateway.marvel.com:443/v1/public/",this.apikey="fcba90451aa99130e5508da5064ad363"}return l.prototype.getCharacters=function(l){var n=new e.l;return n.set("offset",l),n.set("apikey",this.apikey),this.http.get(this.marvelUrl+"characters",{search:n}).map(this.extractData).catch(this.handleError)},l.prototype.getCharacter=function(l){return this.http.get(this.marvelUrl+"characters/"+l+"?apikey="+this.apikey).map(this.extractData).catch(this.handleError)},l.prototype.getComics=function(l){var n=new e.l;return n.set("offset",l),n.set("apikey",this.apikey),this.http.get(this.marvelUrl+"comics",{search:n}).map(this.extractData).catch(this.handleError)},l.prototype.getComic=function(l){return this.http.get(this.marvelUrl+"comics/"+l+"?apikey="+this.apikey).map(this.extractData).catch(this.handleError)},l.prototype.getCreators=function(l){var n=new e.l;return n.set("offset",l),n.set("apikey",this.apikey),this.http.get(this.marvelUrl+"creators",{search:n}).map(this.extractData).catch(this.handleError)},l.prototype.getCreator=function(l){return this.http.get(this.marvelUrl+"creators/"+l+"?apikey="+this.apikey).map(this.extractData).catch(this.handleError)},l.prototype.getEvents=function(l){var n=new e.l;return n.set("offset",l),n.set("apikey",this.apikey),this.http.get(this.marvelUrl+"events",{search:n}).map(this.extractData).catch(this.handleError)},l.prototype.getEvent=function(l){return this.http.get(this.marvelUrl+"events/"+l+"?apikey="+this.apikey).map(this.extractData).catch(this.handleError)},l.prototype.getSeries=function(l){var n=new e.l;return n.set("offset",l),n.set("apikey",this.apikey),this.http.get(this.marvelUrl+"series",{search:n}).map(this.extractData).catch(this.handleError)},l.prototype.getSingleSeries=function(l){return this.http.get(this.marvelUrl+"series/"+l+"?apikey="+this.apikey).map(this.extractData).catch(this.handleError)},l.prototype.getStories=function(l){var n=new e.l;return n.set("offset",l),n.set("apikey",this.apikey),this.http.get(this.marvelUrl+"stories",{search:n}).map(this.extractData).catch(this.handleError)},l.prototype.getStory=function(l){return this.http.get(this.marvelUrl+"stories/"+l+"?apikey="+this.apikey).map(this.extractData).catch(this.handleError)},l.prototype.extractData=function(l){return l.json()||{}},l.prototype.handleError=function(l){var n;if(l instanceof e.m){var t=l.json()||"",u=t.error||JSON.stringify(t);n=l.status+" - "+(l.statusText||"")+" "+u}else n=l.message?l.message:l.toString();return console.error(n),r.Observable.throw(n)},l.ctorParameters=function(){return[{type:e.i}]},l}()},p5Ee:function(l,n,t){"use strict";t.d(n,"a",function(){return e});var e={production:!0}},q4dy:function(l,n,t){"use strict";function e(l){return a._12(0,[(l()(),a._14(null,["\n"])),(l()(),a._13(0,null,null,91,"nav",[["class","navbar navbar-default navbar-fixed-top"]],null,null,null,null,null)),(l()(),a._14(null,["\n  "])),(l()(),a._13(0,null,null,88,"div",[["class","container"]],null,null,null,null,null)),(l()(),a._14(null,["\n    "])),(l()(),a._13(0,null,null,18,"div",[["class","navbar-header"]],null,null,null,null,null)),(l()(),a._14(null,["\n      "])),(l()(),a._13(0,null,null,10,"button",[["aria-controls","navbar"],["aria-expanded","false"],["class","navbar-toggle collapsed"],["data-target","#navbar"],["data-toggle","collapse"],["type","button"]],null,null,null,null,null)),(l()(),a._14(null,["\n            "])),(l()(),a._13(0,null,null,1,"span",[["class","sr-only"]],null,null,null,null,null)),(l()(),a._14(null,["Toggle navigation"])),(l()(),a._14(null,["\n            "])),(l()(),a._13(0,null,null,0,"span",[["class","icon-bar"]],null,null,null,null,null)),(l()(),a._14(null,["\n            "])),(l()(),a._13(0,null,null,0,"span",[["class","icon-bar"]],null,null,null,null,null)),(l()(),a._14(null,["\n            "])),(l()(),a._13(0,null,null,0,"span",[["class","icon-bar"]],null,null,null,null,null)),(l()(),a._14(null,["\n          "])),(l()(),a._14(null,["\n      "])),(l()(),a._13(0,null,null,3,"a",[["class","navbar-brand"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var e=!0;if("click"===n){e=!1!==a._18(l,20).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e}return e},null,null)),a._20(671744,null,0,i.z,[i.c,i.a,c.d],{routerLink:[0,"routerLink"]},null),a._23(1),(l()(),a._14(null,["Ng Marvel Comics"])),(l()(),a._14(null,["\n    "])),(l()(),a._14(null,["\n    "])),(l()(),a._13(0,null,null,64,"div",[["class","collapse navbar-collapse"],["id","navbar"]],null,null,null,null,null)),(l()(),a._14(null,["\n      "])),(l()(),a._13(0,null,null,61,"ul",[["class","nav navbar-nav"]],null,null,null,null,null)),(l()(),a._14(null,["\n        "])),(l()(),a._13(0,null,null,8,"li",[],null,null,null,null,null)),a._20(1720320,null,2,i.A,[i.c,a.S,a.R,a.W],{routerLinkActive:[0,"routerLinkActive"]},null),a._35(603979776,1,{links:1}),a._35(603979776,2,{linksWithHrefs:1}),a._23(1),(l()(),a._13(0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var e=!0;if("click"===n){e=!1!==a._18(l,35).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e}return e},null,null)),a._20(671744,[[2,4]],0,i.z,[i.c,i.a,c.d],{routerLink:[0,"routerLink"]},null),a._23(1),(l()(),a._14(null,["Characters"])),(l()(),a._14(null,["\n        "])),(l()(),a._13(0,null,null,8,"li",[],null,null,null,null,null)),a._20(1720320,null,2,i.A,[i.c,a.S,a.R,a.W],{routerLinkActive:[0,"routerLinkActive"]},null),a._35(603979776,3,{links:1}),a._35(603979776,4,{linksWithHrefs:1}),a._23(1),(l()(),a._13(0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var e=!0;if("click"===n){e=!1!==a._18(l,45).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e}return e},null,null)),a._20(671744,[[4,4]],0,i.z,[i.c,i.a,c.d],{routerLink:[0,"routerLink"]},null),a._23(1),(l()(),a._14(null,["Comics"])),(l()(),a._14(null,["\n        "])),(l()(),a._13(0,null,null,8,"li",[],null,null,null,null,null)),a._20(1720320,null,2,i.A,[i.c,a.S,a.R,a.W],{routerLinkActive:[0,"routerLinkActive"]},null),a._35(603979776,5,{links:1}),a._35(603979776,6,{linksWithHrefs:1}),a._23(1),(l()(),a._13(0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var e=!0;if("click"===n){e=!1!==a._18(l,55).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e}return e},null,null)),a._20(671744,[[6,4]],0,i.z,[i.c,i.a,c.d],{routerLink:[0,"routerLink"]},null),a._23(1),(l()(),a._14(null,["Creators"])),(l()(),a._14(null,["\n        "])),(l()(),a._13(0,null,null,8,"li",[],null,null,null,null,null)),a._20(1720320,null,2,i.A,[i.c,a.S,a.R,a.W],{routerLinkActive:[0,"routerLinkActive"]},null),a._35(603979776,7,{links:1}),a._35(603979776,8,{linksWithHrefs:1}),a._23(1),(l()(),a._13(0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var e=!0;if("click"===n){e=!1!==a._18(l,65).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e}return e},null,null)),a._20(671744,[[8,4]],0,i.z,[i.c,i.a,c.d],{routerLink:[0,"routerLink"]},null),a._23(1),(l()(),a._14(null,["Events"])),(l()(),a._14(null,["\n        "])),(l()(),a._13(0,null,null,8,"li",[],null,null,null,null,null)),a._20(1720320,null,2,i.A,[i.c,a.S,a.R,a.W],{routerLinkActive:[0,"routerLinkActive"]},null),a._35(603979776,9,{links:1}),a._35(603979776,10,{linksWithHrefs:1}),a._23(1),(l()(),a._13(0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var e=!0;if("click"===n){e=!1!==a._18(l,75).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e}return e},null,null)),a._20(671744,[[10,4]],0,i.z,[i.c,i.a,c.d],{routerLink:[0,"routerLink"]},null),a._23(1),(l()(),a._14(null,["Series"])),(l()(),a._14(null,["\n        "])),(l()(),a._13(0,null,null,8,"li",[],null,null,null,null,null)),a._20(1720320,null,2,i.A,[i.c,a.S,a.R,a.W],{routerLinkActive:[0,"routerLinkActive"]},null),a._35(603979776,11,{links:1}),a._35(603979776,12,{linksWithHrefs:1}),a._23(1),(l()(),a._13(0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var e=!0;if("click"===n){e=!1!==a._18(l,85).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e}return e},null,null)),a._20(671744,[[12,4]],0,i.z,[i.c,i.a,c.d],{routerLink:[0,"routerLink"]},null),a._23(1),(l()(),a._14(null,["Stories"])),(l()(),a._14(null,["\n      "])),(l()(),a._14(null,["\n    "])),(l()(),a._14(null,["\n    "])),(l()(),a._14(null,["\n  "])),(l()(),a._14(null,["\n"])),(l()(),a._14(null,["\n\n"])),(l()(),a._13(0,null,null,4,"div",[["class","container"]],null,null,null,null,null)),(l()(),a._14(null,["\n  "])),(l()(),a._13(16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),a._20(212992,null,0,i.B,[i.q,a.Z,a.e,[8,null],a.W],null,null),(l()(),a._14(null,["\n"])),(l()(),a._14(null,["\n\n"])),(l()(),a._13(0,null,null,8,"footer",[["class","footer"]],null,null,null,null,null)),(l()(),a._14(null,["\n  "])),(l()(),a._13(0,null,null,5,"div",[["class","container"]],null,null,null,null,null)),(l()(),a._14(null,["\n    "])),(l()(),a._13(0,null,null,2,"p",[["class","text-muted"]],null,null,null,null,null)),(l()(),a._13(0,null,null,1,"a",[["href","http://marvel.com"]],null,null,null,null,null)),(l()(),a._14(null,["Data provided by Marvel. © 2017 MARVEL"])),(l()(),a._14(null,["\n  "])),(l()(),a._14(null,["\n"]))],function(l,n){l(n,20,0,l(n,21,0,"/characters")),l(n,30,0,l(n,33,0,"active")),l(n,35,0,l(n,36,0,"/characters")),l(n,40,0,l(n,43,0,"active")),l(n,45,0,l(n,46,0,"/comics")),l(n,50,0,l(n,53,0,"active")),l(n,55,0,l(n,56,0,"/creators")),l(n,60,0,l(n,63,0,"active")),l(n,65,0,l(n,66,0,"/events")),l(n,70,0,l(n,73,0,"active")),l(n,75,0,l(n,76,0,"/series")),l(n,80,0,l(n,83,0,"active")),l(n,85,0,l(n,86,0,"/stories")),l(n,97,0)},function(l,n){l(n,19,0,a._18(n,20).target,a._18(n,20).href),l(n,34,0,a._18(n,35).target,a._18(n,35).href),l(n,44,0,a._18(n,45).target,a._18(n,45).href),l(n,54,0,a._18(n,55).target,a._18(n,55).href),l(n,64,0,a._18(n,65).target,a._18(n,65).href),l(n,74,0,a._18(n,75).target,a._18(n,75).href),l(n,84,0,a._18(n,85).target,a._18(n,85).href)})}function r(l){return a._12(0,[(l()(),a._13(0,null,null,1,"app-root",[],null,null,null,e,h)),a._20(49152,null,0,s.a,[],null,null)],null,null)}var u=t("NhKt"),a=t("/oeL"),i=t("BkNc"),c=t("qbdv"),s=t("wQAS");t.d(n,"a",function(){return d});var o=[u.a],h=a._11({encapsulation:0,styles:o,data:{}}),d=a._22("app-root",s.a,r,{},{},[])},qtrl:function(l,n,t){function e(l){var n=r[l];return n?t.e(n[1]).then(function(){return t(n[0])}):Promise.reject(new Error("Cannot find module '"+l+"'."))}var r={"./characters/characters.module.ngfactory":["sYCP",5],"./comics/comics.module.ngfactory":["3MUc",4],"./creators/creators.module.ngfactory":["r/by",3],"./events/events.module.ngfactory":["0olp",2],"./series/series.module.ngfactory":["xoIA",1],"./stories/stories.module.ngfactory":["PcIl",0]};e.keys=function(){return Object.keys(r)},l.exports=e,e.id="qtrl"},vnfH:function(l,n,t){"use strict";t.d(n,"a",function(){return e});var e=function(){function l(){}return l}()},wQAS:function(l,n,t){"use strict";t.d(n,"a",function(){return e});var e=function(){function l(){this.title="app"}return l}()}},[1]);