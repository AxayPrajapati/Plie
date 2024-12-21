import React, {useEffect} from 'react';
import LoginStack from './LoginStack';
import HomeStack from './HomeSatck';
import {useSelector} from 'react-redux';

const MainNav = () => {
  useEffect(() => {}, [isLogin]);
  const isLogin = useSelector(state => state.authSlice.isLogin);
  return !isLogin ? <LoginStack /> : <HomeStack />;
};

export default MainNav;
