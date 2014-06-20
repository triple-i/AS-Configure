<?php


use Asc\Aws\AutoScale,
    Asc\Aws\EC2;

class LaunchConfig
{

    /**
     * 既存のLaunchConfigを取得する
     *
     * @param 
     * @return array
     **/
    public function getList ($request)
    {
        $as = new AutoScale();
        $response = $as->getLaunchConfig();
        $configs  = array();

        foreach ($response['LaunchConfigurations'] as $config) {
            $configs[] = array(
                'name' => $config['LaunchConfigurationName']
            );
        }

        return $configs;
    }


    /**
     * 既存のAMI(Image-ID)を取得する
     *
     * @return array
     **/
    public function getImageIdList ($request)
    {
        $ec2 = new EC2();
        $response = $ec2->getImageId();
        $images   = array();
        $sort     = array();

        foreach ($response['Images'] as $image) {
            $sort[$image['ImageId']] = $image['Name'];
        }

        asort($sort);
        foreach ($sort as $image_id => $image_name) {
            $images[] = array(
                'image-id'   => $image_id,
                'image-name' => $image_name
            );
        }

        return $images;
    }


    /**
     * インスタンスタイプのリストを取得する
     *
     * @return array
     **/
    public function getInstanceTypeList ($request)
    {
        return array(
            array('instance-type' => 't1.micro'),
            array('instance-type' => 'c1.medium'),
            array('instance-type' => 'c1.xlarge')
        );
    }


    /**
     * セキュリティグループのリストを取得する
     *
     * @return array
     **/
    public function getSecurityGroupList ($request)
    {
        $ec2 = new EC2();
        $response = $ec2->getSecurityGroup();
        $groups   = array();

        foreach ($response['SecurityGroups'] as $group) {
            $groups[] = array('security-group' => $group['GroupName']);
        }

        return $groups;
    }


    /**
     * data/user_dataに格納されているユーザデータのリストを取得する
     *
     * @return void
     **/
    public function getUserDataList ($request)
    {
        $files = array();
        foreach (glob(ROOT_PATH.'/data/user_data/*.txt') as $txt) {
            $info = pathinfo($txt);
            $files[] = array('filename' => $info['basename']);
        }

        return $files;
    }


    /**
     * LaunchConfigを新規生成するコマンドを返す
     *
     * @param  array $values
     * @return array
     **/
    public function buildCreateCommand ($request)
    {
        $values  = (array) $request->values;
        $command = 'as-create-launch-config %s'.
            ' --image-id %s'.
            ' --instance-type %s'.
            ' --group %s'.
            ' --region ap-northeast-1';

        $command = sprintf(
            $command,
            $values['name'],
            $this->addQuote($values['image-id']),
            $this->addQuote($values['instance-type']),
            $this->addQuote($values['security-group'])
        );


        // user-dataの有無
        if (isset($values['user-data'])) {
            $command .= ' --user-data-file '.
                ROOT_PATH.'/data/user_data/'.$values['user-data'];
        }

        return array(
            'success' => true,
            'command' => $command
        );
    }


    /**
     * @param  string $string
     * @return string
     **/
    public function addQuote ($string)
    {
        return '"'.$string.'"';
    }

}
