import {Card} from '@/components/Card'
import {Section} from '@/components/Section'
import {SimpleLayout} from '@/components/SimpleLayout'

function ToolsSection({
						 children,
						 ...props
					  }: React.ComponentPropsWithoutRef<typeof Section>) {
   return (
	 <Section {...props}>
		<ul role="list" className="space-y-16">
		   {children}
		</ul>
	 </Section>
   )
}

function Tool({
				 title,
				 href,
				 children,
			  }: {
   title: string
   href?: string
   children: React.ReactNode
}) {
   return (
	 <Card as="li">
		<Card.Title as="h3" href={href}>
		   {title}
		</Card.Title>
		<Card.Description>{children}</Card.Description>
	 </Card>
   )
}

export const metadata = {
   title: 'Uses',
   description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
   return (
	 <SimpleLayout
	   title="Software I use, gadgets I love, and other things I recommend."
	   intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
	 >
		<div className="space-y-20">
		   <ToolsSection title="Workstation">
			  
			  <Tool title="AOC CU34G2X Ultrawide"> The only ultrawide display on
				 the market if you want something cheap and bigger than
				 27&rdquo;. When you&rsquo;re working with multiple windows
				 open, every pixel you can get counts. </Tool>
			  <Tool title="Ducky One Mechanical Keyboard">
				 Wanted to try mechinacal keyboard and happy with this one!
			  </Tool>
			  <Tool title="Trackpad">
				 A very pleasant wide trackpad that cover my whole table.
			  </Tool>
		   </ToolsSection>
		   <ToolsSection title="Development tools">
			  <Tool title="Jetbrains Ide's">
				 I dont care if its paid, currently i use student license and
				 very happy with all of their tools, Webstorm, IDEA and so on.
				 Quality and productivity is unparalleled.
			  </Tool>
			  <Tool title="Konsole">
				 I use Fedora Kde plasma and it ships with console, i added fish
				 shell and very happy with results.
			  </Tool>
			  <Tool title="Insomnia/Postman">
				 Both great tools to test and build REST APIS, primarily i use
				 insomnia but it lacks certain features that postman has out of
				 the box.
			  </Tool>
		   </ToolsSection>
		   <ToolsSection title="Design">
			  <Tool title="Figma">
				 Im still learning to utilize figma properly and effectively but
				 at the moment i dont use it as much as i would prefer.
			  </Tool>
		   </ToolsSection>
		   <ToolsSection title="Productivity">
			  <Tool title="Pomodoro">
				 I use Pomodoro application that tracks my time and i use 45/10
				 min approach and can squeeze 6-8 hours of coding per day.
			  </Tool>
			  <Tool title="Wakatime Extension">
				 Keeps track of how much time i spend in different projects,
				 what languages did i use and etc. Love it.
			  </Tool>
			  <Tool title="AI">
				 I used AI to create for a me a schedule that i follow as
				 routine and often find myself using ai not for answers but for
				 a second brain.
			  </Tool>
		   </ToolsSection>
		</div>
	 </SimpleLayout>
   )
}
