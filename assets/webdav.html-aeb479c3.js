import{_ as c,a as g,b as x,c as y,d as h,e as _,f as p,g as b}from"./nas-fd8b9ab1.js";import{_ as u,r as i,o as f,c as v,b as t,e,a as n,w as r,f as w}from"./app-e292fa4a.js";const m={},k=w('<h1 id="webdav" tabindex="-1"><a class="header-anchor" href="#webdav" aria-hidden="true">#</a> WebDAV</h1><h2 id="webdav-配置" tabindex="-1"><a class="header-anchor" href="#webdav-配置" aria-hidden="true">#</a> <strong>WebDAV 配置</strong></h2><table><thead><tr><th>Name</th><th>Value</th></tr></thead><tbody><tr><td>Url</td><td>http[s]://domain:port/dav/</td></tr><tr><td>Host</td><td>domain</td></tr><tr><td>路径</td><td>dav</td></tr><tr><td>协议</td><td>http/https</td></tr><tr><td>端口</td><td>与网页端一致</td></tr><tr><td>WebDAV用户名</td><td>与网页端用户名一致</td></tr><tr><td>WebDAV密码</td><td>与网页端密码一致</td></tr></tbody></table><p>不会填写？<a href="#webdav-%E5%A1%AB%E5%86%99%E7%A4%BA%E4%BE%8B">点击查看填写示例</a></p><h2 id="webdav-存储支持" tabindex="-1"><a class="header-anchor" href="#webdav-存储支持" aria-hidden="true">#</a> <strong>WebDAV 存储支持</strong></h2><table><thead><tr><th>存储类型</th><th style="text-align:center;">列出文件/文件夹</th><th style="text-align:center;">下载文件</th><th style="text-align:center;">创建目录</th><th style="text-align:center;">重命名</th><th style="text-align:center;">移动</th><th style="text-align:center;">复制</th><th style="text-align:center;">上传文件/文件夹</th></tr></thead><tbody><tr><td>本地存储</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>阿里云盘</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>Onedrive</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>天翼云盘</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>GoogleDrive</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">✅</td></tr><tr><td>123pan</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">✅</td></tr><tr><td>FTP</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">✅</td></tr><tr><td>SFTP</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">✅</td></tr><tr><td>PikPak</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>S3</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>USS</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>WebDAV</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>Teambition</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>分秒帧</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>和彩云</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>YandexDisk</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>百度网盘</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>夸克网盘</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr></tbody></table><h2 id="可以用来挂载webdav的软件" tabindex="-1"><a class="header-anchor" href="#可以用来挂载webdav的软件" aria-hidden="true">#</a> <strong>可以用来挂载WebDav的软件</strong></h2>',7),A=t("strong",null,"Windows",-1),D={href:"https://potplayer.daum.net/",target:"_blank",rel:"noopener noreferrer"},V={href:"https://www.kmplayer.com/home",target:"_blank",rel:"noopener noreferrer"},E={href:"https://www.raidrive.com/",target:"_blank",rel:"noopener noreferrer"},W={href:"https://kodi.tv/download",target:"_blank",rel:"noopener noreferrer"},N={href:"https://www.onecommander.com/",target:"_blank",rel:"noopener noreferrer"},S={href:"https://mountainduck.io/",target:"_blank",rel:"noopener noreferrer"},T={href:"https://www.netdrive.net/",target:"_blank",rel:"noopener noreferrer"},B={href:"https://rclone.org/",target:"_blank",rel:"noopener noreferrer"},U=t("strong",null,"Android",-1),I={href:"https://www.aliyundrive.com/s/cf3p39UXkxa",target:"_blank",rel:"noopener noreferrer"},P={href:"https://www.kmplayer.com/home",target:"_blank",rel:"noopener noreferrer"},X={href:"https://kodi.tv/download",target:"_blank",rel:"noopener noreferrer"},F={href:"https://www.aliyundrive.com/s/cf3p39UXkxa/folder/63e8dcc229204583fff34f8cbd53dfcd6a86f526",target:"_blank",rel:"noopener noreferrer"},L={href:"https://www.aliyundrive.com/s/cf3p39UXkxa/folder/63e8e0027b7473f82cc64bbb9be0a34794c32c07",target:"_blank",rel:"noopener noreferrer"},C=t("strong",null,"IOS",-1),M={href:"https://www.kmplayer.com/home",target:"_blank",rel:"noopener noreferrer"},O=t("strong",null,"电视TV",-1),G={href:"https://www.aliyundrive.com/s/cf3p39UXkxa",target:"_blank",rel:"noopener noreferrer"},H={href:"https://kodi.tv/download",target:"_blank",rel:"noopener noreferrer"},R={href:"https://www.aliyundrive.com/s/cf3p39UXkxa/folder/63e8dcc229204583fff34f8cbd53dfcd6a86f526",target:"_blank",rel:"noopener noreferrer"},Y=t("li",null,[e("若只看阿里可以使用阿里官方合作的 "),t("ul",null,[t("li",null,"欢视商店-阿里云盘TV版，网盘播放器-阿里云盘TV版")])],-1),j=t("strong",null,"Mac",-1),q={href:"https://mountainduck.io/",target:"_blank",rel:"noopener noreferrer"},z={href:"https://www.netdrive.net/",target:"_blank",rel:"noopener noreferrer"},J={href:"https://rclone.org/",target:"_blank",rel:"noopener noreferrer"},K=t("strong",null,"Linux",-1),Q={href:"https://rclone.org/",target:"_blank",rel:"noopener noreferrer"},Z=t("p",null,"若有合适的欢迎补充~",-1),$=t("h3",{id:"webdav-填写示例",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#webdav-填写示例","aria-hidden":"true"},"#"),e(),t("strong",null,"WebDav 填写示例")],-1),tt=t("p",null,[e("举几个填写 "),t("strong",null,[t("code",null,"WebDav示例")]),e(" 账号密码就是你AList用户的账号密码")],-1),et=t("p",null,[e("基本是这个写法，软件不同写法也可能不同，如果没有单独留路径选项那正常就是在 站点后面添加"),t("code",null,"/dav"),e("选项")],-1),nt=t("p",null,[t("img",{src:c,alt:"webdav"})],-1),lt=t("p",null,[t("img",{src:g,alt:"webdav"})],-1),rt=t("div",{class:"image-preview"},[t("img",{src:x}),t("img",{src:y})],-1),dt=t("p",null,[t("img",{src:h,alt:"webdav"})],-1),at=t("p",null,[t("img",{src:_,alt:"webdav"})],-1),st=t("p",null,[t("img",{src:p,alt:"webdav"})],-1),it=t("p",null,[t("img",{src:b,alt:"webdav"})],-1);function ot(ct,gt){const l=i("ExternalLinkIcon"),o=i("Tabs");return f(),v("div",null,[k,t("ol",null,[t("li",null,[A,t("ul",null,[t("li",null,[t("a",D,[e("Potplayer"),n(l)]),e("，"),t("a",V,[e("kmplayer"),n(l)]),e("，"),t("a",E,[e("RaiDrive"),n(l)]),e("，"),t("a",W,[e("kodi"),n(l)]),e("，"),t("a",N,[e("OneCommander"),n(l)]),e("，"),t("a",S,[e("Mountain Duck"),n(l)]),e("，"),t("a",T,[e("netdrive"),n(l)]),e(" ❌，"),t("a",B,[e("rclone"),n(l)])])])]),t("li",null,[U,t("ul",null,[t("li",null,[t("a",I,[e("Nplayer"),n(l)]),e("，"),t("a",P,[e("kmplayer"),n(l)]),e("，ES文件管理器，"),t("a",X,[e("kodi"),n(l)]),e("，"),t("a",F,[e("nova魔改"),n(l)]),e("，"),t("a",L,[e("reex"),n(l)]),e("，cx 文件管理器，Solid Expore")])])]),t("li",null,[C,t("ul",null,[t("li",null,[e("Nplayer，"),t("a",M,[e("kmplayer"),n(l)]),e("，infuse，Fileball文件管理器")])])]),t("li",null,[O,t("ul",null,[t("li",null,[t("a",G,[e("Nplayer"),n(l)]),e("，"),t("a",H,[e("kodi"),n(l)]),e("，"),t("a",R,[e("nova魔改"),n(l)])]),Y])]),t("li",null,[j,t("ul",null,[t("li",null,[e("IINA，"),t("a",q,[e("Mountain Duck"),n(l)]),e("，infuse，"),t("a",z,[e("netdrive"),n(l)]),e("，"),t("a",J,[e("rclone"),n(l)])])])]),t("li",null,[K,t("ul",null,[t("li",null,[e("davfs2，"),t("a",Q,[e("rclone"),n(l)])])])])]),Z,$,tt,et,n(o,{id:"683",data:[{title:"Nplayer"},{title:"reex"},{title:"ES"},{title:"Infuse"},{title:"Fileball"},{title:"Potplayer"},{title:"群辉"}],"tab-id":"WebDav"},{tab0:r(({title:d,value:a,isActive:s})=>[nt]),tab1:r(({title:d,value:a,isActive:s})=>[lt]),tab2:r(({title:d,value:a,isActive:s})=>[rt]),tab3:r(({title:d,value:a,isActive:s})=>[dt]),tab4:r(({title:d,value:a,isActive:s})=>[at]),tab5:r(({title:d,value:a,isActive:s})=>[st]),tab6:r(({title:d,value:a,isActive:s})=>[it]),_:1})])}const ht=u(m,[["render",ot],["__file","webdav.html.vue"]]);export{ht as default};
