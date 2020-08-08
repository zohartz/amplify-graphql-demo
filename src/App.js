import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { listNotes } from './graphql/queries';
import { createNote, deleteNote } from './graphql/mutations';

import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import awsExports from "./aws-exports";
import { NotesList, AddNote, Header } from './components'


Amplify.configure(awsExports);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { notes:[] }
  }

  async componentDidMount(){
    var result = await API.graphql(graphqlOperation(listNotes));
    this.setState( { notes: result.data.listNotes.items } )
  }  

  deleteNote = async (note) => {
    const id = {
      id: note.id
    }
    await API.graphql(graphqlOperation(deleteNote, {input:id}));
    this.setState( { notes: this.state.notes.filter( (value, index, arr) => { return value.id !== note.id; }) } );
  }
  
  addNote = async (note) => {
    var result = await API.graphql(graphqlOperation(createNote, {input:{note}}));
    this.state.notes.push(result.data.createNote)
    this.setState( { notes: this.state.notes } )
  }

  render() {
    return (
      <AmplifyAuthenticator>
       <div className="row">
        <div className="col m-3">
          <Header/>
          <AddNote addNote={ this.addNote }/>
          <NotesList notes={ this.state.notes } deleteNote={ this.deleteNote }/>
        </div> 
      </div> 
      </AmplifyAuthenticator>
    );
  }
}

export default App;