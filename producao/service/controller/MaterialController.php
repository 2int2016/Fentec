<?php

require_once 'model/MaterialModel.php';



class MaterialController{   
	
	public function verificar($numerodoativo){
		$arr = $this->read();
		foreach ($arr as $key => $value){
		if($numerodoativo == $value['numerodoativo']){
			return 1;
			
		}
		
			}
		return 0;
		
	}
	
	public function create($value){
		if($this->verificar($value->numerodoativo)){
			return 0;
		}
		$value = $this->object_to_array($value);
		$value = MaterialModel::create($value);
		return $value->to_array();
	}

	public function read(){
		$arr = MaterialModel::find('all');
		
		$result = array();
		foreach ($arr as $key => $value) {
			$result[] = $this->setValue($value);
		}
		
		return $result;
	}

	public function update($value){
		$model = MaterialModel::find($value['id']);
		$model->update_attributes($value);
		return $model->to_array();
	}

	public function delete($id){
		$model = MaterialModel::find($id);
		return $model->delete();
	}
	
	public function setValue($value){
		$obj['id'] = $value->id;
		$obj['nome'] = mb_check_encoding($value->nome, 'UTF-8') ? $value->nome : utf8_encode($value->nome);
		$obj['descricao'] = mb_check_encoding($value->descricao, 'UTF-8') ? $value->descricao : utf8_encode($value->descricao);
		$obj['marca'] = mb_check_encoding($value->marca, 'UTF-8') ? $value->marca : utf8_encode($value->marca);
		$obj['posse'] = mb_check_encoding($value->posse, 'UTF-8') ? $value->posse : utf8_encode($value->posse);
		$obj['preco'] = mb_check_encoding($value->preco, 'UTF-8') ? $value->preco : utf8_encode($value->preco);
		$obj['tipo'] = mb_check_encoding($value->tipo, 'UTF-8') ? $value->tipo : utf8_encode($value->tipo);
		$obj['numerodoativo'] = mb_check_encoding($value->numerodoativo, 'UTF-8') ? $value->numerodoativo : utf8_encode($value->numerodoativo);

		$obj['arquivo'] = mb_check_encoding($value->arquivo, 'UTF-8') ? $value->arquivo : utf8_encode($value->arquivo);
		if(isset($value->ida))
			$obj['ida'] = $value->ida;
		
		if(isset($value->retorno))
			$obj['retorno'] = $value->retorno;
		
		
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