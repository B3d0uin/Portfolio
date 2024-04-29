import {type Metadata} from 'next'

import {Providers} from '@/app/providers'
import {Layout} from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
   title: {
	  template: '%s - Wasim Said',
	  default:
		'Wasim Said - Software designer, founder, and amateur astronaut',
   },
   description:
	 'I\'m Wasim Said, a passionate problem-solver, student and  self-taught full-stack developer.',
   alternates: {
	  types: {
		 'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
	  },
   },
}

export default function RootLayout({
									  children,
								   }: {
   children: React.ReactNode
}) {
   return (
	 <html lang="en" className="h-full antialiased" suppressHydrationWarning>
	 <body className="flex h-full bg-zinc-50 dark:bg-black">
	 <Providers>
		<div className="flex w-full">
		   <Layout>{children}</Layout>
		</div>
	 </Providers>
	 </body>
	 </html>
   )
}
