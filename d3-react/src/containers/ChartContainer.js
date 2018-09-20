import {connect} from 'react-redux';
import Chart from "../components/Chart";
import {receiveData, sendData} from "../actions/chartActions";

const mapStateToProps = (state) => ({
    message: state.chartReducer.message
});

const mapDispatchToProps = (dispatch) => ({
    dataReceive: (message) => dispatch(receiveData(message)),
    dataSend: (message) => dispatch(sendData(message))
});

const ChartContainer = connect(mapStateToProps, mapDispatchToProps)(Chart);
export default ChartContainer;


