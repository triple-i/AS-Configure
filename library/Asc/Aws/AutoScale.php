<?php


namespace Asc\Aws;

use Aws\AutoScaling\AutoScalingClient;
use Aws\Common\Enum\Region;
use Guzzle\Http\EntityBody;

class AutoScale extends AbstractAws
{

    public function __construct ()
    {
        parent::__construct();

        $this->client = AutoScalingClient::factory(
            array(
                'key' => $this->ini->key,
                'secret' => $this->ini->secret,
                'region' => Region::AP_NORTHEAST_1
            )
        );
    }


    /**
     * LaunchConfigのリストを取得する
     *
     * @return array
     **/
    public function getLaunchConfig ()
    {
        return $this->client->describeLaunchConfigurations();
    }
}
