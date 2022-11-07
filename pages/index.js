import Header from '../components/Header/header';
import Profile from '../components/Profile/profile';
import Services from '../components/Services/services';

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <Profile />
        <Services />
      </main>
      <footer></footer>
    </div>
  );
}
