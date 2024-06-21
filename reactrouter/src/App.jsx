import React from "react";
import ReactDOM from "react-dom/client";
import {
	Route,
	BrowserRouter,
	Routes,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import {
	About,
	Contact,
	Footer,
	GitHub,
	githubInfoLoader,
	Header,
	Home,
	User,
	UserParam,
	ContactDefault,
	ContactNum,
	ContactEmail,
} from "./components/index";
import Layout from "./Layout";

//method 1
// const router = createBrowserRouter(
// 	createRoutesFromElements(
// 		<Route path="/" element={<Layout />}>
// 			{/* everything below is a part of layout's outlet */}
// 			{/* Outlet is replaced with Home by default aas main page "/" */}
// 			<Route path="" element={<Home />} />
// 			<Route path="about" element={<About />} />
// 			<Route path="contact/" element={<Contact />}>
// 				{/* all 3 are part of contact's outlet */}
// 				{/* Outlet is replaced with ContactDefualt as main page "/" */}
// 				<Route path="" element={<ContactDefault />} />
// 				<Route path="num" element={<ContactNum />} />
// 				<Route path="email" element={<ContactEmail />} />
// 			</Route>
// 			<Route loader={githubInfoLoader} path="github" element={<GitHub />} />
// 			<Route path="user/" element={<User />}>
// 				{/* if no param after user then Outlet also not loaded and only <User /> displayed */}
// 				<Route path=":userid" element={<UserParam />} />
// 			</Route>
// 			<Route path="*" element={<h1>404 Not Found</h1>} />
// 		</Route>
// 	)
// );
// export default function App() {
// 	return <RouterProvider router={router} />;
// }

//method 2
export default function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Layout />}>
					{/* everything below is a part of layout's outlet */}
					{/* Outlet is replaced with Home by default aas main page "/" */}
					<Route path="" element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="contact/" element={<Contact />}>
						{/* all 3 are part of contact's outlet */}
						{/* Outlet is replaced with ContactDefualt as main page "/" */}
						<Route path="" element={<ContactDefault />} />
						<Route path="num" element={<ContactNum />} />
						<Route path="email" element={<ContactEmail />} />
					</Route>
					<Route loader={githubInfoLoader} path="github" element={<GitHub />} />
					<Route path="user/" element={<User />}>
						{/* if no param after user then Outlet also not loaded and only <User /> displayed */}
						<Route path=":userid" element={<UserParam />} />
					</Route>
					<Route path="*" element={<h1>404 Not Found</h1>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
