<?php


namespace Asc\Model\Column;

class {:Model}Column implements ColumnInterface
{
    protected
        $columns = array(
        );


    /**
     * テーブルのカラム情報を取得する
     *
     * @author app2641
     **/
    public function getColumns ()
    {
        return $this->columns;
    }
}
