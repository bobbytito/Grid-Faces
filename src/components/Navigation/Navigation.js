import React from 'react'

const Navigation = ({onRouteChange}) => {
	return (
		<nav style={{display:'flex', justifyContent: 'flex-end'}}>
			<p onClick={() => onRouteChange('signin')} className='f3 Link dim black underline pa3 pointer '>Sign out</p>
		</nav>
	)
}

export default Navigation