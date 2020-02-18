<?php 
error_reporting(0);
$getdir = iconv('GBK','UTF-8',$_GET['dir']);
$pwd = empty($getdir) ? './' : $getdir;
$pwd = realpath($pwd);
if(is_file($pwd)) {
    highlight_file ($pwd);
    exit;
}else
    $it = new FilesystemIterator($pwd);
?>
<!DOCTYPE html>
<!--Copyright by Tsinghua University TUNA Team.-->
<!--Modify by GHINK NETWORK STUDIO.-->
<html class="wf-lato-n4-active wf-active"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="极科网络开源软件镜像站，致力于为国内用户提供高质量的开源软件镜像、Linux镜像源服务，帮助用户更方便地获取开源软件。本镜像站由清华大学TUNA团队负责维护。">
<meta name="keywords" content="镜像站,镜像源,Linux,软件源,开源">
<meta name="author" content="GHINK">
<link rel="shortcut icon" href="index_files/favicon.ico">
<title>极科开源程序镜像 | Ghink Open Source Mirror</title>
<link rel="stylesheet" href="./index_files/bootstrap.css">
<link rel="stylesheet" href="./index_files/bootstrap-select.min.css">
<link rel="stylesheet" href="./index_files/font-awesome.min.css">
<link rel="stylesheet" href="./index_files/style.css">
<link rel="stylesheet" href="./index_files/spinkit.css">
<link rel="stylesheet" href="./index_files/thuhidden.css">
<script src="./index_files/jquery.min.js"></script>
<script src="./index_files/bootstrap.min.js"></script>
<script src="./index_files/bootstrap-select.min.js"></script>

<script src="./index_files/vue.min.js"></script>

<script src="./index_files/markup.min.js"></script>
<script src="./index_files/webfont.js"></script>
<script src="./index_files/thuhidden.js"></script>

</head>

	<body>
		
		
<!---->


		
		<div class="navbar navbar-default" role="navigation">
  <div class="container">
    <div class="navbar-header">
      
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      
      <a class="navbar-brand" href="http://mirrors.ghink.net/"><img src="index_files/favicon.ico" alt=""/>极科网络开源程序镜像站</a>
    </div>
    <div class="navbar-collapse collapse navbar-right">
      <ul class="nav navbar-nav">
        <li><a href="https://www.ghink.net/">HOME</a></li>
        <li class="active"><a href="http://mirrors.ghink.net/">MIRRORS</a></li>
      </ul>
    </div><!--/.nav-collapse -->
  </div>
</div>

		<div id="mirrors">
			<div class="spacing hidden-xs"></div>
			<div class="container">
				<div class="row">
					<div id="mirror-list" class="col-md-8 table-responsive"><div class="row"><h3 id="mirror-title"><img src="index_files/box.png" alt=""/>&nbsp;镜像列表&nbsp;（<?php 
if(dirname(__FILE__)==$pwd){
	echo '/';
}else{
	echo str_replace('\\','/',str_replace(dirname(__FILE__),'',$pwd));
}?>)</h3> 
		</div>
			<table class="table">
				<thead>
					<tr class="row">
						<th class="col-sm-8">Name</th>
						<th class="col-sm-6">Last Update</th>
						<th class="col-sm-2">Size</th>
					</tr>
				</thead>
				<tbody>
					<tr class="row status-success">
