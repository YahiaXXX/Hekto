import React from 'react'

function About() {
  return (
    <div className={`w-full h-screen flex flex-col justify-between`}>

      <div className=" bg-green-700 h-full  bg-opacity-10 gap-6 flex flex-col justify-center items-center w-full">
        <h1 className='font-semibold text-[52px] text-slate-500 ' >About HEKTO</h1>
        <div className=" flex justify-center items-center md:w-[60%] w-[90%]">
          <p className="text-black leading-8 text-[16px] ">
            Welcome to VulnVision, the ultimate website security platform that
            helps you scan your website for vulnerabilities, subdomains, and
            even ports while providing insights on the technologies used to
            create it. At VulnVision, our top priority is to keep your website
            secure and protected from potential threats. <br /> Our platform offers
            advanced scanning techniques that enable you to identify
            vulnerabilities in your website and subdomains. Additionally, with
            VulnVision, you can now scan ports to determine which ports are open
            on your website. This feature helps you identify potential entry
            points for cybercriminals and strengthen your website's security. <br /> We
            believe that website security should be affordable and accessible to
            everyone, which is why we offer our services at an affordable price.
            With VulnVision, you can now have the peace of mind that your
            website is protected from all angles. <br /> One of our unique features is
            our ability to fix the vulnerabilities for you. With VulnVision, you
            can request our team of cybersecurity experts to fix the
            vulnerabilities on your website. Our team is made up of skilled
            professionals who are passionate about cybersecurity and are
            committed to making the internet a safer place. <br /> To request a fix,
            you can upload an XSS file on our platform, and our team will take
            care of the rest. You can also upload a pen-testing history file to
            help our team understand the vulnerabilities that have been
            previously identified on your website. <br /> This feature ensures that our
            team can address any existing vulnerabilities and help you secure
            your website. At VulnVision, we believe that customer satisfaction
            is key to our success. We provide excellent customer service to
            ensure that all your website security needs are met. Our team is
            always available to answer your questions and offer support whenever
            you need it. We are committed to providing you with the most
            reliable and efficient website security solution. With VulnVision,
            you can rest assured that your website is secure and protected from
            potential threats. <br /> Thank you for choosing VulnVision. We look
            forward to working with you and helping you secure your website. If
            you have any questions or feedback, please don't hesitate to contact
            us.
          </p>
        </div>

       
      
      </div>
    </div>
  )
}

export default About