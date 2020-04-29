import React from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../../shared/components/FormElements/Input/Input';
import Button from '../../../shared/components/FormElements/Button/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../../shared/util/validators';
import './UpdatePlace.css';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/12/08/00/40/empire-state-building-1081929_1280.jpg',
    address: '20 W 34th St, New York, NY 10001, United States',
    coordinates: {
      lat: 40.7484405,
      lng: -73.9878531
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/12/08/00/40/empire-state-building-1081929_1280.jpg',
    address: '20 W 34th St, New York, NY 10001, United States',
    coordinates: {
      lat: 40.7484405,
      lng: -73.9878531
    },
    creator: 'u2'
  },
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const indentifiedPlace = DUMMY_PLACES.find(place => place.id === placeId);

  if (!indentifiedPlace) return (
    <div>
      <h2>Could not find place!</h2>
    </div>
  );

  return (
    <form className='place-form'>
      <Input
        id='title'
        element='input'
        type='text'
        label='Title'
        validators={ [VALIDATOR_REQUIRE()] }
        errorText='Please enter a valid title.'
        onInput={ () => {} }
        value={ indentifiedPlace.title }
        valid={ true } />
      <Input
        id='description'
        element='textarea'
        label='Description'
        validators={ [VALIDATOR_MINLENGTH(5)] }
        errorText='Please enter a valid description (at least 5 characters).'
        onInput={ () => {} }
        value={ indentifiedPlace.description }
        valid={ true } />
      <Button
        type='submit'
        disabled={ true }>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;