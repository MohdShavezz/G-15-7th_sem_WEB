import React from 'react'

const withDark = (BaseCom) => {
    const styles={
        backgroundColor:'black',color:'white'
    }
    return (props) => {
        return <div style={styles}><BaseCom {...props} /></div>
    }
}

export default withDark
