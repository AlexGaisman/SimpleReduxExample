import React from "react";

import SongList from "./components/songList";
import SongDetail from "./components/songDetail";

 export const App=()=>{
     return (
    <div className='ui ontainer grid'>
        <div className='ui row'>
            <div className='column eight wide'>
                <SongList />
            </div>
            <div className='column eight wide'>
                <SongDetail />
            </div>
        </div>
    </div>
    );
 };

  export default App;