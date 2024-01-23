import React, { ReactNode } from 'react';

interface ProviderProps {
  children: ReactNode;
}

export const buildProviderTree = (componentsWithProps: [React.ComponentType<any>, any?][]) => {
  const InitialComponent = ({ children }: ProviderProps) => <>{children}</>;
  return componentsWithProps.reduce((AccumulatedComponents, [Provider, props = {}]) => {
    const ProviderComponent = ({ children }: ProviderProps) => {
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
