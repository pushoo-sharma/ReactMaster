import React from 'react';
//Stateless Functional Component
// const Navbar = (props) =>{
//     return(
//         <div>
//             <h4>navbar</h4>
//             <h4></h4>
//             <h4>{props.totalCounter}</h4>
//             <h4></h4>
//         </div>
//     );
// };
//Stateless + Argument destructuring
const Navbar = ({totalCounter}) =>{
    return(
        <div>
            <h4>navbar</h4>
            <h4></h4>
            <h4>{totalCounter}</h4>
            <h4></h4>
        </div>
    );
};
export default Navbar;