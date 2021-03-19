import './form-label.styles.scss'

function FormLabel (children, required, optional) { 
    const formlabelClassName = ( required ) => { 
        if(required)
            return 'default-form-label-required'
        return 'default-form-label'
    } 
    
    return ( 
        <div className={formlabelClassName(required)}>
            {children} {(required || !optional) || "(opcional)"}
        </div>
    )
}

export {FormLabel};
