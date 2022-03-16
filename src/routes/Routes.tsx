import React, { Fragment, lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

// configs
import { PATH_NAME } from "configs";

// types
import { IRoutes } from "models/IRoutes";

// containers
import AuthGuard from "guards/AuthGuard";
import GuestGuard from "guards/GuestGuard";

// modules
const Error404View = lazy(() => import("features/Error404View"));
const Home = lazy(() => import("features/Home"));
const Login = lazy(() => import("features/Login"));

const routesConfig: IRoutes[] = [
  {
    exact: true,
    path: "/",
    component: () => <Redirect to={PATH_NAME.HOME} />,
  },
  {
    exact: true,
    path: PATH_NAME.ERROR_404,
    component: Error404View,
  },
  {
    exact: true,
    guard: GuestGuard,
    path: PATH_NAME.LOGIN,
    component: Login,
  },
  {
    path: "/",
    guard: AuthGuard,
    routes: [
      {
        exact: true,
        path: PATH_NAME.HOME,
        component: Home,
      },
      {
        component: () => <Redirect to={PATH_NAME.ERROR_404} />,
      },
    ],
  },
  {
    path: "*",
    routes: [
      {
        exact: true,
        path: "/app",
      },
      {
        component: () => <Redirect to={PATH_NAME.ERROR_404} />,
      },
    ],
  },
];

const renderRoutes = (routes: IRoutes[]) => {
  return (
    <>
      {routes ? (
        <Suspense fallback={<div />}>
          <Switch>
            {routes.map((route: IRoutes, idx: number) => {
              const Guard = route.guard || Fragment;
              const Layout = route.layout || Fragment;
              const Component = route.component;

              return (
                <Route
                  key={`routes-${idx}`}
                  path={route.path}
                  exact={route.exact}
                  render={(props: any) => (
                    <Guard>
                      <Layout>
                        {route.routes ? (
                          renderRoutes(route.routes)
                        ) : (
                          <Component {...props} />
                        )}
                      </Layout>
                    </Guard>
                  )}
                />
              );
            })}
          </Switch>
        </Suspense>
      ) : null}
    </>
  );
};

function Routes() {
  return renderRoutes(routesConfig);
}

export default Routes;
