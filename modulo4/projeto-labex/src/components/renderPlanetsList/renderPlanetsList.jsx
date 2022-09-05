import { ApplySelect } from "../../pages/trips/AplicationFormPage/styles";

const RenderPlanetsList = (props) => {
    return (
        <ApplySelect onChange={props.handleUserInput}
            value={props.value}
            name='planet'
            required
        >
            <option value=''>Selecionar planeta...</option>
            <option value='Mercúrio'>Mercúrio</option>
            <option value='Vênus'>Vênus</option>
            <option value='Terra'>Terra</option>
            <option value='Marte'>Marte</option>
            <option value='Júpiter'>Júpiter</option>
            <option value='Saturno'>Saturno</option>
            <option value='Urano'>Urano</option>
            <option value='Netuno'>Netuno</option>
            <option value='Plutão'>Plutão</option>
            <option value='Éris'>Éris</option>
            <option value='Ceres'>Ceres</option>
            <option value='Haumea'>Haumea</option>
            <option value='Makemake'>Makemake</option>
        </ApplySelect>
    );
}

export default RenderPlanetsList;