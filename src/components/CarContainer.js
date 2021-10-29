import React from 'react';
import CarFilter from './CarFilter';
import CarList from './CarList';
import { withCarConsumer } from '../context';
import Loading from './Loading';


function CarContainer({ context }) {
    const { loading, sortedCars, Autos } = context;
    if (loading) {
        return <Loading />;
    }
    return (
        <div>
            <CarFilter Autos={Autos}/>
            <CarList  Autos={sortedCars}/>
        </div>
    )
}


export default withCarConsumer(CarContainer);











// import React from 'react';
// import CarFilter from './CarFilter';
// import CarList from './CarList';
// import { CarConsumer } from '../context';
// import Loading from './Loading';



// export default function CarContainer() {
//     return(
//     <CarConsumer>
//         {
//             value => {
//                 const {
//                     loading,
//                     sortedCars,
//                     Autos
//                 } = value;
//                 if (loading) {
//                     return <Loading />
//                 }
//                 return (
//                     <div>
//                         Hello From Car Container
//                         <CarFilter Autos={Autos} />
//                         <CarList Autos={sortedCars} />
//                     </div>
//                 )
//             }

//         }
//         </CarConsumer>
//     )
// }
