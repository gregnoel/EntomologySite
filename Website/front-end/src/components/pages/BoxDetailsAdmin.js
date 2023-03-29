import * as React from 'react';
import Navbar from '../Navbar';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import axios from 'axios'
const url = process.env.REACT_APP_IP

class BoxDetailsAdmin extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            order: '',
            suborder: null,
            genus: null,
            subgenus: null,
            family: null,
            subfamily: null,
            species: null,
            subspecies: null,
            tribu: null,
            loaner: null,
            grangebegin: null,
            grangeend: null,
            srangebegin: null,
            grangebegin: null,
            collection: null,
            orderlist: [],
            suborderlist: [],
            genuslist: [],
            subgenuslist: [],
            familylist: [],
            subfamilylist: [],
            specieslist: [],
            subspecieslist: [],
            tribulist: [],
            loanerlist: [],
            collectionlist: [],
        }
    }

    componentDidMount() {
        this.get_selection()
    }

    get_selection = () => {
        const ParentVar = this.props.getParentStateVar()

        axios.get(`${url}/get_selectiono`, {
          params:
          {so: 'NULL', f: 'NULL', sf: 'NULL', t: 'NULL', g: 'NULL', sg: 'NULL', s: 'NULL', ss: 'NULL'}})
            .then((res) => {
            this.setState({orderlist: res.data.rows, order: ParentVar.order})
        })
    
        axios.get(`${url}/get_selectionso`, {
          params:
          {o: 'NULL', f: 'NULL', sf: 'NULL', t: 'NULL', g: 'NULL', sg: 'NULL', s: 'NULL', ss: 'NULL'}})
            .then((res) => {
            this.setState({suborderlist: res.data.rows, suborder: ParentVar.suborder})
        })
    
        axios.get(`${url}/get_selectiong`, {
          params:
          {o: 'NULL', so: 'NULL', f: 'NULL', sf: 'NULL', t: 'NULL', sg: 'NULL', s: 'NULL', ss: 'NULL'}})
            .then((res) => {
            this.setState({genuslist: res.data.rows, genus: ParentVar.genus})
        })
    
        axios.get(`${url}/get_selectionsg`, {
          params:
          {o: 'NULL', so: 'NULL', f: 'NULL', sf: 'NULL', t: 'NULL', g: 'NULL', s: 'NULL', ss: 'NULL'}})
            .then((res) => {
            this.setState({subgenuslist: res.data.rows, subgenus: ParentVar.subgenus})
        })
    
        axios.get(`${url}/get_selectionf`, {
          params:
          {o: 'NULL', so: 'NULL', sf: 'NULL', t: 'NULL', g: 'NULL', sg: 'NULL', s: 'NULL', ss: 'NULL'}})
            .then((res) => {
            this.setState({familylist: res.data.rows, family: ParentVar.family})
        })
    
        axios.get(`${url}/get_selectionsf`, {
          params:
          {o: 'NULL', so: 'NULL', f: 'NULL', t: 'NULL', g: 'NULL', sg: 'NULL', s: 'NULL', ss: 'NULL'}})
            .then((res) => {
            this.setState({subfamilylist: res.data.rows, subfamily: ParentVar.subfamily})
        })
    
        axios.get(`${url}/get_selections`, {
          params:
          {o: 'NULL', so: 'NULL', f: 'NULL', sf: 'NULL', t: 'NULL', g: 'NULL', sg: 'NULL', ss: 'NULL'}})
            .then((res) => {
            this.setState({specieslist: res.data.rows, species: ParentVar.species})
        })
    
        axios.get(`${url}/get_selectionss`, {
          params:
          {o: 'NULL', so: 'NULL', f: 'NULL', sf: 'NULL', t: 'NULL', g: 'NULL', sg: 'NULL', s: 'NULL'}})
            .then((res) => {
            this.setState({subspecieslist: res.data.rows, subspecies: ParentVar.subspecies})
        })
    
        axios.get(`${url}/get_selectiont`, {
          params:
          {o: 'NULL', so: 'NULL', f: 'NULL', sf: 'NULL', g: 'NULL', sg: 'NULL', s: 'NULL', ss: 'NULL'}})
            .then((res) => {
            this.setState({tribulist: res.data.rows, tribu: ParentVar.tribu})
        })

        axios.get(`${url}/get_loaners`)
          .then((res) => {
              this.setState({loanerslist: res.data.rows, loaner: ParentVar.loaner})
          })

        axios.get(`${url}/get_collections`)
            .then((res) => {
                this.setState({collectionlist: res.data.rows, collection: ParentVar.collection})
        })
      }
    
    handleInputChange = (event) => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value
        })
    }

    modify = () => {
        
    }

    render() {
        return (
            <div className="column">
                <div>
                <h3 className="title">Order</h3>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
                        <Select
                        id="order-select"
                        value={this.state.order}
                        onChange={this.handleInputChange}
                        name="order"
                        >
                        {this.state.orderlist.map((data) => <MenuItem value={data.name}>{data.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                </div>
                <div>
                <h3 className="title">Suborder</h3>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
                        <Select
                        id="suborder-select"
                        value={this.state.suborder}
                        onChange={this.handleInputChange}
                        name="suborder"
                        >
                        <MenuItem value={null}>
                            <em>None</em>
                        </MenuItem>
                        {this.state.suborderlist.map((data) => <MenuItem value={data.name}>{data.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                </div>
                <div>
                <h3 className="title">Genus</h3>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
                        <Select
                        id="genus-select"
                        value={this.state.genus}
                        onChange={this.handleInputChange}
                        name="genus"
                        >
                        <MenuItem value={null}>
                            <em>None</em>
                        </MenuItem>
                        {this.state.genuslist.map((data) => <MenuItem value={data.name}>{data.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                </div>
                <div>
                <h3  className="title">Subgenus</h3>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
                        <Select
                        id="subgenus-select"
                        value={this.state.subgenus}
                        onChange={this.handleInputChange}
                        name="subgenus"
                        >
                        <MenuItem value={null}>
                            <em>None</em>
                        </MenuItem>
                        {this.state.subgenuslist.map((data) => <MenuItem value={data.name}>{data.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                </div>
                <div>
                <h3 className="title">Family</h3>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
                        <Select
                        id="family-select"
                        value={this.state.family}
                        onChange={this.handleInputChange}
                        name="family"
                        >
                        <MenuItem value={null}>
                            <em>None</em>
                        </MenuItem>
                        {this.state.familylist.map((data) => <MenuItem value={data.name}>{data.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                </div>
                <div>
                <h3 className="title">Subfamily</h3>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
                        <Select
                        id="subfamily-select"
                        value={this.state.subfamily}
                        onChange={this.handleInputChange}
                        name="subfamily"
                        >
                        <MenuItem value={null}>
                            <em>None</em>
                        </MenuItem>
                        {this.state.subfamilylist.map((data) => <MenuItem value={data.name}>{data.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                </div>
                <div>
                <h3 className="title">Species</h3>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
                        <Select
                        id="species-select"
                        value={this.state.species}
                        onChange={this.handleInputChange}
                        name="species"
                        >
                        <MenuItem value={null}>
                            <em>None</em>
                        </MenuItem>
                        {this.state.specieslist.map((data) => <MenuItem value={data.name}>{data.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                </div>
                <div>
                <h3 className="title">Subspecies</h3>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
                        <Select
                        id="subspecies-select"
                        value={this.state.subspecies}
                        onChange={this.handleInputChange}
                        name="subspecies"
                        >
                        <MenuItem value={null}>
                            <em>None</em>
                        </MenuItem>
                        {this.state.subspecieslist.map((data) => <MenuItem value={data.name}>{data.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                </div>
                <div>
                <h3 className="title">Tribu</h3>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
                        <Select
                        id="tribu-select"
                        value={this.state.tribu}
                        onChange={this.handleInputChange}
                        name="tribu"
                        >
                        <MenuItem value={null}>
                            <em>None</em>
                        </MenuItem>
                        {this.state.tribulist.map((data) => <MenuItem value={data.name}>{data.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                </div>
                <div>
                <h3 className="title">Loaner</h3>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
                        <Select
                        id="loaner-select"
                        value={this.state.loaner}
                        onChange={this.handleInputChange}
                        name="loaner"
                        >
                        <MenuItem value={null}>
                            <em>None</em>
                        </MenuItem>
                        {this.state.loanerlist.map((data) => <MenuItem value={data.name}>{data.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                </div>
                <div>
                <h3 className="title">Range</h3>
                {(this.state.rangebegin) ?
                    (<p>{this.state.rangebegin}-{this.state.rangeend}</p>)
                    :
                    (<></>)
                }
                </div>
                <div>
                <h3 className="title">Collection</h3>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
                        <Select
                        id="collection-select"
                        value={this.state.collection}
                        onChange={this.handleInputChange}
                        name="collection"
                        >
                        <MenuItem value={null}>
                            <em>None</em>
                        </MenuItem>
                        {this.state.collectionlist.map((data) => <MenuItem value={data.name}>{data.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                </div>
                <button type='submit' onClick={this.modify}>Modifier</button>
            </div>
        )
    }
}

export default BoxDetailsAdmin;