"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1584],{1584:(I,d,a)=>{a.r(d),a.d(d,{TabsPageModule:()=>y});var l=a(5672),f=a(1368),m=a(4716),c=a(7632),r=a(1528),g=a(6684),t=a(4496),P=a(180),p=a(2258);function T(o,s){if(1&o){const i=t.KQA();t.I0R(0,"ion-fab-button",7),t.qCj("click",function(){t.usT(i);const e=t.GaO();return t.CGJ(e.addNewPhoto())}),t.wR5(1,"ion-icon",8),t.C$Y()}}function v(o,s){if(1&o){const i=t.KQA();t.I0R(0,"ion-fab-button",7),t.qCj("click",function(){t.usT(i);const e=t.GaO();return t.CGJ(e.addNewAlbum())}),t.wR5(1,"ion-icon",9),t.C$Y()}}const C=[{path:"tabs",component:(()=>{var o;class s{constructor(n,e,u,b){this.albumsService=n,this.photoService=e,this.router=u,this.alertController=b,this.showAddPhotos=!0,this.alertButtons=["\xa1Listo!"],this.alertInputs=[{placeholder:"Nombre...",attributes:{minlength:2,maxlength:30}}]}ngOnInit(){var n=this;return(0,r.c)(function*(){n.router.events.pipe((0,g.I)(e=>e instanceof c.MT)).subscribe(e=>{n.showAddPhotos=["/tabs/photos"].includes(e.url)})})()}addNewPhoto(){var n=this;return(0,r.c)(function*(){yield n.photoService.addNewPhoto()})()}addNewAlbum(){var n=this;return(0,r.c)(function*(){console.log("here");let e="";const u=yield n.alertController.create({header:"Agrega un t\xedtulo",buttons:n.alertButtons,inputs:n.alertInputs});u.onDidDismiss().then(function(){var b=(0,r.c)(function*({data:h}){console.log(h.values[0]),e=h.values[0],e||n.addNewAlbum(),e&&(yield n.albumsService.addNewAlbum(e))});return function(h){return b.apply(this,arguments)}}()),yield u.present()})()}}return(o=s).\u0275fac=function(n){return new(n||o)(t.GI1(P.y),t.GI1(p.s),t.GI1(c.E5),t.GI1(l.iW))},o.\u0275cmp=t.In1({type:o,selectors:[["app-tabs"]],decls:14,vars:2,consts:[["slot","bottom",1,"style-tabs"],["tab","albums","href","/tabs/albums"],["aria-hidden","true","name","albums-outline"],["tab","photos","href","/tabs/photos"],["aria-hidden","true","name","image-outline"],["vertical","bottom","horizontal","center","slot","fixed",1,"fab-contain"],["class","button-fab",3,"click",4,"ngIf"],[1,"button-fab",3,"click"],["name","camera"],["name","add-outline"]],template:function(n,e){1&n&&(t.I0R(0,"ion-tabs")(1,"ion-tab-bar",0)(2,"ion-tab-button",1),t.wR5(3,"ion-icon",2),t.I0R(4,"ion-label"),t.OEk(5,"Carpetas"),t.C$Y()(),t.wR5(6,"ion-tab-button"),t.I0R(7,"ion-tab-button",3),t.wR5(8,"ion-icon",4),t.I0R(9,"ion-label"),t.OEk(10,"Fotos"),t.C$Y()()(),t.I0R(11,"ion-fab",5),t.yuY(12,T,2,0,"ion-fab-button",6)(13,v,2,0,"ion-fab-button",6),t.C$Y()()),2&n&&(t.yG2(12),t.E7m("ngIf",e.showAddPhotos),t.yG2(),t.E7m("ngIf",!e.showAddPhotos))},dependencies:[l.q8,l.Wq,l.Ko,l.QR,l.mx,l.ej,l.CE,f.u_],styles:[".style-tabs[_ngcontent-%COMP%]{width:90%;max-width:400px!important;border-radius:30px;margin:auto auto 20px}.fab-contain[_ngcontent-%COMP%]{margin-bottom:30px}.fab-contain[_ngcontent-%COMP%]   .button-fab[_ngcontent-%COMP%]{width:60px;height:60px}.fab-contain[_ngcontent-%COMP%]   .button-fab[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:30px}"]}),s})(),children:[{path:"photos",loadChildren:()=>Promise.all([a.e(9312),a.e(5560)]).then(a.bind(a,5560)).then(o=>o.PhotosPagePageModule)},{path:"albums",loadChildren:()=>Promise.all([a.e(9312),a.e(9136)]).then(a.bind(a,9136)).then(o=>o.AlbumsPageModule)},{path:"",redirectTo:"/tabs/photos",pathMatch:"full"}]},{path:"",redirectTo:"/tabs/photos",pathMatch:"full"}];let M=(()=>{var o;class s{}return(o=s).\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.a4G({type:o}),o.\u0275inj=t.s3X({imports:[c.qQ.forChild(C)]}),s})(),y=(()=>{var o;class s{}return(o=s).\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.a4G({type:o}),o.\u0275inj=t.s3X({imports:[l.wZ,f.MD,m.y,M]}),s})()}}]);