import React from 'react'
import "./Contactus.css"

function ContactUs() {
    const source = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3991685584806!2d3.387353614317109!3d6.597212024133434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93753e1150ad%3A0xde8a9a51f7654c95!2sAsons%20Medical%20center%20limited!5e0!3m2!1sen!2sng!4v1665148034662!5m2!1sen!2sng" 
    const height = '450'
    const width = '600'
  return (
    <>
    <div class="sectcontnt">
    <div class="hersec4">


       <div class="herosectiontext bodycontainer">
         <div class="tpsd">
         <h3>Let’s Start a Conversation</h3>  
         </div>
       </div>
    </div>

    <div class="bodycontainer">
<div class="emptys">


       <div class="twosidecontent">
           <div class="sideoftext">
       
       
               <div class="boldhd">
                   How can we assist you?
        </div>
        <div class="slimbod">
        <span class="issl">ISSL is here to help you; </span>  
       Our experts are available to answer any questions you might have. Leave us a message.
        </div>

        <div class="slimbod">
           <span>View the usage of our platform: </span>  
           Request a custom demo
       </div>

       <div class="slimbod">
           <span>View our Products </span>  
           Our product is your gateway to motivated employees, satisfied 
           customers and increased revenue.            
       </div>

       <div class="slimbod">
           <div class="boldhd">
               Visit Us
    </div> 
           Our product is your gateway to motivated employees, satisfied 
           customers and increased revenue.            
       </div>

       <div class="slimbod">
           <div class="boldhd">
               Email Us
    </div> 
    mails@isslng.com           
       </div>
       <iframe src={source} height={height} width={width}/> 

           </div>
           <div class="sideoftext">
              
               <form id="form">
                   <div class="formbody">
               <div class="formcontent">
                   <label for="">First Name</label>
                   <input type="text" name="from_name" id="from_name" required />
               </div>
               
               <div class="formcontent">
                   <label for="">Last Name</label>
                   <input type="text" name="last_name" id="last_name" required />
               </div>
               
               <div class="formcontent">
                   <label for="">Company Name</label>
                   <input type="text" name="company_name" id="company_name" required />
               </div>
               
               <div class="formcontent">
                   <label for="">Company Email</label>
                   <input type="email" name="company_email" id="company_email" required />
               </div>
               
               <div class="formcontent">
                   <label for="">Job Title</label>
                   <input type="text" name="job_title" id="job_title" required />
               </div>
               
               
               <div class="formcontent">
                   <label for="">Business Type</label>
                   <input type="text" name="business_type" id="business_type" required />
               </div>
               
               <div class="formcontent">
                   <label for="">Message</label>
                   <textarea name="message" id="message" cols="30" rows="10" required>
               
                   </textarea>
               </div>
               
               <input type="submit" id="button" value="Send Email" class="submitting"/>
               <div class="button-area">
                  
                   <span></span>
                 </div>
               
               
               
                   </div>
                   </form>
           </div>

       </div>


   </div>
   </div>



       


  


   </div>
    
    </>
  )
}

export default ContactUs