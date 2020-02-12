"use strict";

$(document).ready(function () {
	var lei3Po8h = ["support", ["tuna", "tsinghua", "edu", "cn"].join(".")].join("@");
	$('a#eib1gieB').text(lei3Po8h).attr('href', ["ma", "lto:"].join("i") + lei3Po8h);

	$('.selectpicker').selectpicker();

	var global_options = {
		"options": { "mirror_desc": [{ "name": "AOSP", "desc": "Android 操作系统源代码" }, { "name": "AUR", "desc": "Arch Linux 用户软件库" }, { "name": "Bananian", "desc": "为 Banana Pi 制作的，基于官方 Debian 仓库的发行版镜像和软件包仓库" }, { "name": "CPAN", "desc": "Perl 语言软件库" }, { "name": "CRAN", "desc": "R 语言的可执行文件、源代码和说明文件，也收录了各种用户撰写的软件包" }, { "name": "CTAN", "desc": "TeX 的各种发行版、软件包和文档" }, { "name": "CocoaPods", "desc": "Objective-C 和 Swift 的依赖管理器" }, { "name": "ELK", "desc": "现已更名为 Elastic Stack，仅保留用作向后兼容" }, { "name": "HHVM", "desc": "Facebook 开发的高性能 PHP 语言虚拟机" }, { "name": "NetBSD", "desc": "NetBSD 的安装镜像和部分系统源码" }, { "name": "OpenBSD", "desc": "OpenBSD 的安装镜像和官方软件包仓库" }, { "name": "adobe-fonts", "desc": "Adobe 公司的开源字体" }, { "name": "alpine", "desc": "Alpine Linux 的安装镜像和官方软件包仓库" }, { "name": "anaconda", "desc": "用于科学计算的 Python 发行版" }, { "name": "anthon", "desc": "Anthon Linux（安同 Linux）的安装镜像和官方软件包仓库" }, { "name": "aosp-monthly", "desc": "AOSP （Android 系统源码）镜像每月打包" }, { "name": "apache", "desc": "Apache 基金会赞助的各个项目" }, { "name": "arch4edu", "desc": "用于 Arch Linux 和 Arch Linux ARM 的非官方软件仓库，主要包含科研、教学所需的各种常用软件" }, { "name": "archlinux", "desc": "Arch Linux 的安装镜像和官方软件包仓库" }, { "name": "archlinuxarm", "desc": "用于 ARM 平台的 Arch Linux 镜像和软件包仓库" }, { "name": "archlinuxcn", "desc": "由 Arch Linux 中文社区驱动的非官方用户仓库，包含中文用户常用软件、工具、字体/美化包等" }, { "name": "armbian", "desc": "Armbian（面向 ARM 单板机的发行版）的软件源" }, { "name": "armbian-releases", "desc": "Armbian 的安装镜像" }, { "name": "artixlinux", "desc": "Artix Linux 是一款基于 Arch Linux 的滚动发行版" }, { "name": "bananian", "desc": "用于 Banana Pi 的 Debian 操作系统" }, { "name": "bioconductor", "desc": "开源的基因数据分析处理工具" }, { "name": "bjlx", "desc": "北京龙芯 & Debian 俱乐部 的公开软件源" }, { "name": "blackarch", "desc": "用于安全评估的基于 Arch Linux 的轻量级发行版" }, { "name": "cc", "desc": "CERN CentOS" }, { "name": "centos", "desc": "CentOS 的安装镜像和官方软件包仓库" }, { "name": "centos-altarch", "desc": "CentOS 额外平台的安装镜像和官方软件包仓库" }, { "name": "centos-vault", "desc": "为旧版本 CentOS 提供服务的软件包仓库" }, { "name": "ceph", "desc": "高性能对象存储和文件系统" }, { "name": "chakra", "desc": "专注于 Qt 与 KDE 软件的 Linux 发行版" }, { "name": "chakra-releases", "desc": "Chakra 发行版的安装镜像" }, { "name": "chromiumos", "desc": "Google Chrome OS 的开放源代码开发版本" }, { "name": "clojars", "desc": "Clojure 语言的第三方软件包仓库" }, { "name": "ctex", "desc": "旧版 CTEX 安装镜像存档" }, { "name": "cygwin", "desc": "Cygwin 官方软件包仓库" }, { "name": "dart-pub", "desc": "Dart 语言的软件包仓库" }, { "name": "debian", "desc": "Debian Linux 的官方软件包仓库" }, { "name": "debian-cd", "desc": "Debian Linux 的安装镜像" }, { "name": "debian-multimedia", "desc": "Debian Linux 第三方多媒体软件源" }, { "name": "debian-nonfree", "desc": "Debian Linux 的非自由软件包仓库" }, { "name": "debian-security", "desc": "Debian Linux 的安全更新" }, { "name": "deepin", "desc": "Deepin Linux 的官方软件包仓库" }, { "name": "deepin-cd", "desc": "Deepin Linux 的安装镜像" }, { "name": "dell", "desc": "Dell 服务器管理工具" }, { "name": "docker-ce", "desc": "Docker Community Edition 的安装包" }, { "name": "dotdeb", "desc": "用于 Debian 服务器的额外镜像源" }, { "name": "eclipse", "desc": "著名的集成开发环境 Eclipse" }, { "name": "elasticstack", "desc": "ELK 系列数据分析工具，5.x 之后改名为 Elastic Stack" }, { "name": "elpa", "desc": "Emacs 内建包管理器 package.el 的软件源" }, { "name": "elrepo", "desc": "RHEL 及其变体的 RPM 软件包仓库" }, { "name": "elvish", "desc": "TUNA 前会长 xiaq 开发的革命性 Shell" }, { "name": "epel", "desc": "企业版 Linux 附加软件包" }, { "name": "erlang-solutions", "desc": "为各大 Linux 发行版提供的 Erlang 软件包" }, { "name": "fedora", "desc": "Fedora Linux 的安装镜像和官方软件包仓库" }, { "name": "fedora-altarch", "desc": "Fedora Linux 额外平台的安装镜像和官方软件包仓库" }, { "name": "flightgear", "desc": "多平台的飞行模拟器" }, { "name": "flutter", "desc": "Flutter 框架 SDK 镜像" }, { "name": "fzug", "desc": "Fedora 中文用户组的软件包仓库" }, { "name": "gcc.git", "desc": "GCC 的源码仓库" }, { "name": "gentoo", "desc": "Gentoo Linux 的 Stage 3 镜像" }, { "name": "gentoo-portage", "desc": "Gentoo Linux 的 Portage 包管理器镜像源" }, { "name": "gentoo-portage-prefix", "desc": "Gentoo/Prefix 的 Portage 包管理器镜像源" }, { "name": "git-repo", "desc": "Google 开发的项目依赖下载工具 repo 的镜像" }, { "name": "gitlab-ce", "desc": "Gitlab 社区版" }, { "name": "gitlab-ci-multi-runner", "desc": "GitLab 持续集成框架，已更名为 gitlab-runner" }, { "name": "gitlab-ee", "desc": "Gitlab 企业版" }, { "name": "gitlab-runner", "desc": "GitLab 持续集成框架版本 10 及以上" }, { "name": "gnu", "desc": "GNU 项目的软件包（源代码、文档和部分平台的二进制文件）" }, { "name": "gnu-alpha", "desc": "一些尚未达到生产质量的 GNU 项目的软件包" }, { "name": "grafana", "desc": "开源的数据可视化工具" }, { "name": "hackage", "desc": "Haskell 社区的中心软件包仓库" }, { "name": "homebrew", "desc": "Homebrew 的软件包描述文件（Git 仓库）" }, { "name": "homebrew-bottles", "desc": "预编译的 Homebrew 软件包" }, { "name": "iina", "desc": "macOS 上的现代化开源视频播放器" }, { "name": "infinality-bundle", "desc": "Arch Linux 的字体渲染软件包" }, { "name": "influxdata", "desc": "时间序列数据平台" }, { "name": "ius", "desc": "为企业版 Linux 提供最新软件包的镜像源" }, { "name": "jenkins", "desc": "用 Java 编写的持续集成框架" }, { "name": "kali", "desc": "Kali Linux 的官方软件包仓库" }, { "name": "kali-images", "desc": "Kali Linux 的安装镜像" }, { "name": "kali-security", "desc": "Kali Linux 的安全更新" }, { "name": "kernel", "desc": "各个版本的 Linux 内核源代码压缩包和补丁" }, { "name": "kicad", "desc": "开源的电路原理图与 PCB 设计工具" }, { "name": "kodi", "desc": "开源的多媒体播放器，原名 XBMC" }, { "name": "libreoffice", "desc": "自由的办公软件套件" }, { "name": "lineage-rom", "desc": "最大的社区Android发行版之一Lineage的ROM" }, { "name": "lineageOS", "desc": "最大的社区Android发行版之一Lineage的源代码" }, { "name": "linux-firmware.git", "desc": "Linux 内核附带的固件 Git 仓库" }, { "name": "linux-next.git", "desc": "Linux 内核源代码的 Git 仓库，开发分支（包含为下一个 merge windows 开发的 patch）" }, { "name": "linux-stable.git", "desc": "Linux 内核源代码的 Git 仓库, 稳定版分支" }, { "name": "linux.git", "desc": "Linux 内核源代码的 Git 仓库" }, { "name": "linuxmint", "desc": "Linux Mint 的官方软件源" }, { "name": "linuxmint-cd", "desc": "Linux Mint 的安装镜像" }, { "name": "llvm", "desc": "LLVM 编译器套件的多个 git repo 的镜像" }, { "name": "loongson", "desc": "用于龙芯电脑的软件包" }, { "name": "lxc-images", "desc": "Linux 容器的镜像" }, { "name": "lyx", "desc": "所见即所指的 LaTeX 编辑器" }, { "name": "macports", "desc": "macOS 的一个开源软件包管理系统" }, { "name": "mageia", "desc": "Mageia Linux（衍生于 Mandriva Linux）的安装镜像和官方软件包仓库" }, { "name": "manjaro", "desc": "Manjaro Linux 的官方软件源" }, { "name": "manjaro-cd", "desc": "Manjanro Linux 的安装镜像" }, { "name": "mariadb", "desc": "衍生于 MySQL 的开源关系数据库" }, { "name": "mongodb", "desc": "开源的跨平台 NoSQL 文档型数据库" }, { "name": "msys2", "desc": "用于编译原生 Windows 程序的类 Linux 开发环境" }, { "name": "mxlinux", "desc": "基于 Debian 的中量级的 Linux 发行版" }, { "name": "mxlinux-isos", "desc": "MX Linux 的安装镜像" }, { "name": "mysql", "desc": "MySQL 数据库的安装包及各种工具下载" }, { "name": "neurodebian", "desc": "用于神经科学研究的 Debian 软件包源" }, { "name": "nix", "desc": "NixOS 软件源" }, { "name": "nodejs-release", "desc": "预编译的 Node.js 二进制程序" }, { "name": "nodesource", "desc": "为 Debian, Ubuntu, Fedora, RHEL 等发行版提供预编译的 Node.js 和 npm 等软件包" }, { "name": "openresty", "desc": "基于 Nginx 与 Lua 的高性能 Web 平台" }, { "name": "opensuse", "desc": "openSUSE 的安装镜像和官方软件包仓库" }, { "name": "openthos", "desc": "OpenTHOS 的二进制发行包" }, { "name": "openthos-src", "desc": "OpenTHOS 源代码仓库" }, { "name": "openwrt", "desc": "OpenWrt/LEDE 软件包镜像源" }, { "name": "osdn", "desc": "OSDN 网站提供的开源软件下载" }, { "name": "osmc", "desc": "免费、开源的媒体中心解决方案" }, { "name": "packman", "desc": "为 Debian、Fedora、openSUSE、Ubuntu 提供额外和过期软件包的仓库" }, { "name": "parrot", "desc": "Parrot Linux（专注于安全审计的 Linux 发行版）的安装映像和官方软件源" }, { "name": "percona", "desc": "开源的数据库解决方案，详见 http://www.percona.com" }, { "name": "pkgsrc", "desc": "NetBSD 的第三方软件源" }, { "name": "postgresql", "desc": "著名的开源关系型数据库 PostgreSQL 的镜像" }, { "name": "puppy", "desc": "为家用电脑设计的轻量级 Linux 发行版" }, { "name": "pybombs", "desc": "为 GNU Radio 设计的编译管理系统" }, { "name": "pypi", "desc": "Python 软件包索引源" }, { "name": "qubesos", "desc": "一个面向安全的桌面操作系统，利用虚拟化技术隔离应用来提供安全保障" }, { "name": "qt", "desc": "跨平台软件开发库 Qt 的源码、开发工具、文档等" }, { "name": "raspberrypi", "desc": "一些专为树莓派提供的 Debian 软件包" }, { "name": "raspbian", "desc": "为树莓派编译的 Debian 系统软件源" }, { "name": "raspbian-images", "desc": "Raspbian 的安装镜像" }, { "name": "redhat", "desc": "Red Hat Enterprise Linux 官方软件源" }, { "name": "remi", "desc": "包含最新版本 PHP 和 MySQL 的第三方 yum 源" }, { "name": "repo-ck", "desc": "repo-ck 是 Arch 的非官方仓库，内有包含 ck 补丁、BFS 调度器等" }, { "name": "repoforge", "desc": "Repoforge 是 RHEL 系统下的软件仓库，拥有 10000 多个软件包，被认为是最安全、最稳定的一个软件仓库" }, { "name": "ros", "desc": "ROS (Robot Operating System) 提供一系列程序库和工具以帮助软件开发者创建机器人应用软件" }, { "name": "rpmfusion", "desc": "RPM Fusion 提供了一些 Fedora Project 和 Red Hat 不包含的软件" }, { "name": "rubygems", "desc": "Ruby 的一个包管理器" }, { "name": "rustup", "desc": "Rust 的官方安装工具" }, { "name": "sagemath", "desc": "构建在 NumPy, SciPy 等工具之上的开源数学软件系统" }, { "name": "saltstack", "desc": "基于 python 的配置管理与运维自动化工具" }, { "name": "slackware", "desc": "Linux 发行版 Slackware 的源代码和官方软件包仓库" }, { "name": "slackwarearm", "desc": "用于 ARM 设备的 Slackware 发行版源代码和官方软件包仓库" }, { "name": "solus", "desc": "Solus 的软件仓库，致力于制作对新手友好的发行版" }, { "name": "stackage", "desc": "Haskell 项目管理器 stack 所需的元数据与 ghc 安装包的镜像" }, { "name": "steamos", "desc": "Valve 开发的基于 Debian 的操作系统，包含安装镜像和官方软件包仓库" }, { "name": "tensorflow", "desc": "采用数据流图、用于数值计算的开源深度学习框架 TensorFlow" }, { "name": "termux", "desc": "运行在 Android 上的终端模拟器 Termux 的官方软件包仓库" }, { "name": "tinycorelinux", "desc": "为嵌入式开发的微型 Linux 发行版" }, { "name": "ubuntu", "desc": "流行的 Linux 发行版 Ubuntu 的安装镜像和官方软件包仓库" }, { "name": "ubuntu-cdimage", "desc": "Ubuntu 及 Ubuntu 衍生版各版本安装镜像" }, { "name": "ubuntu-cloud-images", "desc": "适用于公有云的 Ubuntu 安装镜像" }, { "name": "ubuntu-ports", "desc": "armhf, arm64 以及 powerpc 等平台的 Ubuntu 软件仓库" }, { "name": "ubuntu-releases", "desc": "包含近几年发行的 Ubuntu 的镜像" }, { "name": "videolan-ftp", "desc": "简称VLC，是一款自由、开源的跨平台多媒体播放器及框架，可播放大多数多媒体文件" }, { "name": "virtualbox", "desc": "Oracle 的开源的 x86 架构虚拟机" }, { "name": "weave", "desc": "Google 开发的物联网（IoT）设备通信平台" }, { "name": "winehq", "desc": "Wine （允许类 Unix 操作系统运行 Windows 程序）" }, { "name": "zabbix", "desc": "著名的网络监视、管理系统" }], "new_mirrors": ["rustup", "nix", "dart-pub", "flutter", "raspbian-images", "linux-firmware.git", "gcc.git"], "unlisted_mirrors": [{ "status": "success", "last_update": "-", "name": "AUR", "url": "https://aur.tuna.tsinghua.edu.cn/", "upstream": "https://aur.archlinux.org/", "is_master": true }, { "status": "success", "last_update": "-", "name": "manjaro-cd", "url": "/osdn/storage/g/m/ma/manjaro/", "upstrame": "-", "is_master": true }], "force_help_mirrors": ["AOSP", "lineageOS", "homebrew", "linux.git", "linux-next.git", "linux-stable.git", "git-repo", "chromiumos", "weave", "CocoaPods", "llvm", "openthos-src"], "label_map": { "unknown": "label-default", "syncing": "label-info", "success": "label-success", "fail": "label-warning", "failed": "label-warning", "paused": "label-warning" } },
		"helps": [{ "url": "/help/kicad/", "mirrorid": "kicad" }, { "url": "/help/solus/", "mirrorid": "solus" }, { "url": "/help/qubesos/", "mirrorid": "qubesos" }, { "url": "/help/arch4edu/", "mirrorid": "arch4edu" }, { "url": "/help/flutter/", "mirrorid": "flutter" }, { "url": "/help/dart-pub/", "mirrorid": "dart-pub" }, { "url": "/help/nix/", "mirrorid": "nix" }, { "url": "/help/rustup/", "mirrorid": "rustup" }, { "url": "/help/grafana/", "mirrorid": "grafana" }, { "url": "/help/anthon/", "mirrorid": "anthon" }, { "url": "/help/gentoo-prefix-portage/", "mirrorid": "gentoo-portage-prefix" }, { "url": "/help/gentoo-portage/", "mirrorid": "gentoo-portage" }, { "url": "/help/openthos-src/", "mirrorid": "openthos-src" }, { "url": "/help/CTAN/", "mirrorid": "CTAN" }, { "url": "/help/llvm/", "mirrorid": "llvm" }, { "url": "/help/CRAN/", "mirrorid": "CRAN" }, { "url": "/help/bioconductor/", "mirrorid": "bioconductor" }, { "url": "/help/rubygems/", "mirrorid": "rubygems" }, { "url": "/help/repoforge/", "mirrorid": "repoforge" }, { "url": "/help/virtualbox/", "mirrorid": "virtualbox" }, { "url": "/help/alpine/", "mirrorid": "alpine" }, { "url": "/help/ubuntu/", "mirrorid": "ubuntu" }, { "url": "/help/termux/", "mirrorid": "termux" }, { "url": "/help/tensorflow/", "mirrorid": "tensorflow" }, { "url": "/help/stackage/", "mirrorid": "stackage" }, { "url": "/help/rpmfusion/", "mirrorid": "rpmfusion" }, { "url": "/help/repo-ck/", "mirrorid": "repo-ck" }, { "url": "/help/raspbian/", "mirrorid": "raspbian" }, { "url": "/help/pypi/", "mirrorid": "pypi" }, { "url": "/help/pybombs/", "mirrorid": "pybombs" }, { "url": "/help/nodesource/", "mirrorid": "nodesource" }, { "url": "/help/nodejs-release/", "mirrorid": "nodejs-release" }, { "url": "/help/msys2/", "mirrorid": "msys2" }, { "url": "/help/mongodb/", "mirrorid": "mongodb" }, { "url": "/help/lxc-images/", "mirrorid": "lxc-images" }, { "url": "/help/linux.git/", "mirrorid": "linux.git" }, { "url": "/help/linux-stable.git/", "mirrorid": "linux-stable.git" }, { "url": "/help/linux-next.git/", "mirrorid": "linux-next.git" }, { "url": "/help/lineageOS/", "mirrorid": "lineageOS" }, { "url": "/help/lineage-rom/", "mirrorid": "lineage-rom" }, { "url": "/help/homebrew/", "mirrorid": "homebrew" }, { "url": "/help/homebrew-bottles/", "mirrorid": "homebrew-bottles" }, { "url": "/help/hackage/", "mirrorid": "hackage" }, { "url": "/help/gitlab-runner/", "mirrorid": "gitlab-runner" }, { "url": "/help/gitlab-ci-multi-runner/", "mirrorid": "gitlab-ci-multi-runner" }, { "url": "/help/gitlab-ce/", "mirrorid": "gitlab-ce" }, { "url": "/help/git-repo/", "mirrorid": "git-repo" }, { "url": "/help/fedora/", "mirrorid": "fedora" }, { "url": "/help/epel/", "mirrorid": "epel" }, { "url": "/help/elpa/", "mirrorid": "elpa" }, { "url": "/help/docker-ce/", "mirrorid": "docker-ce" }, { "url": "/help/debian/", "mirrorid": "debian" }, { "url": "/help/cygwin/", "mirrorid": "cygwin" }, { "url": "/help/chromiumos/", "mirrorid": "chromiumos" }, { "url": "/help/centos/", "mirrorid": "centos" }, { "url": "/help/bananian/", "mirrorid": "bananian" }, { "url": "/help/archlinuxcn/", "mirrorid": "archlinuxcn" }, { "url": "/help/archlinux/", "mirrorid": "archlinux" }, { "url": "/help/AOSP/", "mirrorid": "AOSP" }, { "url": "/help/anaconda/", "mirrorid": "anaconda" }, { "url": "/help/CocoaPods/", "mirrorid": "CocoaPods" }, { "url": "/help/AUR/", "mirrorid": "AUR" }]
	};
	var label_map = global_options.options.label_map;
	var help_url = {};
	global_options.helps.forEach(function (h) {
		return help_url[h.mirrorid] = h.url;
	});
	var new_mirrors = {};
	global_options.options.new_mirrors.forEach(function (m) {
		return new_mirrors[m] = true;
	});
	var unlisted = global_options.options.unlisted_mirrors;
	var options = {};
	global_options.options.force_help_mirrors.forEach(function (m) {
		return options[m] = { 'url': "/help/" + m + "/" };
	});
	var descriptions = {};
	global_options.options.mirror_desc.forEach(function (m) {
		return descriptions[m.name] = m.desc;
	});

	new Vue({
		el: "#upgrade-mask"
	});

	var vmMirList = new Vue({
		el: "#mirror-list",
		data: {
			test: "hello",
			mirrorList: [],
			filter: ""
		},
		created: function created() {
			this.refreshMirrorList();
		},
		updated: function updated() {
			$('.mirror-item-label').popover();
		},
		computed: {
			nowBrowsingMirror: function nowBrowsingMirror() {
				var mirrorName = location.pathname.split('/')[1];
				if (!mirrorName) {
					return false;
				}
				mirrorName = mirrorName.toLowerCase();
				var result = this.mirrorList.filter(function (m) {
					return m.name.toLowerCase() === mirrorName;
				})[0];
				if (!result) {
					return false;
				}
				return result;
			},
			filteredMirrorList: function filteredMirrorList() {
				var filter = this.filter.toLowerCase();
				return this.mirrorList.filter(function (m) {
					return m.is_master && m.name.toLowerCase().indexOf(filter) !== -1;
				});
			}
		},
		methods: {
			getURL: function getURL(mir) {
				if (mir.url !== undefined) {
					return mir.url;
				}
				return "/" + mir.name + "/";
			},
			refreshMirrorList: function refreshMirrorList() {
				var self = this;
				$.getJSON("/static/tunasync.json", function (status_data) {
					var mirrors = [],
					    mir_data = $.merge(status_data, unlisted);
					var mir_uniq = {}; // for deduplication

					mir_data.sort(function (a, b) {
						return a.name < b.name ? -1 : 1;
					});

					for (var k in mir_data) {
						var d = mir_data[k];
						if (d.status == "disabled") {
							continue;
						}
						if (options[d.name] != undefined) {
							d = $.extend(d, options[d.name]);
						}
						d.label = label_map[d.status];
						d.help_url = help_url[d.name];
						d.is_new = new_mirrors[d.name];
						d.description = descriptions[d.name];
						d.show_status = d.status != "success";
						if (d.is_master === undefined) {
							d.is_master = true;
						}
						// Strip the second component of last_update
						if (d.last_update_ts) {
							var date = new Date(d.last_update_ts * 1000);
							if (date.getFullYear() > 2000) {
								d.last_update = ('000' + date.getFullYear()).substr(-4) + "-" + ('0' + (date.getMonth() + 1)).substr(-2) + "-" + ('0' + date.getDate()).substr(-2) + (" " + ('0' + date.getHours()).substr(-2) + ":" + ('0' + date.getMinutes()).substr(-2));
							} else {
								d.last_update = "0000-00-00 00:00";
							}
						} else {
							d.last_update = d.last_update.replace(/(\d\d:\d\d):\d\d(\s\+\d\d\d\d)?/, '$1');
						}
						if (d.name in mir_uniq) {
							var other = mir_uniq[d.name];
							if (other.last_update > d.last_update) {
								continue;
							}
						}
						mir_uniq[d.name] = d;
					}
					for (k in mir_uniq) {
						mirrors.push(mir_uniq[k]);
					}
					self.mirrorList = mirrors;
					setTimeout(function () {
						self.refreshMirrorList();
					}, 10000);
				});
			}
		}
	});

	var vmIso = new Vue({
		el: "#isoModal",
		data: {
			distroList: [],
			selected: {},
			curCategory: "os"
		},
		created: function created() {
			var self = this;
			$.getJSON("/static/status/isoinfo.json", function (isoinfo) {
				self.distroList = isoinfo;
				self.selected = self.curDistroList[0];
				if (window.location.hash.match(/#iso-download(\?.*)?/)) {
					$('#isoModal').modal();
				}
			});
		},
		computed: {
			curDistroList: function curDistroList() {
				var _this = this;

				return this.distroList.filter(function (x) {
					return x.category === _this.curCategory;
				});
			}
		},
		methods: {
			switchDistro: function switchDistro(distro) {
				this.selected = distro;
			},
			switchCategory: function switchCategory(category) {
				this.curCategory = category;
				this.selected = this.curDistroList[0];
			}
		}
	});
});

// vim: ts=2 sts=2 sw=2 noexpandtab