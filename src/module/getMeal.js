const getMeal = async (mealID) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`,
  );
  return res.json();
};
export default getMeal;