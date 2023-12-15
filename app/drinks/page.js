import DrinksList from "@/components/DrinksList";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
    // This 1 second is just to show the loading component for that time:
    await new Promise((resolve) => setTimeout(resolve,1000)
    );
    const response = await fetch(url);
    // Let's check for any errors:
    if(!response.ok){
      throw new Error("Failed to fetch drinks")
    }
    const data = await response.json();
    return data
};

// Note how we don't need a useEffect to fetch data and just make the component async:
const DrinksPage = async () => {
    const data = await fetchDrinks();
    // console.log(data);
    return (
        <div>
            <DrinksList drinks={data.drinks} />
        </div>
    );
};

export default DrinksPage;
