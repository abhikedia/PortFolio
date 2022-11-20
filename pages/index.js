import Awards from '../components/Awards/Awards';
import Header from '../components/Header/Header';
import Profile from '../components/Profile/Profile';
import Projects from '../components/Projects/Projects';
import Services from '../components/Services/Services';
import Skills from '../components/Skills/Skills';
import WorkExperience from '../components/WorkExperience/WorkExperience';

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <Profile />
        <Services />
        <Projects />
        <WorkExperience />
        <Awards />
        <Skills />
      </main>
      <footer></footer>
    </div>
  );
}
