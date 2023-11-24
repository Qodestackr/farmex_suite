import React from 'react';
import JoyRide from 'react-joyride';

const TOUR_STEPS = [
  // Target Classes...
  {
    target: '.dashbboard-sidebar-marketplace',
    content: 'Farmex Marketplace Dashboard. Access everything Store/e-commerce'
  },
  {
    target: '.events-x-calendar',
    content: 'Events and Calendar'
  },
  {
    target: '.crop-x-analytics',
    content: 'Crop Analytics'
  }
];

const Tour: React.FC = () => {
  return (
    <>
      <JoyRide
        steps={TOUR_STEPS}
        showSkipButton={true}
        styles={{
          tooltipContainer: {
            textAlign: 'left'
          },
          buttonNext: {
            backgroundColor: 'green'
          },
          buttonBack: {
            marginRight: 10
          }
        }}
        continuous={false}
        debug={false}
        disableCloseOnEsc={false}
        disableOverlay={false}
        disableOverlayClose={false}
        disableScrolling={false}
        disableScrollParentFix={false}
        // getHelpers = {}
        hideBackButton={false}
        run={false}
        // scrollOffset = {1}
        // scrollDuration ={}
        scrollToFirstStep={false}
        // showSkipButton={false}
        showProgress={false}
        spotlightClicks={false}
        // spotlightPadding ={}
        // steps={never[]}

        // callback: (data: CallBackProps) => void;
        // * Keydown event listener
        // handleKeyboard: (event: KeyboardEvent) => void;
        // * Sync the store with the component's state
        // syncState: (state: State) => void;
        // setPopper: Props$1['getPopper'];
        // scrollToStep(previousState: State): void;
        // render(): React.JSX.Element | null;
      />
    </>
  );
};

export default Tour;
