import HomePage from "../pages/home/HomePage";
import NotFoundPage from "../pages/not-found/NotFoundPage";
import OrderPage from "../pages/order/OrderPage.";
import ProductDetailsPage from "../pages/product-details/ProductDetailsPage";
import ProductPage from "../pages/product/ProductPage";
import SignInPage from "../pages/signin/SignInPage";
import SignUpPage from "../pages/signup/SignUpPage";
import TypeProductPage from "../pages/type-product/TypeProductPage";


export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true,
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true,
    },
    {
        path: '/product',
        page: ProductPage,
        isShowHeader: true,
    },
    {
        path: '/:type',
        page: TypeProductPage,
        isShowHeader: true,
    },
    {
        path: '/sign-in',
        page: SignInPage,
    },
    {
        path: '/sign-up',
        page: SignUpPage,
    },
    {
        path: '/product-details',
        page: ProductDetailsPage,
        isShowHeader: true,
    },
    {
        path: '*',
        page: NotFoundPage
    },
]
