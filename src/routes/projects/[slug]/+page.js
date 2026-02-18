import { projects } from '$lib/data/projects.js';
import { error } from '@sveltejs/kit';

export const prerender = false;

export function load({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    throw error(404, '프로젝트를 찾을 수 없습니다.');
  }
  return { project };
}
