'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronRight, Users, Building, Handshake, Star } from 'lucide-react';
import Link from 'next/link';

export function LandingPageComponent() {
	return (
		<div className="flex flex-col min-h-screen font-sans">
			<style
				jsx
				global>{`
				:root {
					--primary: #002868;
					--primary-foreground: #ffffff;
					--secondary: #bf0a30;
					--muted: #f3f4f6;
					--muted-foreground: #4b5563;
				}
				.modern-card {
					background: white;
					border-radius: 8px;
					box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1),
						0 1px 3px rgba(0, 0, 0, 0.08);
					transition: all 0.3s ease;
				}
				.modern-card:hover {
					transform: translateY(-5px);
					box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1),
						0 4px 6px rgba(0, 0, 0, 0.05);
				}
			`}</style>
			<header className="px-4 lg:px-6 h-16 flex items-center justify-between bg-[#002868] text-white">
				<Link
					className="flex items-center justify-center"
					href="#">
					<Building className="h-6 w-6 mr-2" />
					<span className="font-bold">TN Christian Chamber</span>
				</Link>
				<nav className="flex gap-4 sm:gap-6">
					<Link
						className="text-sm font-medium hover:underline underline-offset-4"
						href="#">
						About
					</Link>
					<Link
						className="text-sm font-medium hover:underline underline-offset-4"
						href="#">
						Members
					</Link>
					<Link
						className="text-sm font-medium hover:underline underline-offset-4"
						href="#">
						Events
					</Link>
					<Link
						className="text-sm font-medium hover:underline underline-offset-4"
						href="#">
						Contact
					</Link>
				</nav>
			</header>
			<main className="flex-1">
				<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#002868]">
					<div className="container px-4 md:px-6 mx-auto">
						<div className="flex flex-col items-center space-y-4 text-center">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
									Uniting Faith and Business in Tennessee
								</h1>
								<p className="mx-auto max-w-[700px] text-white md:text-xl">
									Join the Tennessee Christian Chamber of Commerce and connect
									with like-minded professionals who share your values.
								</p>
							</div>
							<div className="space-x-4">
								<Button className="bg-white text-[#002868] hover:bg-gray-200">
									Join Now
									<ChevronRight className="ml-2 h-4 w-4" />
								</Button>
								<Button
									variant="outline"
									className="bg-transparent text-white border-white hover:bg-white hover:text-[#002868]">
									Learn More
								</Button>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-white">
					<div className="container px-4 md:px-6 mx-auto">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#002868]">
							Why Join Our Chamber?
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
							<div className="modern-card p-6 w-full max-w-sm">
								<Users className="h-12 w-12 mb-4 text-[#bf0a30] mx-auto" />
								<h3 className="text-lg font-bold mb-2 text-[#002868] text-center">
									Networking Opportunities
								</h3>
								<p className="text-muted-foreground text-center">
									Connect with Christian business leaders and grow your
									professional network.
								</p>
							</div>
							<div className="modern-card p-6 w-full max-w-sm">
								<Building className="h-12 w-12 mb-4 text-[#bf0a30] mx-auto" />
								<h3 className="text-lg font-bold mb-2 text-[#002868] text-center">
									Business Resources
								</h3>
								<p className="text-muted-foreground text-center">
									Access exclusive tools and resources to help your business
									thrive.
								</p>
							</div>
							<div className="modern-card p-6 w-full max-w-sm">
								<Handshake className="h-12 w-12 mb-4 text-[#bf0a30] mx-auto" />
								<h3 className="text-lg font-bold mb-2 text-[#002868] text-center">
									Community Impact
								</h3>
								<p className="text-muted-foreground text-center">
									Make a difference in your community through collaborative
									initiatives and outreach programs.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
					<div className="container px-4 md:px-6 mx-auto">
						<div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2 items-center">
							<div className="space-y-4">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#002868]">
									Our Mission
								</h2>
								<p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									The Tennessee Christian Chamber of Commerce is dedicated to
									fostering a thriving business community rooted in Christian
									values. We aim to provide a platform for networking, growth,
									and positive impact in our state.
								</p>
							</div>
							<div className="flex flex-col justify-center space-y-4">
								<ul className="grid gap-4">
									<li className="flex items-center">
										<ChevronRight className="mr-2 h-4 w-4 text-[#bf0a30]" />
										<span>Promote ethical business practices</span>
									</li>
									<li className="flex items-center">
										<ChevronRight className="mr-2 h-4 w-4 text-[#bf0a30]" />
										<span>Support local communities</span>
									</li>
									<li className="flex items-center">
										<ChevronRight className="mr-2 h-4 w-4 text-[#bf0a30]" />
										<span>Advocate for faith-friendly policies</span>
									</li>
									<li className="flex items-center">
										<ChevronRight className="mr-2 h-4 w-4 text-[#bf0a30]" />
										<span>Provide mentorship and education</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-white">
					<div className="container px-4 md:px-6 mx-auto">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#002868]">
							What Our Members Say
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
							{[1, 2, 3].map((i) => (
								<div
									key={i}
									className="modern-card p-6 w-full max-w-sm">
									<Star className="h-8 w-8 mb-4 text-[#bf0a30] mx-auto" />
									<p className="text-center mb-4 italic">
										"Joining the TN Christian Chamber has been a game-changer
										for my business. The connections and support are
										invaluable."
									</p>
									<p className="font-semibold text-[#002868] text-center">
										- John Doe, Local Business Owner
									</p>
								</div>
							))}
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-[#002868]">
					<div className="container px-4 md:px-6 mx-auto">
						<div className="flex flex-col items-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
									Ready to Join Our Community?
								</h2>
								<p className="mx-auto max-w-[600px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Become a member today and start experiencing the benefits of
									the Tennessee Christian Chamber of Commerce.
								</p>
							</div>
							<div className="w-full max-w-sm space-y-2">
								<form className="flex space-x-2">
									<Input
										className="max-w-lg flex-1 bg-white text-[#002868]"
										placeholder="Enter your email"
										type="email"
									/>
									<Button
										className="bg-[#bf0a30] text-white hover:bg-[#a00926]"
										type="submit">
										Join Now
									</Button>
								</form>
								<p className="text-xs text-white">
									By signing up, you agree to our{' '}
									<Link
										className="underline underline-offset-2"
										href="#">
										Terms & Conditions
									</Link>
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>
			<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-between px-4 md:px-6 border-t border-[#002868] bg-white">
				<p className="text-xs text-muted-foreground">
					© 2024 Tennessee Christian Chamber of Commerce. All rights reserved.
				</p>
				<nav className="flex gap-4 sm:gap-6">
					<Link
						className="text-xs hover:underline underline-offset-4"
						href="#">
						Terms of Service
					</Link>
					<Link
						className="text-xs hover:underline underline-offset-4"
						href="#">
						Privacy
					</Link>
				</nav>
			</footer>
		</div>
	);
}
