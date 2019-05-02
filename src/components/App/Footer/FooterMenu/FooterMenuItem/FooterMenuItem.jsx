import React from 'react';
import './FooterMenuItem.scss';

const FooterMenuItem = props => <a href={props.link}>{props.text}</a>;

export default FooterMenuItem;
