<?php


namespace Asc;

use Asc\Factory\AbstractFactory;

class Container
{
    
    protected $factory;


    public function __construct (AbstractFactory $factory)
    {
        $this->factory = $factory;
    }



    /**
     * Factoryクラスから指定クラスを抽出する
     *
     * @author app2641
     **/
    public function get ($name)
    {
        return $this->factory->get($name);
    }
}
