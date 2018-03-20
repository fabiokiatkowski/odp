import React, { Component } from 'react';
import CssBaseline from 'material-ui/CssBaseline';
import Navbar from './Component/Navbar';
import GridDefault from './Component/GridDefault';
import MachineOptionsSelect from './Component/MachineOptionsSelect';

class App extends Component {
  state = {
    openAddModal: false,
    isOpenMachineOptions: true,
    machineSelected: {},
    machineOptions: [
      {id: 1, description: 'Descricao1'},
      {id: 2, description: 'Descricao2'},
      {id: 3, description: 'Descricao3'},
      {id: 4, description: 'Descricao4'},
      {id: 5, description: 'Descricao5'},
      {id: 6, description: 'Descricao6'},
      {id: 7, description: 'Descricao7'},
      {id: 8, description: 'Descricao8'},
      {id: 9, description: 'Descricao9'},
      {id: 10, description: 'Descricao10'}
    ],
    selectedRows: [],
    columns: [
      { name: "name", title: "Name" },
      { name: "sex", title: "Sex" },
      { name: "city", title: "City" },
      { name: "car", title: "Car" }
    ],
    rows: [
      { sex: "Female", name: "Sandra", city: "Las Vegas", car: "Audi A4" },
      { sex: "Male", name: "Paul", city: "Paris", car: "Nissan Altima" },
      { sex: "Male", name: "Mark", city: "Paris", car: "Honda Accord" },
      { sex: "Male", name: "Paul", city: "Paris", car: "Nissan Altima" },
      { sex: "Female", name: "Linda", city: "Austin", car: "Toyota Corolla" },
      {
        sex: "Male",
        name: "Robert",
        city: "Las Vegas",
        car: "Chevrolet Cruze"
      },
      { sex: "Female", name: "Lisa", city: "London", car: "BMW 750" },
      { sex: "Male", name: "Mark", city: "Chicago", car: "Toyota Corolla" },
      {
        sex: "Male",
        name: "Thomas",
        city: "Rio de Janeiro",
        car: "Honda Accord"
      },
      { sex: "Male", name: "Robert", city: "Las Vegas", car: "Honda Civic" },
      { sex: "Female", name: "Betty", city: "Paris", car: "Honda Civic" },
      {
        sex: "Male",
        name: "Robert",
        city: "Los Angeles",
        car: "Honda Accord"
      },
      {
        sex: "Male",
        name: "William",
        city: "Los Angeles",
        car: "Honda Civic"
      },
      { sex: "Male", name: "Mark", city: "Austin", car: "Nissan Altima" }
    ]
  };
  
  handleShowAddModal = () => {
    const newV = this.state.openAddModal;
    this.setState({ openAddModal: !newV });
  }
  
  handleChangeSelection = (selection) => {
    this.setState({ selectedRows : selection});
  }

  handleSelectMachine = (id) => {
    const machineFound = this.state.machineOptions.find(machine => machine.id === id);
    const { isOpenMachineOptions } = this.state;
    this.setState({ machineSelected: machineFound, isOpenMachineOptions: !isOpenMachineOptions })
  }

  render() {
    const { machineSelected, isOpenMachineOptions } = this.state;
    return (
      <div>
         <MachineOptionsSelect 
          isOpenMachineOptions={isOpenMachineOptions}
          options={this.state.machineOptions} 
          selectMachine={this.handleSelectMachine} />

        <div>
          <CssBaseline>
            <Navbar
              open={this.state.openAddModal}
              show={this.handleShowAddModal}
            />
          </CssBaseline>
          <div>
            <h3>Red Cloths, selected machine: <b> { machineSelected.description ? machineSelected.description : 'None'  } </b></h3>
            <GridDefault
              rows={this.state.rows}
              columns={this.state.columns}
              changeSelection={this.handleChangeSelection}
            />
          </div>
        </div>
        }
      </div>
    );
  }
}

export default App;
