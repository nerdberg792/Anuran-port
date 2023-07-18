import React, { useEffect, useRef } from 'react';
import { FaGraduationCap, FaLaptopCode } from 'react-icons/fa';

const Profile = () => {
  const profileRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        } else {
          entry.target.classList.remove('animate-fadeInUp');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(profileRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-purple-500 to-pink-500">
      <div
        className="relative flex items-center justify-center w-32 h-32 mb-4 rounded-full bg-white shadow-lg"
        ref={profileRef}
      >
        {/* Profile Picture */}
        <img
          className="object-cover w-32 h-32"
          src="./profile-picture.jpg"
          alt="profile"   
        />

        {/* Education and Job */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2 bg-white bg-opacity-75">
          <div className="flex flex-col items-center">
            <FaGraduationCap className="text-2xl text-gray-700" />
            <p className="text-sm text-gray-700">Pre-Final Year Student</p>
          </div>
          <div className="flex flex-col items-center mx-4">
            <FaLaptopCode className="text-2xl text-gray-700" />
            <p className="text-sm text-gray-700">2 years of Experience</p>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="max-w-lg px-4 py-8 mx-auto bg-white rounded-lg shadow-lg">
        <h4 className="mb-4 text-2xl font-bold text-center">Anuran Saikia</h4>
        <p className="mb-4 text-sm text-center">
          Indian Software Developer
        </p>
        <p className="mb-4 text-center">
          Currently studying Material Sciences and Metallurgical Engineering
        </p>
        <p className="text-sm text-center">
        Anuran Saikia, an Indian software developer, brings two years of experience in Java SpringBoot backend development to the table. With a background in material sciences and metallurgical engineering, they have seamlessly transitioned into the realm of software development. Having worked with reputable companies such as Pentabug, Razorpay, and Nasdaq, Anuran has contributed to the creation of robust backend solutions. Their problem-solving abilities, attention to detail, and proficiency in software development methodologies make them a valuable asset to cross-functional teams. With a passion for continuous learning and a strong foundation in engineering, Anuran is poised to tackle complex challenges and deliver innovative software solutions
        </p>
      </div>
    </div>
  );
};

export default Profile;
