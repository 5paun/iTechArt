import React from 'react';
import './footer-menu-item.scss';

const FooterMenuItem = props => <a href={props.link}>{props.text}</a>;

export default FooterMenuItem;
