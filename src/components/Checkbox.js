import React from 'react';
import IconButton from './IconButton';

const Checkbox = props => {
     
        
    getStatusIcon = () => {
        return (props.checked ?
            'checkbox-marked-outline' :
            'checkbox-blank-outline'
        );
    }

    return (
        <IconButton
            flipForRTL={true}
            style={props.style}
            icon={getStatusIcon()}
            onPress={props.onToggle}
            iconComponent={props.iconComponent}
            color={'#333'}
        />
    );

}

export default Checkbox;
