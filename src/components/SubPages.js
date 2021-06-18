import { Route } from "react-router-dom";

const SubPages = ({ pages }) => {

	return (
            <>
                { pages.map((page, i) => {

                    const PageComponent = page.component;

                    return (
                        <Route key={ i } path={ page.path } exact={ false }>
                            <PageComponent />
                        </Route>
                    );
                })}
            </>
	);
}

export default SubPages;