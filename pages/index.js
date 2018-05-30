import Link from 'next/link'

const Index = () => (
	<div>
		<p>Hello Next.js</p>
		<Link href="/articles" prefetch>
			Go to the Articles
		</Link>
	</div>
);

export default Index