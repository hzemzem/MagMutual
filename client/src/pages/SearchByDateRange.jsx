import React, { useState } from 'react';
import UserProfileCard from '../components/UserProfileCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from "@fortawesome/free-solid-svg-icons";

function SearchByDate() {
    const [data, setData] = useState(null);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
    }

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/date-range', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ startDate: startDate, endDate: endDate }),
            });
            const json = await response.json();
            console.log(json);
            setData(json);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='container'>
            <a href='/'><FontAwesomeIcon icon={faHome} /></a>
            <form onSubmit={handleSubmit}>
                <label>
                    Select start date:
                    <input type="date" onChange={handleStartDateChange} />
                </label>
                <label>
                    Select end date:
                    <input type="date" onChange={handleEndDateChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
            <div className='results'>
                {data ? (data.map((user, i) => <UserProfileCard user={user} key={user.id} />)) : null}
            </div>
        </div>
    );
}

export default SearchByDate;
