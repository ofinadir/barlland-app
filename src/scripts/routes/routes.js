import Home from '../views/pages/home';
import Gallery from '../views/pages/gallery';
import AllProducts from '../views/pages/all-products';
import Jacket from '../views/pages/jacket';
import TShirt from '../views/pages/tshirt';
import Detail from '../views/pages/detail';
import About from '../views/pages/about';

const routes = {
  '/': Home,
  '/home': Home,
  '/gallery': Gallery,
  '/products': AllProducts,
  '/jacket': Jacket,
  '/t-shirt': TShirt,
  '/detail/:id': Detail,
  '/about': About,
};

export default routes;
