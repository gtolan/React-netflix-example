import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
// import { useInView } from 'react-intersection-observer';
import App from './App';
import Header from './components/Header';
import SwipeSlider from './components/SwipeSlider';
import { GlobalProvider } from './GlobalState';


import userEvent from "@testing-library/user-event";

describe("netflix loading", () => {
  beforeEach(() => {
    // renderContext()
  });

  describe('renders spinner', () => {
    it("Shows 'Loading' Text", () => {
      renderContext()
      const el = screen.getByText('Loading').toBeTrue;
      expect (el).toBeTrue
    });
  });

  // loading
    describe('Add header image', () => {
    it("once they loader is finished", () => {
      renderContext();
      waitForElementToBeRemoved(screen.getByText('Loading')).then(() => {
         const el = screen.getByAltText('header-title');
         expect (el).toBeTrue
         console.log('Element no longer in DOM');
        })
       

    });
  });

  // test('renders Loader on init', () => {
//   renderContext()
//   const el = screen.getByText('Loading').toBeTrue;
//   expect (el).toBeTrue;
// });

  // describe("when the toggle theme button is clicked", () => {
  //   beforeEach(() => {
  //     userEvent.click(screen.getByText(/Use Dark Theme/i));
  //   });

    // it("then uses the dark theme", () => {
    //   // "Use Light Theme" text is only shown when the dark theme is active
    //   expect(screen.getByText(/Use Light Theme/i)).toBeTruthy();
    // });
  });
// });


function renderContext() {
  const title = {headerTitle:[]}
  return render(
            <GlobalProvider value={title}>
                <header className="App-header">
                    <Header />
                    <SwipeSlider/>
                </header>
            </GlobalProvider>
  );
}



// test('renders Loader on init', () => {
//   renderContext()
//   const el = screen.getByText('Loading').toBeTrue;
//   expect (el).toBeTrue;
// });

// test('renders My List after Loading', () => {
//   // renderContext()
//   render(<SwipeSlider/>)
//   const el = screen.getByText('My List').toBeTrue;
//   expect (el).toBeTrue;
// });

