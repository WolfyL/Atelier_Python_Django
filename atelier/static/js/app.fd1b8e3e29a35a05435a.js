webpackJsonp([1],[,,,,,,,,,function(t,e,n){n(37);var u=n(2)(n(32),n(45),null,null);t.exports=u.exports},,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=n(10),s=n(9),a=n.n(s);u.a.config.productionTip=!1,new u.a({el:"#app",template:"<student-table></student-table>",components:{StudentTable:a.a}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{newStudent:{firstname:"",name:"",age:""}}},props:["student"],methods:{addStudent:function(){this.$emit("add-student",this.newStudent)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["student"],methods:{remove:function(){this.$emit("remove")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=n(11),s=n.n(u),a=n(42),o=n.n(a),r=n(41),d=n.n(r);e.default={components:{StudentLine:o.a,AddStudent:d.a},data:function(){return{students:[]}},methods:{getAll:function(){var t=this;s.a.get("/api/students/").then(function(e){t.students=e.results})},addStudent:function(t){var e=this;s.a.post("/api/students/",t).then(function(){e.getAll()})},remove:function(t){var e=this;s.a.delete("/api/students/"+this.students[t].id).then(function(){e.getAll()})}},mounted:function(){this.getAll()}}},,,function(t,e){},function(t,e){},function(t,e){},,,,function(t,e,n){n(36);var u=n(2)(n(30),n(44),null,null);t.exports=u.exports},function(t,e,n){n(35);var u=n(2)(n(31),n(43),null,null);t.exports=u.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(t._s(t.student.firstname)+" "+t._s(t.student.lastname)),n("button",{on:{click:t.remove}},[t._v("Supprimer")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newStudent.lastname,expression:"newStudent.lastname"}],attrs:{placeholder:"LASTNAME"},domProps:{value:t.newStudent.lastname},on:{input:function(e){e.target.composing||(t.newStudent.lastname=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newStudent.firstname,expression:"newStudent.firstname"}],attrs:{placeholder:"FIRSTNAME"},domProps:{value:t.newStudent.firstname},on:{input:function(e){e.target.composing||(t.newStudent.firstname=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newStudent.age,expression:"newStudent.age"}],attrs:{placeholder:"AGE"},domProps:{value:t.newStudent.age},on:{input:function(e){e.target.composing||(t.newStudent.age=e.target.value)}}}),t._v(" "),n("button",{on:{click:t.addStudent}},[t._v(" Ajouter\n  ")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.students,function(e,u){return n("student-line",{attrs:{student:e},on:{remove:function(e){t.remove(u)}}})}),t._v(" "),n("addStudent",{on:{"add-student":t.addStudent}})],2)},staticRenderFns:[]}}],[29]);
//# sourceMappingURL=app.fd1b8e3e29a35a05435a.js.map