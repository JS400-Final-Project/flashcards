(this.webpackJsonpflashcards=this.webpackJsonpflashcards||[]).push([[0],{117:function(e,t,a){},118:function(e,t,a){},125:function(e,t,a){e.exports=a.p+"static/media/line_w.25f79b17.png"},152:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(16),l=a.n(s),c=a(15),i=a.n(c);a(116);i.a.initializeApp({apiKey:"AIzaSyDCeQIhbuvK-nWNhBZ_FwgrklePo2AbZA4",authDomain:"rf-app-journal.firebaseapp.com",projectId:"rf-app-journal"});a(117),a(118);var o=a(8),u=a(9),d=a(11),m=a(10),h=a(20),p=a(18),f=a(42),E=a(54),g=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={cardSetsDefault:[],isSignedIn:!1},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=function(){return"create"===e.props.action?r.a.createElement(h.b,{to:"/new"},"Create a set +"):"cancel"===e.props.action?r.a.createElement(h.b,{to:"/home"},"Main Menu "):!0===e.props.user&&"start"===e.props.action?r.a.createElement(h.b,{to:"/set/yours/".concat(e.props.entryId,"/")},"Test these cards"):void 0};return r.a.createElement("div",{id:"top"},r.a.createElement("div",null,r.a.createElement(h.b,{to:"/flashcards/home"},r.a.createElement("img",{src:a(125),alt:"Logo",width:"15%",height:"15%"}))),r.a.createElement("div",{className:"role"},r.a.createElement(h.b,{to:"/flashcards/Role"},r.a.createElement(E.a,{icon:f.a,size:"lg",color:"#ffffff"}))),r.a.createElement("div",{className:"action"},r.a.createElement(t,null)))}}]),n}(r.a.Component),b=a(184),v=a(194),y=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.cards,a=this.props.editable,n=function(){return t.length>0?t.map((function(t,n){return r.a.createElement(b.a,{className:"h-100 ".concat(t.data().category),md:6,xs:12,lg:4,key:n,xl:3},r.a.createElement(v.a,null,r.a.createElement(v.a.Body,null,r.a.createElement("h4",null,t.data().category.replace("-"," ")),r.a.createElement("h2",null,t.data().title),r.a.createElement("p",null,t.data().description),r.a.createElement("p",{className:"source"},e.props.editable?"Created by you":"Created by BrainKwik"),r.a.createElement("div",{className:"buttons"},r.a.createElement(h.b,{to:!1===a?"/set/".concat(t.id):"/set/yours/".concat(t.id)},r.a.createElement("div",{className:"button"},"Test Yourself")),!0===e.props.editable?r.a.createElement(h.b,{to:"/set/yours/".concat(t.id,"/edit")},r.a.createElement("div",{className:"button"},"Edit this set")):r.a.createElement(r.a.Fragment,null)))))})):r.a.createElement(r.a.Fragment,null)};return r.a.createElement(n,null)}}]),a}(r.a.Component),S=a(185),C=a(186),w=a(27),x=i.a.firestore(),O=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={cardSetsDefault:[],isSignedIn:!1,yourCards:[]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.unregisterAuthObserver=i.a.auth().onAuthStateChanged((function(t){e.default=x.collection("defaultcards").onSnapshot((function(t){e.setState({cardSetsDefault:t.docs})})),e.setState({isSignedIn:!!t},(function(){var t=i.a.auth().currentUser.uid;e.yourCards=x.collection("users").doc(t).collection("yourCards").onSnapshot((function(t){console.log(1),e.setState({yourCards:t.docs})}))}))}))}},{key:"componentWillUnmount",value:function(){this.default&&this.default(),this.yourCards&&this.yourCards()}},{key:"render",value:function(){var e=this.state.cardSetsDefault,t=this.state.yourCards,a=this.state.isSignedIn;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"Flashcards")),r.a.createElement(g,{title:"FlashCards",action:"create"}),r.a.createElement(S.a,{fluid:!0},r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"Create a set or test yourself"),r.a.createElement(C.a,null,a&&r.a.createElement(b.a,{className:"new h-100",md:12,xs:12,lg:4,xl:6},r.a.createElement(h.b,{to:"/new"},r.a.createElement(v.a,null,r.a.createElement(v.a.Body,null,r.a.createElement("h2",null,"Create a new cardset"),r.a.createElement("h3",null,"Easy learning in a flash"),r.a.createElement("div",{className:"addSet"},"+"))))),a&&r.a.createElement(y,{cards:e,editable:!1}),a&&r.a.createElement(y,{cards:t,editable:!0})))))}}]),a}(r.a.Component),j=a(33),k=a.n(j),I=a(44),N=(a(68),a(192)),B=a(187),A=a(31),_=a.n(A),T=function(e){return _.a.post("http://localhost:5000/login/signup",e).then((function(e){return e.status}))},D=function(e){return _.a.post("http://localhost:5000/login/emailcheck",e).then((function(e){return e.status}))},U=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleOnChangeEmail=function(e){a.setState({email:e.target.value})},a.handleOnChangePassword=function(e){a.setState({password:e.target.value})},a.handleOnBlur=function(){var e=Object(I.a)(k.a.mark((function e(t){var n,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({email:t.target.value}),n={email:a.state.email},e.next=4,D(n);case 4:204===(r=e.sent)?a.setState({email_taken:!0}):a.setState({email_taken:!1}),204===r?a.setState({error_email_exists:"Email already exists. Try Login Instead!"}):a.setState({error_email_exists:""});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.onSubmit=function(){var e=Object(I.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={email:a.state.email,password:a.state.password},e.next=4,T(n);case 4:200===e.sent?a.setState({email:"",password:"",register:!0,error:!1}):a.setState({error:!0,register:!1});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={email:"",password:"",register:!1,error:!1},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=(e.register,e.error,e.email_taken),n=e.error_email_exists;return this.state.register?r.a.createElement(p.a,{to:{pathname:"/new"}}):this.props.isSignedIn?r.a.createElement(r.a.Fragment,null):r.a.createElement(S.a,{fluid:!0,className:"login"},r.a.createElement("div",{id:"welcome"}),r.a.createElement("div",{id:"signup"},r.a.createElement(C.a,{className:"justify-content-center"},r.a.createElement(b.a,null,r.a.createElement("div",{id:"welcome"},r.a.createElement("h1",null),r.a.createElement("img",{src:a(77),alt:"Logo",width:"100%",height:"100%"}))),r.a.createElement(b.a,{className:"h-100",md:6,xs:12,lg:6,xl:6},r.a.createElement("h7",null," ",r.a.createElement(B.a,{href:"#text-buttons"},"LOGIN")),r.a.createElement("h4",null,"SIGN-UP"),r.a.createElement("br",null),r.a.createElement("h5",null,r.a.createElement(N.a,{id:"outlined-helperText",label:"E-mail",variant:"outlined",onChange:this.handleOnChangeEmail,onBlur:this.handleOnBlur,helperText:n,required:!0}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(N.a,{id:"outlined-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"outlined",onChange:this.handleOnChangePassword})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h6",null,r.a.createElement(B.a,{variant:"contained",onClick:this.onSubmit,disabled:t,color:"secondary",href:"/flashcards/#/new"},"Sign-Up")),"\xa0 \xa0\xa0\xa0"))))}}]),n}(r.a.Component),F=a(193),R=function(e){return _.a.post("http://localhost:5000/login/",e).then((function(e){return e.status}))},V=function(e){return _.a.post("http://localhost:5000/login/emailcheck",e).then((function(e){return e.status}))},L=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleOnChangeEmail=function(e){a.setState({email:e.target.value})},a.handleOnChangePassword=function(e){a.setState({password:e.target.value})},a.handleOnBlur=function(){var e=Object(I.a)(k.a.mark((function e(t){var n,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({email:t.target.value}),n={email:a.state.email},e.next=4,V(n);case 4:204===(r=e.sent)?a.setState({sign_up_reqd:!1}):a.setState({sign_up_reqd:!0}),204===r?a.setState({error_sign_up_reqd:""}):a.setState({error_sign_up_reqd:"User does not exist. Sign-Up First!"});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.onSubmit=function(){var e=Object(I.a)(k.a.mark((function e(t){var n,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.setState({wrong_password:!0}),n={email:a.state.email,password:a.state.password},e.next=5,R(n);case 5:r=e.sent,console.log("Test ".concat(r)),200!==r?(console.log("Log in Failed."),a.setState({loginSuccess:!1,error:!0})):(console.log("Log in Success."),a.setState({loginSuccess:!0,error:!1})),a.forceUpdate();case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={email:"",password:"",error:!1,loginSuccess:!1},a}return Object(u.a)(n,[{key:"render",value:function(){if(this.state.loginSuccess)return r.a.createElement(p.a,{to:{pathname:"/new"}});var e=this.state,t=(e.error,e.sign_up_reqd),n=e.error_sign_up_reqd,s=e.wrong_password;return r.a.createElement(S.a,{fluid:!0,className:"login"},r.a.createElement("div",{id:"login"},r.a.createElement(C.a,{className:"justify-content-center"},r.a.createElement(b.a,null,r.a.createElement("div",{id:"welcome"},r.a.createElement("h1",null),r.a.createElement("img",{src:a(77),alt:"Logo",width:"100%",height:"100%"}))),r.a.createElement(b.a,{className:"h-100",md:6,xs:12,lg:6,xl:6},r.a.createElement("h7",null," ",r.a.createElement(B.a,{href:"/flashcards/#/signup"},"Sign-Up")),r.a.createElement("h4",null,"LOGIN"),r.a.createElement("br",null),r.a.createElement("h5",null,r.a.createElement(N.a,{id:"outlined-helperText",label:"E-mail",variant:"outlined",onChange:this.handleOnChangeEmail,onBlur:this.handleOnBlur,helperText:n,required:!0}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(N.a,{id:"outlined-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"outlined",onChange:this.handleOnChangePassword,required:!0})),r.a.createElement("h6",null,r.a.createElement(B.a,{variant:"contained",onClick:this.onSubmit,disabled:t,color:"secondary",href:"/flashcards/#/new"},"Log-In")),r.a.createElement("h3",null,s&&r.a.createElement(F.a,{severity:"error"},"Unable to log in. Please check your username and password."))))))}}]),n}(r.a.Component),q=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).titleRef=r.a.createRef(),n}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.updateTitle;return r.a.createElement("div",{className:"title"},r.a.createElement(C.a,{className:"justify-content-center"},r.a.createElement(b.a,{xs:10},r.a.createElement("input",{text:"true",defaultValue:this.props.title,ref:this.titleRef,minLength:"4",id:"titleInput",maxLength:"50",placeholder:null===this.props.title?"Give your card set a title.":null}),r.a.createElement("button",{onClick:function(){t(e.titleRef.current.value)}},this.props.buttonText),r.a.createElement("div",{className:"alert"},this.props.alert))))}}]),a}(r.a.Component),P=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).descRef=r.a.createRef(),n}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.updateDesc;return r.a.createElement("div",{className:"description"},r.a.createElement(C.a,{className:"justify-content-center"},r.a.createElement(b.a,{xs:10}," ",r.a.createElement("input",{text:"true",id:"descInput",ref:this.descRef,defaultValue:this.props.descriptionVal,minLength:"4",placeholder:null===this.props.descriptionVal?"Describe the set.":null}),r.a.createElement("button",{onClick:function(){t(e.descRef.current.value)}},"Save description"),r.a.createElement("div",{className:"alert"},this.props.descAlert))))}}]),a}(r.a.Component),K=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).sideA=r.a.createRef(),n.sideB=r.a.createRef(),n}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.updateSideA,a=this.props.updateSideB,n=this.props.deleteCard,s=this.props.card,l=this.props.category;return r.a.createElement("div",{key:s.id,className:"cardEdit"},r.a.createElement(C.a,{className:"justify-content-center deleteHold"},r.a.createElement(b.a,{md:5,xs:10,lg:5,xl:5},r.a.createElement("button",{class:"deleteCard",onClick:function(){n(s)}},"Delete the card below"))),r.a.createElement(C.a,null,r.a.createElement(b.a,{className:"h-100 sideA ".concat(l),md:6,xs:12,lg:6,xl:6},r.a.createElement(v.a,null,r.a.createElement("textarea",{placeholder:"Type here for side A",ref:this.sideA}),r.a.createElement("button",{onClick:function(){t(e.sideA.current.value,s)}},"Save Side A"))),r.a.createElement(b.a,{className:"h-100 sideB ".concat(l),md:6,xs:12,lg:6,xl:6},r.a.createElement(v.a,null,r.a.createElement("textarea",{placeholder:"Type here for side B",ref:this.sideB}),r.a.createElement("button",{onClick:function(){a(e.sideB.current.value,s)}},"Save Side B")))))}}]),a}(r.a.Component),M=i.a.firestore(),W=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={currentCards:[],entryId:n.props.match.params.urlString,title:"",descriptionVal:"",category:"",set:null,isSignedIn:!1,disabled:!0,alert:null},n}return Object(u.a)(a,[{key:"updateTitle",value:function(e){var t=e,a=i.a.auth().currentUser.uid;M.collection("users").doc(a).collection("yourCards").doc(this.state.entryId).update({title:t})}},{key:"updateDesc",value:function(e){var t=e,a=i.a.auth().currentUser.uid;M.collection("users").doc(a).collection("yourCards").doc(this.state.entryId).update({description:t})}},{key:"componentDidMount",value:function(){var e=this;this.unregisterAuthObserver=i.a.auth().onAuthStateChanged((function(t){return e.setState({isSignedIn:!!t},(function(){var t=i.a.auth().currentUser.uid;e.unsubscribe=M.collection("users").doc(t).collection("yourCards").doc(e.state.entryId).collection("cards").orderBy("created","asc").onSnapshot((function(t){e.setState({currentCards:t.docs})})),M.collection("users").doc(t).collection("yourCards").doc(e.state.entryId).get().then((function(t){e.setState({title:t.data().title,descriptionVal:t.data().description,category:t.data().category})}))}))}))}},{key:"componentWillUnmount",value:function(){this.unsubscribe&&this.unsubscribe()}},{key:"updateSideA",value:function(e,t){var a=i.a.auth().currentUser.uid,n=e;if(null!==n)M.collection("users").doc(a).collection("yourCards").doc(this.state.entryId).collection("cards").doc(t.id).update({sideA:e});else if(""===n||null===n)return!1}},{key:"updateSideB",value:function(e,t){var a=i.a.auth().currentUser.uid,n=e;if(null!==n)M.collection("users").doc(a).collection("yourCards").doc(this.state.entryId).collection("cards").doc(t.id).update({sideB:e});else if(""===n||null===n)return!1}},{key:"deleteCard",value:function(e){var t=i.a.auth().currentUser.uid;M.collection("users").doc(t).collection("yourCards").doc(this.state.entryId).collection("cards").doc(e.id).delete()}},{key:"addCard",value:function(){var e=i.a.auth().currentUser.uid;M.collection("users").doc(e).collection("yourCards").doc(this.state.entryId).collection("cards").add({sideA:null,sideB:null,answered:0,correct:0,created:new Date})}},{key:"render",value:function(){var e=this,t=this.state.currentCards.map((function(t,a){return r.a.createElement(K,{card:t,updateSideA:e.updateSideA.bind(e),updateSideB:e.updateSideB.bind(e),deleteCard:e.deleteCard.bind(e),category:e.state.category})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,this.state.title," - Editing a Card Set | BrainKwik")),r.a.createElement(g,{user:!0,title:"BrainKwik",entryId:this.state.entryId,addCard:this.addCard.bind(this),action:"start"}),r.a.createElement(S.a,{fluid:!0,className:"editing"},r.a.createElement("div",{className:"content"},r.a.createElement(q,{updateTitle:this.updateTitle.bind(this),title:this.state.title,alert:this.state.alert,buttonText:"Save title"}),r.a.createElement(P,{updateDesc:this.updateDesc.bind(this),descriptionVal:this.state.descriptionVal,alert:this.state.descAlert}),r.a.createElement("div",null,this.state.currentCards.length>0&&t,r.a.createElement(C.a,{className:"justify-content-center"},r.a.createElement(b.a,{md:5,xs:10,lg:5,xl:5},r.a.createElement("button",{id:"addCard",onClick:function(){e.addCard()}},"Add a card")))))))}}]),a}(r.a.Component),G=i.a.firestore(),z=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={currentCards:[],entryId:n.props.match.params.urlString,shuffled:[],index:0,currentSide:"A",cardsAnswered:0,category:"",cardsCorrect:0,title:"",isSignedIn:!1,complete:!1,disabled:!0,flips:0},n.endButton=r.a.createRef(),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.unregisterAuthObserver=i.a.auth().onAuthStateChanged((function(t){e.setState({isSignedIn:!!t},(function(){var t=i.a.auth().currentUser.uid,a=-1===e.props.location.pathname.indexOf("/set/yours/")?G.collection("defaultcards"):G.collection("users").doc(t).collection("yourCards");e.unsubscribe=a.doc(e.state.entryId).collection("cards").orderBy("created","asc").onSnapshot((function(t){e.setState({currentCards:t.docs,category:""}),e.shuffle(e.state.currentCards)})),a.doc(e.state.entryId).get().then((function(t){t.exists?e.setState({category:t.data().category,title:t.data().title}):e.props.history.push("/404")}))}))}))}},{key:"componentWillUnmount",value:function(){this.unsubscribe&&this.unsubscribe()}},{key:"shuffle",value:function(e){var t=e.map((function(e){return{sort:Math.random(),value:e}})).sort((function(e,t){return e.sort-t.sort})).map((function(e){return e.value}));this.setState({shuffled:t,index:0,currentSide:"A",complete:!1,disabled:!0})}},{key:"flip",value:function(){var e="B"===this.state.currentSide?"A":"B",t=this.state.flips+1;this.setState({currentSide:e,flips:t,disabled:!1})}},{key:"endStudy",value:function(){"C"===this.state.currentSide?this.props.history.push("/flashcards/home"):0!==this.state.cardsAnswered?this.setState({currentSide:"C",disabled:!0}):this.props.history.push("/flashcards/home")}},{key:"nextCard",value:function(e){var t=this,a=this.state.index+1,n=this.state.cardsAnswered+1,r=this.state.cardsCorrect+e;this.setState({index:a,cardsAnswered:n,cardsCorrect:r,flips:0,disabled:!0},(function(){a===t.state.currentCards.length?t.setState({complete:!0,currentSide:"C"},t.endStudy()):t.setState({currentSide:"A",complete:!1})}))}},{key:"render",value:function(){var e=this,t=this.state.shuffled[this.state.index],a=function(){return t&&"C"!==e.state.currentSide?r.a.createElement(C.a,{className:"justify-content-center cardHolder"},r.a.createElement(b.a,{className:"h-100",md:10,xs:12,lg:10,xl:10},r.a.createElement(v.a,{className:"sideA side ".concat(e.state.category),onClick:function(){e.flip()}},r.a.createElement("span",null,t.data().sideA))),r.a.createElement(b.a,{className:"h-100",md:10,xs:12,lg:10,xl:10},r.a.createElement(v.a,{className:"sideB side ".concat(e.state.category),onClick:function(){e.flip()}}," ",r.a.createElement("span",null,t.data().sideB)))):"C"===e.state.currentSide?r.a.createElement(b.a,{className:"h-100 sideB ".concat(e.state.category),md:10,xs:12,lg:10,xl:10},r.a.createElement(v.a,{className:"endCard"},r.a.createElement("span",null,"During this session, you got ".concat(e.state.cardsCorrect," out of ").concat(e.state.cardsAnswered," cards correct."),r.a.createElement("br",null),"\n            That's ".concat(parseFloat(e.state.cardsCorrect/e.state.cardsAnswered*100).toFixed(1),"%!")," "))):r.a.createElement(r.a.Fragment,null)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,this.state.title," | BrainKwik")),r.a.createElement(g,{title:this.state.title,action:"cancel"}),r.a.createElement(S.a,{fluid:!0,id:"answer"},r.a.createElement(C.a,{className:"answerButtons justify-content-center topButtons"},r.a.createElement(b.a,{md:6,xs:12,lg:6,xl:6},r.a.createElement("button",{onClick:function(){e.flip()}},"Click to flip card"))),r.a.createElement(C.a,{className:"cardAnswer justify-content-center ".concat(e.state.flips>0&&e.state.flips%2===1?"flipped":e.state.flips>0&&e.state.flips%2===0?"unflipped":"")},r.a.createElement(a,null)),r.a.createElement(C.a,{className:"answerButtons justify-content-center result"},r.a.createElement(b.a,{md:4,xs:6,lg:4,xl:4},r.a.createElement("button",{id:"correct",disabled:this.state.disabled,onClick:function(){e.nextCard(1)}},"I got it right")),r.a.createElement(b.a,{md:4,xs:6,lg:4,xl:4},r.a.createElement("button",{id:"incorrect",disabled:this.state.disabled,onClick:function(){e.nextCard(0)}},"I got it incorrect"))),r.a.createElement(C.a,{className:"answerButtons  justify-content-center bottom"},r.a.createElement(b.a,{md:6,xs:12,lg:6,xl:6},r.a.createElement("button",{id:"reshuffle",onClick:function(){e.shuffle(e.state.currentCards)}},"Start Over"))," ",r.a.createElement(b.a,{md:6,xs:12,lg:6,xl:6},r.a.createElement("button",{id:"end",ref:this.endButton,onClick:function(){e.endStudy()}},"End Session")))))}}]),a}(r.a.Component),H=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={},n}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(C.a,{className:"justify-content-center"},r.a.createElement(b.a,{xs:10,className:"selectDiv"},r.a.createElement("select",{defaultValue:this.props.category,onChange:this.props.dropdownChanged,disabled:this.props.disabled},r.a.createElement("option",{value:"",disabled:!0},"Categorize your set"),r.a.createElement("option",{value:"geography"},"Geography"),r.a.createElement("option",{value:"history"},"History"),r.a.createElement("option",{value:"pop-culture"},"Pop Culture"),r.a.createElement("option",{value:"science"},"Science"),r.a.createElement("option",{value:"sports"},"Sports"),r.a.createElement("option",{value:"other"},"Other"))))}}]),a}(r.a.Component),J=i.a.firestore(),Y=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).dropdownChanged=function(e){n.setState({category:e.target.value})},n.descRef=r.a.createRef(),n.state={title:null,descriptionVal:null,card:null,entryId:null,alert:null,descAlert:null,cardSetId:null,category:""},n}return Object(u.a)(a,[{key:"updateTitle",value:function(e){var t=e;if(t.length<4)this.setState({alert:"Title must be at least four characters long"});else{var a=t.replace(/\W+/g," ").replace(/\s+/g,"-").toLowerCase();this.setState({title:t,alert:null,entryId:a})}}},{key:"updateDesc",value:function(e){var t=this,a=e;if(a.length<5)this.setState({descAlert:"Please write a longer description"});else{this.setState({descriptionVal:a,descAlert:null},(function(){setTimeout(t.createSet(),1e3)}));this.state.entryId}}},{key:"checkExists",value:function(e,t){var a=this;J.collection("defaultcards").doc(e).get().then((function(n){if(n.exists){t++;var r=a.state.entryId+"-"+t;a.checkExists(r,t)}else a.setState({entryId:e}),setTimeout(a.createSet(),1e3)}))}},{key:"createSet",value:function(){var e={title:this.state.title,description:this.state.descriptionVal,category:this.state.category,entryId:this.state.entryId,userId:"5f4bdd9f4ae4db08d4b77c04"};_.a.post("http://localhost:5000/set",e).then((function(t){console.log(t),console.log(e);var a=t.data._id;this.setState({cardSetId:a});var n={sideA:"This is side A",sideB:"This is side B",setId:a};_.a.post("http://localhost:5000/cards/"+a,n)})).catch((function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message)})),this.props.history.push({pathname:"/set/yours/".concat(this.state.cardSetId,"/edit"),state:{title:this.state.title,description:this.state.descriptionVal,category:this.state.category,entryId:this.state.entryId,cardSetId:this.setState.cardSetId}})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"Create a card set BrainKwik")),r.a.createElement(g,{title:"BrainKwik",action:"cancel"}),r.a.createElement(S.a,{fluid:!0,className:this.state.category},r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"Here's your chance to create a new study set."),r.a.createElement(H,{dropdownChanged:this.dropdownChanged,category:this.state.category,disabled:!1}),""!==this.state.category&&r.a.createElement(q,{updateTitle:this.updateTitle.bind(this),title:this.state.title,alert:this.state.alert,buttonText:"Save title"}),null!==this.state.title&&r.a.createElement(P,{updateDesc:this.updateDesc.bind(this),title:this.state.descriptionVal,alert:this.state.descAlert}))))}}]),a}(r.a.Component),Z=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null," ",r.a.createElement(w.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"404 | BrainKwik")),r.a.createElement(g,{title:"BrainKwik",action:"cancel"}),r.a.createElement(S.a,{fluid:!0,className:"fourohfour"},r.a.createElement(C.a,{className:"justify-content-center"},r.a.createElement(b.a,{md:6,xs:12,lg:6,xl:6},"You have a 404 error.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(h.b,{to:"/home"},"Go to our homepage")))))}}]),a}(r.a.Component),Q=(a(151),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/home",component:O}),r.a.createElement(p.b,{exact:!0,path:"/",component:L}),r.a.createElement(p.b,{exact:!0,path:"/signup",component:U}),r.a.createElement(p.b,{path:"/set/yours/:urlString/edit",component:W}),r.a.createElement(p.b,{path:"/set/yours/:urlString/",component:z}),r.a.createElement(p.b,{path:"/set/:urlString/",componyent:z}),r.a.createElement(p.b,{path:"/new",component:Y}),r.a.createElement(p.b,{path:"*",component:a},r.a.createElement(p.a,{to:"/"})),r.a.createElement(p.b,{component:Z}))))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},77:function(e,t,a){e.exports=a.p+"static/media/flashcardsbg.4227b164.jpg"},98:function(e,t,a){e.exports=a(152)}},[[98,1,2]]]);
//# sourceMappingURL=main.1ef81eee.chunk.js.map