import AboutSection from "./components/index/indexAboutMe";
import ProjectsSection from "./components/projects";
import IndexContact from "./components/index/indexContact";
import HeroSection from "./components/index/HeroClient";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <IndexContact />
    </main>
  );
}
