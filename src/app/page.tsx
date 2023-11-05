import { About } from './about';
import { Contact } from './contact';
import { Experience } from './experience';
import { Hero } from './hero';
import { NoteworthyProjects } from './noteworthy-projects';
import { Work } from './work';

export default async function Index() {
	return (
		<>
			<Hero />
			<About />
			<Experience />
			<Work />
			<NoteworthyProjects />
			<Contact />
		</>
	);
}
