(this.webpackJsonpsniptr=this.webpackJsonpsniptr||[]).push([[4],{162:function(e,t,n){"use strict";n.d(t,"a",(function(){return M}));var a=n(2),r=n(135),i=n(136),o=n(143),p=n(138),s=n(0),c=n.n(s),u=n(18),g=n(392),l=n(389),m=n(225),h=n(184),d=n(398),f=n(400),b=n(401),L=n(402),v=n(403),E=n(395),y=n(388),C=n(394),S=n(399),O=n(8),j=function(){return O.a.get("/programmingLanguages.json").then(O.c)},P=function(e){Object(p.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).fetchProgrammingLanguages=function(){a.setState({isFetchingProgrammingLanguages:!0}),j().then((function(e){a.setState({programmingLanguages:e}),a.setState({isFetchingProgrammingLanguages:!1})}))},a.renderLanguagesMenu=function(){return c.a.createElement(E.a,{onClick:function(e){var t=e.key;return a.props.onChange(t)}},a.state.programmingLanguages.map((function(e){return c.a.createElement(E.a.Item,{key:e.id},e.name)})))},a.state={programmingLanguages:[],isFetchingProgrammingLanguages:!1},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.fetchProgrammingLanguages()}},{key:"render",value:function(){var e=this,t=c.a.createElement(S.a,{spin:!0}),n=c.a.createElement(y.a,{indicator:t});if(this.state.isFetchingProgrammingLanguages)return n;var a=this.state.programmingLanguages.length>0,r=!!this.props.programmingLanguageId,i=a&&r?this.state.programmingLanguages.find((function(t){return t.id===e.props.programmingLanguageId})).name:"Language...",o=a&&r?this.state.programmingLanguages.find((function(t){return t.id===e.props.programmingLanguageId})).fileExtensions[0]:".ext";return c.a.createElement(C.a.Button,{overlay:this.renderLanguagesMenu(),icon:c.a.createElement("span",null,o)},i)}}]),n}(s.Component),I=n(391),k=n(393),T=function(e){return c.a.createElement(I.a,{layout:"vertical"},c.a.createElement(I.a.Item,{label:"Name: "},c.a.createElement(k.a,{placeholder:"Print a Javascript array.",value:e.snippet.name,onChange:function(t){return e.onChangeName(t.target.value)}})))},F=n(213),w=n.n(F),D=n(149);n(219),n(220),n(221),n(222),n(223);function H(e){return c.a.createElement(w.a,{mode:"javascript",theme:"tomorrow",width:"100%",onChange:Object(D.debounce)(e.onChange,e.debounceDelay),value:e.value,name:"UNIQUE_ID_OF_DIV",placeholder:e.placeholder,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,editorProps:{$blockScrolling:!0},setOptions:{useWorker:!1,enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,showLineNumbers:!0,tabSize:2,fontSize:16,highlightSelectedWord:!0,maxLines:10,minLines:10,animatedScroll:!0}})}H.defaultProps={debounceDelay:300};var A=H,M={FULL:"FULL",COMPACT:"COMPACT"},B="VIEW",N="EDIT",U=[{key:B,tab:"View"},{key:N,tab:"Edit details"}],x=function(e){Object(p.a)(n,e);var t=Object(o.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).onChangeBodyHandler=function(e){e!==i.props.snippet.body&&i.props.onChange(Object(a.a)({},i.props.snippet,{body:e}))},i.onChangeProgrammingLanguageHandler=function(e){e!==i.props.snippet.programmingLanguageId&&i.props.onChange(Object(a.a)({},i.props.snippet,{programmingLanguageId:e}))},i.onChangeNameHandler=function(e){e!==i.props.snippet.name&&i.props.onChange(Object(a.a)({},i.props.snippet,{name:e}))},i.state={currentTab:B},i}return Object(i.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return[e.snippet.body!==this.props.snippet.body,e.snippet.programmingLanguageId!==this.props.snippet.programmingLanguageId,e.snippet.name!==this.props.snippet.name,t.currentTab!==this.state.currentTab].some((function(e){return!0===e}))}},{key:"render",value:function(){var e=this;return c.a.createElement(g.a,{title:this.props.snippet.name||"Unnamed Snippet",tabList:U,onTabChange:function(t){return e.setState({currentTab:t})},activeTabKey:this.state.currentTab,tabBarExtraContent:c.a.createElement(l.a,null,this.props.mode===M.COMPACT&&c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{title:"Save"},c.a.createElement(h.a,{type:"primary",icon:c.a.createElement(f.a,null),onClick:function(){return e.props.onSave(e.props.snippet)}})),c.a.createElement(m.a,{title:"Edit"},c.a.createElement(u.b,{to:"snippets/".concat(this.props.snippet.id)},c.a.createElement(h.a,{type:"default",icon:c.a.createElement(b.a,null)})))),!this.props.withoutDeleteButton&&c.a.createElement(m.a,{title:"Delete"},c.a.createElement(d.a,{placement:"topLeft",title:"Are you sure\uff1f",icon:c.a.createElement(L.a,{style:{color:"red"}}),onConfirm:this.props.onDelete},c.a.createElement(h.a,{type:"danger",icon:c.a.createElement(v.a,null)}))))},this.state.currentTab===B&&c.a.createElement(A,{value:this.props.snippet.body,onChange:this.onChangeBodyHandler,debounceDelay:800,placeholder:"Your <Awesome /> snippet."}),this.state.currentTab===N&&c.a.createElement(c.a.Fragment,null,c.a.createElement(T,{snippet:this.props.snippet,onChangeName:this.onChangeNameHandler}),c.a.createElement(P,{programmingLanguageId:this.props.snippet.programmingLanguageId,onChange:this.onChangeProgrammingLanguageHandler})))}}]),n}(s.Component);x.defaultProps={mode:M.FULL,withoutDeleteButton:!1};t.b=x},390:function(e,t,n){"use strict";n.r(t);var a=n(135),r=n(136),i=n(143),o=n(138),p=n(0),s=n.n(p),c=n(9),u=n(396),g=n(389),l=n(367),m=n(368),h=n(184),d=n(400),f=n(149),b=n(15),L=n(162),v=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={isFetchingSnippet:!1,snippet:void 0},e.fetchSnippet=function(t){e.setState({isFetchingSnippet:!0}),b.a.get(t).then((function(t){e.setState({snippet:t,isFetchingSnippet:!1})}))},e.redirectToListingPage=function(){e.props.history.replace("/snippets")},e.deleteSnippetHandler=function(){var t=e.props.match.params.snippetId;b.a.delete(t).then((function(){u.a.success("Snippet successfuly deleted."),e.redirectToListingPage()}))},e.changeSnippetHandler=function(t){e.setState({snippet:t})},e.saveSnippetHandler=Object(f.debounce)((function(){b.a.update(e.state.snippet).then((function(){u.a.success("Snippet successfuly saved."),e.redirectToListingPage()}))}),300),e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.snippetId;this.fetchSnippet(e)}},{key:"render",value:function(){return s.a.createElement(g.a,{direction:"vertical",style:{width:"100%"}},!this.state.isFetchingSnippet&&!!this.state.snippet&&s.a.createElement(L.b,{snippet:this.state.snippet,onDelete:this.deleteSnippetHandler,onChange:this.changeSnippetHandler}),s.a.createElement(l.a,{justify:"end"},s.a.createElement(m.a,null,s.a.createElement(h.a,{onClick:this.saveSnippetHandler,icon:s.a.createElement(d.a,null),type:"primary"},"Save"))))}}]),n}(p.Component);t.default=Object(c.f)(v)}}]);
//# sourceMappingURL=4.3f6898f4.chunk.js.map