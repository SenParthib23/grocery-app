import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Category from './Category';
import CategoryData from '../data/category';

const CategoryList = () => {
    const [categories, setCategories] = useState([])

    const fetchData = () => {
        // axios.get('https://orca-app-jhg4l.ondigitalocean.app/api/category')
        //     .then(respose => setCategories(respose.data.data))
        //     .catch(error => console.log(error))
        setCategories(CategoryData)
    }

    useEffect(() => {
        // do task
        fetchData()
    }, [])

    return (
        <div className='container'>
            <h1 className='text-center'>Category List</h1>
            {/* <button onClick={fetchData}>GetData</button> */}
            <div class="row">
                {
                    categories.map((category, index) => <Category data={category} />)
                }
            </div>


        </div>
    )
}
export default CategoryList;