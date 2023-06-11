import{_ as g,a as _,b as m}from"./bd_share_test-ae4567cb.js";import{_ as b,a as f,b as x}from"./motrix-ua-d5f435d9.js";import{_ as q,r as o,o as y,c as A,b as t,e,a as l,w as r,f as s}from"./app-e292fa4a.js";const k={},B=s('<h1 id="百度网盘分享链接" tabindex="-1"><a class="header-anchor" href="#百度网盘分享链接" aria-hidden="true">#</a> 百度网盘分享链接</h1><p>挂载百度网盘分享链接，可供下载，无上传编辑等功能，api非官方。</p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> <strong>配置</strong></h2><p>百度网盘分享链接：surl，百度网盘分享密码：pwd</p><ol><li><p>浏览目录需设置<strong>百度网盘分享链接</strong>和<strong>百度网盘分享密码</strong>，下载还需设置BDUSS。</p></li><li><p><strong>百度网盘分享链接</strong>即为分享地址<code>pan.baidu.com/s/</code>后<code>?</code>前部分，<strong>百度网盘分享密码</strong>填4位提取码，无提取码留空。</p></li><li><p><strong>百度网盘分享链接</strong>和<strong>百度网盘分享密码</strong>可以随意账号填写，但是 <strong><code>BDUSS</code></strong> 参数的账号 必须使用 <mark><strong>百度超级SVIP会员</strong></mark> 才可以</p></li></ol><p><img src="'+g+'" alt=""></p><p>BDUSS由cookie中提取</p>',7),U={href:"http://pandownload.net/faq/cookie.html",target:"_blank",rel:"noopener noreferrer"},E=t("code",null,"BDUSS=",-1),S=t("li",null,[t("p",null,[e("方法2"),t("sup",null,"荐"),e("：")]),t("ul",null,[t("li",null,[t("img",{src:_,alt:"1",style:{zoom:"30%"}})])])],-1),v=s('<h2 id="根文件夹路径" tabindex="-1"><a class="header-anchor" href="#根文件夹路径" aria-hidden="true">#</a> <strong>根文件夹路径</strong></h2><p>要挂载的根文件夹，默认为<code>/</code></p><p>如果要写文件夹內其他的 请看下方的例子</p><p><img src="'+m+'" alt=""></p><h2 id="qa" tabindex="-1"><a class="header-anchor" href="#qa" aria-hidden="true">#</a> <strong>QA</strong></h2><table><thead><tr><th style="text-align:center;">出错配置</th><th style="text-align:left;">典型报错</th><th style="text-align:left;">修复说明</th></tr></thead><tbody><tr><td style="text-align:center;">surl</td><td style="text-align:left;"><code>{&quot;errno&quot;:2,&quot;errtype&quot;:0}</code></td><td style="text-align:left;">分享链接可能失效, 检查链接状态</td></tr><tr><td style="text-align:center;">pwd</td><td style="text-align:left;"><code>{&quot;errno&quot;:-130,&quot;errtype&quot;:&quot;mispwd-9&quot;}</code></td><td style="text-align:left;">分享密码错误</td></tr><tr><td style="text-align:center;">BDUSS</td><td style="text-align:left;"><code>{&quot;errno&quot;:9019,&quot;errmsg&quot;:&quot;need verify&quot;}</code></td><td style="text-align:left;">BDUSS无效</td></tr><tr><td style="text-align:center;">UA</td><td style="text-align:left;"><code>{&quot;error_code&quot;:31326,&quot;error_msg&quot;:&quot;user is not authorized, hitcode:119&quot;}</code></td><td style="text-align:left;">user-agent违反百度限制, 访问端需设置非浏览器UA(如netdisk)或开启Web代理</td></tr><tr><td style="text-align:center;">下载</td><td style="text-align:left;">Failed init storage: 200 OK; {&quot;errno&quot;:-130,&quot;</td><td style="text-align:left;">此链接分享内容可能因为涉及侵权、色情、低俗等信息，无法访问！</td></tr></tbody></table><h2 id="开发" tabindex="-1"><a class="header-anchor" href="#开发" aria-hidden="true">#</a> <strong>开发</strong></h2>',7),w={href:"https://github.com/yuantuo666/baiduwp-php",target:"_blank",rel:"noopener noreferrer"},M=t("p",null,"当前仅移植目录浏览和普通下载功能，欢迎继续开发。",-1),D=t("p",null,"因缺失官方文档，不排除存在一些兼容问题，可至github反馈，建议提供复现链接以供调试。",-1),V=t("p",null,"不能突破速度限制，请合理使用。",-1),C=t("mark",null,"crack: 非官方接口",-1),L=t("strong",null,"详情自行点击查看常见问题说明",-1),N=t("h2",{id:"添加-user-agent-使用示例",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#添加-user-agent-使用示例","aria-hidden":"true"},"#"),e(),t("strong",null,'添加 "User-Agent" 使用示例')],-1),T={class:"hint-container danger"},z=s('<p class="hint-container-title">如果你不会设置 &quot;User-Agent&quot; 请看这里</p><p><mark>以下方法仅限于有百度超级会员用户使用</mark></p><p><mark>再次提示 以下方法仅限于有百度超级会员用户使用</mark></p><p>有会员改完 <strong><code>&quot;User-Agent&quot;</code></strong> 才会有用（选择官方和302）</p><p>如果不改 <strong><code>&quot;User-Agent&quot;</code></strong>，可以开启 <mark>Web代理</mark>，缺点是需要你搭建Alist的机器中转，也就是说你需要大宽带帮你中转</p>',5),K=t("ul",null,[t("li",null,"使用浏览器插件修改的好处是 可以直接在线播放，当然了下载也是可以的。")],-1),Z={href:"https://www.bilibili.com/video/BV1UA4y1X7J8",target:"_blank",rel:"noopener noreferrer"},J={href:"https://youtu.be/PP6b0WSzYMc",target:"_blank",rel:"noopener noreferrer"},F=t("p",null,[t("img",{src:b,alt:"alist"})],-1),I=t("ol",null,[t("li",null,[t("p",null,[e("先照着下图设置好 "),t("strong",null,[t("code",null,'"User-Agent"')]),e("，然后在"),t("strong",null,"右下角"),e("的按钮选项，点击"),t("strong",null,"齿轮"),e("(本地设置)，配置好参数")])]),t("li",null,[t("p",null,[e("然后在右下角打开第三个按钮选项（"),t("strong",null,"打开复选框"),e("），打开后去列表选择我们要下载的文件，")])]),t("li",null,[t("p",null,[e("把我们需要下载的文件"),t("strong",null,"进行勾选"),e("，勾选好后下方会出现"),t("strong",null,"一排按钮"),e("，选择右侧第二个选项下载里面有一个"),t("strong",null,"发送到Aria2")])])],-1),W=t("p",null,[e("如果你使用了网页修改 "),t("strong",null,[t("code",null,'"User-Agent"')]),e("，可以不配置 "),t("mark",null,[t("strong",null,"Aria2")]),e(" 的"),t("code",null,"UA"),e("，直接推送到Aria2也能下载")],-1),X=t("p",null,[t("img",{src:f,alt:"alist"})],-1),Y=t("ol",null,[t("li",null,[t("p",null,[e("先照着下图设置好 "),t("strong",null,[t("code",null,'"User-Agent"')]),e("，然后在"),t("strong",null,"右下角"),e("的按钮选项，点击"),t("strong",null,"齿轮"),e("(本地设置)，配置好参数")])]),t("li",null,[t("p",null,[e("然后在右下角打开第三个按钮选项（"),t("strong",null,"打开复选框"),e("），打开后去列表选择我们要下载的文件，")])]),t("li",null,[t("p",null,[e("把我们需要下载的文件"),t("strong",null,"进行勾选"),e("，勾选好后下方会出现"),t("strong",null,"一排按钮"),e("，选择右侧第二个选项下载里面有一个"),t("strong",null,"发送到Aria2")])])],-1),P=t("p",null,[e("如果你使用了网页修改 "),t("strong",null,[t("code",null,'"User-Agent"')]),e("，可以不配置 "),t("mark",null,[t("strong",null,"Motrix")]),e(" 的"),t("code",null,"UA"),e("，直接推送到Aria2也能下载")],-1),O={href:"https://motrix.app/",target:"_blank",rel:"noopener noreferrer"},j={href:"https://github.com/agalwood/Motrix",target:"_blank",rel:"noopener noreferrer"},H=t("p",null,[t("img",{src:x,alt:"alist"})],-1),Q=t("h3",{id:"默认使用的下载方式",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#默认使用的下载方式","aria-hidden":"true"},"#"),e(),t("strong",null,"默认使用的下载方式")],-1);function G(R,$){const n=o("ExternalLinkIcon"),c=o("RouterLink"),a=o("Badge"),h=o("Mermaid"),p=o("Tabs");return y(),A("div",null,[B,t("ul",null,[t("li",null,[t("p",null,[e("方法1："),t("a",U,[e("参考教程"),l(n)]),e("(本项目中无需前缀"),E,e(")。")])]),S]),v,t("p",null,[e("接口来自"),t("a",w,[e("github.com/yuantuo666/baiduwp-php"),l(n)]),e("项目，非官方api。")]),M,D,V,t("ul",null,[t("li",null,[C,e(" 似乎已经和谐了？"),l(c,{to:"/zh/faq/why.html#%E7%99%BE%E5%BA%A6%E4%BA%91%E7%9B%98%E9%9D%9E%E5%AE%98%E6%96%B9%E4%B8%8B%E8%BD%BD%E6%8A%A5%E9%94%99%E5%87%BA%E7%8E%B0-hit-black-userlist-hit-illeage-dlna"},{default:r(()=>[L]),_:1})])]),N,t("div",T,[z,l(p,{id:"178",data:[{title:"网页插件"},{title:"Aria2"},{title:"Motrix"}],"tab-id":"ua"},{tab0:r(({title:i,value:d,isActive:u})=>[K,t("p",null,[e("例"),l(a,{text:"1",type:"info",vertical:"middle"}),e("：实在不会的可以看看一个Web网页端的例子： "),t("strong",null,[t("a",Z,[e("https://www.bilibili.com/video/BV1UA4y1X7J8"),l(n)])])]),t("p",null,[e("例"),l(a,{text:"2",type:"info",vertical:"middle"}),e("：另一款插件方法涵盖360，Chrome，Edge： "),t("strong",null,[t("a",J,[e("https://youtu.be/PP6b0WSzYMc"),l(n)])])]),F]),tab1:r(({title:i,value:d,isActive:u})=>[I,W,X]),tab2:r(({title:i,value:d,isActive:u})=>[Y,P,t("ul",null,[t("li",null,[e("Motrix下载链接："),t("a",O,[e("Motrix官网"),l(n)]),e("，"),t("a",j,[e("Motrix-GitHub"),l(n)])])]),H,Q,l(h,{id:"mermaid-257",code:"eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57NaXjYtfr6898mO7hd79z6btvPpnv73e+ZzgdSn5eSXJ2ckFpUohDhxKQBBcUllTqpCoqFCWmZOjpVyUlKaTnFJUX52qpVympkZlK1bnplSkmFlVFChk5yfk18ElEtLQ9ZuBNWelmZuam4KN8HY2BjVBJOCCoi20qT0osSCDIXMlFRDhWiFWLBooiGYSs1LgXKjjQ2MYq2srIrzc1OTcxKLi22BoAbi2ZpEo2igb591bH+xbt/TJe0QI8CqXFLTFOBaYC6zNIMoMIx+NmfNszm7nuxe/HxCW6yuHlDvy4ZOPV07rAYmGUZDVIYG+RBUnJyTmZwNCkwlPT39lKLMstSiYv3k/Nzc/Dy9jJLcHOXy1KSUxDLd52unPZ+6VAlJTxIZepKJ1gMAZ1jb4A=="})]),_:1})])])}const nt=q(k,[["render",G],["__file","baidu_share.html.vue"]]);export{nt as default};
