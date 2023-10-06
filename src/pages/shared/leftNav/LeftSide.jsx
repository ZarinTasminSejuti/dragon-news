import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const LeftSide = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className="space-y-6">
            <h2 className="text-2xl">All categories</h2>
            {
                categories.map(category => <Link className="block ml-4 text-xl px-4 font-semibold"
                    key={category.id}
                    to={`/category/${category.id}`}
                >{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSide;