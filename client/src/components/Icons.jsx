import React from 'react'

const Icons = ({setContent, content, theme }) => {
    const reactions = [
        'âĪïļ','ð','ð','ð','ð','ðĪĢ','ð','ð','ð','ðĨ°','ð','ð','ðĪŠ','ð',
        'ð§','ð','ðĪĐ','ðĨģ','ð','ð','âđïļ','ðĨš','ð­','ðĄ','ðĪŽ','ð°','ðĪ',
        'ðĪ','ðĪ­','ðī','ðĪ','ð','ðŋ','ðĪĄ','ð','ðĪ','ð','ðĪ','âïļ','ðĪ','ð','ð'
    ]
    return (
        <div className="nav-item dropdown"
        style={{filter: theme ? 'invert(1)' : 'invert(0)', 
            zIndex:99, 
            cursor:'pointer',
            opacity:1 ,

        }}>
          <span
            className="nav-link position-relative px-0" href="/#" id="navbarDropdown"
            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                <span style={{opacity: 0.5}}>ð</span>
          </span>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <div className='reactions'>
                {
                    reactions.map(icon =>(
                        <span key={icon} onClick={()=> setContent(content + icon)}>
                            {icon}
                        </span>
                    ))
                }
            </div>
          </div>

        </div>
    )
}

export default Icons
