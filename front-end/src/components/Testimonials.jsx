import user1 from '../assets/images/user-1.png'
import user2 from '../assets/images/user-2.png'
import user3 from '../assets/images/user-3.png'
import {FaStar}from 'react-icons/fa'
const Testimonials = ()=>{
    return(
<div className="testimonials mb-8 w-[80%] m-auto">
    <div className="small-container">
        <div className="title">Testimonials</div>
        <div className="row">
            <div className="col-3">
                <i className="fa fa-quote-left"></i>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolorem sit reprehenderit quod autem doloremque id a commodi dicta tempora, assumenda distinctio similique nisi. Autem debitis reiciendis id? Sint, facilis.</p>
                <div className="rating flex justify-center mt-4">
                     <FaStar className="fa"/> 
                     <FaStar className="fa"/> 
                     <FaStar className="fa"/> 
                     <FaStar className="fa"/> 
                     <FaStar className="fa"/> 
                </div>
                <img src= {user1} className='inline-block' />
                <h3>sean parker</h3>
            </div> 
            <div className="col-3">
                <i className="fa fa-quote-left"></i>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolorem sit reprehenderit quod autem doloremque id a commodi dicta tempora, assumenda distinctio similique nisi. Autem debitis reiciendis id? Sint, facilis.</p>
                <div className="rating flex justify-center mt-4"> 
                     <FaStar className="fa"/> 
                     <FaStar className="fa"/> 
                     <FaStar className="fa"/> 
                     <FaStar className="fa"/> 
                     <FaStar className="fa"/>
                </div>
                <img src= {user2} className='justify-center inline'/>
                <h3>mike smith</h3>
            </div> 
            <div className="col-3">
                <i className="fa fa-quote-left"></i>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolorem sit reprehenderit quod autem doloremque id a commodi dicta tempora, assumenda distinctio similique nisi. Autem debitis reiciendis id? Sint, facilis.</p>
                <div className="rating flex justify-center mt-4">
                     <FaStar className="fa"/> 
                     <FaStar className="fa"/> 
                     <FaStar className="fa"/> 
                     <FaStar className="fa"/> 
                     <FaStar className="fa"/>
                </div>
                <img src= {user3} className='inline-block' />
                <h3>mabel joe</h3>
            </div> 
        </div>
    </div>
</div>
    )
}

export default Testimonials 