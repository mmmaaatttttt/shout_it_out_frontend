import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const result = await fetch("http://localhost:3001/categories");
      const data = await result.json();
      setCategories(data.categories);
    };

    getCategories();
  }, []);

  if (categories.length === 0) return <p>Loading...</p>;

  return (
    <ul>
      {categories.map(category => (
        <li key={category.id}>
          <Link to={`/games/${category.id}`}>{category.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;
