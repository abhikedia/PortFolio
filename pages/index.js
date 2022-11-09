import Header from '../components/Header/header';
import Profile from '../components/Profile/profile';
import Services from '../components/Services/services';
import WorkExperience from '../components/WorkExperience/workExperience';

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <Profile />
        <Services />
        <WorkExperience />
      </main>
      <footer></footer>
    </div>
  );
}
