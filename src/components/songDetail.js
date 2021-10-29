import React from "react";
import { connect } from "react-redux";

 const SongDetail = (props) =>{

    const {selectedSong} = props;

    if(!selectedSong) return (<p>Select a song</p>)

    return (
        <>
        <h3>Details for:</h3>
        <p>Title: {selectedSong.title}
        <br />
        Duration: {selectedSong.duration}
        </p>
        </>
    );
}
const mapStateToProps = (state) => {
    console.log(state.selectedSong);
    return {selectedSong:state.selectedSong};
}
export default connect(mapStateToProps)(SongDetail);