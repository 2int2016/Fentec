<?php

require_once 'model/OrientadorModel.php';

class OrientadorController{  

	public function verificar($email){
		$arr = $this->read();
		foreach ($arr as $key => $value){
		if($email == $value['email']){
			return 1;
			
		}
		
			}
		return 0;
		
	}
	
	public function exibir($email){
		$arr = $this->read();
		foreach ($arr as $key => $value){
		if($email == $value['email']){
			return $value;
			
		}
		
			}
		return 0;
		
	}
	

	
	
	

	public function create($value){
		if($this->verificar($value->email)){
			return 0;
		}
		$value = $this->object_to_array($value);
		$value = OrientadorModel::create($value);
		return $value->to_array();
	}

	public function read(){
		$arr = OrientadorModel::find('all');
		
		$result = array();
		foreach ($arr as $key => $value) {
			$result[] = $this->setValue($value);
		}
		
		return $result;
	}

	public function change($email){
		$model = OrientadorModel::find('all',array('conditions'=> array('email=?', $email)));
		return $model[0]->to_array();
	}

	public function update($value){
		$model = OrientadorModel::find($value['id']);
		$model->update_attributes($value);
		return $model->to_array();
	}

	public function delete($id){
		$model = OrientadorModel::find($id);
		return $model->delete();
	}
	
	public function setValue($value){
		$obj['id'] = $value->id;
		$obj['nome'] = mb_check_encoding($value->nome, 'UTF-8') ? $value->nome : utf8_encode($value->nome);
		$obj['data'] = mb_check_encoding($value->data, 'UTF-8') ? $value->data : utf8_encode($value->data);
		$obj['email'] = mb_check_encoding($value->email, 'UTF-8') ? $value->email : utf8_encode($value->email);
		$obj['senha'] = mb_check_encoding($value->senha, 'UTF-8') ? $value->senha : utf8_encode($value->senha);
		$obj['escola'] = mb_check_encoding($value->escola, 'UTF-8') ? $value->escola : utf8_encode($value->escola);
		$obj['tamanho'] = mb_check_encoding($value->tamanho, 'UTF-8') ? $value->tamanho : utf8_encode($value->tamanho);
		$obj['cargo'] = mb_check_encoding($value->cargo, 'UTF-8') ? $value->cargo : utf8_encode($value->cargo);
		$obj['telefone'] = mb_check_encoding($value->telefone, 'UTF-8') ? $value->telefone : utf8_encode($value->telefone);
		$obj['telefone2'] = mb_check_encoding($value->telefone2, 'UTF-8') ? $value->telefone2 : utf8_encode($value->telefone2);
		$obj['endereco'] = mb_check_encoding($value->endereco, 'UTF-8') ? $value->endereco : utf8_encode($value->endereco);
		$obj['sexo'] = mb_check_encoding($value->sexo, 'UTF-8') ? $value->sexo : utf8_encode($value->sexo);
		$obj['cidade'] = mb_check_encoding($value->cidade, 'UTF-8') ? $value->cidade : utf8_encode($value->cidade);
		$obj['estado'] = mb_check_encoding($value->estado, 'UTF-8') ? $value->estado : utf8_encode($value->estado);
		return $obj;
	}

	private function object_to_array(stdClass $Class){
		#http://www.php.net/manual/en/language.types.object.php#102735		
		$Class = (array)$Class;
		foreach($Class as $key => $value){
			if(is_object($value)&&get_class($value)==='stdClass'){
				$Class[$key] = self::object_to_array($value);
			}
		}
		return $Class;
	}

}