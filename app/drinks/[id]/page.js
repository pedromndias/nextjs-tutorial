// This component is inside a folder [id] which means this will be a dynamic route.

import Link from 'next/link';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleDrinksPage = ({params}) => {
    // The params object will have a property called "id" which is the name of the dynamic folder we created as parent of this file.
    console.log(params.id);
  return (
    <div>SingleDrinksPage</div>
  )
}

export default SingleDrinksPage