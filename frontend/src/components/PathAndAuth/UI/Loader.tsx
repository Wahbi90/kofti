import React, { FC } from 'react';
import { ReactElement } from 'react';
import { Component } from 'react';
import './loader.css'

const Loader: FC<{ shouldLoad: boolean; children: any }> = ({
  shouldLoad,
  children,
}) => {
  return shouldLoad ? (
    <div className="loader-wrapper">
       <div className="square">
      <div></div>
      <div></div>
    </div>
    </div>
  ) : (
    children
  );
};

export default Loader;
