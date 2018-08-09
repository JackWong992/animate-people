function writeCode(prefix,code,fn) {
  let domCode = document.querySelector("#code");
  domCode.innerHTML = prefix || ''
  let n = 0;
  let id = setInterval(() => {
    n++;
    domCode.innerHTML = Prism.highlight(
        prefix + code.substring(0, n),
      Prism.languages.css
    );
    styleTag.innerHTML = prefix + code.substring(0, n);
    domCode.scrollTop = domCode.scrollHeight
    if (n >= code.length) {
      window.clearInterval(id)
      fn.call()
    }
  }, 100);
}
var result = `
   /*
     hell, leader!
     我的名字叫黄飞龙，下面我将以动画的形式简单的介绍一下我自己
     我熟悉Vue，React，JavaScript
     熟悉css的操作
     我希望可以进入贵司，可以为贵司献上我的绵薄之力；
   */

    /* 为了让我的简历看上去不会那么突兀，我需要事先加入一点动画 */
    * {
        transition: all 1s;
        padding: 0;
        margin: 0;
    }

    /* 我们首先加入一些公共的样式 */
    html {
        font-size: 16px;
        background: #b2d235;
        color: #000;
    }

    /* code area */
    #code {
        border: 1px solid #fff;
        padding: 16px;
        box-shadow: -18px -2px 13px -4px rgba(0,0,0,0.75);
    }

    /* 
      为了让代码显示不会那么单调，我需要给代码一些高亮
    */
    .token.selector {
        color: #690;
    }
    .token.property {
        color: #905;
    }
    .token.function {
        color: #DD4A68;
    }

    /*
        为了方便接下来的工作，我需要给右边的代码腾出点空间
    */
    #code {
        transform:  rotateY(360deg);
    }

    /*
        那么下面我就以makedown文档的形式简单的介绍一下我自己
    */
    #code {
        position: fixed;
        left: 0;
        width: 50%;
        height: 100%;
    }
   `
   var result2 = `
    #paper {
        position: fixed;
        right: 0;
        width: 50%;
        height: 100%;
        background: black;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 16px;
    }
    #paper> .content {
        background: white;
        width: 100%;
        height: 100%;
    }
   `
   var md = `
    # 自我介绍

    我叫黄飞龙
    1993年8月7日出生
    毕业于汕头职业技术学院
    自学前端半年
    希望应聘贵司的前端开发职位

    # 技能介绍
    * javascript
    * HTML && CSS
    * Vue， jQuery
    
    # 项目介绍
    1. 在线商城
    2. 微信小程序
    3. 微信小程序

    # 联系方式
    QQ: 123456
    手机号码： 17356196519
    微信： XXCC30

   `

    writeCode( '',result,()=>{ 
        createPaper( ()=>{
            writeCode(result , result2, ()=>{
                writeMakedown(md)
            })
        })
    })
    //fn2();
    

function createPaper(fn) {
  var paper = document.createElement("div");
  paper.id = "paper";
  var content = document.createElement('pre')
  content.className = 'content'
  paper.appendChild(content)
  document.body.appendChild(paper);
  fn.call()
}

function writeMakedown(makedown, fn){
    let domPaper = document.querySelector('#paper>.content')
    let n = 0 
    let id = setInterval( ()=>{
        n++
        domPaper.innerHTML =makedown.substring(0,n)
        domPaper.scrollTop = domPaper.scrollHeight
        if(n >= makedown.length ){
            window.clearInterval(id)
            fn.call()
        }
    },100)
}