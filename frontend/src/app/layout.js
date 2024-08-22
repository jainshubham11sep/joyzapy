import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/index.js";
import Footer from "@/components/footer";
import Sidebar from "@/components/sidebar/sidebar";
import DrawerContextComponent from "@/context/drawerContext";
import Script from "next/script";
import AppConstants from "../constants/AppConstants";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Puno Games",
};

// const fetchGameCategories = async () => {
//   try {
//     const response = await fetch(`${AppConstants.baseURL}/categories/all`, { next: { revalidate: 60 } });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const categories = await response.json();
//     return categories;
//   } catch (error) {
//     console.log(error.message, "categories error");
//   }
// };

export default async function RootLayout({ children }) {
  // const gameCategories = await fetchGameCategories();
  // console.log(gameCategories)

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/nextAssets/Icon White.png" />
        <meta
          name="google-site-verification"
          content="3E-90dtujCuWbZjknnWACcE2natuWbbx2ApAx8izHNw"
        />
      </head>
      <body className={montserrat.className}>
        <DrawerContextComponent>
          <div style={{ width: "100%" }}>
            <Navbar />
            {/* <Navbar gameCategories={gameCategories} /> */}
            <div style={{}}>
              <main className="flex gap-3 justify-center">
                {/* <div className="sidebarcontainer">
                  <Sidebar gameCategories={gameCategories} />
                </div> */}

                {children}
              </main>
            </div>
            <Footer />
          </div>
        </DrawerContextComponent>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-65RF85LYJ9"
        ></Script>
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-65RF85LYJ9');
            `,
          }}
        />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9014156375881181"
          crossorigin="anonymous"
        />
      </body>
    </html>
  );
}
