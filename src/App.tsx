import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="p-5 border-b-slate-950 border-solid border-b flex justify-between items-center">
        <h1 className="font-bold text-4xl">
          Hello world!
        </h1>
        <nav className="navigation">
          <ul className="flex gap-2">
            <li className="navigation-menu-item">
              MENU1
            </li>
            <li className="navigation-menu-item">
              MENU2
            </li>
            <li className="navigation-menu-item">
              MENU3
            </li>
          </ul>
        </nav>
      </header>
      <main className="p-5">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, quas.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus ea et harum libero nobis omnis?</p>
      </main>
      <footer className="p-5 border-t-slate-950 border-solid border-t">
        <p className="text-center text-xs">© nagasawaaaa All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
