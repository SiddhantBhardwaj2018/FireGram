(this.webpackJsonpfiregram=this.webpackJsonpfiregram||[]).push([[0],{15:function(e,t,a){e.exports=a(26)},20:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(13),i=a.n(c),l=(a(20),a(2)),s=a(9),o=a(5);a(28),a(21);o.initializeApp({apiKey:"AIzaSyAxsBmaih7GhkCe5lDA-HVTX1i5IQrroNc",authDomain:"siddhant-firegram.firebaseapp.com",databaseURL:"https://siddhant-firegram.firebaseio.com",projectId:"siddhant-firegram",storageBucket:"siddhant-firegram.appspot.com",messagingSenderId:"302748255218",appId:"1:302748255218:web:9145312a48f400e3e3e16b"});var u=o.storage(),m=o.firestore(),d=o.firestore.FieldValue.serverTimestamp,p=function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){var t=m.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(s.a)(Object(s.a)({},e.data()),{},{id:e.id}))})),c(t)}));return function(){return t()}}),[e]),{docs:r}},f=a(3),g=function(e){var t=e.setSelectedImage,a=p("images").docs;return console.log(a),r.a.createElement("div",{className:"img-grid"},a&&a.map((function(e){return r.a.createElement(f.a.div,{className:"img-wrap",key:e.id,whileHover:{opacity:1},layout:!0,onClick:function(){return t(e.url)}},r.a.createElement(f.a.img,{src:e.url,alt:"uploaded pic",initial:{opacity:0},animate:{opacity:1},transition:{delay:1}}))})))},b=function(e){var t=e.selectedImage,a=e.setSelectedImage;return r.a.createElement(f.a.div,{className:"backdrop",onClick:function(e){e.target.classList.contains("backdrop")&&a(null)},initial:{opacity:0},animate:{opacity:1}},r.a.createElement(f.a.img,{src:t,alt:"enlarged pic",initial:{y:"-100vh"},animate:{y:0}}))},E=function(){return r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"FireGram"),r.a.createElement("h2",null,"Your Pictures"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))},v=a(8),h=a.n(v),j=a(14),y=function(e){var t=Object(n.useState)(0),a=Object(l.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(null),s=Object(l.a)(i,2),o=s[0],p=s[1],f=Object(n.useState)(null),g=Object(l.a)(f,2),b=g[0],E=g[1];return Object(n.useEffect)((function(){var t=u.ref(e.name),a=m.collection("images");t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;c(t)}),(function(e){p(e)}),Object(j.a)(h.a.mark((function e(){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:n=e.sent,r=d(),a.add({url:n,createdAt:r}),E(n);case 6:case"end":return e.stop()}}),e)}))))}),[e]),{progress:r,url:b,error:o}},O=function(e){var t=e.file,a=e.setFile,c=y(t),i=c.url,l=c.progress;return Object(n.useEffect)((function(){i&&a(null)}),[i]),r.a.createElement(f.a.div,{className:"progress-bar",initial:{width:0},animate:{width:l+"%"}})},S=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(null),s=Object(l.a)(i,2),o=s[0],u=s[1],m=["image/png","image/jpeg"];return r.a.createElement("form",null,r.a.createElement("label",null,r.a.createElement("input",{type:"file",onChange:function(e){var t=e.target.files[0];t&&m.includes(t.type)?(c(t),u("")):(c(null),u("Please select an image (png or jpeg) "))},style:{display:"none"}}),r.a.createElement("span",null,"+")),r.a.createElement("div",{className:"output"},o&&r.a.createElement("div",{className:"error"},o),a&&r.a.createElement("div",null,a.name),a&&r.a.createElement(O,{file:a,setFile:c})))};var I=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(E,null),r.a.createElement(S,null),r.a.createElement(g,{setSelectedImage:c}),a&&r.a.createElement(b,{selectedImage:a,setSelectedImage:c}))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a004f7c9.chunk.js.map