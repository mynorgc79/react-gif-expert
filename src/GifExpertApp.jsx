import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory)=>{
        // setCategories(categories.concat('Itachi'));

        if(categories.includes(newCategory))return;
        setCategories([newCategory,...categories]);

    }
    // console.log(categories);


    return (
      <>
        <h1>GifExpertApp</h1>

        <AddCategory
          //   setCategories={setCategories}
          onNewCategory={onAddCategory}
        />

        {/* <button onClick={onAddCategory}> agregar</button> */}

          {categories.map((category) => (
            <GifGrid 
                key = {category} 
                category={category}
            />
          ))}
      </>
    );
}
