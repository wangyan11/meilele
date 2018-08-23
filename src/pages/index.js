import Loadable from 'react-loadable';
import { ActivityIndicator } from 'antd-mobile';
import Login from './Login'


const Home = Loadable({
    loader: () => import('./Home'),
    loading: ActivityIndicator
  });

const Cart = Loadable({
    loader: () => import('./Cart'),
    loading: ActivityIndicator
  });

const Mall = Loadable({
    loader: () => import('./Mall'),
    loading: ActivityIndicator
  });

const Mine = Loadable({
    loader: () => import('./Mine'),
    loading: ActivityIndicator
  });
const Detail = Loadable({
    loader: () => import('./Detail'),
    loading: ActivityIndicator
  });

export {
    Cart,
    Home,
    Mall,
    Mine,
    Detail,
    Login
}