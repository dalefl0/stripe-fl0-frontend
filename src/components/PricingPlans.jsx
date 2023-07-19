import { CheckIcon } from "@heroicons/react/solid";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PricingPlans = ({ tiers, yearly, setTier, tier }) => {
	const email = localStorage.getItem("email");

	const navigate = useNavigate();

	const handleCheckout = (product) => {
		axios
			.post(
				`https://stripe-fl0-backend-dev.fl0.io/api/v1/stripe/create-checkout-session`,
				{
					email,
					product,
				}
			)
			.then((res) => {
				if (res.data.url) {
					setTier(product.name);
					localStorage.setItem("tier", product.name);
					window.location.href = res.data.url;
				}
			})
			.catch((err) => navigate("/cancel"));
	};

	return (
		<>
			<div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
				{tiers.map((item) => (
					<div
						key={item.name}
						className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200"
					>
						<div className="p-6">
							<h2 className="text-lg leading-6 font-medium text-gray-900">
								{item.name}
							</h2>
							<p className="mt-4 text-sm text-gray-500">{item.description}</p>
							<p className="mt-8">
								<span className="text-4xl font-extrabold text-gray-900">
									${item.priceMonthly}
								</span>{" "}
								<span className="text-base font-medium text-gray-500">
									${yearly ? "/yr" : "/mo"}
								</span>
							</p>
							<button
								onClick={() =>
									handleCheckout({
										name: item.name,
										price: item.priceMonthly,
										productOwner: "Test",
										description: item.description,
										quantity: 1,
									})
								}
								className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
							>
								Buy {item.name}
							</button>
						</div>
						<div className="pt-6 pb-8 px-6">
							<h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
								What's included
							</h3>
							<ul role="list" className="mt-6 space-y-4">
								{item.includedFeatures.map((feature) => (
									<li key={feature} className="flex space-x-3">
										<CheckIcon
											className="flex-shrink-0 h-5 w-5 text-green-500"
											aria-hidden="true"
										/>
										<span className="text-sm text-gray-500">{feature}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default PricingPlans;
