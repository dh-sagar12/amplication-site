import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PortfolioProjectList } from "./portfolioProject/PortfolioProjectList";
import { PortfolioProjectCreate } from "./portfolioProject/PortfolioProjectCreate";
import { PortfolioProjectEdit } from "./portfolioProject/PortfolioProjectEdit";
import { PortfolioProjectShow } from "./portfolioProject/PortfolioProjectShow";
import { CompanyInfoList } from "./companyInfo/CompanyInfoList";
import { CompanyInfoCreate } from "./companyInfo/CompanyInfoCreate";
import { CompanyInfoEdit } from "./companyInfo/CompanyInfoEdit";
import { CompanyInfoShow } from "./companyInfo/CompanyInfoShow";
import { BlogPostList } from "./blogPost/BlogPostList";
import { BlogPostCreate } from "./blogPost/BlogPostCreate";
import { BlogPostEdit } from "./blogPost/BlogPostEdit";
import { BlogPostShow } from "./blogPost/BlogPostShow";
import { ContentManagerList } from "./contentManager/ContentManagerList";
import { ContentManagerCreate } from "./contentManager/ContentManagerCreate";
import { ContentManagerEdit } from "./contentManager/ContentManagerEdit";
import { ContentManagerShow } from "./contentManager/ContentManagerShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CompanyPortfolio"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="PortfolioProject"
          list={PortfolioProjectList}
          edit={PortfolioProjectEdit}
          create={PortfolioProjectCreate}
          show={PortfolioProjectShow}
        />
        <Resource
          name="CompanyInfo"
          list={CompanyInfoList}
          edit={CompanyInfoEdit}
          create={CompanyInfoCreate}
          show={CompanyInfoShow}
        />
        <Resource
          name="BlogPost"
          list={BlogPostList}
          edit={BlogPostEdit}
          create={BlogPostCreate}
          show={BlogPostShow}
        />
        <Resource
          name="ContentManager"
          list={ContentManagerList}
          edit={ContentManagerEdit}
          create={ContentManagerCreate}
          show={ContentManagerShow}
        />
      </Admin>
    </div>
  );
};

export default App;
