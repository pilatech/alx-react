import { shallow } from 'enzyme'

describe('<App/>', () => {
    it('renders three divs', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find(div)).to.have.lengthOf(3);
    })
});