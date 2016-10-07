<?php
	
	$host ='localhost';
	$user ='root';
	$pass ='';
	$banco ='dbloja2';
	$conexao = mysqli_connect($host, $user, $pass,$banco) or die (mysql_error());
	
	



	$nomedeusuario = $_POST["nomedeusuario"];
	    //Recebemos o login digitado pelo usuário e guardamos na variável $login.
	     
	    $conexao = mysql_connect("localhost","root");
	    if(!$conexao) die ("Erro de conexão o seguinte erro ocorreu" . mysql_error());
	    $banco = mysql_select_db("dbloja2",$conexao);
	    if(!$banco) die ("Erro de conexão com o banco de dados cliente o seguinte erro ocorreu" . mysql_error());
	     
	    //Vamos procurar se existe no banco o login cadastrado
	    $query = "SELECT * FROM tbusuario WHERE nomedeusuario = '$nomedeusuario'";
	    $procura = mysql_query($query,$conexao);
	    //Se der erro com a busca exibir o erro
	    if (!$procura) die ("Execução de consulta gerou o seguinte erro no MYSQL-->" . mysql_error());
	     
	    //Se foi encontrado algum resultado então exiba um aviso.
	    if(mysql_num_rows($procura)>=1)
	    {
	    echo '<script>  confirm("Login ja cadastrado no sistema!");</script>';
	    echo '<script> history.go(-1); </script>';
	    }else{
	

	
	$nome=$_POST['nome'];
	$nomedeusuario=$_POST['nomedeusuario'];
	$email=$_POST['email'];
	$senha=$_POST['senha'];
	$confsenha=$_POST['confsenha'];
	

	
	if($senha != $confsenha){
		echo '<script>  confirm("Senhas diferentes!");</script>';
		 echo '<script> history.go(-1); </script>';
		
	}else{
		if(!$conexao){
			die("Não foi possivel conectar" . mysql_error());
		}
		
		
		
			
		
		
		$query="insert into tbusuario(nome, nomedeusuario, email, senha) values ('{$nome}' , '{$nomedeusuario}' , '{$email}' , '{$senha}')";
		mysql_query($query, $conexao);
		if (!$query ){
			die("Não foi possivel cadastrar" . mysql_error());
		}else{
			echo"<script language='javascript' type='text/javascript'>alert('Cadastro concluído');window.location.href='index.html';</script>";
		}
	}

}
		
?>