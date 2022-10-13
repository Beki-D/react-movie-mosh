import Joi from 'joi-browser';
import Form from "./common/form";
import InfoCard from './infoCard';

class MovieForm extends Form {
    state = {
        data: { title: '', genre: '', amountInstock: '', number: ''},
        errors: { },
        passwordVisible : false,
        selectedId: "1"
    };

    schema = {
        title: Joi.string()
            .min(3).max(30)
            .required()
            .label('Title'),
        genre: Joi.string()
            .required(),
        rate: Joi.number()
            .integer()
            .min(0)
            .max(5)
    }
    
    doSubmit = () => {
        //Call server
        console.log('Submitted successfully');
    }
    

    dropdownChanged(e){
        this.setState({selectedId: e.target.value});
    }
      
    
    render(){
        return ( 
            <div className="row">
                <div className="col-sm-5 col-md-6 mt-5">
                    <h1>Movie Form</h1>
                    <form onSubmit={this.handleSubmit}>
                        {this.renderInput("title", "Title", true)}
                        <label>Genre</label>
                        <div className="input-group mb-3">
                            <select 
                                defaultValue={this.selectedId}
                                onChange={this.dropdownChanged.bind(this)}
                                className="form-select" 
                                id="inputGroupSelect03" 
                                aria-label="Example select with button addon">
                                <option >Choose genre...</option>
                                <option value="1">Action</option>
                                <option value="2">Comedy</option>
                                <option value="3">Thriller</option>
                            </select>
                        </div>
                    
                    <label>Number in Stock</label>
                    <input type="number" min="0" step="1" max="10" className="form-control" id="amountInput"></input>
                    {this.renderInput("rate", "Rate", true)}
                    {this.renderButton("Save")}
                    </form>
                </div>
                <InfoCard />
            </div>
        );
    } 
}
 
export default MovieForm;