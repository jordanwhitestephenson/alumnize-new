import React, {Component} from 'react';
import SingleInput from '../components/SingleInput';
import TextArea from '../components/TextArea';
import Select from '../components/Select';

class FormContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ownerName: '',
			currentGalLocation: '',
			CurrentEmployer: '',
			employereadress: ''
		};
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleClearForm = this.handleClearForm.bind(this);
		this.handleFullNameChange = this.handleFullNameChange.bind(this);
		this.handlecurrentGalLocationChange = this.handlecurrentGalLocationChange.bind(this);
		this.handleCurrentEmployerChange = this.handleCurrentEmployerChange.bind(this); this.handleEmployereAdressChange = this.handleEmployereAdressChange.bind(this);
	}
	componentDidMount() {
		fetch('./fake_db.json')
			.then(res => res.json())
			.then(data => {
				this.setState({
					ownerName: data.ownerName,
					currentGalLocation: data.currentGalLocation,
					CurrentEmployer: data.CurrentEmployer,
					employereadress: data.employereadress
				});
			});
	}
	handleFullNameChange(e) {
		this.setState({ ownerName: e.target.value }, () => console.log('name:', this.state.ownerName));
	}
	handlecurrentGalLocationChange(e) {
		this.setState({ currentGalLocation: e.target.value }, () => console.log('Galvanize Locatioon', this.state.currentGalLocation));
	}

	handleCurrentEmployerChange(e) {
		this.setState({ CurrentEmployer: e.target.value }, () => console.log('CurrentEmployer:', this.state.CurrentEmployer));
	}

 handleEmployereAdressChange(e) {
	 this.setState({ employereadress: e.target.value }, () => console.log('employereadress:', this.state.employereadress));
 }


	handleClearForm(e) {
		e.preventDefault();
		this.setState({
			ownerName: '',
			currentGalLocation: '',
			CurrentEmployer: '',
			employereadress: ''
		});
	}

	handleFormSubmit(e) {
		e.preventDefault();
		const formPayload = {
			ownerName: this.state.ownerName,
			currentGalLocation: this.state.currentGalLocation,
			employereadress: this.state.employereadress,
			CurrentEmployer: this.state.CurrentEmployer
		};

		console.log('Send this in a POST request:', formPayload);
		this.handleClearForm(e);
			return (
				<p> {formPayload} </p>
			)
		return formPayload
	}


	render() {
		return (
			<div>
			<form className="container" onSubmit={this.handleFormSubmit} className = "galFormStyle">
				<SingleInput
					inputType={'text'}
					title={'Full name'}
					name={'name'}
					controlFunc={this.handleFullNameChange}
					content={this.state.ownerName}
					placeholder={'Type first and last name here'} />

				<SingleInput
					inputType={'text'}
					title={'Which Galvanize location?'}
					name={'currentGalLocation'}
					controlFunc={this.handlecurrentGalLocationChange}
					content={this.state.currentGalLocation}
					placeholder={'Galvanize Location'} />

				<SingleInput
					inputType={'text'}
					title={'Current Employer'}
					name={'CurrentEmployer'}
					controlFunc={this.handleCurrentEmployerChange}
					content={this.state.CurrentEmployer}
					placeholder={'Current Employer Name'} />

					<SingleInput
						inputType={'text'}
						title={'Address of Your Employer'}
						name={'employereadress'}
						controlFunc={this.handleEmployereAdressChange}
						content={this.state.employereadress}
						placeholder={'Address of Employer'} />

				<input
					type="submit"
					className="btn btn-primary float-right"
					value="Submit"/>
				<button
					className="btn btn-link float-left"
					onClick={this.handleClearForm}>Clear form</button>
			</form>

</div>
		);
	}
}

export default FormContainer
