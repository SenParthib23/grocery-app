import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'

const SubCategory = () => {
    // const params = useParams()
    // console.log(params.catId)
    const {catId} = useParams()
    const [subCategories, setSubCategories] = useState([])

    const fetchData = () => {
        axios.get(`https://orca-app-jhg4l.ondigitalocean.app/api/subcategory/${catId}`)
            .then(response => setSubCategories(response.data.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchData()
    }, [catId])

    return (
        <div>
            <h2 className='text-center'>Sub Category</h2>
            <ul class="list-group">
                {
                    subCategories.map((item) => <li class="list-group-item">{item.subName}</li>)
                }

            </ul>
        </div>
    )
}
export default SubCategory;