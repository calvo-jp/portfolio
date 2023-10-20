import { AUTHOR } from '@/config/author';
import { styled } from '@/styled-system/jsx';
import { IProject } from '@/types';

const projects = AUTHOR.projects.filter((p) => !p.featured);

export function NoteworthyProjects() {
  return <styled.section id="noteworthy-projects"></styled.section>;
}

function Item(props: IProject) {
  return null;
}
