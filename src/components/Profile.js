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
          className="object-cover w-32 h-32 rounded-full"
          src="/path/to/profile-picture.jpg"
          alt="Profile"
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in elit
          pretium, vulputate velit eget, vestibulum neque. Donec congue
          malesuada enim, eu rutrum magna convallis et. Integer dictum lacinia
          ante, at condimentum sapien efficitur at. Sed non ante sit amet risus
          finibus aliquam. Vivamus suscipit mauris ut tellus tristique viverra.
          Mauris eget tortor sed mauris facilisis luctus. Curabitur quis dolor
          enim. Suspendisse ultricies tellus quis ligula dignissim, id venenatis
          neque commodo. Quisque dignissim varius feugiat. Curabitur iaculis,
          felis at commodo pellentesque, dolor tortor facilisis mauris, id
          luctus lacus nulla sit amet quam. Nulla facilisi. Mauris sed est sem.
        </p>
      </div>
    </div>
  );
};

export default Profile;
