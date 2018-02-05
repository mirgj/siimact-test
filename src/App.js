import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { 
  Alert, 
  Content, 
  Quote, 
  Code, 
  Paragraph, 
  Heading, 
  Link, 
  Small, 
  Tag, 
  Button, 
  Spinner, 
  Tip, 
  Table, 
  TRow, 
  TCell, 
  Box, 
  Footer, 
  Jumbotron, 
  Breadcrumb, 
  Crumb, 
  Menu, 
  MenuGroup, 
  MenuItem, 
  SubMenu, 
  Tabs, 
  TabItem, 
  Navbar, 
  NavTitle, 
  NavLink, 
  Grid, 
  Row, 
  Col, 
  Form, 
  Field, 
  Input, 
  Textarea, 
  Select, 
  Label, 
  Checkbox, 
  Switch 
} from 'siimact'

class App extends Component {
  doSomething = (e) => {
    alert('click');
  };

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <Content>
          <Quote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Quote>
          <Alert>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Alert>
          <Alert color='orange'>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Alert>
          <Alert color='magenta'>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Alert>
          <Alert color='orange' onCloseClick={this.doSomething}>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Alert>
          <Paragraph>This is a simple paragraph</Paragraph>
          <Paragraph>This is a simple paragraph with <Code text='some code' inline={true} /> inline and after a full block code</Paragraph>
          <Code text={`<Quote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Quote>
<Alert>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Alert>
<Alert color='orange'>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Alert>
<Alert color='orange' close={this.doSomething}>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Alert>`} 
            />
          <Heading size={1}>Heading 1</Heading>
          <Heading size={2}>Heading 2</Heading>
          <Heading size={3}>Heading 3</Heading>
          <Heading size={4}>Heading 4</Heading>
          <Heading size={5}>Heading 5</Heading>
          <Heading size={6}>Heading 6</Heading>
          <Heading size={10}>Heading 10</Heading>
          <Paragraph>This is <Link href='https://google.com' target='_blank'>a link</Link> with a <Small>small text</Small></Paragraph>
          <Content>
            <Tag>Default</Tag>
            <Tag color='orange'>Orange</Tag>
            <Tag color='blue' htmlTag='div'>Blue</Tag>
            <Tag color='blue' htmlTag='p'>Blue</Tag>
            <Tag color='magenta' htmlTag='p'>Magenta</Tag>
          </Content>
          <Button>This is a button</Button>
          <Button color='green'>This is a button green</Button>
          <Button color='magenta'>This is a button magenta</Button>
          <Button color='red' disabled>This button is disabled</Button>
          <Button color='purple' onClick={this.doSomething}>This button have an action</Button>
          <Content>
            <Spinner></Spinner>
            <Spinner color='red'></Spinner>
            <Spinner color='red' size='small'></Spinner>
            <Spinner color='red' size='large'></Spinner>
            <Spinner color='magenta' size='huge'></Spinner>
          </Content>
          <Content>
            <Tip>Plain tip</Tip>
            <Tip color='green'>Plain tip with color</Tip>
            <Tip color='red' type='heart'>A lovely message</Tip>
            <Tip color='orange' type='exclamation'>You should pay attention</Tip>
            <Tip color='blue' type='question'>What did you said</Tip>
            <Table 
              header={[
                  <TCell key={1}>Header 1</TCell>,
                  <TCell key={2}>Header 2</TCell>,
                  <TCell key={3}>Header 3</TCell>]
              }
              rows={
                [<TRow key={1}>
                  <TCell>Cell 1</TCell>
                  <TCell>Cell 2</TCell>
                  <TCell>Cell 3</TCell>
                </TRow>,
                <TRow key={2}>
                  <TCell>Cell 4</TCell>
                  <TCell>Cell 5</TCell>
                  <TCell>Cell 6</TCell>
                </TRow>]
              }
            />
            <Table striped={true}
              header={[
                  <TCell key={1}>Header 1</TCell>,
                  <TCell key={2}>Header 2</TCell>,
                  <TCell key={3}>Header 3</TCell>]
              }
              rows={
                [<TRow key={1}>
                  <TCell>Cell 1</TCell>
                  <TCell>Cell 2</TCell>
                  <TCell>Cell 3</TCell>
                </TRow>,
                <TRow key={2}>
                  <TCell>Cell 4</TCell>
                  <TCell>Cell 5</TCell>
                  <TCell>Cell 6</TCell>
                </TRow>,
                <TRow key={3}>
                  <TCell>Cell 7</TCell>
                  <TCell>Cell 8</TCell>
                  <TCell>Cell 9</TCell>
                </TRow>]
              }
            />
            <Table striped={true} border={true}
              header={[
                  <TCell key={1}>Header 1</TCell>,
                  <TCell key={2}>Header 2</TCell>,
                  <TCell key={3}>Header 3</TCell>]
              }
              rows={
                [<TRow key={1}>
                  <TCell>Cell 1</TCell>
                  <TCell>Cell 2</TCell>
                  <TCell>Cell 3</TCell>
                </TRow>,
                <TRow key={2}>
                  <TCell>Cell 4</TCell>
                  <TCell>Cell 5</TCell>
                  <TCell>Cell 6</TCell>
                </TRow>,
                <TRow key={3}>
                  <TCell>Cell 7</TCell>
                  <TCell>Cell 8</TCell>
                  <TCell>Cell 9</TCell>
                </TRow>]
              }
            />
            <Table striped={true} border={true} hover={true}
              header={[
                  <TCell key={1}>Header 1</TCell>,
                  <TCell key={2}>Header 2</TCell>,
                  <TCell key={3}>Header 3</TCell>]
              }
              rows={
                [<TRow key={1}>
                  <TCell>Cell 1</TCell>
                  <TCell>Cell 2</TCell>
                  <TCell>Cell 3</TCell>
                </TRow>,
                <TRow key={2}>
                  <TCell>Cell 4</TCell>
                  <TCell>Cell 5</TCell>
                  <TCell>Cell 6</TCell>
                </TRow>,
                <TRow key={3}>
                  <TCell>Cell 7</TCell>
                  <TCell>Cell 8</TCell>
                  <TCell>Cell 9</TCell>
                </TRow>]
              }
            />
          </Content>
          <Box>This is a box</Box>
          <Box title="I'm a box" subTitle='with a subTitle'>and this is my content</Box>
          <Box title="I'm a pink box" subTitle='with a subTitle' color='pink'>and this is my content</Box>
          <Jumbotron>Jumbotron element</Jumbotron>
          <Jumbotron title='Title' subTitle='subTitle' color='orange' size='fluid'>Jumbotron content</Jumbotron>
          <Breadcrumb 
            crumbs={[
              <Crumb key={1}>Home</Crumb>,
              <Crumb key={2}>Settings</Crumb>,
              <Crumb key={3}>Interface</Crumb>,
            ]}
          />
          <Menu>
            <MenuGroup>GROUP 1</MenuGroup>
            <MenuItem>Link 1</MenuItem>
            <MenuItem>Link 2</MenuItem>
            <MenuItem href='https://google.com' target='_blank'>Link 3</MenuItem>
            <SubMenu>
              <MenuItem>Link 3.1</MenuItem>
              <MenuItem>Link 3.2</MenuItem>
              <SubMenu>
                <MenuItem>Link 3.2.1</MenuItem>
                <MenuItem>Link 3.2.2</MenuItem>
              </SubMenu>
            </SubMenu>
          </Menu>
          <Tabs boxed={true}>
            <TabItem>T 1</TabItem>
            <TabItem selected={true}>T 2</TabItem>
            <TabItem>T 3</TabItem>
          </Tabs>
          <Navbar 
            left={[
              <NavTitle key={1}>My blog name</NavTitle>
            ]}
            right={[
              <NavLink key={1}>Link 1</NavLink>,
              <NavLink key={2}>Link 2</NavLink>
            ]}
          />
          <Navbar color='yellow' size='fluid' 
            right={[
              <NavTitle key={1}>My blog name</NavTitle>
            ]}
            left={[
              <NavLink key={1}>Link 1</NavLink>,
              <NavLink key={2}>Link 2</NavLink>
            ]}
          />

