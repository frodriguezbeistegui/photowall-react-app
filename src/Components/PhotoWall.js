import React from "react";
import Photo from "./Photo";
import Proptypes from "prop-types"
import {Link} from 'react-router-dom'

function PhotoWall (props) {
return (
    <div>
        <Link to="/AddPhoto" className="addIcon" />
    <div className="photoGrid">
        {props.posts.sort
        (function(x,y){
            return y.id - x.id
        })
        .map((post, index) => <Photo key={index} post={post} {...props} index={index} />)}
    </div> 
</div>
)}

PhotoWall.propTypes = {
    posts: Proptypes.array.isRequired,
}

export default PhotoWall