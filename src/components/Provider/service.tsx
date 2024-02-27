import React, { PropsWithChildren } from 'react';

export const buildProviderTree = (componentsWithProps: [React.ComponentType<any>, any?][]) => {
  const InitialComponent = ({ children }: PropsWithChildren) => <>{children}</>;
  return componentsWithProps.reduce((AccumulatedComponents, [Provider, props = {}]) => {
    const ProviderComponent = ({ children }: PropsWithChildren) => {
      return (
        <AccumulatedComponents>
          <Provider {...props}>{children}</Provider>
        </AccumulatedComponents>
      );
    };

    ProviderComponent.displayName = Provider.displayName;
    return ProviderComponent;
  }, InitialComponent);
};
