(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a6f62b6"],{"021b":function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));r("99af"),r("b0c0");var n=r("5530"),a=(r("96cf"),r("1da1")),o=r("d4ec"),i=r("bee2"),u=r("6ad1"),c=r("f52b"),s=function(){function e(){Object(o["a"])(this,e)}return Object(i["a"])(e,null,[{key:"create",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={name:r,parentId:t},e.next=3,u["a"].post("workspace/member-groups",JSON.stringify(n));case 3:return a=e.sent,e.abrupt("return",a.data.memberGroup);case 5:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"getMemberGroup",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,o,i,s,m,d,l,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].get("workspace/member-groups/".concat(t));case 2:for(r=e.sent,n=r.data.memberGroup.members,a=0;a<n.length;a+=1)o=n[a],i=o.uuid,s=o.name,m=o.businessDefinedId,d=o.confirmed,l=o.role,p=o.belongsTo,n[a]=new c["a"](i,s,m,d,l,p);return e.abrupt("return",r.data.memberGroup);case 6:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,r){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=Object(n["a"])({},r),e.next=3,u["a"].put("workspace/member-groups/".concat(t),a);case 3:return o=e.sent,e.abrupt("return",o.data.memberGroup);case 5:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"deleteMemberInMemberGroup",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].delete("workspace/member-groups/".concat(t,"/members/").concat(r));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"updateMemberInMemberGroup",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,r,a){var o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=Object(n["a"])({},a),e.next=3,u["a"].put("workspace/member-groups/".concat(t,"/members/").concat(r),o);case 3:return i=e.sent,e.abrupt("return",i.data);case 5:case"end":return e.stop()}}),e)})));function t(t,r,n){return e.apply(this,arguments)}return t}()},{key:"updateMemberRoleInMemberGroup",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,r,a){var o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=Object(n["a"])({},a),e.next=3,u["a"].put("workspace/member-groups/".concat(t,"/set-member-role/").concat(r),o);case 3:return i=e.sent,e.abrupt("return",i.data);case 5:case"end":return e.stop()}}),e)})));function t(t,r,n){return e.apply(this,arguments)}return t}()},{key:"updateAutoConfirm",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,r){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=Object(n["a"])({},r),e.next=3,u["a"].put("workspace/member-groups/updateAutoConfirm/".concat(t),a);case 3:return o=e.sent,e.abrupt("return",o.data);case 5:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"updateBelongsTo",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,r,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].put("workspace/member-groups/".concat(t,"/set-member-belongsTo/").concat(r,"/").concat(n));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));function t(t,r,n){return e.apply(this,arguments)}return t}()},{key:"deleteBelongsTo",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].put("workspace/member-groups/".concat(t,"/set-member-belongsTo/").concat(r));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"getSentCount",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,r,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].get("workspace/member-groups/send-count/".concat(t,"?start-time=").concat(r,"&end-time=").concat(n));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));function t(t,r,n){return e.apply(this,arguments)}return t}()}]),e}()},"09da":function(e,t,r){"use strict";var n=r("a271"),a=r.n(n);a.a},"10c2":function(e,t,r){},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},2268:function(e,t,r){"use strict";r.r(t);var n,a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"memberGroup-maker"},[r("div",{staticClass:"container"},[r("div",{staticClass:"info"},[r("div",{staticClass:"memberGroup-name"},[r("label",{attrs:{for:"group-name"}},[e._v(e._s(e.$t("班級名稱"))+"："+e._s(e.memberGroup.uniqueName))]),r("button",{staticClass:"btn edit-btn",on:{click:function(t){return t.preventDefault(),e.handleUpdateName(t)}}},[e._v(" "+e._s(e.$t("修改名稱"))+" ")])]),r("div",{staticClass:"length"},[r("label",{attrs:{for:"group-length"}},[e._v(e._s(e.$t("總人數"))+"：")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.memberList.length,expression:"memberList.length"}],attrs:{id:"group-length",type:"text",disabled:""},domProps:{value:e.memberList.length},on:{input:function(t){t.target.composing||e.$set(e.memberList,"length",t.target.value)}}})]),r("div",{staticClass:"itemControl"},[r("span",[e._v(e._s(e.$t("自動審核"))+"：")]),r("toggle-button",{attrs:{color:"#82C7EB",labels:!0,sync:!0},on:{change:e.controlAutoConfirm},model:{value:e.autoConfirm,callback:function(t){e.autoConfirm=t},expression:"autoConfirm"}})],1)]),r("table",{staticClass:"table table-sm"},[r("tr",[r("th",{attrs:{width:"50"}},[e._v(" "+e._s(e.$t("刪除"))+" ")]),r("th",{attrs:{width:"50"}},[e._v(" "+e._s(e.$t("序號"))+" ")]),r("th",{attrs:{width:"100"}},[e._v(" "+e._s(e.$t("姓名"))+" ")]),r("th",{attrs:{width:"90"}},[e._v(" "+e._s(e.$t("代號"))+" ")]),r("th",{attrs:{width:"60"}},[e._v(" "+e._s(e.$t("審核狀態"))+" ")]),r("th",{attrs:{width:"50"}},[e._v(" "+e._s(e.$t("成員角色"))+" ")]),r("th",{attrs:{width:"80"}},[e._v(" "+e._s(e.$t("備註"))+" ")])]),e._l(e.orderedMemberList,(function(t,n){return r("tr",{key:n,staticClass:"data",attrs:{"table-hover":""}},[r("td",[r("button",{staticClass:"btn no-bg-btn",on:{click:function(t){return e.openRemoveModal(n)}}},[r("i",{staticClass:"fas fa-trash-alt"})])]),r("td",[e._v(e._s(n+1))]),r("td",[e._v(e._s(t.name))]),r("td",[e._v(e._s(t.businessDefinedId))]),r("td",[!1===t.confirmed?r("button",{staticClass:"btn to-be-confirmed-td",on:{click:function(r){return e.toggleConfirmed(t)}}},[e._v(" "+e._s(e.$t("待審核"))+" ")]):e._e(),!0===t.confirmed?r("button",{staticClass:"btn confirmed-td",on:{click:function(r){return e.toggleConfirmed(t)}}},[e._v(" "+e._s(e.$t("已審核"))+" ")]):e._e()]),r("td",[r("select",{directives:[{name:"model",rawName:"v-model",value:t.role,expression:"member.role"}],attrs:{id:"roleSetting",name:"memberRole"},on:{change:[function(r){var n=Array.prototype.filter.call(r.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(t,"role",r.target.multiple?n:n[0])},function(r){return e.checkMemberRole(t)}]}},[r("option",{domProps:{value:e.MemberRole.TEACHER}},[e._v(" "+e._s(e.$t("老師"))+" ")]),r("option",{domProps:{value:e.MemberRole.STUDENT}},[e._v(" "+e._s(e.$t("一般學生"))+" ")]),r("option",{domProps:{value:e.MemberRole.STUDENT_DUPLICATED}},[e._v(" "+e._s(e.$t("重複學生"))+" ")]),r("option",{domProps:{value:e.MemberRole.STUDENT_EXEMPTED}},[e._v(" "+e._s(e.$t("特例學生"))+" ")])])]),t.belongsTo!==t.uuid?r("td",[e._v(" "+e._s(e.belongsToMemberName(t.belongsTo))+" "),r("i",{staticClass:"fas fa-pen",on:{click:function(r){return e.openDuplicateSelectedModal(t)}}})]):e._e(),t.belongsTo===t.uuid?r("td",[e.checkMemberBeDuplicated(t)?r("span",[e._v(" "+e._s(e.$t("已設為重複對象"))+" ")]):e._e()]):e._e()])}))],2),r("v-dialog")],1),r("UpdateWorkspaceObjectNameModal"),r("SelectMemberModal",{on:{"submit-selection":e.updatedBelongsTo}})],1)},o=[],i=(r("99af"),r("4de4"),r("4160"),r("a434"),r("b0c0"),r("d3b7"),r("25f0"),r("498a"),r("159b"),r("96cf"),r("1da1")),u=r("2b0e"),c=r("add5"),s=r("021b"),m=r("f52b"),d=r("aa73"),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("modal",{staticClass:"modal-container",attrs:{name:"select-member-modal",transition:"pop-out",width:"640","focus-trap":!0,height:"640"},on:{"before-open":e.beforeOpen}},[e.memberLocalRootId&&e.memberShareRootId?r("WorkspaceObjectSelector",{attrs:{"local-root-id":e.memberLocalRootId,"share-root-id":e.memberShareRootId,"default-selection":e.defaultSelection,"local-root-name":e.$t(e.rootName),"allow-select-many":!1,"is-member-unit-on":e.isMemberUnitOn,"duplicated-student":e.duplicatedStudent,"member-list":e.memberList},on:{"submit-selection":e.handleSubmit,cancel:e.handleCancel}}):r("loading",{attrs:{active:!0,"is-full-page":!1,"background-color":"transparent"}})],1)},p=[],b=r("5da8");(function(e){e["STUDENT"]="STUDENT",e["TEACHER"]="TEACHER",e["STUDENT_DUPLICATED"]="STUDENT_DUPLICATED",e["STUDENT_EXEMPTED"]="STUDENT_EXEMPTED"})(n||(n={}));var f,h=u["default"].extend({components:{WorkspaceObjectSelector:b["a"]},data:function(){return{MemberRole:n,defaultSelection:[],duplicatedStudent:{},isMemberUnitOn:!0,memberList:[]}},computed:{memberLocalRootId:function(){return this.$store.state.currentWorkspace?this.$store.state.currentWorkspace.memberFolders.local:null},memberShareRootId:function(){return this.$store.state.currentWorkspace?this.$store.state.currentWorkspace.memberFolders.share:null},rootName:function(){return this.$store.state.currentMemberGroup.uniqueName}},methods:{beforeOpen:function(e){if(e.params.memberList){var t=e.params.memberList.filter((function(e){return e.role===n.STUDENT}));this.memberList=t}e.params.defaultSelection&&(this.defaultSelection=e.params.defaultSelection),e.params.duplicatedStudent&&(this.duplicatedStudent=e.params.duplicatedStudent)},handleSubmit:function(e){var t={beDuplicatedStudent:e[0],duplicatedStudent:this.duplicatedStudent};this.$emit("submit-selection",t),this.$modal.hide("select-member-modal")},handleCancel:function(){var e={beDuplicatedStudent:null,duplicatedStudent:this.duplicatedStudent};this.$emit("submit-selection",e),this.$modal.hide("select-member-modal")}}}),v=h,g=r("2877"),w=Object(g["a"])(v,l,p,!1,null,null,null),k=w.exports;(function(e){e["STUDENT"]="STUDENT",e["TEACHER"]="TEACHER",e["STUDENT_DUPLICATED"]="STUDENT_DUPLICATED",e["STUDENT_EXEMPTED"]="STUDENT_EXEMPTED"})(f||(f={}));var T=u["default"].extend({components:{UpdateWorkspaceObjectNameModal:c["a"],SelectMemberModal:k},data:function(){return{MemberRole:f,memberList:[],memberGroup:{},members:[],autoConfirm:!1}},computed:{workspaceId:function(){return this.$store.state.currentWorkspace.uuid},memberGroupId:function(){return this.$store.state.currentMemberGroup.uuid},orderedMemberList:function(){if(this.memberList){var e=[],t=[];this.memberList.forEach((function(r){r.confirmed?e.push(r):t.push(r)})),e=this.orderArrayEditor(e),t=this.orderArrayEditor(t);var r=[];return e.forEach((function(e){r.push(e)})),t.forEach((function(e){r.push(e)})),0===r.length?this.memberList:r}return[]}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return d["a"].loginCheck(),e.loadMemberGroup(e.memberGroupId),t.prev=2,t.next=5,s["a"].getMemberGroup(e.memberGroupId);case 5:e.memberGroup=t.sent,e.members=e.memberGroup.members;case 7:return t.prev=7,e.$store.commit("updateLoading",!1),t.finish(7);case 10:e.autoConfirm=e.memberGroup.autoConfirm;case 11:case"end":return t.stop()}}),t,null,[[2,,7,10]])})))()},methods:{controlAutoConfirm:function(){this.$store.commit("updateLoading",!0),this.memberGroup.autoConfirm=this.autoConfirm;var e=new m["b"](this.memberGroup.autoConfirm);s["a"].updateAutoConfirm(this.memberGroupId,e),this.$notify({type:"success",title:this.$t("成功").toString(),text:this.$t("自動審核狀態已更新").toString()}),this.$store.commit("updateLoading",!1)},handleUpdateName:function(){this.$modal.show("update-workspace-object-name-modal",{workspaceObject:this.$store.state.currentMemberGroup})},loadMemberGroup:function(e){var t=this;s["a"].getMemberGroup(e).then((function(e){t.memberList=e.members}))},editStudent:function(e){var t=this.members[e];t.openEdit=!0},saveEdit:function(e){var t=this.members[e];t.openEdit=!1},toggleConfirmed:function(e){var t=new m["d"](!e.confirmed);s["a"].updateMemberInMemberGroup(this.memberGroupId,e.uuid,t).then((function(){e.confirmed=!e.confirmed}))},checkMemberBeDuplicated:function(e){var t=!1;return this.memberList.forEach((function(r){t||r!==e&&r.belongsTo===e.uuid&&(t=!0)})),t},checkMemberRole:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t.checkMemberBeDuplicated(e)&&(e.role=f.STUDENT,window.alert("此學生已被設定為其他學生的重複對象，不可以再異動為其他角色")),e.role!==f.STUDENT_DUPLICATED){r.next=6;break}t.openDuplicateSelectedModal(e),e.role=f.STUDENT,r.next=11;break;case 6:if(e.role===f.STUDENT_DUPLICATED){r.next=11;break}return r.next=9,s["a"].deleteBelongsTo(t.memberGroupId,e.uuid);case 9:e.belongsTo=e.uuid,t.setMemberRole(e);case 11:case"end":return r.stop()}}),r)})))()},setMemberRole:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=new m["e"](e.role),r.next=3,s["a"].updateMemberRoleInMemberGroup(t.memberGroupId,e.uuid,n);case 3:t.$notify({type:"success",title:t.$t("身份更新").toString(),text:"".concat(e.name," ").concat(t.$t("更新成功").toString())});case 4:case"end":return r.stop()}}),r)})))()},belongsToMemberName:function(e){var t="";return this.memberList.forEach((function(r){r.uuid===e&&(t=r.name)})),t},updatedBelongsTo:function(e){var t=this;null!==e.beDuplicatedStudent&&(e.duplicatedStudent.role=f.STUDENT_DUPLICATED,this.setMemberRole(e.duplicatedStudent),setTimeout((function(){s["a"].updateBelongsTo(t.memberGroupId,e.duplicatedStudent.uuid,e.beDuplicatedStudent.uuid),e.duplicatedStudent.belongsTo=e.beDuplicatedStudent.uuid}),500))},openDuplicateSelectedModal:function(e){var t=[];t=e.confirmed?this.orderedMemberList.filter((function(e){return e.confirmed})):this.orderedMemberList,this.$modal.show("select-member-modal",{memberList:t,defaultSelection:[],duplicatedStudent:e})},openRemoveModal:function(e){var t=this;this.$modal.show("dialog",{title:this.$t("確定刪除嗎?"),text:this.$t("這個學生資料刪掉就不會再回來了"),buttons:[{title:this.$t("取消"),handler:function(){t.$modal.hide("dialog")}},{title:this.$t("確定"),handler:function(){t.$modal.hide("dialog"),t.$emit("deleteStudent"),t.deleteStudent(e)}}]})},deleteStudent:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:console.log("刪除學生資料"),e>=0&&e<t.orderedMemberList.length&&s["a"].deleteMemberInMemberGroup(t.memberGroupId,t.orderedMemberList[e].uuid).then((function(){t.memberList=t.orderedMemberList,t.memberList.splice(e,1)}));case 2:case"end":return r.stop()}}),r)})))()},orderArrayEditor:function(e){var t=[],r=e.filter((function(e){return e.role===f.TEACHER})),n=e.filter((function(e){return e.role===f.STUDENT})),a=e.filter((function(e){return e.role===f.STUDENT_DUPLICATED})),o=e.filter((function(e){return e.role===f.STUDENT_EXEMPTED})),i=new Intl.Collator("en",{numeric:!0,sensitivity:"base"}),u=r.sort((function(e,t){return i.compare(e.name.toUpperCase().trim(),t.name.toUpperCase().trim())})),c=n.sort((function(e,t){return i.compare(e.name.toUpperCase().trim(),t.name.toUpperCase().trim())})),s=a.sort((function(e,t){return i.compare(e.name.toUpperCase().trim(),t.name.toUpperCase().trim())})),m=o.sort((function(e,t){return i.compare(e.name.toUpperCase().trim(),t.name.toUpperCase().trim())}));return u.forEach((function(e){t.push(e)})),m.forEach((function(e){t.push(e)})),c.forEach((function(e){t.push(e)})),s.forEach((function(e){t.push(e)})),t}}}),E=T,_=(r("61df"),r("fe74"),Object(g["a"])(E,a,o,!1,null,"400f40f1",null));t["default"]=_.exports},4485:function(e,t,r){},"61df":function(e,t,r){"use strict";var n=r("d6a9"),a=r.n(n);a.a},"841c":function(e,t,r){"use strict";var n=r("d784"),a=r("825a"),o=r("1d80"),i=r("129f"),u=r("14c3");n("search",1,(function(e,t,r){return[function(t){var r=o(this),n=void 0==t?void 0:t[e];return void 0!==n?n.call(t,r):new RegExp(t)[e](String(r))},function(e){var n=r(t,e,this);if(n.done)return n.value;var o=a(e),c=String(this),s=o.lastIndex;i(s,0)||(o.lastIndex=0);var m=u(o,c);return i(o.lastIndex,s)||(o.lastIndex=s),null===m?-1:m.index}]}))},a271:function(e,t,r){},add5:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("modal",{attrs:{name:e.modalName,transition:"pop-out",width:e.modalWidth,"focus-trap":!0,height:224},on:{"before-open":e.beforeOpen}},[r("div",{staticClass:"box"},[r("div",{staticClass:"partition"},[r("div",{staticClass:"partition-title"},[e._v(" "+e._s(e.$t("修改objectType名稱",{objectType:e.objectType}))+" ")]),r("div",{staticClass:"partition-form"},[r("form",{attrs:{autocomplete:"false"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.workspaceObjectName,expression:"workspaceObjectName"}],attrs:{id:"name",type:"text",placeholder:e.objectType+"名稱"},domProps:{value:e.workspaceObjectName},on:{input:function(t){t.target.composing||(e.workspaceObjectName=t.target.value)}}})]),r("p",{staticClass:"remind"},[e._v(" "+e._s(e.remind)+" ")]),r("div",{staticClass:"button-set"},[r("button",{attrs:{id:"cencel-btn"},on:{click:e.handleCancel}},[e._v(" "+e._s(e.$t("取消"))+" ")]),r("button",{attrs:{id:"create-btn"},on:{click:e.handleSubmit}},[e._v(" "+e._s(e.$t("送出"))+" ")])])])])])])},a=[],o=(r("b0c0"),r("d3b7"),r("ac1f"),r("25f0"),r("841c"),r("96cf"),r("1da1")),i=r("2b0e"),u=r("021b"),c=r("f52b"),s=r("18ad"),m=r("3bb2"),d=656,l=i["default"].extend({data:function(){return{translate:s["b"],modalName:"update-workspace-object-name-modal",modalWidth:d,remind:"",workspaceObjectName:"",workspaceObject:null}},computed:{objectType:function(){return this.workspaceObject?Object(s["b"])(this.workspaceObject.metadata.type):this.$t("未知").toString()}},created:function(){this.modalWidth=window.innerWidth<d?d/2:d},methods:{beforeOpen:function(e){this.remind="",e.params.workspaceObject&&(this.workspaceObject=e.params.workspaceObject,this.workspaceObjectName=this.workspaceObject.metadata.name)},handleCancel:function(){console.log("取消"),this.$modal.hide(this.modalName)},handleSubmit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.workspaceObject){t.next=2;break}return t.abrupt("return");case 2:t.prev=2,t.t0=e.workspaceObject.metadata.type,t.next=t.t0===s["a"].MemberGroup?6:t.t0===s["a"].Folder?18:22;break;case 6:if(r=/^[^\s_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/g,console.log(e.workspaceObjectName.search(r)),0===e.workspaceObjectName.search(r)){t.next=10;break}throw new Error("只允許中文、英文及數字，且至少兩個字。不允許任何空白、特殊符號(~!@#$%^&*()_/)。");case 10:return e.remind="",n=new c["c"](e.workspaceObjectName),t.next=14,u["a"].update(e.workspaceObject.uuid,n);case 14:return a=t.sent,e.workspaceObject.metadata.name=a.metadata.name,e.workspaceObject.uniqueName=a.uniqueName,t.abrupt("break",23);case 18:return o={name:e.workspaceObjectName},t.next=21,m["a"].update(e.workspaceObject.uuid,o);case 21:return t.abrupt("break",23);case 22:throw new Error("unknown object type");case 23:e.$modal.hide(e.modalName),e.$emit("submit"),t.next=31;break;case 27:t.prev=27,t.t1=t["catch"](2),e.remind="只允許中文、英文及數字，且至少兩個字。不允許任何空白、特殊符號(~!@#$%^&*()_/)。",e.$notify({type:"error",text:"只允許中文、英文及數字，且至少兩個字。不允許任何空白、特殊符號(~!@#$%^&*()_/)。"});case 31:case"end":return t.stop()}}),t,null,[[2,27]])})))()}}}),p=l,b=(r("b7fd"),r("09da"),r("2877")),f=Object(b["a"])(p,n,a,!1,null,null,null);t["a"]=f.exports},b7fd:function(e,t,r){"use strict";var n=r("4485"),a=r.n(n);a.a},d6a9:function(e,t,r){},f52b:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"d",(function(){return o})),r.d(t,"e",(function(){return i})),r.d(t,"c",(function(){return u})),r.d(t,"b",(function(){return c}));r("b0c0");var n=r("d4ec"),a=function e(t,r,a,o,i,u){Object(n["a"])(this,e),this.openEdit=!1,this.uuid=t,this.name=r,this.businessDefinedId=a,this.confirmed=o,this.role=i,this.belongsTo=u||t},o=function e(t){Object(n["a"])(this,e),this.confirmed=t},i=function e(t){Object(n["a"])(this,e),this.role=t},u=function e(t){Object(n["a"])(this,e),this.name=t},c=function e(t){Object(n["a"])(this,e),this.autoConfirm=t}},fe74:function(e,t,r){"use strict";var n=r("10c2"),a=r.n(n);a.a}}]);
//# sourceMappingURL=chunk-5a6f62b6.f83c2ef7.js.map