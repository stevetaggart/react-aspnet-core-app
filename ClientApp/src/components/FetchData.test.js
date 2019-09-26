import React from 'react';
import { FetchData } from './FetchData';
import DateList from './DateList';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

describe('FetchData', () => {
  let getByText, getByTestId, container, asFragment
  beforeEach(function() {
      global.fetch = jest.fn().mockImplementation(() => {
          var p = new Promise((resolve, reject) => {
            resolve({
              ok: true, 
              forecasts: [], 
              json: function() { 
                return [{dateFormatted: "9/27/2019",
                summary: "Bracing",
                temperatureC: -18,
                temperatureF: 0}]}
              
            });
          });
    
          return p;
      });
      
      // const div = document.createElement('div');
      // ReactDOM.render(<FetchData />, div);
       ({ getByText, getByTestId, container, asFragment } = render(<FetchData />));

    });
      
  //   it("ack", async function() {
  //     const response = await Api.ack('foo', 'bar');
  //     console.log(response);
  //     expect(response.Id).toBe(1); 
  //   });

  it('DateList has some text in it', () => {
  //   expect(getByText('greeting-text')).toBeInTheDocument();
  });

  // it('DateList is in tree', () => {
  //     const div = document.createElement('div');
  //     // ReactDOM.render(<DateList />, div);
  //     var renderedTree = ReactTestUtils.renderIntoDocument(<DateList />);
  //     ReactTestUtils.findRenderedDOMComponentWithClass(renderedTree, 'DateList');
  //     // expect(getByText('Hello, world!')).toBeInTheDocument()
  //   });

  test('DateList is in document RTL', () => {
    // const { getByText, getByTestId, container, asFragment } = render(<DateList />);
    expect(getByTestId('date-list')).toBeTruthy();
  })
});