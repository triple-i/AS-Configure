<?php

use Asc\Aws\AutoScale,
    Asc\Aws\EC2;

class AutoScalingGroup
{

    /**
     * グリッドのリストを表示する
     *
     * @return array
     **/
    public function getList ($request)
    {
        
        $as = new AutoScale();
        $response = $as->getAutoScalingGroups();
        $groups   = array();

        foreach ($response['AutoScalingGroups'] as $group) {
            $groups[] = array('name' => $group['AutoScalingGroupName']);
        }

        return $groups;
    }
}
