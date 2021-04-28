import PropTypes from 'prop-types'

import './paper.styles.scss'

const classTypePaper = {
    'shadow': 'shadow-paper',
    '': ''
}

/**
 * Return a paper card
 * @param {String} children the content
 * @param {String} type type of card if have a shadow or not...
 * @param {String} padding normal padding
 */
function Paper ({children, type, padding}) {

    const getPaperClassName = (type) => { 
        return classTypePaper[type]
    }

    return <div className={`default-paper ${getPaperClassName(type)}`} style={{padding}}>
        {children}
    </div>
}

Paper.propTypes = {
    type: PropTypes.string,
    padding: PropTypes.number
}

export default Paper