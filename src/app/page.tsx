import { Header } from "@/components/Header";
import { Section } from "@/components/Section";
import { profile, projects, skillGroups } from "@/data/profile";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="mx-auto w-full max-w-3xl flex-1 px-6">
        <section className="py-20 sm:py-28">
          <p className="mb-4 font-mono text-sm text-accent">{profile.role}</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            {profile.tagline}
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {profile.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background hover:opacity-85"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <Section id="about" title="About">
          <div className="space-y-4 leading-8">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid gap-4 sm:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-xl border border-line p-5">
                <h3 className="font-semibold">{group.title}</h3>
                <p className="mt-1 text-sm text-muted">{group.description}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="space-y-4">
            {projects.map((project) => (
              <article key={project.title} className="rounded-xl border border-line p-6">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-3 leading-7 text-muted">{project.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-4 text-sm">
                  {project.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-accent underline-offset-4 hover:underline"
                      >
                        {link.label} →
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>
      </main>
      <footer className="border-t border-line py-8 text-center text-sm text-muted">
        © {profile.name}
      </footer>
    </>
  );
}
