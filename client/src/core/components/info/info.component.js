import { Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';


function Info ( { desc } ) { 

    return ( 
        <Tooltip title={desc}>
            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
        </Tooltip>
    )
}

export default Info