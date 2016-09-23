<?php 
    $login = $_POST['login'];
    $entrar = $_POST['entrar'];
    $senha = $_POST['senha'];
    $connect = mysql_connect('192.168.4.61','fentec','int123456');
    $db = mysql_select_db('dbfentec');
        if (isset($entrar)) {
                     
            $verifica = mysql_query("SELECT * FROM tborientadores WHERE login = '$login' AND senha = '$senha'") or die("erro ao selecionar");
                if (mysql_num_rows($verifica)<=0){
                    echo"<script language='javascript' type='text/javascript'>alert('Login e/ou senha incorretos');window.location.href='index.html';</script>";
                    die();
                }else{
                    setcookie("login",$login);
                    $login_cookie = $_COOKIE['login'];
        if(isset($login_cookie)){
            header("Location:teste.html");
        }else{
            echo"Essas informações <font color='red'>NÃO PODEM</font> ser acessadas por você";
            echo"<br><a href='index.html'>Faça Login</a> Para ler o conteúdo";
        }
                }
        }
?>


