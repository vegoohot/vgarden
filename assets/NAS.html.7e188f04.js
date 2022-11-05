import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as d,a as e,b as t,d as o,w as a,e as r,r as l}from"./app.66f5ea39.js";const h={},p=r('<p>NAS 主要用于 Docker 服务、影视管理和文件存储备用这三方面。群晖 NAS 在使用前，注意以下几点：</p><ul><li>选择「控制面板」&gt;「文件服务」&gt;「SMB」&gt;「高级设置」，将最小 SMB 协议 设为 SMB1，避免部分应用发现了 NAS 但无法打开共享文件。</li><li>选择「控制面板」&gt;「任务计划」&gt;「新增」&gt;「计划的任务」&gt;「用户定义的脚本」，给 NAS 建立定时任务脚本。</li><li>SSD 缓存对家用的 NAS 性能提升不大，没必要加。</li><li>DS/Transmission 套件：用于 PT 下载 (禁用 DHT，半小时停止做种)。</li><li>Synology Drive Server 套件：电脑文件备份。</li><li>群晖系统分布在所有硬盘，拔出一个不影响使用。但应用会有影响？</li></ul><h2 id="nas-docker" tabindex="-1"><a class="header-anchor" href="#nas-docker" aria-hidden="true">#</a> NAS Docker</h2><p>NAS Docker 建议指定本地端口，否则重启容器会让端口发生改变，重启不会不影响 docker 配置。升级容器镜像，不影响内部数据库。</p><p>群晖的「Docker 导出」只会导出安装镜像和配置，但不包括容器内部使用的数据库，用处不大。</p><h3 id="docker-安装" tabindex="-1"><a class="header-anchor" href="#docker-安装" aria-hidden="true">#</a> Docker 安装</h3>',6),_=e("code",null,"docker-compose.yml",-1),u={href:"http://ttrss.henry.wang/zh/#%E9%80%9A%E8%BF%87-docker-compose-%E9%83%A8%E7%BD%B2",target:"_blank",rel:"noopener noreferrer"},f=r('<ol><li>选择「控制面板」&gt;「终端机和 SNMP」，启动 SSH 功能。</li><li>putty 连接群晖 SSH，进入 <code>docker-compose.yml</code> 所在路径，比如 <code>cd /volume3/storage</code>。</li><li>通过终端在同目录下运行 <code>sudo docker-compose up -d</code> 后等待部署完成。</li><li>关闭 SSH 功能。</li></ol><p>注意：root 用户需在命令前添加 <code>sudo</code>，否则会提示 <code>Permission denied</code>。</p><h3 id="docker-容器" tabindex="-1"><a class="header-anchor" href="#docker-容器" aria-hidden="true">#</a> Docker 容器</h3><p>NAS 上常用的 Docker 容器服务：</p>',4),m=e("li",null,"RSSHub：无需保存数据，pubData 为 GMT 时区，普通用户无法更改，Docker Timezone 设置也不会有改变。",-1),b=e("li",null,"Huginn：定期备份抓取脚本，数据库保存在本地。",-1),k={href:"https://registry.hub.docker.com/r/wangqiru/mercury-parser-api",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/AragonSnow/qiandao",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/ckx000/get-cookies",target:"_blank",rel:"noopener noreferrer"},S={href:"https://containrrr.dev/watchtower/",target:"_blank",rel:"noopener noreferrer"},A=e("ul",null,[e("li",null,[t("监控指定名称的镜像："),e("code",null,"docker run -d --name watchtower -v /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower --cleanup --run-once nginx redis"),t("。本案例只更新名为“nginx”和“redis”的容器，其他容器将被忽略。")]),e("li",null,[t("指定容器的 compose 命令中添加 lable "),e("code",null,"com.centurylinklabs.watchtower.enable=false"),t("，可禁止该容器的监控和更新。")])],-1),w={href:"https://github.com/easychen/checkchan-dist",target:"_blank",rel:"noopener noreferrer"},N={href:"https://docs.photoprism.app/",target:"_blank",rel:"noopener noreferrer"},T={href:"https://www.home-assistant.io/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://registry.hub.docker.com/r/linuxserver/qbittorrent/",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"BitTorrent - DHT",-1),D={href:"https://blog.csdn.net/weixin_45120915/article/details/114691473",target:"_blank",rel:"noopener noreferrer"},E={href:"https://blog.csdn.net/alex_yangchuansheng/article/details/122295193",target:"_blank",rel:"noopener noreferrer"},B={href:"https://github.com/EstrellaXD/Auto_Bangumi",target:"_blank",rel:"noopener noreferrer"},M={href:"https://github.com/jxxghp/nas-tools/wiki/%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"},H=e("li",null,"Emby、Plex：流媒体方案，暂不考虑。",-1),R=e("li",null,"Clash：代理服务器。",-1),$=e("h2",{id:"影视整理",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#影视整理","aria-hidden":"true"},"#"),t(" 影视整理")],-1),P=e("p",null,"下载文件后，用 tinyMediaManager 重命名并下载 NFO 和影视封面，最后放置于分类文件夹。",-1),I={href:"https://www.tinymediamanager.org/download/",target:"_blank",rel:"noopener noreferrer"},q=e("sup",{class:"footnote-ref"},[e("a",{href:"#footnote1"},"[1]"),e("a",{class:"footnote-anchor",id:"footnote-ref1"})],-1),z=r('<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 电视节目重命名规则</span>\n季文件夹名：Season <span class="token variable">${seasonNr}</span>\n剧集档案名：<span class="token variable">${showTitle}</span> - S<span class="token variable">${seasonNr2}</span>E<span class="token variable">${episodeNr2}</span> - <span class="token variable">${title}</span>\n\n<span class="token comment"># 当只有一季时，则更改重命名规则</span>\n季文件夹名：为空时，会自动调用默认值\n剧集档案名：<span class="token variable">${showTitle}</span> - E<span class="token variable">${episodeNr2}</span>\n\n<span class="token comment"># 多季，有标题时</span>\n剧集档案名：<span class="token variable">${showTitle}</span> - E<span class="token variable">${episodeNr2}</span> - <span class="token variable">${title}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nas-硬盘" tabindex="-1"><a class="header-anchor" href="#nas-硬盘" aria-hidden="true">#</a> NAS 硬盘</h2><p>插入新硬盘，新建储存空间，使用 Btrfs 或 Basic 格式。SHR 是群晖的智能 RAID 格式，不适用于硬盘容量不同的情况。</p><table><thead><tr><th>硬盘</th><th>容量</th><th>到期时间（5 年）</th></tr></thead><tbody><tr><td>硬盘 1</td><td>10T</td><td>2025-06-18</td></tr><tr><td>硬盘 2</td><td>4T</td><td>2023-01-24</td></tr><tr><td>硬盘 3</td><td>14T</td><td>2027-02-11</td></tr><tr><td>硬盘 4</td><td>8T</td><td>2026-01-06</td></tr><tr><td>冷备份</td><td>2T</td><td>2014-10</td></tr></tbody></table><p>换下的机械硬盘做冷备份，存储照片等长期数据。</p><p>硬盘临期后，用大容量硬盘替换。选择「存储池」&gt;「更改 RAID 类型」，无损转换 basic 到 Raid1。不过，不同容量硬盘组 RAID，只能以最小磁盘容量计使用空间。</p><p>更换硬盘后，注意将数据连同文件夹用 file station 复制过去 (按住 Shift 选中所有你要的文件点右键 移动到...)，关机卸载旧盘。如果该硬盘涉及套件位置，注意检查设置。<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></p><p>共享文件迁移：选择「控制面板」&gt;「共享文件夹」，把你的共享文件夹位置修改到新储存空间。<sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup></p><hr class="footnotes-sep">',9),C={class:"footnotes"},F={class:"footnotes-list"},L={id:"footnote1",class:"footnote-item"},V={href:"https://post.smzdm.com/p/a0d67m2z/",target:"_blank",rel:"noopener noreferrer"},j=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),G={id:"footnote2",class:"footnote-item"},X={href:"https://www.bigzhang.com/3264.html",target:"_blank",rel:"noopener noreferrer"},O=e("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1),J={id:"footnote3",class:"footnote-item"},K={href:"https://blog.csdn.net/hilaryfrank/article/details/109722319",target:"_blank",rel:"noopener noreferrer"},Q=e("a",{href:"#footnote-ref3",class:"footnote-backref"},"↩︎",-1);function U(W,Y){const n=l("ExternalLinkIcon"),s=l("RouterLink");return c(),d("div",null,[p,e("p",null,[t("推荐用 "),_,t(" 安装 Docker，镜像会自动同步到 NAS 的容器列表中。docker-compose 使用参考 "),e("a",u,[t("TTRSS docker-compose"),o(n)]),t("。")]),f,e("ul",null,[m,b,e("li",null,[t("Tiny Tiny RSS：定期备份订阅源和设置，自动更新。 "),e("ul",null,[e("li",null,[e("a",k,[t("mercury-parser-api"),o(n)]),t("：全文插件")])])]),e("li",null,[e("a",g,[t("qiandao"),o(n)]),t("：自动签到开源框架，需搭配浏览器扩展 "),e("a",v,[t("get-cookies"),o(n)]),t(" 使用，可导出配置。")]),e("li",null,[e("a",S,[t("watchtower"),o(n)]),t("：监控并更新 Docker 容器。 "),A]),e("li",null,[e("a",w,[t("Check 酱"),o(n)]),t("：监测网页内容变化，并发送异动到微信。亦支持 http status、json 和 rss 监测。配合自架云端，关电脑后也能运行。")]),e("li",null,[e("a",N,[t("PhotoPrism"),o(n)]),t("：基于 ai 私有化部署的个人相册。如果部署时出错，则尝试删除数据库文件夹下的内容。地点标记功能非常强大，类似本地版 Google Photos。")]),e("li",null,[e("a",T,[t("Home Assistant"),o(n)]),t("：开源家庭自动化平台，可自定义集中管理各品牌的智能家居设备。米家设备需使用 hacs 下的集成 "),o(s,{to:"/family/HomeAutomation.html#home-assistant"},{default:a(()=>[t("Xiaomi Miot Auto")]),_:1}),t("。")]),e("li",null,[o(s,{to:"/family/HomeAutomation.html#node-red"},{default:a(()=>[t("Node-RED")]),_:1}),t("：开源流处理，类似本地版的 IFTTT。")]),e("li",null,[e("a",y,[t("qbittorrent"),o(n)]),t("：需修改所有默认端口，否则容易报错。PT 下载关闭 "),x,t(" 和其他隐私选项，半小时停止做种，将下载文件添加 Everyone 权限，其他设置参考 "),e("a",D,[t("群晖使用 qbittorrent"),o(n)]),t("。")]),e("li",null,[t("待了解 "),e("ul",null,[e("li",null,[e("a",E,[t("n8n"),o(n)]),t("：开源 IFTTT 工具，偏重于云服务。")]),e("li",null,[e("a",B,[t("AutoBangumi"),o(n)]),t("：自动追番器，用以替代自我审查的 Bilibili。")]),e("li",null,[e("a",M,[t("nas-tools"),o(n)]),t("：号称能自动整理文件，但测试识别中很容易出错，暂不考虑。")]),H,R])])]),$,P,e("p",null,[e("a",I,[t("tinyMediaManager"),o(n)]),t(" v4 免费版足够个人使用，v3 作偶尔补充使用，搜索首选语言改为「大陆简体」更精准。"),q]),z,e("section",C,[e("ol",F,[e("li",L,[e("p",null,[e("a",V,[t("群晖 NAS 使用 Emby+tMM 打造全平台观影畅爽体验（附下载地址）"),o(n)]),t(),j])]),e("li",G,[e("p",null,[e("a",X,[t("如何把群晖 NAS 上的套件搬到另外个硬盘上"),o(n)]),t(),O])]),e("li",J,[e("p",null,[e("a",K,[t("群晖 NAS 跨存储空间移动共享文件夹 (NAS 新增磁盘)"),o(n)]),t(),Q])])])])])}const te=i(h,[["render",U],["__file","NAS.html.vue"]]);export{te as default};
