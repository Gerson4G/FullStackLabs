import React from 'react';
import '../styles/block.css';

const formatId = (id) => {
    let format = id;
    if(id.length === 1){
        format = `00${id}`
    }
    else if(id.length === 2){
        format = `0${id}`
    }
    return format
}

const Block = ({data: {id, attributes: {data: blockData}}}) => (
    <div className="block-container">
        <div className="block-id">{formatId(id)}</div>
        <div className="block-data">{blockData}</div>
    </div>
)

export default Block;