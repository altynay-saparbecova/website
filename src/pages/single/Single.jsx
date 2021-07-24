import React from 'react'
import SideBar from '../../components/sidebar/Sidebar.jsx'
import SinglePost from '../../components/singlePost/SinglePost.jsx'
import './single.less'
const Single = () => {
    return (
        <div className="single">
            <SinglePost />
            <SideBar />
        </div>
    )
}
export default Single