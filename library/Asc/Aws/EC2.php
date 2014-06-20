<?php


namespace Asc\Aws;

use Aws\Ec2\Ec2Client;
use Aws\Common\Enum\Region;
use Guzzle\Http\EntityBody;

class EC2 extends AbstractAws
{

    public function __construct ()
    {
        parent::__construct();

        $this->client = Ec2Client::factory(
            array(
                'key' => $this->ini->key,
                'secret' => $this->ini->secret,
                'region' => Region::AP_NORTHEAST_1
            )
        );
    }


    /**
     * AMI(Image-Id)のリストを取得する
     *
     * @return array
     **/
    public function getImageId ()
    {
        return $this->client->describeImages(
            array(
                'Filters' => array(
                    array(
                        'Name' => 'is-public',
                        'Values' => array('false')
                    )
                )
            )
        );
    }


    /**
     * SecurityGroupのリストを取得する
     *
     * @return array
     **/
    public function getSecurityGroup ()
    {
        return $this->client->describeSecurityGroups();
    }
}

