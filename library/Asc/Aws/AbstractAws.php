<?php


namespace Asc\Aws;

abstract class AbstractAws
{

    /**
     * Awsクラスそれぞれのクライアント
     *
     * @var object
     **/
    protected $client;


    /**
     * aws.iniへのパス
     *
     * @var string
     **/
    protected $aws_ini_path = 'application/configs/aws.ini';


    /**
     * aws.iniデータを格納したオブジェクト
     *
     * @var stdClass
     **/
    protected $ini;


    public function __construct ()
    {
        // AWSクライアントの設定
        $this->ini = (object) parse_ini_file(ROOT_PATH.'/'.$this->aws_ini_path);
    }
}
