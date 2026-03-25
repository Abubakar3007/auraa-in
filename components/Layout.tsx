import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </div>
  )
}

export default Layout