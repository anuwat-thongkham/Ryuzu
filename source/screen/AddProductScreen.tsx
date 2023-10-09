import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const apiUrl = 'http://localhost:3000'; // Update with your server URL

interface FormData {
    name: string;
    isWish: boolean;
    price: number;
    discount: number;
    star: number;
    image: File | null; // Allow 'File' or 'null'
}

const AddProductScreen: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        isWish: false,
        price: 0,
        discount: 0,
        star: 0,
        image: null,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData({
            ...formData,
            [name]: newValue,
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        setFormData({
            ...formData,
            image: file,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('isWish', formData.isWish.toString());
        formDataToSend.append('price', formData.price.toString());
        formDataToSend.append('discount', formData.discount.toString());
        formDataToSend.append('star', formData.star.toString());

        if (formData.image) {
            formDataToSend.append('image', formData.image);
        }

        try {
            const response = await axios.post(`${apiUrl}/addproduct`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Set the content type for file upload
                },
            });
            console.log('Product inserted:', response.data);
        } catch (error) {
            console.log('Error inserting product:', error);
        }
    };
    return (
        <div>
            <Link to='/dashboard-01'>กลับ</Link>
            <h2>Insert Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Is Wish:</label>
                    <input
                        type="checkbox"
                        name="isWish"
                        checked={formData.isWish}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Discount:</label>
                    <input
                        type="number"
                        name="discount"
                        value={formData.discount}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Star:</label>
                    <input
                        type="number"
                        name="star"
                        value={formData.star}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Image:</label>
                    <input type="file" name="image" accept="image/*" onChange={handleFileChange} />
                </div>
                <button type="submit">Insert</button>
            </form>
        </div>
    );
};

export default AddProductScreen;
