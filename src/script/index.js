// CSS files
import "./../style/style.css";
import "./../style/responsive.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';

// JS files
import "./component/nav-bottom.js";
import "./component/nav-top.js";
import "./component/stat-box.js";
import "jquery";
import 'bootstrap';
import AOS from 'aos';

// Others
import data from "./../data/data.js";
data();

// AOS
AOS.init();