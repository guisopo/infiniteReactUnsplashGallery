import React, { Component } from 'react';

export default function Images({ image}) {
 return <img className='single-photo' src={image.urls.thumb} alt='' />
}