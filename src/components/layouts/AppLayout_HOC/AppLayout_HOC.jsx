
//    Import Components.
import AppHeaderComp from "../AppHeader_Comp/AppHeader_Comp";
import AppFooterComp from "../AppFooter_Comp/AppFooter_Comp";


//  Import _AppLayout_HOC scss.
import './_AppLayout_HOC.scss';

const AppLayoutHOC = (props) => {

    return (
        <div className="AppLayoutComp">
            {/*==== Header ====*/}
            <header>
                <AppHeaderComp />
            </header>

            {/*==== Body ====*/}
            <div className="AppBody__wrapper">
                { props.children }
            </div>

            {/*==== Footer ====*/}
            <footer>
                <AppFooterComp />
            </footer>
        </div>
    );
};

export default AppLayoutHOC;
