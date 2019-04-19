import { rerenderEntireTree } from './render';
import './index.scss';
import state from './redux/state';

rerenderEntireTree(state);
