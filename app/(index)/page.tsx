import {Fragment} from 'react';
import {About} from './about';
import {Contact} from './contact';
import {Experience} from './experience';
import {Hero} from './hero';
import {NoteworthyProjects} from './noteworthy-projects';
import {Projects} from './projects';

export default async function Index() {
	return (
		<Fragment>
			<Hero />
			<About />
			<Experience />
			<Projects />
			<NoteworthyProjects />
			<Contact />
		</Fragment>
	);
}
