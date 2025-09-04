export default function Navbar() {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
                <div className="logo flex items-center">
                    <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjNENBRjUwIiBkPSJNNjQgNjRDNjQgNDYuMyA3OC4zIDMyIDk2IDMyaDMyMEM0NDMuNyAzMiA0NDggNDYuMyA0NDggNjR2Mzg0YzAgMTcuNy0xNC4zIDMyLTMyIDMySDk2Yy0xNy43IDAtMzItMTQuMy0zMi0zMlY2NHpNMjU2IDQ4MGM3OS41IDAgMTQ0LTY0LjUgMTQ0LTE0NHMtNjQuNS0xNDQtMTQ0LTE0NC0xNDQgNjQuNS0xNDQgMTQ0IDY0LjUgMTQ0IDE0NCAxNDR6TTEyOCA2NGg1MTJ2MzIuOEw0NDggMjQwLjIgNDQ4IDMwNGwtNjQgNjQgMTI4IDEyOEg5Nkw2NCA0NDhWNjR6Ii8+PC9zdmc+"
                        alt="Children to Share Logo" className="h-10 mr-2"/>
                    <h1 className="text-xl logo-text text-primary">
                        <a href="index.html">Children to Share</a>
                    </h1>
                </div>

                <nav className="my-4 md:my-0">
                    <ul className="flex flex-wrap justify-center">
                        <li className="m-2 md:mx-4"><a href="index.html"
                                                       className="font-semibold hover:text-primary transition-colors">Home</a>
                        </li>
                        <li className="m-2 md:mx-4"><a href="#roles"
                                                       className="font-semibold hover:text-primary transition-colors">Get
                            Involved</a></li>
                        <li className="m-2 md:mx-4"><a href="#safety"
                                                       className="font-semibold hover:text-primary transition-colors">Safety</a>
                        </li>
                        <li className="m-2 md:mx-4"><a href="#testimonials"
                                                       className="font-semibold hover:text-primary transition-colors">Testimonials</a>
                        </li>
                    </ul>
                </nav>

                <div className="auth-buttons flex gap-2 mt-4 md:mt-0">
                    <a href="login.html"
                       className="px-4 py-2 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors">Log
                        In</a>
                    <a href="registration.html"
                       className="px-4 py-2 rounded-full bg-primary text-white font-semibold hover:bg-green-600 transition-colors">Sign
                        Up</a>
                </div>
            </div>
        </header>
    );
}
