// // import React from 'react';
// import { FiBell, FiMessageCircle } from 'react-icons/fi';

// const UserNavbar = () => {
//   return (
//     <nav className="flex items-center justify-end h-16 bg-gray-200 px-4">
//       <ul className="flex space-x-6">
//         <li>
//           {/* Notifications */}
//           <a href="/notifications">
//             <FiBell className="h-6 w-6" />
//             <span className="absolute top-0 right-0 bg-red-500 text-white px-1 rounded-full text-xs">3</span>
//           </a>
//         </li>
//         <li>
//           {/* Messages */}
//           <a href="/messages">
//             <FiMessageCircle className="h-6 w-6" />
//             <span className="absolute top-0 right-0 bg-blue-500 text-white px-1 rounded-full text-xs">2</span>
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default UserNavbar;
// import React from 'react';
import { FiBell, FiMessageCircle } from 'react-icons/fi';

const UserNavbar = () => {
  return (
    <nav className="flex items-center justify-between h-16 bg-gray-200 px-4">
      <div />
      <h2 className="uppercase font-bold text-lg tracking-widest">User Dashboard</h2>
      <div className="flex space-x-6">
        <a href="/notifications" className="relative">
          <FiBell className="h-6 w-6" />
          <span className="absolute top-0 right-0 bg-red-500 text-white px-1 rounded-full text-xs">3</span>
        </a>
        <a href="/messages" className="relative">
          <FiMessageCircle className="h-6 w-6" />
          <span className="absolute top-0 right-0 bg-blue-500 text-white px-1 rounded-full text-xs">2</span>
        </a>
      </div>
    </nav>
  );
};
export default UserNavbar;