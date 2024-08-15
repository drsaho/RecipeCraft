import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard';
import '../styles/Profile.css';

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
        <div className="profile-container">
            <h1 className="profile-heading">User Profile</h1>
            <h2 className="profile-name">{user.name}</h2> {/* Added user's name */}
            <div className="profile-image-container">
                <img
                    src={user.profileImageUrl || 'https://via.placeholder.com/150'}
                    alt="Profile"
                    className="profile-image"
                />
            </div>
            <div className="profile-image-update">
                <input
                    type="text"
                    placeholder="Enter Image URL"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    className="profile-image-input"
                />
                <button className="profile-image-button" onClick={updateProfileImage}>
                    Update Profile Image
                </button>
            </div>
            <h2 className="favorites-heading">Your Favorite Recipes</h2>
            <div className="recipe-list">
                {favorites.map(recipe => (
                    <RecipeCard key={recipe._id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
}

export default Profile;
