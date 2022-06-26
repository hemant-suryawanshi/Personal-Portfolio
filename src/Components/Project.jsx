import React from 'react'
import styles from "./Styles/Project.module.css"
import Aos from 'aos'
import 'aos/dist/aos.css'

const Project=()=>{
    React.useEffect(()=>{
        Aos.init({});
    },[])
    return(
        <>

        <div className={styles.projectBanner} data-aos = 'zoom-in' data-aos-duration="1000" id="projects">

        <p data-aos = 'flip-up' data-aos-duration="1500">Projects</p>
        </div>

        <div className={styles.toi} 
          data-aos="fade-up" 
          data-aos-offset="120"
            data-aos-delay="800"
            data-aos-duration="800"
            data-aos-easing="ease-in-out">
              <div>
                  <h3>Fraazo clone </h3>
                  <p>
                      <div>Tools : HTML | CSS | JavaScript | MongoDB</div>
                      <div>Features :</div>
                      <div>
                          <ul>
                              <li>A Individuale project executed in a week.</li> 
                               <li>Users can register and login to the website, go to product Page and Apply some Filter And sorting Functionality</li>
                                <li>Users can add the product to cart/Wishlist and Checkout to Payment</li>                   
                          </ul>
                      </div>
                  </p>
                  
                  <div>
                      <button>
                        <a href='https://fraazo-masai.netlify.app/' target="_blank" rel="noreferrer">
                                DEMO
                        </a>
                     </button>
                     
                      <button>
                      <a href='https://github.com/hemant-suryawanshi/Fraazo.in.git' target="_blank" rel="noreferrer">
                      VIEW CODE
                        </a>
                    </button>
                  </div>
              </div>
              
              <div>
                <img src='/Fraazo.png' alt='Fraazo.com'/>
              </div>

          </div>



          <div className={styles.toi} 
          data-aos="fade-up" 
          data-aos-offset="120"
            data-aos-delay="800"
            data-aos-duration="800"
            data-aos-easing="ease-in-out">
              <div>
                  <h3>Sephora clone</h3>
                  <p>
                      <div>Tools : HTML | CSS | JavaScript | MongoDB</div>
                      <div>Features :</div>
                      <div>
                          <ul>
                              <li>A collaborative project built by a team of 5,executed in a week.</li> 
                               <li>Users can register and login to the website, go to product Page and Apply some Filter And sorting Functionality</li>
                                <li>Users can add the product to cart/Wishlist and Checkout to Payment</li>                   
                          </ul>
                      </div>
                  </p>
                  
                  <div>
                      <button>
                        <a href='https://shephora.netlify.app/' target="_blank" rel="noreferrer">
                                DEMO
                        </a>
                     </button>
                     
                      <button>
                      <a href='https://github.com/hemant-suryawanshi/SephoraClone.git' target="_blank" rel="noreferrer">
                      VIEW CODE
                        </a>
                    </button>
                  </div>
              </div>
              
              <div>
                <img src='/Sephora.png' alt='FlipKart.com'/>
              </div>

          </div>










          <div className={styles.toi} 
          data-aos="fade-up" 
          data-aos-offset="120"
            data-aos-delay="800"
            data-aos-duration="800"
            data-aos-easing="ease-in-out">
              <div>
                  <h3>Flipkart.com clone 2.0</h3>
                  <p>
                      <div>Tools : HTML | CSS | JavaScript | MongoDB</div>
                      <div>Features :</div>
                      <div>
                          <ul>
                              <li>A collaborative project built by a team of 5,executed in a week.</li> 
                               <li>Users can register and login to the website, go to product Page and Apply some Filter And sorting Functionality</li>
                                <li>Users can add the product to cart/Wishlist and Checkout to Payment</li>                   
                          </ul>
                      </div>
                  </p>
                  
                  <div>
                      <button>
                        <a href='https://flipkart01-clone.netlify.app/' target="_blank" rel="noreferrer">
                                DEMO
                        </a>
                     </button>
                     
                      <button>
                      <a href='https://github.com/hemant-suryawanshi/Flipkart-Clone-2.0.git' target="_blank" rel="noreferrer">
                      VIEW CODE
                        </a>
                    </button>
                  </div>
              </div>
              
              <div>
                <img src='/flipkart2.png' alt='FlipKart.com'/>
              </div>

          </div>

        



          <div className={styles.toi}
          data-aos="fade-up" 
          data-aos-offset="120"
      
            data-aos-duration="800"
            data-aos-easing="ease-in-out">
              <div>
                  <h3>Creadobeuty.com - Clone Project</h3>
                  <p>
                      <div>Tools : HTML | CSS | JavaScript</div>
                      <div>Features :</div>
                      <div>
                          <ul>
                              <li>A collaborative project built by a team of 5,executed in a week.</li>
                               <li>Users can register and login to the website, go to product Page and Apply some Filter And sorting Functionality</li>
                               <li>Users can add the product to cart/Wishlist and Checkout to Payment</li>
                          </ul>
                      </div>
                  </p>
                  
                  <div>
                        <button>
                        <a href='https://luxury-otter-de9ba2.netlify.app/' target="_blank" rel="noreferrer">
                                DEMO
                        </a>
                     </button>
                      <button>
                         <a href='https://github.com/hemant-suryawanshi/creado.git' target="_blank" rel="noreferrer">
                             VIEW CODE
                          </a>
                      </button>
                  </div>
              </div>
              
              <div>
                <img src='/credo.png' alt='Creadobeuty.com project'/>
              </div>

          </div>

             {/* COUCHSURFING CLONE */}
             <div className={styles.toi}
             data-aos="fade-up" 
             data-aos-offset="120"
            //    data-aos-delay="800"
               data-aos-duration="800"
               data-aos-easing="ease-in-out">
              <div>
                  <h3>Food Recipe App</h3>
                  <p>
                      <div>Tools : HTML | CSS | JavaScript</div>
                      <div>Features :</div>
                      <div>
                          <ul>
                            <li>User can Find the Latest Recipe in Latest Section</li>
                            <li>User can search any recipe in need in search input tag.</li>
                            {/* <li>User can interact with other users on the discussion board.</li> */}
                          </ul>
                      </div>
                     
                  </p>
                  
                  <div>
                  <button>
                        <a href='https://heartfelt-centaur-27da12.netlify.app/' target="_blank" rel="noreferrer">
                                DEMO
                        </a>
                     </button>
                      <button>
                          <a href='https://github.com/hemant-suryawanshi/food-recipe-App.git' target="_blank" rel="noreferrer">
                          VIEW CODE
                          </a>
                        </button>
                  </div>
              </div>
              
              <div>
                <img src='/foodapp.png' alt='Recipe project'/>
              </div>

          </div>



        </>
    )
}

export {Project}