import Header from '../componants/header';
import Footer from '../componants/footer';



function Products() {
  return(
    <div className="d-flex flex-column min-vh-100">
     <Header />


      <main className="m-auto  text-uppercase">
        <h1>this is <span className="text-danger">Products</span> page</h1>
      </main>



    <Footer />
    </div>
    
  )
}

export default Products;