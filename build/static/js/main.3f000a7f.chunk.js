(this.webpackJsonpboard=this.webpackJsonpboard||[]).push([[0],{14:function(e,t,i){},9:function(e,t,i){"use strict";i.r(t);var n=i(2),r=i(4),a=i(5),c=i(7),l=i(6),s=i(1),p=i.n(s),d=i(8),o=i.n(d),u=(i(14),i(0)),h=function(e){Object(c.a)(i,e);var t=Object(l.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(a.a)(i,[{key:"render",value:function(){for(var e=[],t=[],i=1;i<=this.props.boardLenght;i++)1===i?(t.push(j(i,4)),e.push(t)):i%10===0?(t.push(j(i,4)),t=[],e.push(t)):t.push(j(i,4));return e=function(e,t){return e.map((function(e,i){return e.map((function(e,i){var n=e.toString();return"XXXX"===t||"X"!==t[0]&&t[0]!==n[0]||"X"!==t[1]&&t[1]!==n[1]||"X"!==t[2]&&t[2]!==n[2]||"X"!==t[3]&&t[3]!==n[3]||(n=""),n}))}))}(e=function(e,t){return e.map((function(e,i){return e.map((function(e,i){var n=e.toString();return("pppi"===t&&n[0]%2===0&&n[1]%2===0&&n[2]%2===0&&n[3]%2===1||"ppii"===t&&n[0]%2===0&&n[1]%2===0&&n[2]%2===1&&n[3]%2===1||"ppip"===t&&n[0]%2===0&&n[1]%2===0&&n[2]%2===1&&n[3]%2===0||"pipp"===t&&n[0]%2===0&&n[1]%2===1&&n[2]%2===0&&n[3]%2===0||"pipi"===t&&n[0]%2===0&&n[1]%2===1&&n[2]%2===0&&n[3]%2===1||"piip"===t&&n[0]%2===0&&n[1]%2===1&&n[2]%2===1&&n[3]%2===0||"piii"===t&&n[0]%2===0&&n[1]%2===1&&n[2]%2===1&&n[3]%2===1||"iiip"===t&&n[0]%2===1&&n[1]%2===1&&n[2]%2===1&&n[3]%2===0||"iipp"===t&&n[0]%2===1&&n[1]%2===1&&n[2]%2===0&&n[3]%2===0||"iipi"===t&&n[0]%2===1&&n[1]%2===1&&n[2]%2===0&&n[3]%2===1||"ipii"===t&&n[0]%2===1&&n[1]%2===0&&n[2]%2===1&&n[3]%2===1||"ipip"===t&&n[0]%2===1&&n[1]%2===0&&n[2]%2===1&&n[3]%2===0||"ippi"===t&&n[0]%2===1&&n[1]%2===0&&n[2]%2===0&&n[3]%2===1||"ippp"===t&&n[0]%2===1&&n[1]%2===0&&n[2]%2===0&&n[3]%2===0)&&(n=""),n}))}))}(e,this.props.deletePairOdd),this.props.numberFilter),Object(u.jsx)("div",{className:"board-row",children:Object(u.jsx)("table",{className:"board-table",children:Object(u.jsx)("tbody",{children:e.map((function(e,t){return Object(u.jsx)("tr",{children:e.map((function(e,t){return Object(u.jsx)("td",{children:e},t.toString())}))},t.toString())}))})})})}}]),i}(p.a.Component),b=function(e){Object(c.a)(i,e);var t=Object(l.a)(i);function i(e){var n;return Object(r.a)(this,i),(n=t.call(this,e)).state={history:[],boardLenght:"1000",numberFilter:"XXXX",deletePairOdd:""},n}return Object(a.a)(i,[{key:"handleChange",value:function(e){"boardLenght"===e.target.name?e.target.value<=1e3?this.setState(Object(n.a)({},e.target.name,e.target.value)):(document.getElementById("quantity").value=1e3,this.setState(Object(n.a)({},e.target.name,"1000"))):("deletePairOdd"===e.target.name||"numberFilter"===e.target.name)&&this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return Object(u.jsx)("div",{className:"game",children:Object(u.jsxs)("div",{className:"game-board",children:[Object(u.jsxs)("form",{children:[Object(u.jsxs)("div",{className:"insert-number",children:[Object(u.jsx)("label",{htmlFor:"boardLenght",children:"Quantidade (entre 1 e 1000): "}),Object(u.jsx)("input",{type:"number",id:"boardLenght",name:"boardLenght",min:"001",max:"1000",defaultValue:this.state.boardLenght,onChange:this.handleChange.bind(this)})]}),Object(u.jsxs)("div",{className:"filters",children:[Object(u.jsxs)("div",{className:"filter",children:[Object(u.jsx)("label",{htmlFor:"excluir",children:"Excluir par/impar: "}),Object(u.jsxs)("select",{id:"deletePairOdd",name:"deletePairOdd",onChange:this.handleChange.bind(this),children:[Object(u.jsx)("option",{value:"",children:" -- "}),Object(u.jsx)("option",{value:"pppi",children:"PPPI"}),Object(u.jsx)("option",{value:"ppii",children:"PPII"}),Object(u.jsx)("option",{value:"ppip",children:"PPIP"}),Object(u.jsx)("option",{value:"pipp",children:"PIPP"}),Object(u.jsx)("option",{value:"pipi",children:"PIPI"}),Object(u.jsx)("option",{value:"piip",children:"PIIP"}),Object(u.jsx)("option",{value:"piii",children:"PIII"}),Object(u.jsx)("option",{value:"iiip",children:"IIIP"}),Object(u.jsx)("option",{value:"iipp",children:"IIPP"}),Object(u.jsx)("option",{value:"iipi",children:"IIPI"}),Object(u.jsx)("option",{value:"ipii",children:"IPII"}),Object(u.jsx)("option",{value:"ipip",children:"IPIP"}),Object(u.jsx)("option",{value:"ippi",children:"IPPI"}),Object(u.jsx)("option",{value:"ippp",children:"IPPP"})]})]}),Object(u.jsxs)("div",{className:"filter",children:[Object(u.jsx)("label",{htmlFor:"numberFilter",children:"Filtro de numeros(Ex: X0X2): "}),Object(u.jsx)("input",{type:"input",id:"numberFilter",name:"numberFilter",defaultValue:this.state.numberFilter,onChange:this.handleChange.bind(this)})]})]})]}),Object(u.jsx)(h,{boardLenght:this.state.boardLenght,deletePairOdd:this.state.deletePairOdd,numberFilter:this.state.numberFilter})]})})}}]),i}(p.a.Component);function j(e,t,i){var n=t-e.toString().length+1;return Array(n).join(i||"0")+e}o.a.render(Object(u.jsx)(b,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.3f000a7f.chunk.js.map