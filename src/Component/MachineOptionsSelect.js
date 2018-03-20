import React, { Component } from 'react';
import Dialog, {
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';

import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';

export default class App extends Component {
    
    render() {
        const { selectMachine, options, isOpenMachineOptions } = this.props;
        
        return (<Dialog
            title="Dialog With Actions"
            open={isOpenMachineOptions}
            style={{ maxWidth: 'none' }}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">Machine options</DialogTitle>
            <DialogContent style={{maxWidth:'none'}}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-arround' }}>
                    {options.map((option, index) => (
                        <Paper
                            style={{
                                padding: '20px',
                                margin: '10px',
                                cursor: 'pointer'
                            }}
                            key={index}
                            onClick={() => selectMachine(option.id) }
                        >
                            { option.description }
                        </Paper>
                    ))}
                </div>
            </DialogContent>
        </Dialog>);
    }
}