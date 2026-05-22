import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { PageHero } from "@/components/page-hero";
import { projects } from "@/content/projects/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects, web products, bots, and web-based systems by airplanestar_."
};

export default function ProjectsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Projects"
        title="A product-first archive of builds, bots, and web apps."
        description="The portfolio is organized around things worth opening: GitHub projects, live web products, and operational systems for real workflows."
      />
      <section className="container-shell py-14 md:py-20">
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} featured={index === 0} />
          ))}
        </div>
      </section>
    </main>
  );
}
