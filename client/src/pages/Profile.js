import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard';

function Profile() {
    const [user, setUser] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get('/api/users', {
                    headers: { 'x-auth-token': localStorage.getItem('token') }
                });
                setUser(res.data);
                setImageUrl(res.data.profileImageUrl || '');
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchUser();
    }, []);

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const res = await axios.get('/api/recipes/favorites', {
                    headers: { 'x-auth-token': localStorage.getItem('token') }
                });
                setFavorites(res.data);
            } catch (error) {
                console.error('Error fetching favorite recipes:', error);
            }
        };

        fetchFavorites();
    }, []);

    const updateProfileImage = async () => {
        try {
            const res = await axios.put('/api/users/profile-image', { profileImageUrl: imageUrl }, {
                headers: { 'x-auth-token': localStorage.getItem('token') }
            });
            setUser(res.data);
            alert('Profile image updated');
        } catch (error) {
            console.error('Error updating profile image:', error);
        }
    };

    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <h1>User Profile</h1>
            <div>
                <img src={user.profileImageUrl || 'https://via.placeholder.com/150'} alt="Profile" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Enter Image URL"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
                <button onClick={updateProfileImage}>Update Profile Image</button>
            </div>
            <h2>Your Favorite Recipes</h2>
            <div className="recipe-list">
                {favorites.map(recipe => (
                    <RecipeCard key={recipe._id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
}

export default Profile;
