import React, { FC } from 'react';
import { ReactElement } from 'react';
import { Component } from 'react';

const Loader: FC<{ shouldLoad: boolean; children: any }> = ({
  shouldLoad,
  children,
}) => {
  return shouldLoad ? (
    <div className="loader-wrapper">
      <div className="custom-loader">hi</div>
    </div>
  ) : (
    children
  );
};

export default Loader;
