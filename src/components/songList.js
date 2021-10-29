import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";
export const SongList = (props) => {

    const {songs} = props;
    return (
        <div className='ui divided list'>
            {songs.map(song =>
                <div key={song.title} className='item'>
                    <div className='right floated content'>
                        <button className='ui button primary' onClick={()=>props.selectSong(song)}>Select</button>
                    </div>
                    <div className='content' >{song.title}</div>                    
                </div>)
            }
        </div>
    )
};

const mapStateToProps = (state) => {
    
    return {songs:state.songs};
}

export default connect(mapStateToProps,{selectSong:selectSong})(SongList);