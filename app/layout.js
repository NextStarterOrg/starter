import '../app/globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata = {
  title: "new", //titre de l'application
  description: "Exemple App", //pour le referencement (SEO) utilisé par les moteurs de recherche
  icons: {
    icon: '/icone.ico', // chemin relatif depuis /public
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}