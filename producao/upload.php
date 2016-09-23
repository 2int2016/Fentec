<?php
	$arquivo = $_FILES['file'];
	
	$novonome =  $_FILES['file']['name'];
	$dir = "assets/uploads/";
	if (!file_exists($dir))
	{
		mkdir($dir, 0755);	
	}
	$caminho = $dir.$novonome;
	move_uploaded_file($arquivo['tmp_name'],$caminho);	
?>