<?php 
if(dirname(__FILE__)==$pwd){
}else{
    echo '<tr class="row status-success"><td class="col-md-8"><a data-toggle="popover" data-trigger="hover" data-placement="right" href="?dir='.dirname($pwd).'" class="mirror-item-label" data-original-title="" title="">Parent directory/</a></td><td class="col-md-6">_</td><td class="col-md-2">_</td></tr>';
}?>
<?php
foreach ($it as $file){
    if($file->isDir()) {
			$fileSize = '_';
			$fileName = $file->getFilename() . '/';
        	$fileordir = 'dir';
    }elseif($file->isFile()) {
        	$fileSize =  $file->getSize();
			$fileName = $file->getFilename();
        	$fileordir = 'file';
	}
    $date = date('Y-m-d H:i',$file->getCTime());
	if (strtoupper(substr(PHP_OS, 0, 3)) === 'WIN') {
		$fileName = iconv('GBK','UTF-8',$fileName);
	}else{
	}
	if($fileName=='index.php'){
		$fileordir = 'either';
	}
	if($fileName=='index_files/'){
		$fileordir = 'either';
	}
	if($fileName=='.htaccess'){
		$fileordir = 'either';
	}
	if($fileName=='.user.ini'){
		$fileordir = 'either';
	}
	if($fileName=='tz.php'){
		$fileordir = 'either';
	}
?>
<?php 
	if($fileordir=='file'){
		echo '<tr class="row status-success"><td class="col-md-8"><a data-toggle="popover" data-trigger="hover" data-placement="right" href="'.str_replace('\\','/',str_replace(dirname(__FILE__),'',$pwd)).'/'.basename($fileName).'" class="mirror-item-label" data-original-title="" title="">';
		echo $fileName;
		echo '</a></td><td class="col-md-6">'.str_pad($date, 60-strlen($fileName),' ',STR_PAD_LEFT).'</td></td><td class="col-md-2">'.str_pad($fileSize,30,' ',STR_PAD_LEFT).'</td></tr>';
	}elseif($fileordir=='dir'){
		echo '<tr class="row status-success"><td class="col-md-8"><a data-toggle="popover" data-trigger="hover" data-placement="right" href="?dir='.$pwd.'/'.$fileName.'" class="mirror-item-label" data-original-title="" title="">';
		echo $fileName;
		echo '</a></td><td class="col-md-6">'.str_pad($date, 60-strlen($fileName),' ',STR_PAD_LEFT).'</td><td class="col-md-2">'.str_pad($fileSize,30,' ',STR_PAD_LEFT).'</td></tr>';
	}else{	
	}?>
<?php }?>
					</tr>
				</tbody>
		</table> 
					</div>
					<div class="col-md-4">
						<div class="spacing hidden-xs"></div>
						<div id="wizard">
						</div>
						<div>
							<h4>  相关链接 </h4>
							<ul>
								<li><a href="https://afdian.net/@ghink">赞助我们</a></li>
								<li><a href="https://list.mirrors.ghink.net">中国境内镜像站列表</a></li>
								<li><a href="http://1.lan.mirrors.ghink.net/">转入工作室内网</a></li>
								<li><a href="tz.php">服务器状态</a></li>
								<li><a href="https://www.ghink.net">极科网络工作室</a></li>
								<li><a href="https://www.osforum.cn">OS中国开源社区</a></li>
								<li><a href="https://gitee.com/ghink/gosm">镜像站源码</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div><!--/container -->
		</div><!--/mirrors -->
		

<div id="footerwrap" class="tuna-foot-1">
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-4">
        <p>本站由浙江嘉兴极科网络工作室创办及运营，本站页面样式来源于清华大学 TUNA 协会运行的镜像站。</p>
        <p>清华大学 TUNA 协会，全名清华大学学生网络与开源软件协会，是由清华大学热爱网络技术和开源软件的极客组成的学生技术社团。</p>
        <p>本站相关源码可在 <a href="https://gitee.com/ghink/gosm"><em>这里</em></a> 获取。</p>
        <p>根据相关法律法规，本站不对欧盟用户提供服务。</p>
      </div>
</div><!--/row -->
  </div><!--/container -->
</div><!--/footerwrap -->



<div id="footerwrap" class="tuna-foot-2">
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-4">
        <p>本站由浙江嘉兴极科网络工作室创办及运营，本站页面样式来源于清华大学 TUNA 协会运行的镜像站。</p>
        <p>清华大学 TUNA 协会，全名清华大学学生网络与开源软件协会，是由清华大学热爱网络技术和开源软件的极客组成的学生技术社团。</p>
        <p>本站相关源码可在 <a href="https://gitee.com/ghink/gosm"><em>这里</em></a> 获取。</p>
        <p>根据相关法律法规，本站不对欧盟用户提供服务。</p>
      </div>
</div><!--/row -->
  </div><!--/container -->
</div><!--/footerwrap -->



<script>
WebFont.load({
	custom: {
		families: ['Lato']
	}
});
</script>

	<script src="./index_files/index.js"></script>
	<script src="./index_files/browser-update.js"></script>
	

<!--
	vim: ts=2 sts=2 sw=2 noexpandtab
-->
<script src="./index_files/update.min.js"></script></body></html>