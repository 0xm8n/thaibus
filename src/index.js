import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Display from './Display';
import AddNewLine from './AddNewLine';
import EditLine from './EditLine';

injectTapEventPlugin();

class Root extends Component {
  render() {
    const muiTheme = getMuiTheme(darkBaseTheme);
    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <BrowserRouter>
              <Switch>
                <Route exact path='/' component={Display}/>
                <Route exact path='/AddNewLine' component={AddNewLine}/>
                <Route exact path='/EditLine' component={EditLine}/>
              </Switch>
            </BrowserRouter>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
