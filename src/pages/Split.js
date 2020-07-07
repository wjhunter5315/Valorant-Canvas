import React from "react";

function Split() {
   return (
      <div>
         <canvas>
            <svg height="200" width="200">
               <polygon points="5,100 100,5 195,100 100, 195" style={{fill:"#d83a09", stroke:"black", width: "1" }} />
            </svg>
         </canvas>
      </div>
   )
}

export default Split;