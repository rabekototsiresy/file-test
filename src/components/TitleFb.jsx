import React from 'react'
import exit,{openFullscreen} from '../utils/fullScreen'

const TitleFb = () => {
    return (
        <div className="content-fb-title">
            <span onClick={()=>openFullscreen()} className="title-fb">Facebook</span>
        </div>
    )
}

export default TitleFb
