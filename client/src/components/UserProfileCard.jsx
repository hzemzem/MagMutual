import React from 'react';

export default function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <p><span>ID: </span> {user.id}</p>
      <p><span>Name: </span> {user.firstname} {user.lastname}</p>
      <p><span>Email: </span> {user.email}</p>
      <p><span>Profession: </span> {user.profession}</p>
      <p><span>Date Created: </span> {user.dateCreated}</p>
      <p><span>Location: </span> {user.city}, {user.country}</p>
    </div>
  );
}

