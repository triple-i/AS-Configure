<?php

set_include_path('../library' . PATH_SEPARATOR . get_include_path());

require_once 'Zend/Application.php';
require_once (__DIR__.'/../library/composer/vendor/autoload.php');

use Symfony\Component\ClassLoader\UniversalClassLoader;


defined('APPLICATION_PATH') || define('APPLICATION_PATH', realpath(dirname(__FILE__) . '/../application'));
defined('ROOT_PATH') || define('ROOT_PATH', realpath(dirname(__FILE__) . '/../'));

defined('APPLICATION_ENV') || define('APPLICATION_ENV', (getenv('APPLICATION_ENV') ? getenv('APPLICATION_ENV') : 'development'));


$autoloader = new UniversalClassLoader;
$autoloader->registerNamespaces(array('Asc'  => ROOT_PATH . '/library'));
$autoloader->useIncludePath(true);
$autoloader->register();

$application = new Zend_Application(
    APPLICATION_ENV,
    APPLICATION_PATH . '/configs/core.ini'
);


try {
    $application->bootstrap();
    $front = $application->getBootstrap()->getResource('FrontController');
    $front->addControllerDirectory(APPLICATION_PATH.'/modules/core/controllers');
    $application->run();

} catch (Exception $e) {
    throw $e;
}

