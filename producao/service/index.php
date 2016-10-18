<?php
set_include_path( implode(PATH_SEPARATOR, array( realpath(dirname(__FILE__) . '/library'), 	get_include_path() ) ) );


require_once 'Slim/Slim.php';

require_once 'controller/VisitanteController.php';

require_once 'controller/EscolaController.php';

require_once 'controller/PatrocinadorController.php';

require_once 'controller/MaterialController.php';

require_once 'controller/OrientadorController.php';

require_once 'controller/ProjetoController.php';

require_once 'controller/IntegranteController.php';

require_once 'controller/avaliadorController.php';

require_once 'controller/LogarController.php';

require_once 'controller/NotaController.php';




$app = new Slim();

$controller = new VisitanteController();

$escolacontroller = new EscolaController();

$patrocinadorcontroller = new PatrocinadorController();

$matcontroller = new MaterialController();

$orientadorcontroller = new OrientadorController();

$projetocontroller = new ProjetoController();

$integrantecontroller = new IntegranteController();

$avaliadorcontroller = new avaliadorController();

$logarcontroller = new logarController();

$notacontroller = new NotaController();


// visitates

$app->post('/tbvisitantes', function() use ($controller, $app){
	$value = json_decode(file_get_contents("php://input"));
	echo json_encode($controller->create($value));
});

$app->get('/tbvisitantes', function() use ($controller){
	echo json_encode($controller->read());
});

$app->put('/tbvisitantes', function() use ($controller, $app){
	$value = $app->request()->put();
	unset($value['$$hashKey']);
	echo json_encode($controller->update($value));
});

$app->delete('/tbvisitantes/:id', function($id) use ($controller){
	echo $controller->delete($id);
});



// visitantes
// Escola

$app->post('/tbescolas', function() use ($escolacontroller, $app){
	$value = json_decode(file_get_contents("php://input"));
	echo json_encode($escolacontroller->create($value));
});

$app->get('/tbescolas', function() use ($escolacontroller){
	echo json_encode($escolacontroller->read());
});

$app->put('/tbescolas', function() use ($escolacontroller, $app){
	$value = $app->request()->put();
	unset($value['$$hashKey']);
	echo json_encode($escolacontroller->update($value));
});

$app->delete('/tbescolas/:id', function($id) use ($escolacontroller){
	echo $escolacontroller->delete($id);
});
                                                                                                                                                                                                                                                                                                                                   
// Escola
//patrocinador

$app->post('/tbpatrocinadores', function() use ($patrocinadorcontroller, $app){
	$value = json_decode(file_get_contents("php://input"));
	echo json_encode($patrocinadorcontroller->create($value));
});

$app->get('/tbpatrocinadores', function() use ($patrocinadorcontroller){
	echo json_encode($patrocinadorcontroller->read());
});

$app->put('/tbpatrocinadores', function() use ($patrocinadorcontroller, $app){
	$value = $app->request()->put();
	unset($value['$$hashKey']);
	echo json_encode($patrocinadorcontroller->update($value));
});

$app->delete('/tbpatrocinadores/:id', function($id) use ($patrocinadorcontroller){
	echo $patrocinadorcontroller->delete($id);
});

//patrocinador
//matcontroller


$app->post('/tbmonit', function() use ($matcontroller, $app){
	$value = json_decode(file_get_contents("php://input"));
	echo json_encode($matcontroller->create($value));
});

$app->get('/tbmonit', function() use ($matcontroller){
	echo json_encode($matcontroller->read());
});

$app->put('/tbmonit', function() use ($matcontroller, $app){
	$value = $app->request()->put();
	unset($value['$$hashKey']);
	echo json_encode($matcontroller->update($value));
});

$app->delete('/tbmonit/:id', function($id) use ($matcontroller){
	echo $matcontroller->delete($id);
});

//matcontroller
//orientador


$app->post('/tborientadores', function() use ($orientadorcontroller, $app){
	$value = json_decode(file_get_contents("php://input"));
	echo json_encode($orientadorcontroller->create($value));
});

