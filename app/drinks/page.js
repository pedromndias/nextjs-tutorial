const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"

// Note how we don't need a useEffect to fetch data and just make the component async:
const DrinksPage = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return (
      <div>
        <h1 className="text-7xl">Drinks Page</h1>
      </div>
    )
  }
  
  export default DrinksPage