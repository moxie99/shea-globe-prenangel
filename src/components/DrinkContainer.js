import React from 'react';
import DrinkFilter from './DrinkFilter';
import DrinkList from './DrinkList';
import { withCarConsumer } from '../context';
import Loading from './Loading';


function DrinkContainer({ context }) {
    const { loading, sortedDrinks, Autos } = context;
    if (loading) {
        return <Loading />;
    }
    return (
        <div>
            <DrinkFilter Autos={Autos} />
            <DrinkList Autos={sortedDrinks} />
        </div>
    );
}


export default withCarConsumer(DrinkContainer);












// import React from 'react';
// import DrinkFilter from './DrinkFilter';
// import DrinkList from './DrinkList';
// import { CarConsumer } from '../context';
// import Loading from './Loading';

// export default function DrinkContainer() {
//     return (
//         <CarConsumer>
//             {value => {
//                 const {
//                     loading,
//                     sortedCars,
//                     Autos
//                 } = value;
//                   if (loading) {
//                     return <Loading />
//                 }
//                 return (
//                     <div>
//                         Hello From DrinkContainer
//                         <DrinkFilter Autos={Autos} />
//                         <DrinkList  Autos={sortedCars} />
//                     </div>
//                 )
//             }
//             }
//         </CarConsumer>
//     )
// }
