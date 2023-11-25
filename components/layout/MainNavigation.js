import classes from './MainNavigation.module.css';
import Link from 'next/link';
function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Todos</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>Todos</Link>
          </li>
          <li>
            <Link href='/done'>Task Done</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
