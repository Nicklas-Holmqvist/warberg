import Footer from './components/Footer';
import Header from './components/Header';
import TimeLine from './components/TimeLine';

export default function Home() {
  return (
    <main className="bg-white dark:bg-black">
      <Header />
      <TimeLine />
      <Footer />
    </main>
  );
}
