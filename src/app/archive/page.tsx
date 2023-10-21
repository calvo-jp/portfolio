import { AUTHOR } from '@/config/author';
import { styled } from '@/styled-system/jsx';
import { INonFeaturedProject } from '@/types';

export default function Archive() {
  const items = getItems();

  return (
    <styled.div py={24}>
      <styled.h1 fontSize="7xl" fontWeight="bold" color="brand.slate.lighter">
        Archive
      </styled.h1>
      <styled.p fontFamily="mono" color="brand.accent">
        A big list of things I&rsquo; worked on
      </styled.p>

      <styled.div mt={16}>
        {items.map(([year, projects]) => {
          return (
            <styled.div key={year}>
              <styled.div>{year}</styled.div>
              <styled.div>
                {projects.map((project) => (
                  <styled.div key={project.title}>
                    <styled.h2>{project.title}</styled.h2>
                  </styled.div>
                ))}
              </styled.div>
            </styled.div>
          );
        })}
      </styled.div>
    </styled.div>
  );
}

function getItems() {
  const f = [...AUTHOR.projects].filter((p) => !p.featured) as INonFeaturedProject[];
  const r: Record<string, INonFeaturedProject[]> = {};

  f.forEach((i) => {
    const k = i.createdAt.getFullYear().toString();

    if (r[k]) {
      r[k].push(i);
    } else {
      r[k] = [i];
    }
  });

  const e = Object.entries(r);
  const s = [...e];

  s.sort(([i], [j]) => j.localeCompare(i));

  return s;
}
