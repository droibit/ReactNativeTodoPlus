/// <reference path="../typings/main.d.ts" />

/* @flow */
'use strict';

import TodoActions from "../action/todo-actions";
import React, {
  Component, 
  View, 
  TextInput, 
  StyleSheet
} from 'react-native';

export default class Header extends Component {
  //noinspection JSDuplicatedDeclaration
  state: {
    value: string;
  };

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  render() {
    return (
      <View>
        <TextInput
          style={style.header}
          autoFocus={true}
          placeholder={'What is the next plan?'}
          value={this.state.value}
          onChangeText={text => this.setState({value: text})}
          onSubmitEditing={() => this._add()}
          multiline={false}
        />
      </View>
    );
  }

  _add() {
    const title = this.state.value;
    if (title !== '') {
      console.info(`Input TODO: ${title}`);
      TodoActions.create(title);
      this.setState({value: ''})
    }
  }
}

const style = StyleSheet.create({
  header: {
    fontSize: 16,
    marginLeft: 16,
    marginRight: 16
  }
});