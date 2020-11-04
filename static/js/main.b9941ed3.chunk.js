(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{12:function(e,t,a){e.exports=a(23)},18:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(8),l=a.n(i),o=(a(17),a(11)),c=a(3),s=a(4),m=a(6),d=a(5),u=(a(18),a(19),a(20),function(e){var t=e.title,a=e.description,r=e.imgUrl,i=e.imdbUrl;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:r,alt:"Film logo"}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-48x48"},n.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"title is-8"},t))),n.a.createElement("div",{className:"content"},a,n.a.createElement("br",null),n.a.createElement("a",{href:i},"IMDB"))))});u.defaultProps={description:""};var p=function(e){var t=e.movies;return n.a.createElement("div",{className:"movies"},t.map((function(e){return n.a.createElement(u,Object.assign({key:e.imdbId},e))})))};p.defaultProps={movies:[]};var v=a(9),h=a(2),b=a(1),g=a(10),f=a.n(g),M={formControls:{title:{value:"",inputType:"input",type:"text",label:"Title",errormessage:"Enter correct title",valid:!1,touched:!1,required:!0},description:{value:"",inputType:"textArea",type:"text",label:"Description",errormessage:"Enter correct description",touched:!1,valid:!1,required:!0},imgUrl:{value:"",inputType:"input",type:"url",label:"ImgUrl",errormessage:"Enter correct URL",touched:!1,valid:!1,required:!0},imdbUrl:{value:"",inputType:"input",type:"url",label:"ImdbUrl",errormessage:"Enter correct URL",touched:!1,valid:!1,required:!0},imdbId:{value:"",inputType:"input",type:"number",label:"ImdbId",errormessage:"Enter correct ID",touched:!1,valid:!1,required:!0}}},y=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state=Object(b.a)({},M),e.validURL=function(e){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)},e.validText=function(e){var t=!1;return e.trim().length>0&&e.trim().length<240&&(t=!0),t},e.validControl=function(t,a,r,n){var i=!0;return"url"===n&&(i=e.validURL(t)),"text"!==n&&"number"!==n||(i=e.validText(t)),i},e.validForm=function(e){return Object.entries(e).some((function(e){return!1===e[1].valid}))},e.handleSubmit=function(t){t.preventDefault(),e.props.addMovie(e.state.title,e.state.description,e.state.imgUrl,e.state.imdbUrl,e.state.imdbId),e.clearForm()},e.clearForm=function(){e.setState(Object(b.a)({},M))},e.onBlurHandler=function(t){var a=Object(b.a)({},e.state.formControls),r=Object(b.a)({},a[t]);r.touched=!0,a[t]=r,r.valid=e.validControl(r.value,r.required,r.touched,r.type),e.setState({formControls:a})},e.onChangeHandler=function(t,a){var r,n=Object(b.a)({},e.state.formControls),i=Object(b.a)({},n[a]);i.value=t.target.value,n[a]=i,e.setState((r={},Object(h.a)(r,a,t.target.value),Object(h.a)(r,"formControls",n),r))},e.renderInputs=function(){return Object.keys(e.state.formControls).map((function(t,a){var r=e.state.formControls[t];return n.a.createElement("div",{className:"field",key:"".concat(r.label).concat(Math.ceil(Math.random(100)))},n.a.createElement("label",null,r.label),"input"===r.inputType?n.a.createElement("input",{key:"".concat(r.label).concat(Math.ceil(Math.random(10))),type:r.type,value:r.value,valid:r.valid,touched:r.touched,errormessage:r.errormessage,onChange:function(a){return e.onChangeHandler(a,t)},onBlur:function(a){return e.onBlurHandler(t)}}):n.a.createElement("textarea",{key:"".concat(r.label).concat(Math.ceil(Math.random(10))),type:r.type,value:r.value,valid:r.valid,touched:r.touched,errormessage:r.errormessage,onChange:function(a){return e.onChangeHandler(a,t)},onBlur:function(a){return e.onBlurHandler(t)}}),r.valid&&r.touched?null:n.a.createElement("span",null,r.errormessage))}))},e}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("form",{className:"ui form",onSubmit:this.handleSubmit},this.renderInputs(),n.a.createElement("button",{className:"fluid ui button blue",type:"submit",disabled:this.validForm(this.state.formControls)&&"disabled"},"Add Movie"))}}]),a}(r.PureComponent);y.defaultProps={addMovie:f.a.func.isRequired};var E=y,w=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={movies:v},e.addMovie=function(t,a,r,n,i){e.setState((function(l){var c={title:t,description:a,imgUrl:r,imdbUrl:n,imdbId:i};return{movies:[].concat(Object(o.a)(e.state.movies),[c])}}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.movies;return n.a.createElement("div",{className:"page"},n.a.createElement("div",{className:"page-content"},n.a.createElement(p,{movies:e})),n.a.createElement("div",{className:"sidebar"},n.a.createElement(E,{addMovie:this.addMovie})))}}]),a}(r.Component);l.a.render(n.a.createElement(w,null),document.getElementById("root"))},9:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[12,1,2]]]);
//# sourceMappingURL=main.b9941ed3.chunk.js.map