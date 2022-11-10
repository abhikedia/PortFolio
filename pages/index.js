import Header from '../components/Header/header';
import Profile from '../components/Profile/profile';
import Projects from '../components/Projects/Projects';
import Services from '../components/Services/services';
import Skills from '../components/Skills/Skills';
import WorkExperience from '../components/WorkExperience/workExperience';

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <Profile />
        <Services />
        <Projects />
        <WorkExperience />
        <Skills />
      </main>
      <footer></footer>
    </div>
  );
}