          <Grid>
            <Row>
              <Col size={12}>col 12</Col>
            </Row>
            <Row>
              <Col size={6}>col 6</Col>
              <Col size={6}>col 6</Col>
            </Row>
            <Row>
              <Col size={2} extraLarge={2} large={4} medium={6} small={12}>col 2</Col>
              <Col size={2} extraLarge={2} large={4} medium={6} small={12}>col 2</Col>
              <Col size={2} extraLarge={2} large={4} medium={6} small={12}>col 2</Col>
              <Col size={2} extraLarge={2} large={4} medium={6} small={12}>col 2</Col>
              <Col size={2} extraLarge={2} large={4} medium={6} small={12}>col 2</Col>
              <Col size={2} extraLarge={2} large={4} medium={6} small={12}>col 2</Col>
            </Row>
          </Grid>

          <Form title='Test new form' detail='this for is just for testing'>
            <Field label='A simple input' helper='type something random'>
              <Input type='text' placeholder='test placeholder' fullwidth={true} />
            </Field>
            <Field label='A simple Textarea' helper='type something random here'>
              <Textarea placeholder='textarea' fullwidth={true} />
            </Field>
            <Field label='A simple select' helper='select something'>
              <Select fullwidth={true}>
                <option>first option</option>
                <option>second option</option>
                <option>third option</option>
              </Select>
            </Field>
            <Label>small label</Label>
            <Input type='text' id='oo' placeholder='test placeholder' fullwidth={true} />
          </Form>
          <Checkbox label='checktest' />
          <Checkbox label='checktest checked' checked={true} />
          <Checkbox label='checktest checked with action' checked={true} onChange={this.doSomething} />
          <Switch label='switchtest' />
          <Switch label='switchtest checked' checked={true} />
          <Switch label='switchtest checked with action' checked={true} onChange={this.doSomething} />
        </Content>
        <Footer size='fluid' color='teal'>A Simple footer</Footer>
      </div>
    );
  }
}

export default App;
