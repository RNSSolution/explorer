import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';
import League from './LeagueContainer.js';
import ChainStates from '../components/ChainStatesContainer.js'
import i18n from 'meteor/universe:i18n';
import SideNav, { NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const T = i18n.createComponent();

export default class LeagueDetails extends Component{
    constructor(props){
        super(props);
    };
    state = {
        selected: 'leagues',
        expanded: false
    };

    onSelect = (selected) => {
        this.setState({ selected: selected });
    };

    onToggle = (expanded) => {
        this.setState({ expanded: expanded });
    };

    render() {
        const { expanded, selected } = this.state;
        return (
        <div>
            <div id="validatordetails" style={{
                        marginLeft: expanded ? 200 : 64,
                        padding: '15px 20px 0 20px'
                    }}>
            <Row>
                <Col lg={3} xs={12}><h1 className="d-none d-lg-block"><h1 className="d-none d-lg-block"></h1><T>leagues.leagueDetails</T></h1></Col>
                <Col lg={9} xs={12} className="text-lg-right"><ChainStates /></Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Switch>
                        <Route path="/leagues/:address" render={(props) => <League address={props.match.params.address} {...props}/>} />
                    </Switch>
                </Col>
            </Row>
            </div>
            <SideNav className="sidenav position-fixed" onSelect={this.onSelect} onToggle={this.onToggle}>
                <SideNav.Toggle />
                <SideNav.Nav selected={selected} defaultSelected="leagues">
                    <NavItem eventKey="dashboard" onClick={ e => this.props.history.push("/") } title="Dashboard">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.5em', color: 'black' }} />
                        </NavIcon>
                        <NavText>
                            Dashboard
                        </NavText>
                        
                    </NavItem>
                    <NavItem eventKey="validators" onClick={ e => this.props.history.push("/validators") } title="Validators">
                        <NavIcon>
                            <i className="fa fa-fw fa-spinner" style={{ fontSize: '1.5em', color: 'black' }} />
                        </NavIcon>
                        <NavText>
                            Validators
                        </NavText>
                        
                    </NavItem>
                    <NavItem eventKey="leagues" onClick={ e => this.props.history.push("/leagues") } title="Leagues">
                        <NavIcon>
                            <i className="fa fa-fw fa-flag" style={{ fontSize: '1.5em', color: 'black' }} />
                        </NavIcon>
                        <NavText>
                            Leagues
                        </NavText>
                        
                    </NavItem>
                    <NavItem eventKey="blocks" onClick={ e => this.props.history.push("/blocks") } title="Blocks">
                        <NavIcon>
                            <i className="fa fa-fw fa-cube" style={{ fontSize: '1.5em', color: 'black' }} />
                        </NavIcon>
                        <NavText>
                            Blocks
                        </NavText>
                        
                    </NavItem>
                    <NavItem eventKey="transactions" onClick={ e => this.props.history.push("/transactions") } title="Transactions">
                        <NavIcon>
                            <i className="fa fa-fw fa-random" style={{ fontSize: '1.5em', color: 'black' }} />
                        </NavIcon>
                        <NavText>
                            Transactions
                        </NavText>
                        
                    </NavItem>
                    <NavItem eventKey="proposals" onClick={ e => this.props.history.push("/proposals") } title="Proposals">
                        <NavIcon>
                            <i className="fa fa-fw fa-edit" style={{ fontSize: '1.5em', color: 'black' }} />
                        </NavIcon>
                        <NavText>
                            Proposals
                        </NavText>
                        
                    </NavItem>
                    <NavItem eventKey="fundingcycles" onClick={ e => this.props.history.push("/fundingcycles") } title="Funding Cycles">
                        <NavIcon>
                            <i className="fa fa-fw fa-bullseye" style={{ fontSize: '1.5em', color: 'black' }} />
                        </NavIcon>
                        <NavText>
                            Funding Cycles
                        </NavText>
                        
                    </NavItem>
                    <NavItem eventKey="voting-power-distribution" onClick={ e => this.props.history.push("/voting-power-distribution") } title="Delegations">
                        <NavIcon>
                            <i className="fa fa-fw fa-chart-bar" style={{ fontSize: '1.5em', color: 'black'}} />
                        </NavIcon>
                        <NavText>
                            Delegations
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            </div>
            )
    }

}