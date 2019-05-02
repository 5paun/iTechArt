import React from 'react';
import './SectionTitle.scss';

const SectionTitle = props => (
  <div className="section-title">
    <span className="section-title__number">{props.number}</span>
    {props.title}
  </div>
);

export default SectionTitle;