$app->get('/tborientadores', function() use ($orientadorcontroller){
	echo json_encode($orientadorcontroller->read());
});

$app->get('/tborientadores/:email', function($email) use ($orientadorcontroller){
	echo json_encode($orientadorcontroller->change($email));
});

$app->put('/tborientadores', function() use ($orientadorcontroller, $app){
	$value = $app->request()->put();
	unset($value['$$hashKey']);
	echo json_encode($orientadorcontroller->update($value));
});

$app->delete('/tborientadores/:id', function($id) use ($orientadorcontroller){
	echo $orientadorcontroller->delete($id);
});


//orientador
//projeto

$app->post('/tbcadastroprojetos', function() use ($projetocontroller, $app){
	$value = json_decode(file_get_contents("php://input"));
	echo json_encode($projetocontroller->create($value));
});

$app->get('/tbcadastroprojetos', function() use ($projetocontroller){
	echo json_encode($projetocontroller->read());
});
$app->get('/tbcadastroprojetos/:id', function($id) use ($projetocontroller){
	echo json_encode($projetocontroller->change($id));
});

$app->put('/tbcadastroprojetos', function() use ($projetocontroller, $app){
	$value = $app->request()->put();
	unset($value['$$hashKey']);
	echo json_encode($projetocontroller->update($value));
});

$app->delete('/tbcadastroprojetos/:id', function($id) use ($projetocontroller){
	echo $projetocontroller->delete($id);
});

//projeto
//integrantes

$app->post('/tbintegrantes', function() use ($integrantecontroller, $app){
	$value = json_decode(file_get_contents("php://input"));
	echo json_encode($integrantecontroller->create($value));
});

$app->get('/tbintegrantes', function() use ($integrantecontroller){
	echo json_encode($integrantecontroller->read());
});

$app->put('/tbintegrantes', function() use ($integrantecontroller, $app){
	$value = $app->request()->put();
	unset($value['$$hashKey']);
	echo json_encode($integrantecontroller->update($value));
});

$app->delete('/tbintegrantes/:id', function($id) use ($integrantecontroller){
	echo $integrantecontroller->delete($id);
});

//integrantes
//avaliador


$app->post('/tbavaliadors', function() use ($avaliadorcontroller, $app){
	$value = json_decode(file_get_contents("php://input"));
	echo json_encode($avaliadorcontroller->create($value));
});

$app->get('/tbavaliadors', function() use ($avaliadorcontroller){
	echo json_encode($avaliadorcontroller->read());
});

$app->put('/tbavaliadors', function() use ($avaliadorcontroller, $app){
	$value = $app->request()->put();
	unset($value['$$hashKey']);
	echo json_encode($avaliadorcontroller->update($value));
});

$app->delete('/tbavaliadors/:id', function($id) use ($avaliadorcontroller){
	echo $avaliadorcontroller->delete($id);
});

//logar


$app->post('/tborientadores/autenticar', function() use ($logarcontroller, $app){
	$value = json_decode(file_get_contents("php://input"));
	echo json_encode($logarcontroller->autenticar($value));
});

$app->get('/tborientadores/buscar', function() use ($logarcontroller){
	echo json_encode($logarcontroller->buscar());
});

$app->get('/tborientadores/sair', function() use ($logarcontroller){
	echo json_encode($logarcontroller->sair());
});

//Nota

$app->post('/tbprojetoavaliador', function() use ($notacontroller, $app){
	$value = json_decode(file_get_contents("php://input"));
	echo json_encode($notacontroller->create($value));
});

$app->get('/tbprojetoavaliador', function() use ($notacontroller){
	echo json_encode($notacontroller->read());
});

$app->put('/tbprojetoavaliador', function() use ($notacontroller, $app){
	$value = $app->request()->put();
	unset($value['$$hashKey']);
	echo json_encode($notacontroller->update($value));
});

$app->delete('/tbprojetoavaliador/:id', function($id) use ($notacontroller){
	echo $notacontroller->delete($id);
});


$app->run();











