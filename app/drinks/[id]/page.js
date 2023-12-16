// This component is inside a folder [id] which means this will be a dynamic route.

import Link from 'next/link';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
import Image from 'next/image';
import drinkImg from "./drink.jpg"
// console.log(drinkImg);

const getSingleDrink = async (id) => {
  const res = await fetch(`${url}${id}`)
  if(!res.ok){
    throw new Error("Failed to fetch a drink...")
  }
  return res.json();
}

const SingleDrinksPage = async ({params}) => {
    // The params object will have a property called "id" which is the name of the dynamic folder we created as parent of this file.
    // console.log(params.id);
    const data = await getSingleDrink(params.id)
    // console.log(data);
    const title = data?.drinks[0]?.strDrink
    const imgSrc = data?.drinks[0]?.strDrinkThumb
    console.log(title, imgSrc);
  return (
    <div>
      <Link href="/drinks" className='btn btn-primary mt-8 mb-12'>
        Back to drinks
      </Link>
      {/* <img src={drinkImg.src} alt="drink" /> In this case let's use a Image component instead of the img tag. As default the src is should be an imported image but we need to configure it as a host image string */}
      <Image src={imgSrc} width={300} height={399} className='w-48 h-48 rounded-lg shadow-lg mb-4' priority alt={title} />
      {/* <Image src={drinkImg} className="w-48 h-48 rounded-lg" alt="drink" /> */}
      <h1 className='text-4xl mb-8'>{title}</h1>
    </div>
  )
}

export default SingleDrinksPage