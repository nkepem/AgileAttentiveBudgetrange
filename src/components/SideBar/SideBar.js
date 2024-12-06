

import React from 'react';
import Link from 'next/link';
import styles from './SideBar.module.scss'; // Assuming you have a CSS module for styles

const SideBar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <aside
      className={`${styles.sidebar} ${
        sidebarOpen ? styles.sidebarOpen : styles.sidebarClosed
      }`}
    >
      <div className={styles.sidebarHeader}>
        <h2 className={styles.sidebarTitle}>Sidebar</h2>
        <button
          onClick={() => setSidebarOpen(false)}
          className={styles.closeButton}
        >
          Close
        </button>
      </div>
      <nav className={styles.sidebarNav}>
        <ul className={styles.sidebarLinks}>
          <li>
            <Link href="/dashboard" className={styles.sidebarLink}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/profile" className={styles.sidebarLink}>
              Profile
            </Link>
          </li>
          <li>
            <Link href="/settings" className={styles.sidebarLink}>
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
