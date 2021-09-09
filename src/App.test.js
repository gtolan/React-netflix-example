import { render, screen, waitForElementToBeRemoved, fireEvent, waitFor, window} from '@testing-library/react';
// import { useInView } from 'react-intersection-observer';
import App from './App';
import Navbar from './components/Navbar';
import Header from './components/Header';
import SwipeSlider from './components/SwipeSlider';
import { GlobalProvider } from './GlobalState';
const currentWindowObject = global.window;


describe("netflix loading", () => {
    beforeEach(() => {
      renderContext()
    });

    describe('renders Loading text', () => {
      it("Shows 'Loading' Text", () => {
        const el = screen.getByText('Loading').toBeTrue;
        expect (el).toBeTrue
      });
    });

    describe('renders loading spinner', () => {
      it("Show a spinner loader", () => {
        const el = screen.getByTestId('spinner-loader').toBeTrue;
        expect (el).toBeTrue
      });
    });

    describe('Add header image', () => {
    it("once they loader is finished", () => {
        waitForElementToBeRemoved(screen.getByText('Loading')).then(() => {
            const el = screen.getByAltText('header-title');
            expect (el).toBeTrue
          })
      });
    })

    describe('Has a play button', () => {
    it("play button is in title controls", () => {
        waitForElementToBeRemoved(screen.getByText('Loading')).then(() => {
            const controls = screen.getByTestId('title-controls');
            const el = controls.getByTestId('play-button');
            expect (el).toBeTrue
          })
      });
    });
        // describe('Bottom Navbar sticks to the top', () => {
        //     it("sticks on scroll after scroll y 300", async() => {
        //       render(<Navbar/>)
        //         fireEvent.scroll(window, { target: { scrollY: 300 } })
        //           waitFor(() => {
        //                 const bottomNav = screen.getByTestId('bottom-navbar');
        //                 const position = bottomNav.getBoundingClientRect().top
        //                 console.log(bottomNav.getBoundingClientRect().top,'BR')
        //                 expect (position).toBe(0);
        //     },
        //     { timeout: 200 })  
        //       })
        //  })

        describe('Loads rows of titles', () => {
                it("the first row is 'my list'", () => {
                    waitForElementToBeRemoved(screen.getByText('Loading')).then(() => {
                        const listEl = screen.getByText('My List');;
                        expect (listEl).toBeTrue
                      })
          });
        })

        describe('Shows a swipeable list of titles', () => {
                it("check for the scroll element", () => {
                    waitForElementToBeRemoved(screen.getByText('Loading')).then(() => {
                        const row = screen.querySelector('.swipe-container.in-view');
                        expect (row).toBeTrue
                      })
            });
        });

 });


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

