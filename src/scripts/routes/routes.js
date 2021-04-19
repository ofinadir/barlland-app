import Home from '../views/pages/home';
import AllProducts from '../views/pages/all-products';
import Jacket from '../views/pages/jacket';
import TShirt from '../views/pages/tshirt';
import Detail from '../views/pages/detail';

const routes = {
  '/': Home,
  '/home': Home,
  '/products': AllProducts,
  '/jacket': Jacket,
  '/t-shirt': TShirt,
  '/detail/:id': Detail,
};

export default routes;
